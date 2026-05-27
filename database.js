const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, 'quiz.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Initialisation des tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    avatar TEXT DEFAULT 'fox',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS stats (
    user_id INTEGER PRIMARY KEY,
    games_played INTEGER DEFAULT 0,
    total_score INTEGER DEFAULT 0,
    best_score INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    total_answers INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    longest_streak INTEGER DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS game_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    room_code TEXT,
    score INTEGER,
    rank INTEGER,
    players_count INTEGER,
    category TEXT,
    played_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
`);

// === Requêtes préparées ===

const stmts = {
  createUser: db.prepare('INSERT INTO users (username, password_hash, avatar) VALUES (?, ?, ?)'),
  createStats: db.prepare('INSERT INTO stats (user_id) VALUES (?)'),
  findUserByUsername: db.prepare('SELECT * FROM users WHERE username = ?'),
  findUserById: db.prepare('SELECT id, username, avatar, created_at FROM users WHERE id = ?'),
  getStats: db.prepare('SELECT * FROM stats WHERE user_id = ?'),
  updateAvatar: db.prepare('UPDATE users SET avatar = ? WHERE id = ?'),
  updateStats: db.prepare(`
    UPDATE stats
    SET games_played = games_played + 1,
        total_score = total_score + ?,
        best_score = MAX(best_score, ?),
        correct_answers = correct_answers + ?,
        total_answers = total_answers + ?,
        wins = wins + ?,
        longest_streak = MAX(longest_streak, ?)
    WHERE user_id = ?
  `),
  insertHistory: db.prepare(`
    INSERT INTO game_history (user_id, room_code, score, rank, players_count, category)
    VALUES (?, ?, ?, ?, ?, ?)
  `),
  getHistory: db.prepare(`
    SELECT room_code, score, rank, players_count, category, played_at
    FROM game_history
    WHERE user_id = ?
    ORDER BY played_at DESC
    LIMIT 10
  `),
  leaderboard: db.prepare(`
    SELECT u.id, u.username, u.avatar, s.total_score, s.games_played, s.wins
    FROM users u
    JOIN stats s ON s.user_id = u.id
    WHERE s.games_played > 0
    ORDER BY s.total_score DESC
    LIMIT 20
  `)
};

function createUser(username, passwordHash, avatar = 'fox') {
  const result = stmts.createUser.run(username, passwordHash, avatar);
  stmts.createStats.run(result.lastInsertRowid);
  return result.lastInsertRowid;
}

function findUserByUsername(username) {
  return stmts.findUserByUsername.get(username);
}

function findUserById(id) {
  return stmts.findUserById.get(id);
}

function getStats(userId) {
  return stmts.getStats.get(userId);
}

function updateAvatar(userId, avatar) {
  stmts.updateAvatar.run(avatar, userId);
}

function updateStats(userId, { scoreGained, correct, total, won, longestStreak }) {
  stmts.updateStats.run(
    scoreGained,
    scoreGained,
    correct,
    total,
    won ? 1 : 0,
    longestStreak,
    userId
  );
}

function insertHistory(userId, roomCode, score, rank, playersCount, category) {
  stmts.insertHistory.run(userId, roomCode, score, rank, playersCount, category);
}

function getHistory(userId) {
  return stmts.getHistory.all(userId);
}

function getLeaderboard() {
  return stmts.leaderboard.all();
}

function getProfile(username) {
  const user = findUserByUsername(username);
  if (!user) return null;
  const stats = getStats(user.id);
  const history = getHistory(user.id);
  return {
    id: user.id,
    username: user.username,
    avatar: user.avatar,
    created_at: user.created_at,
    stats,
    history
  };
}

module.exports = {
  db,
  createUser,
  findUserByUsername,
  findUserById,
  getStats,
  updateAvatar,
  updateStats,
  insertHistory,
  getHistory,
  getLeaderboard,
  getProfile
};
