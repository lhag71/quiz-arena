const express = require('express');
const http = require('http');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Server } = require('socket.io');
const rateLimit = require('express-rate-limit');

const db = require('./database');
const { getRandomQuestions, getCategoryList } = require('./questions');

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me-in-production-please';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ============================================================
// Rate limiting
// ============================================================
const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { error: 'Trop de tentatives, réessayez dans une minute.' }
});

// ============================================================
// Helpers
// ============================================================
const USERNAME_REGEX = /^[a-zA-Z0-9_\-]{3,20}$/;
const AVAILABLE_AVATARS = ['fox','panda','lion','frog','robot','alien','wizard','unicorn','octopus','butterfly','dragon','pumpkin','ice','fire'];

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Non authentifié' });
  }
  try {
    const payload = jwt.verify(header.slice(7), JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: 'Token invalide' });
  }
}

function signToken(user) {
  return jwt.sign(
    { userId: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// ============================================================
// API REST
// ============================================================
app.post('/api/register', async (req, res) => {
  try {
    const { username, password, avatar } = req.body || {};
    if (!username || !USERNAME_REGEX.test(username)) {
      return res.status(400).json({ error: "Pseudo invalide (3-20 caractères alphanumériques)" });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ error: "Mot de passe trop court (min 6 caractères)" });
    }
    const av = AVAILABLE_AVATARS.includes(avatar) ? avatar : 'fox';
    if (db.findUserByUsername(username)) {
      return res.status(409).json({ error: "Ce pseudo est déjà pris" });
    }
    const hash = await bcrypt.hash(password, 10);
    const userId = db.createUser(username, hash, av);
    const user = db.findUserById(userId);
    const token = signToken(user);
    res.json({ userId: user.id, username: user.username, avatar: user.avatar, token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.post('/api/login', loginLimiter, async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({ error: "Pseudo et mot de passe requis" });
    }
    const user = db.findUserByUsername(username);
    if (!user) return res.status(401).json({ error: "Identifiants invalides" });
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: "Identifiants invalides" });
    const token = signToken(user);
    res.json({ userId: user.id, username: user.username, avatar: user.avatar, token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.get('/api/profile/:username', (req, res) => {
  const profile = db.getProfile(req.params.username);
  if (!profile) return res.status(404).json({ error: "Profil introuvable" });
  res.json(profile);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(db.getLeaderboard());
});

app.post('/api/update-avatar', authMiddleware, (req, res) => {
  const { avatar } = req.body || {};
  if (!AVAILABLE_AVATARS.includes(avatar)) {
    return res.status(400).json({ error: "Avatar invalide" });
  }
  db.updateAvatar(req.user.userId, avatar);
  res.json({ ok: true, avatar });
});

app.get('/api/categories', (req, res) => {
  res.json(getCategoryList());
});

// ============================================================
// Logique de jeu (Socket.io)
// ============================================================
const rooms = new Map(); // code -> room state

function generateRoomCode() {
  let code;
  do {
    code = Math.random().toString(36).substring(2, 8).toUpperCase();
  } while (rooms.has(code));
  return code;
}

function shuffleAnswers(question) {
  const indexed = question.answers.map((a, i) => ({ text: a, originalIndex: i }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  const correctNewIndex = indexed.findIndex(a => a.originalIndex === question.correct);
  return {
    question: question.question,
    image: question.image,
    hasImage: question.hasImage,
    answers: indexed.map(a => a.text),
    correct: correctNewIndex,
    difficulty: question.difficulty
  };
}

function publicPlayerList(room) {
  return Array.from(room.players.values()).map(p => ({
    id: p.id,
    username: p.username,
    avatar: p.avatar,
    score: p.score,
    isGuest: p.isGuest,
    isHost: p.id === room.hostId
  }));
}

function broadcastLobby(room) {
  io.to(room.code).emit('lobby:update', {
    code: room.code,
    hostId: room.hostId,
    players: publicPlayerList(room),
    category: room.category,
    questionsCount: room.questionsCount
  });
}

function startGame(room) {
  if (room.players.size === 0) return;
  const rawQuestions = getRandomQuestions(room.category, room.questionsCount);
  room.questions = rawQuestions.map(shuffleAnswers);
  room.currentIndex = -1;
  room.state = 'playing';
  // Reset per-game player state
  for (const p of room.players.values()) {
    p.score = 0;
    p.streak = 0;
    p.longestStreak = 0;
    p.correctAnswers = 0;
    p.totalAnswers = 0;
  }
  nextQuestion(room);
}

function nextQuestion(room) {
  room.currentIndex++;
  if (room.currentIndex >= room.questions.length) {
    return endGame(room);
  }
  const q = room.questions[room.currentIndex];
  room.currentQuestion = q;
  room.questionStartTime = Date.now();
  room.answers = new Map(); // playerId -> { answerIndex, time }
  room.state = 'question';

  io.to(room.code).emit('game:question', {
    index: room.currentIndex,
    total: room.questions.length,
    question: q.question,
    image: q.image,
    hasImage: q.hasImage,
    answers: q.answers,
    duration: 20
  });

  // Timer côté serveur
  clearTimeout(room.questionTimeout);
  room.questionTimeout = setTimeout(() => revealAnswer(room), 20000);
}

function revealAnswer(room) {
  if (room.state !== 'question') return;
  clearTimeout(room.questionTimeout);
  room.state = 'reveal';
  const q = room.currentQuestion;

  // Calculate per-player results
  const playerResults = [];
  for (const p of room.players.values()) {
    const answer = room.answers.get(p.id);
    let pointsGained = 0;
    let isCorrect = false;
    if (answer && answer.answerIndex === q.correct) {
      isCorrect = true;
      const elapsed = (answer.time - room.questionStartTime) / 1000;
      const ratio = Math.max(0, Math.min(1, elapsed / 20));
      pointsGained = Math.round(1000 - ratio * 900); // 1000 → 100
      p.streak += 1;
      if (p.streak > 1) pointsGained += 100 * (p.streak - 1);
      if (p.streak > p.longestStreak) p.longestStreak = p.streak;
      p.correctAnswers += 1;
    } else {
      p.streak = 0;
    }
    if (answer) p.totalAnswers += 1;
    p.score += pointsGained;
    playerResults.push({
      id: p.id,
      username: p.username,
      avatar: p.avatar,
      isCorrect,
      pointsGained,
      score: p.score,
      streak: p.streak,
      answeredIndex: answer ? answer.answerIndex : null
    });
  }

  // Top 5 ranking
  const ranking = [...room.players.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(p => ({ id: p.id, username: p.username, avatar: p.avatar, score: p.score }));

  // Send personalized payload to each player
  for (const p of room.players.values()) {
    const myResult = playerResults.find(r => r.id === p.id);
    io.to(p.socketId).emit('game:reveal', {
      correctIndex: q.correct,
      correctText: q.answers[q.correct],
      myResult,
      ranking,
      questionIndex: room.currentIndex,
      total: room.questions.length
    });
  }
}

function endGame(room) {
  room.state = 'ended';
  const final = [...room.players.values()]
    .sort((a, b) => b.score - a.score)
    .map((p, i) => ({
      id: p.id,
      username: p.username,
      avatar: p.avatar,
      score: p.score,
      rank: i + 1,
      isGuest: p.isGuest
    }));

  // Sauvegarde des stats pour les comptes (pas les invités)
  const winner = final[0];
  for (const player of final) {
    if (!player.isGuest && player.id) {
      const userId = player.id;
      const p = room.players.get(player.id);
      try {
        db.updateStats(userId, {
          scoreGained: player.score,
          correct: p.correctAnswers,
          total: p.totalAnswers,
          won: player.rank === 1,
          longestStreak: p.longestStreak
        });
        db.insertHistory(
          userId, room.code, player.score, player.rank, final.length, room.category
        );
      } catch (e) {
        console.error('Stats update error:', e);
      }
    }
  }

  io.to(room.code).emit('game:end', { final, winner });
}

// ============================================================
// Socket.io events
// ============================================================
io.on('connection', (socket) => {
  let currentRoom = null;
  let playerInfo = null;

  // Validate auth token (optional - guests allowed)
  function authenticate(payload) {
    if (payload.token) {
      try {
        const decoded = jwt.verify(payload.token, JWT_SECRET);
        const user = db.findUserById(decoded.userId);
        if (user) {
          return {
            id: user.id,
            username: user.username,
            avatar: user.avatar,
            isGuest: false
          };
        }
      } catch {}
    }
    // Guest
    const guestName = (payload.username || 'Invité').slice(0, 20);
    return {
      id: 'guest_' + socket.id,
      username: guestName,
      avatar: payload.avatar || 'fox',
      isGuest: true
    };
  }

  socket.on('room:create', (payload, cb) => {
    playerInfo = authenticate(payload);
    const code = generateRoomCode();
    const room = {
      code,
      hostId: playerInfo.id,
      players: new Map(),
      state: 'lobby',
      category: 'culture',
      questionsCount: 10,
      questions: [],
      currentIndex: -1,
      answers: new Map()
    };
    rooms.set(code, room);
    joinRoomInternal(socket, room, playerInfo);
    currentRoom = room;
    cb && cb({ ok: true, code });
    broadcastLobby(room);
  });

  socket.on('room:join', (payload, cb) => {
    const code = (payload.code || '').toUpperCase();
    const room = rooms.get(code);
    if (!room) return cb && cb({ ok: false, error: 'Room introuvable' });
    if (room.state !== 'lobby') return cb && cb({ ok: false, error: 'Partie déjà en cours' });
    playerInfo = authenticate(payload);
    // Si un joueur connecté du même userId est déjà là, on remplace son socketId
    if (room.players.has(playerInfo.id)) {
      const existing = room.players.get(playerInfo.id);
      existing.socketId = socket.id;
      socket.join(code);
      currentRoom = room;
      cb && cb({ ok: true, code });
      broadcastLobby(room);
      return;
    }
    joinRoomInternal(socket, room, playerInfo);
    currentRoom = room;
    cb && cb({ ok: true, code });
    broadcastLobby(room);
  });

  function joinRoomInternal(socket, room, info) {
    socket.join(room.code);
    room.players.set(info.id, {
      id: info.id,
      socketId: socket.id,
      username: info.username,
      avatar: info.avatar,
      isGuest: info.isGuest,
      score: 0,
      streak: 0,
      longestStreak: 0,
      correctAnswers: 0,
      totalAnswers: 0
    });
  }

  socket.on('lobby:setCategory', ({ category }) => {
    if (!currentRoom || currentRoom.hostId !== playerInfo?.id) return;
    currentRoom.category = category;
    broadcastLobby(currentRoom);
  });

  socket.on('lobby:setQuestionsCount', ({ count }) => {
    if (!currentRoom || currentRoom.hostId !== playerInfo?.id) return;
    if ([10, 20, 50].includes(count)) {
      currentRoom.questionsCount = count;
      broadcastLobby(currentRoom);
    }
  });

  socket.on('game:start', () => {
    if (!currentRoom || currentRoom.hostId !== playerInfo?.id) return;
    if (currentRoom.state !== 'lobby') return;
    startGame(currentRoom);
  });

  socket.on('game:answer', ({ answerIndex }) => {
    if (!currentRoom || currentRoom.state !== 'question') return;
    if (currentRoom.answers.has(playerInfo.id)) return;
    currentRoom.answers.set(playerInfo.id, { answerIndex, time: Date.now() });
    io.to(currentRoom.code).emit('game:answeredCount', {
      answered: currentRoom.answers.size,
      total: currentRoom.players.size
    });
    if (currentRoom.answers.size >= currentRoom.players.size) {
      revealAnswer(currentRoom);
    }
  });

  socket.on('game:next', () => {
    if (!currentRoom || currentRoom.hostId !== playerInfo?.id) return;
    if (currentRoom.state !== 'reveal') return;
    nextQuestion(currentRoom);
  });

  socket.on('game:replay', () => {
    if (!currentRoom || currentRoom.hostId !== playerInfo?.id) return;
    if (currentRoom.state !== 'ended') return;
    currentRoom.state = 'lobby';
    for (const p of currentRoom.players.values()) {
      p.score = 0;
      p.streak = 0;
      p.longestStreak = 0;
      p.correctAnswers = 0;
      p.totalAnswers = 0;
    }
    broadcastLobby(currentRoom);
    io.to(currentRoom.code).emit('game:replay');
  });

  socket.on('room:leave', () => {
    leaveCurrent();
  });

  socket.on('disconnect', () => {
    leaveCurrent();
  });

  function leaveCurrent() {
    if (!currentRoom || !playerInfo) return;
    const room = currentRoom;
    room.players.delete(playerInfo.id);
    socket.leave(room.code);
    if (room.players.size === 0) {
      clearTimeout(room.questionTimeout);
      rooms.delete(room.code);
    } else {
      if (room.hostId === playerInfo.id) {
        room.hostId = room.players.values().next().value.id;
      }
      broadcastLobby(room);
    }
    currentRoom = null;
  }
});

// ============================================================
// Démarrage
// ============================================================
server.listen(PORT, () => {
  console.log(`\n🎮  QuizArena lancé sur http://localhost:${PORT}`);
  console.log(`   Pour jouer en LAN : trouvez votre IP locale (ipconfig getifaddr en0 sur macOS).\n`);
});
