// Module principal d'agrégation des questions.
// Les questions sont stockées dans questions/culture.js et questions/thematique.js
// (champs : question, answers[4], correct, difficulty, category)
// La bonne réponse est toujours en position 0 dans les données sources ;
// le mélange aléatoire est géré côté serveur lors du démarrage de partie.

const culture = require('./questions/culture');
const thematique = require('./questions/thematique');

const allCategories = {
  culture_generale: { name: "Culture Générale", icon: "🌍", questions: culture },
  thematique: { name: "Thématique", icon: "🎯", questions: thematique }
};

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRandomQuestions(categoryKey, count) {
  let pool;
  if (categoryKey === 'melange' || categoryKey === 'all') {
    pool = [...culture, ...thematique];
  } else if (allCategories[categoryKey]) {
    pool = allCategories[categoryKey].questions;
  } else {
    pool = culture;
  }
  return shuffleArray(pool).slice(0, count);
}

function getCategoryList() {
  return [
    { key: 'culture_generale', name: 'Culture Générale', icon: '🌍', count: culture.length },
    { key: 'thematique',       name: 'Thématique',       icon: '🎯', count: thematique.length },
    { key: 'melange',          name: 'Mélange',          icon: '🎲', count: culture.length + thematique.length }
  ];
}

module.exports = { allCategories, getRandomQuestions, getCategoryList };
