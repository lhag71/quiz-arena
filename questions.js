// 300+ questions de quiz réparties en 10 catégories
// Environ 80 questions avec images (Wikimedia Commons / Unsplash)

const WIKI = 'https://upload.wikimedia.org/wikipedia/commons';
const UNSPLASH = 'https://images.unsplash.com';

// ============================================================
// CULTURE GÉNÉRALE (30 questions, 10 avec images)
// ============================================================
const cultureGenerale = [
  {
    question: "Quel est ce drapeau ?",
    image: { url: `${WIKI}/thumb/c/c3/Flag_of_France.svg/600px-Flag_of_France.svg.png`, caption: "Wikimedia Commons" },
    answers: ["France", "Italie", "Pays-Bas", "Russie"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel est ce drapeau ?",
    image: { url: `${WIKI}/thumb/9/9e/Flag_of_Japan.svg/600px-Flag_of_Japan.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Corée du Sud", "Chine", "Japon", "Bangladesh"],
    correct: 2, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel est ce drapeau ?",
    image: { url: `${WIKI}/thumb/b/ba/Flag_of_Germany.svg/600px-Flag_of_Germany.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Belgique", "Allemagne", "Espagne", "Roumanie"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel est ce drapeau ?",
    image: { url: `${WIKI}/thumb/c/cf/Flag_of_Canada.svg/600px-Flag_of_Canada.svg.png`, caption: "Wikimedia Commons" },
    answers: ["États-Unis", "Suisse", "Pérou", "Canada"],
    correct: 3, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel est ce drapeau ?",
    image: { url: `${WIKI}/thumb/0/05/Flag_of_Brazil.svg/600px-Flag_of_Brazil.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Argentine", "Brésil", "Portugal", "Mexique"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel monument est représenté ?",
    image: { url: `${WIKI}/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/400px-Tour_Eiffel_Wikimedia_Commons.jpg`, caption: "Wikimedia Commons" },
    answers: ["Big Ben", "La Tour Eiffel", "L'Empire State Building", "La Tour de Pise"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel monument est-ce ?",
    image: { url: `${WIKI}/thumb/d/de/Colosseo_2020.jpg/600px-Colosseo_2020.jpg`, caption: "Wikimedia Commons" },
    answers: ["Le Parthénon", "Le Colisée", "L'Arc de Triomphe", "Le Panthéon"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel monument voit-on ici ?",
    image: { url: `${WIKI}/thumb/1/1c/Taj_Mahal_%28Edited%29.jpeg/600px-Taj_Mahal_%28Edited%29.jpeg`, caption: "Wikimedia Commons" },
    answers: ["La Grande Mosquée", "Le Taj Mahal", "Le Palais de Topkapi", "Angkor Wat"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel logo célèbre est-ce ?",
    image: { url: `${WIKI}/thumb/0/08/Netflix_2015_logo.svg/600px-Netflix_2015_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["YouTube", "Netflix", "Hulu", "Prime Video"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel logo est-ce ?",
    image: { url: `${WIKI}/thumb/a/a6/Logo_NIKE.svg/600px-Logo_NIKE.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Adidas", "Puma", "Nike", "Reebok"],
    correct: 2, difficulty: "easy", hasImage: true
  },
  { question: "Quelle est la capitale de l'Australie ?", image: null, answers: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Combien y a-t-il de continents ?", image: null, answers: ["5", "6", "7", "8"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle langue est la plus parlée au monde ?", image: null, answers: ["Anglais", "Mandarin", "Espagnol", "Hindi"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Combien y a-t-il de planètes dans le système solaire ?", image: null, answers: ["7", "8", "9", "10"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui a peint la Joconde ?", image: null, answers: ["Picasso", "Van Gogh", "Léonard de Vinci", "Michel-Ange"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle est la monnaie du Royaume-Uni ?", image: null, answers: ["Euro", "Livre sterling", "Dollar", "Couronne"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel est l'animal symbole de la France ?", image: null, answers: ["L'aigle", "Le coq", "Le lion", "L'ours"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel est le plus grand océan ?", image: null, answers: ["Atlantique", "Indien", "Pacifique", "Arctique"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle est la couleur du rubis ?", image: null, answers: ["Vert", "Bleu", "Rouge", "Jaune"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Combien de cordes a un violon ?", image: null, answers: ["3", "4", "5", "6"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel pays a inventé le sushi ?", image: null, answers: ["Chine", "Japon", "Corée", "Thaïlande"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle est la plus grande pyramide d'Égypte ?", image: null, answers: ["Khéops", "Khéphren", "Mykérinos", "Saqqarah"], correct: 0, difficulty: "medium", hasImage: false },
  { question: "Qui a écrit 'Les Misérables' ?", image: null, answers: ["Émile Zola", "Victor Hugo", "Balzac", "Flaubert"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel est le symbole chimique de l'or ?", image: null, answers: ["Or", "Au", "Ag", "Go"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quelle ville accueille la statue de la Liberté ?", image: null, answers: ["Washington", "Los Angeles", "New York", "Boston"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Combien y a-t-il de jours dans une année bissextile ?", image: null, answers: ["365", "366", "364", "367"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel est le plus long fleuve du monde ?", image: null, answers: ["Amazone", "Nil", "Yangzi Jiang", "Mississippi"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quelle est la capitale du Canada ?", image: null, answers: ["Toronto", "Montréal", "Ottawa", "Vancouver"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quel président américain figure sur le billet d'1 dollar ?", image: null, answers: ["Lincoln", "Jefferson", "Washington", "Franklin"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quel pays a la plus grande population ?", image: null, answers: ["États-Unis", "Inde", "Chine", "Indonésie"], correct: 1, difficulty: "medium", hasImage: false }
];

// ============================================================
// SCIENCE (30 questions, 8 avec images)
// ============================================================
const science = [
  {
    question: "Quel animal voit-on ?",
    image: { url: `${UNSPLASH}/photo-1456926631375-92c8ce872def?w=600`, caption: "Unsplash" },
    answers: ["Léopard", "Guépard", "Jaguar", "Tigre"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel animal est-ce ?",
    image: { url: `${UNSPLASH}/photo-1474511320723-9a56873867b5?w=600`, caption: "Unsplash" },
    answers: ["Cerf", "Élan", "Renne", "Antilope"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel animal voit-on ici ?",
    image: { url: `${UNSPLASH}/photo-1564349683136-77e08dba1ef7?w=600`, caption: "Unsplash" },
    answers: ["Chimpanzé", "Gorille", "Orang-outan", "Bonobo"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quelle planète est représentée ?",
    image: { url: `${WIKI}/thumb/c/c9/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg`, caption: "NASA / Wikimedia" },
    answers: ["Jupiter", "Saturne", "Uranus", "Neptune"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quelle planète est-ce ?",
    image: { url: `${WIKI}/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg`, caption: "ESA / Wikimedia" },
    answers: ["Vénus", "Mercure", "Mars", "Pluton"],
    correct: 2, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel insecte voit-on ?",
    image: { url: `${UNSPLASH}/photo-1559555115-eea7f72f3e6c?w=600`, caption: "Unsplash" },
    answers: ["Frelon", "Abeille", "Guêpe", "Bourdon"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel organe est-ce ?",
    image: { url: `${WIKI}/thumb/8/8c/Human_heart_with_great_vessels.jpg/600px-Human_heart_with_great_vessels.jpg`, caption: "Wikimedia Commons" },
    answers: ["Foie", "Cœur", "Poumon", "Rein"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel élément chimique a pour symbole H₂O ?",
    image: { url: `${UNSPLASH}/photo-1548839140-29a749e1cf4d?w=600`, caption: "Unsplash" },
    answers: ["L'oxygène", "L'eau", "L'hydrogène", "L'azote"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  { question: "Combien de chromosomes possède un humain ?", image: null, answers: ["23", "44", "46", "48"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quelle est la vitesse de la lumière (approximative) ?", image: null, answers: ["300 000 km/s", "150 000 km/s", "1 000 000 km/s", "30 000 km/s"], correct: 0, difficulty: "easy", hasImage: false },
  { question: "Quel est le symbole chimique du fer ?", image: null, answers: ["F", "Fr", "Fe", "Ir"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Qui a découvert la pénicilline ?", image: null, answers: ["Pasteur", "Fleming", "Curie", "Darwin"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel est le plus grand mammifère terrestre ?", image: null, answers: ["Rhinocéros", "Hippopotame", "Éléphant d'Afrique", "Girafe"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Combien d'os possède un adulte humain ?", image: null, answers: ["186", "206", "256", "306"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quelle est la formule chimique du sel de table ?", image: null, answers: ["NaCl", "KCl", "CaCO3", "H2SO4"], correct: 0, difficulty: "easy", hasImage: false },
  { question: "Qui a formulé la théorie de la relativité ?", image: null, answers: ["Newton", "Einstein", "Hawking", "Bohr"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle planète est la plus proche du Soleil ?", image: null, answers: ["Vénus", "Mercure", "Mars", "Terre"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel gaz les plantes absorbent-elles ?", image: null, answers: ["Oxygène", "Azote", "CO₂", "Hélium"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel est le plus petit os du corps humain ?", image: null, answers: ["Étrier", "Marteau", "Enclume", "Phalange"], correct: 0, difficulty: "hard", hasImage: false },
  { question: "À quelle température l'eau bout-elle (au niveau de la mer) ?", image: null, answers: ["90°C", "100°C", "110°C", "120°C"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel scientifique a énoncé la loi de la gravitation universelle ?", image: null, answers: ["Galilée", "Kepler", "Newton", "Copernic"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel est le métal liquide à température ambiante ?", image: null, answers: ["Plomb", "Mercure", "Sodium", "Étain"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Combien de dents possède un adulte ?", image: null, answers: ["28", "30", "32", "34"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle est la galaxie qui contient la Terre ?", image: null, answers: ["Andromède", "Voie lactée", "Triangulum", "Sombrero"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien de paires de chromosomes chez l'humain ?", image: null, answers: ["22", "23", "24", "25"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "L'ADN a quelle forme ?", image: null, answers: ["Linéaire", "Double hélice", "Triple hélice", "Carrée"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel sang est receveur universel ?", image: null, answers: ["O-", "AB+", "A+", "B-"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel est le pH de l'eau pure ?", image: null, answers: ["5", "6", "7", "8"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle est l'unité de la résistance électrique ?", image: null, answers: ["Volt", "Ampère", "Ohm", "Watt"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quel animal a la plus longue durée de vie ?", image: null, answers: ["Tortue", "Baleine boréale", "Méduse Turritopsis", "Requin du Groenland"], correct: 2, difficulty: "hard", hasImage: false }
];

// ============================================================
// HISTOIRE (30 questions, 8 avec images)
// ============================================================
const histoire = [
  {
    question: "Qui est ce personnage historique ?",
    image: { url: `${WIKI}/thumb/9/96/Napoleon_in_His_Study.jpg/400px-Napoleon_in_His_Study.jpg`, caption: "David, 1812 / Wikimedia" },
    answers: ["Louis XIV", "Napoléon Bonaparte", "Charlemagne", "Louis XVI"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Qui est représenté ?",
    image: { url: `${WIKI}/thumb/1/14/Albert_Einstein_1947.jpg/400px-Albert_Einstein_1947.jpg`, caption: "Wikimedia Commons" },
    answers: ["Niels Bohr", "Albert Einstein", "Stephen Hawking", "Isaac Newton"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Qui est ce personnage ?",
    image: { url: `${WIKI}/thumb/0/05/Charles_de_Gaulle-1963.jpg/400px-Charles_de_Gaulle-1963.jpg`, caption: "Wikimedia Commons" },
    answers: ["Georges Pompidou", "Charles de Gaulle", "Vincent Auriol", "François Mitterrand"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Qui est ce personnage ?",
    image: { url: `${WIKI}/thumb/7/7c/Jeanne_d%27Arc_%28miniature%29.jpg/400px-Jeanne_d%27Arc_%28miniature%29.jpg`, caption: "Wikimedia Commons" },
    answers: ["Marie Curie", "Catherine de Médicis", "Jeanne d'Arc", "Marie-Antoinette"],
    correct: 2, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel monument antique est-ce ?",
    image: { url: `${WIKI}/thumb/c/ce/The_Parthenon_in_Athens.jpg/600px-The_Parthenon_in_Athens.jpg`, caption: "Wikimedia Commons" },
    answers: ["Le Colisée", "Le Parthénon", "Le temple d'Artémis", "Le Panthéon de Rome"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel personnage est représenté ?",
    image: { url: `${WIKI}/thumb/9/96/Cleopatra_VII_Bust.jpg/400px-Cleopatra_VII_Bust.jpg`, caption: "Wikimedia Commons" },
    answers: ["Néfertiti", "Cléopâtre VII", "Hatchepsout", "Isis"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel personnage historique ?",
    image: { url: `${WIKI}/thumb/0/0c/Winston_Churchill_cph.3b12010.jpg/400px-Winston_Churchill_cph.3b12010.jpg`, caption: "Wikimedia Commons" },
    answers: ["Franklin Roosevelt", "Winston Churchill", "Neville Chamberlain", "Anthony Eden"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel président américain ?",
    image: { url: `${WIKI}/thumb/1/1b/Abraham_Lincoln_O-77_matte_collodion_print.jpg/400px-Abraham_Lincoln_O-77_matte_collodion_print.jpg`, caption: "Wikimedia Commons" },
    answers: ["George Washington", "Abraham Lincoln", "Theodore Roosevelt", "Ulysses Grant"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  { question: "En quelle année a commencé la Première Guerre mondiale ?", image: null, answers: ["1912", "1914", "1916", "1918"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui était le premier président des États-Unis ?", image: null, answers: ["Jefferson", "Washington", "Lincoln", "Adams"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle bataille a eu lieu en 1815 ?", image: null, answers: ["Austerlitz", "Waterloo", "Iéna", "Trafalgar"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui a découvert l'Amérique en 1492 ?", image: null, answers: ["Magellan", "Vasco de Gama", "Christophe Colomb", "Cortés"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle dynastie a régné en France après les Capétiens ?", image: null, answers: ["Bourbons", "Valois", "Mérovingiens", "Carolingiens"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Qui était la première femme à recevoir un prix Nobel ?", image: null, answers: ["Marie Curie", "Rosa Parks", "Florence Nightingale", "Rosalind Franklin"], correct: 0, difficulty: "easy", hasImage: false },
  { question: "Le mur de Berlin est tombé en quelle année ?", image: null, answers: ["1987", "1989", "1991", "1993"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel empereur romain a fait construire un mur en Bretagne ?", image: null, answers: ["César", "Auguste", "Hadrien", "Néron"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Qui était surnommé 'Le Roi-Soleil' ?", image: null, answers: ["Louis XIII", "Louis XIV", "Louis XV", "Louis XVI"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel pharaon a fait construire la Grande Pyramide ?", image: null, answers: ["Toutankhamon", "Ramsès II", "Khéops", "Akhénaton"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quelle révolution débute en 1789 ?", image: null, answers: ["Industrielle", "Française", "Américaine", "Russe"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui a peint le plafond de la Chapelle Sixtine ?", image: null, answers: ["Raphaël", "Léonard de Vinci", "Michel-Ange", "Botticelli"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle ville fut détruite par le Vésuve en 79 ?", image: null, answers: ["Rome", "Pompéi", "Naples", "Ostie"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui a écrit 'Le Capital' ?", image: null, answers: ["Engels", "Marx", "Lénine", "Bakounine"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quand a été signée la Déclaration d'indépendance des USA ?", image: null, answers: ["1776", "1783", "1789", "1791"], correct: 0, difficulty: "medium", hasImage: false },
  { question: "Qui était le chef nazi pendant la Seconde Guerre mondiale ?", image: null, answers: ["Goebbels", "Hitler", "Himmler", "Göring"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle civilisation a inventé l'écriture cunéiforme ?", image: null, answers: ["Égyptiens", "Sumériens", "Grecs", "Romains"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Qui était le premier homme sur la Lune ?", image: null, answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle dynastie chinoise a construit la Grande Muraille ?", image: null, answers: ["Han", "Ming", "Qin", "Tang"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quelle reine a régné 70 ans au Royaume-Uni ?", image: null, answers: ["Élisabeth I", "Victoria", "Élisabeth II", "Mary"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Qui a fondé l'Empire Mongol ?", image: null, answers: ["Kublai Khan", "Tamerlan", "Gengis Khan", "Attila"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "En quelle année est tombé l'Empire romain d'Occident ?", image: null, answers: ["410", "476", "527", "632"], correct: 1, difficulty: "hard", hasImage: false }
];

// ============================================================
// GÉOGRAPHIE (30 questions, 10 avec images)
// ============================================================
const geographie = [
  {
    question: "Quelle ville voit-on ?",
    image: { url: `${UNSPLASH}/photo-1502602898657-3e91760cbb34?w=600`, caption: "Unsplash" },
    answers: ["Londres", "Berlin", "Paris", "Madrid"],
    correct: 2, difficulty: "easy", hasImage: true
  },
  {
    question: "Quelle ville est-ce ?",
    image: { url: `${UNSPLASH}/photo-1513635269975-59663e0ac1ad?w=600`, caption: "Unsplash" },
    answers: ["New York", "Chicago", "Los Angeles", "Boston"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quelle ville reconnaît-on ?",
    image: { url: `${UNSPLASH}/photo-1542051841857-5f90071e7989?w=600`, caption: "Unsplash" },
    answers: ["Séoul", "Tokyo", "Pékin", "Shanghai"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel pays montre cette image (Acropole) ?",
    image: { url: `${UNSPLASH}/photo-1503152394-c571994fd383?w=600`, caption: "Unsplash" },
    answers: ["Italie", "Grèce", "Turquie", "Espagne"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel relief naturel voit-on ?",
    image: { url: `${UNSPLASH}/photo-1454496522488-7a8e488e8606?w=600`, caption: "Unsplash" },
    answers: ["Alpes", "Andes", "Himalaya", "Rocheuses"],
    correct: 0, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel pays a ce drapeau ?",
    image: { url: `${WIKI}/thumb/4/41/Flag_of_India.svg/600px-Flag_of_India.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Sri Lanka", "Inde", "Bangladesh", "Pakistan"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel pays a ce drapeau ?",
    image: { url: `${WIKI}/thumb/f/fc/Flag_of_Mexico.svg/600px-Flag_of_Mexico.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Italie", "Mexique", "Hongrie", "Bulgarie"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel monument géographique célèbre ?",
    image: { url: `${UNSPLASH}/photo-1572252009286-268acec5ca0a?w=600`, caption: "Unsplash" },
    answers: ["Niagara", "Iguazu", "Victoria", "Angel"],
    correct: 0, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel désert voit-on ?",
    image: { url: `${UNSPLASH}/photo-1473580044384-7ba9967e16a0?w=600`, caption: "Unsplash" },
    answers: ["Gobi", "Sahara", "Atacama", "Kalahari"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel pays a ce drapeau ?",
    image: { url: `${WIKI}/thumb/b/bc/Flag_of_Argentina.svg/600px-Flag_of_Argentina.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Argentine", "Uruguay", "Chili", "Honduras"],
    correct: 0, difficulty: "medium", hasImage: true
  },
  { question: "Quelle est la capitale de l'Espagne ?", image: null, answers: ["Barcelone", "Madrid", "Séville", "Valence"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle est la capitale de la Russie ?", image: null, answers: ["Saint-Pétersbourg", "Kiev", "Moscou", "Minsk"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel est le plus petit pays du monde ?", image: null, answers: ["Monaco", "Vatican", "Saint-Marin", "Nauru"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel pays a la plus grande superficie ?", image: null, answers: ["Chine", "USA", "Russie", "Canada"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Sur quel continent se trouve l'Égypte ?", image: null, answers: ["Asie", "Afrique", "Europe", "Moyen-Orient"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle mer sépare l'Europe de l'Afrique ?", image: null, answers: ["Mer Noire", "Méditerranée", "Mer Rouge", "Mer Égée"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel est le plus grand pays d'Amérique du Sud ?", image: null, answers: ["Argentine", "Pérou", "Brésil", "Colombie"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle est la capitale de la Norvège ?", image: null, answers: ["Stockholm", "Oslo", "Helsinki", "Copenhague"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel pays est traversé par l'équateur ET le Nil ?", image: null, answers: ["Égypte", "Ouganda", "Kenya", "Soudan"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quel détroit sépare l'Europe et l'Afrique ?", image: null, answers: ["Bosphore", "Gibraltar", "Manche", "Hormuz"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quelle est la plus haute montagne du monde ?", image: null, answers: ["K2", "Everest", "Annapurna", "Mont Blanc"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel pays compte le plus d'îles ?", image: null, answers: ["Indonésie", "Philippines", "Suède", "Japon"], correct: 2, difficulty: "hard", hasImage: false },
  { question: "Quelle est la capitale du Maroc ?", image: null, answers: ["Casablanca", "Marrakech", "Rabat", "Fès"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quel océan borde la côte ouest des USA ?", image: null, answers: ["Atlantique", "Pacifique", "Indien", "Arctique"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel pays a Buenos Aires comme capitale ?", image: null, answers: ["Brésil", "Argentine", "Uruguay", "Chili"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle est la capitale de la Suisse ?", image: null, answers: ["Genève", "Zurich", "Berne", "Lucerne"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quel est le plus grand lac d'Afrique ?", image: null, answers: ["Tanganyika", "Victoria", "Malawi", "Tchad"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel pays asiatique est composé d'environ 6 800 îles ?", image: null, answers: ["Indonésie", "Philippines", "Japon", "Malaisie"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quel fleuve traverse Londres ?", image: null, answers: ["Tamise", "Severn", "Trent", "Mersey"], correct: 0, difficulty: "easy", hasImage: false },
  { question: "Quelle est la capitale de l'Égypte ?", image: null, answers: ["Alexandrie", "Le Caire", "Gizeh", "Louxor"], correct: 1, difficulty: "easy", hasImage: false }
];

// ============================================================
// SPORT (30 questions, 8 avec images)
// ============================================================
const sport = [
  {
    question: "Quel est ce sport ?",
    image: { url: `${UNSPLASH}/photo-1431324155629-1a6deb1dec8d?w=600`, caption: "Unsplash" },
    answers: ["Tennis", "Badminton", "Padel", "Squash"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel sport est-ce ?",
    image: { url: `${UNSPLASH}/photo-1546519638-68e109498ffc?w=600`, caption: "Unsplash" },
    answers: ["Volley", "Handball", "Basket-ball", "Football"],
    correct: 2, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel sport voit-on ?",
    image: { url: `${UNSPLASH}/photo-1574629810360-7efbbe195018?w=600`, caption: "Unsplash" },
    answers: ["Boxe", "MMA", "Karaté", "Lutte"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel sport ?",
    image: { url: `${UNSPLASH}/photo-1535131749006-b7f58c99034b?w=600`, caption: "Unsplash" },
    answers: ["Cricket", "Baseball", "Golf", "Hockey"],
    correct: 2, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel sport pratique-t-on ici ?",
    image: { url: `${UNSPLASH}/photo-1530549387789-4c1017266635?w=600`, caption: "Unsplash" },
    answers: ["Snowboard", "Ski alpin", "Patinage", "Bobsleigh"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel est cet équipement ?",
    image: { url: `${UNSPLASH}/photo-1574629810360-7efbbe195018?w=600`, caption: "Unsplash" },
    answers: ["Gant de boxe", "Mitaine", "Gant de baseball", "Protège-poing"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel sport olympique ?",
    image: { url: `${UNSPLASH}/photo-1551958219-acbc608c6377?w=600`, caption: "Unsplash" },
    answers: ["Plongeon", "Natation", "Water-polo", "Nage synchronisée"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel sport ?",
    image: { url: `${UNSPLASH}/photo-1521412644187-c49fa049e84d?w=600`, caption: "Unsplash" },
    answers: ["Rugby à 13", "Football américain", "Rugby à 15", "Football australien"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  { question: "Combien de joueurs dans une équipe de football sur le terrain ?", image: null, answers: ["10", "11", "12", "9"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Tous les combien d'années ont lieu les JO d'été ?", image: null, answers: ["2 ans", "3 ans", "4 ans", "5 ans"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel pays a remporté la Coupe du monde 2022 ?", image: null, answers: ["France", "Argentine", "Brésil", "Croatie"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui détient le record de buts en équipe de France ?", image: null, answers: ["Henry", "Platini", "Giroud", "Mbappé"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Combien de Ballon d'Or possède Messi (fin 2023) ?", image: null, answers: ["6", "7", "8", "9"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Dans quel sport gagne-t-on la Coupe Davis ?", image: null, answers: ["Tennis", "Golf", "Polo", "Voile"], correct: 0, difficulty: "easy", hasImage: false },
  { question: "Combien de joueurs sur le terrain au basket par équipe ?", image: null, answers: ["4", "5", "6", "7"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui est surnommé 'The GOAT' au tennis ?", image: null, answers: ["Federer", "Nadal", "Djokovic", "Murray"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quelle distance fait un marathon ?", image: null, answers: ["38 km", "40 km", "42,195 km", "45 km"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Combien de joueurs dans une équipe de rugby à XV ?", image: null, answers: ["13", "15", "11", "12"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel sportif a gagné 23 médailles d'or olympiques ?", image: null, answers: ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Mark Spitz"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quel pays a inventé le judo ?", image: null, answers: ["Chine", "Japon", "Corée", "Thaïlande"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien de tours dans un round de boxe pro ?", image: null, answers: ["3", "5", "1", "12 par combat"], correct: 3, difficulty: "hard", hasImage: false },
  { question: "Qui a remporté le Tour de France en 1998 ?", image: null, answers: ["Armstrong", "Pantani", "Ullrich", "Indurain"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quel club a remporté le plus de Ligue des Champions ?", image: null, answers: ["Barcelone", "Bayern", "Real Madrid", "Liverpool"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle est la couleur de la dernière ceinture en judo ?", image: null, answers: ["Noire", "Rouge", "Blanche", "Rouge et blanche"], correct: 2, difficulty: "hard", hasImage: false },
  { question: "Quel sport pratique Lewis Hamilton ?", image: null, answers: ["MotoGP", "Formule 1", "Rallye", "NASCAR"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel pays a gagné l'Euro 2020 ?", image: null, answers: ["Angleterre", "Italie", "Espagne", "France"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien y a-t-il de trous dans un parcours de golf classique ?", image: null, answers: ["9", "12", "18", "24"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel sport est aussi appelé ping-pong ?", image: null, answers: ["Badminton", "Tennis de table", "Squash", "Padel"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui a gagné la Coupe du monde 1998 ?", image: null, answers: ["Brésil", "France", "Italie", "Allemagne"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien dure un match de foot (temps réglementaire) ?", image: null, answers: ["80 min", "90 min", "100 min", "120 min"], correct: 1, difficulty: "easy", hasImage: false }
];

// ============================================================
// CINÉMA & SÉRIES (30 questions, 10 avec images)
// ============================================================
const cinema = [
  {
    question: "Quel film est référencé par ce logo ?",
    image: { url: `${WIKI}/thumb/0/0e/Star_Wars_Logo.svg/600px-Star_Wars_Logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Star Wars", "Star Trek", "Stargate", "Battlestar Galactica"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel studio possède ce logo ?",
    image: { url: `${WIKI}/thumb/8/8b/Disney_wordmark.svg/600px-Disney_wordmark.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Pixar", "Disney", "DreamWorks", "Universal"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel film cette image rappelle-t-elle ?",
    image: { url: `${UNSPLASH}/photo-1517604931442-7e0c8ed2963c?w=600`, caption: "Unsplash" },
    answers: ["Jaws", "Le Grand Bleu", "Avatar", "Aquaman"],
    correct: 0, difficulty: "medium", hasImage: true
  },
  {
    question: "Quelle franchise par ce logo ?",
    image: { url: `${WIKI}/thumb/0/0c/Marvel_Logo.svg/600px-Marvel_Logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["DC Comics", "Marvel", "Image Comics", "Dark Horse"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel logo est-ce ?",
    image: { url: `${WIKI}/thumb/0/09/HBO_logo.svg/600px-HBO_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Showtime", "HBO", "Starz", "AMC"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quelle série évoque cette image (zombies) ?",
    image: { url: `${UNSPLASH}/photo-1509248961158-e54f6934749c?w=600`, caption: "Unsplash" },
    answers: ["The Walking Dead", "Stranger Things", "Game of Thrones", "Breaking Bad"],
    correct: 0, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel logo de studio ?",
    image: { url: `${WIKI}/thumb/3/3e/Pixar_2012_logo.svg/600px-Pixar_2012_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["DreamWorks", "Pixar", "Illumination", "Studio Ghibli"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel logo de plateforme ?",
    image: { url: `${WIKI}/thumb/1/19/Amazon_Prime_Video_logo.svg/600px-Amazon_Prime_Video_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Disney+", "Prime Video", "Apple TV", "Paramount+"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel film évoque cette image (boule magique) ?",
    image: { url: `${UNSPLASH}/photo-1551269901-5c5e14c25df7?w=600`, caption: "Unsplash" },
    answers: ["Le Hobbit", "Harry Potter", "Le Seigneur des Anneaux", "Eragon"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel logo Hollywoodien ?",
    image: { url: `${WIKI}/thumb/c/cb/Universal_Pictures_logo.svg/600px-Universal_Pictures_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Paramount", "Universal", "Warner Bros", "Sony"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  { question: "Qui a réalisé 'Inception' ?", image: null, answers: ["Spielberg", "Nolan", "Tarantino", "Scorsese"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien de films de la saga Harry Potter ?", image: null, answers: ["6", "7", "8", "9"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel acteur joue Jack dans Titanic ?", image: null, answers: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Matt Damon"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui a réalisé 'Pulp Fiction' ?", image: null, answers: ["Coen", "Tarantino", "Scorsese", "Fincher"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel personnage dit 'Je suis ton père' ?", image: null, answers: ["Yoda", "Obi-Wan", "Dark Vador", "Han Solo"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle série suit Walter White ?", image: null, answers: ["Better Call Saul", "Breaking Bad", "Ozark", "Fargo"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "En quelle année est sorti 'Le Roi Lion' (animation) ?", image: null, answers: ["1992", "1994", "1996", "1998"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Qui joue Iron Man dans le MCU ?", image: null, answers: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel film a remporté l'Oscar du meilleur film en 2020 ?", image: null, answers: ["1917", "Parasite", "Joker", "Le Mans 66"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Qui joue Hermione dans Harry Potter ?", image: null, answers: ["Emma Stone", "Emma Watson", "Emma Roberts", "Keira Knightley"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel film de Pixar parle d'une rate culinaire ?", image: null, answers: ["Cars", "Wall-E", "Ratatouille", "Là-haut"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Qui joue Neo dans Matrix ?", image: null, answers: ["Tom Cruise", "Keanu Reeves", "Brad Pitt", "Will Smith"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle série a popularisé l'expression 'Winter is coming' ?", image: null, answers: ["Vikings", "Game of Thrones", "The Witcher", "Outlander"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel film d'animation 2013 a la chanson 'Let it go' ?", image: null, answers: ["Vaiana", "Raiponce", "La Reine des Neiges", "Tarzan"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Qui a réalisé 'Le Parrain' ?", image: null, answers: ["Scorsese", "Coppola", "De Palma", "Spielberg"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel film a la réplique 'L'enfer, c'est les autres' ? (référence Sartre)", image: null, answers: ["Huis clos", "Les Misérables", "Le Diable s'habille en Prada", "Pierrot le Fou"], correct: 0, difficulty: "hard", hasImage: false },
  { question: "Quel acteur a joué le Joker en 2019 (Oscar) ?", image: null, answers: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Cesar Romero"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel studio japonais a créé 'Le Voyage de Chihiro' ?", image: null, answers: ["Toei", "Ghibli", "Madhouse", "Bones"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel acteur incarne James Bond dans 'Casino Royale' (2006) ?", image: null, answers: ["Pierce Brosnan", "Daniel Craig", "Roger Moore", "Sean Connery"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle série de Netflix met en scène des criminels avec des masques de Dalí ?", image: null, answers: ["Narcos", "La Casa de Papel", "Élite", "Lupin"], correct: 1, difficulty: "easy", hasImage: false }
];

// ============================================================
// MUSIQUE (30 questions, 8 avec images)
// ============================================================
const musique = [
  {
    question: "Quel instrument voit-on ?",
    image: { url: `${UNSPLASH}/photo-1493225457124-a3eb161ffa5f?w=600`, caption: "Unsplash" },
    answers: ["Violoncelle", "Violon", "Alto", "Contrebasse"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel instrument est-ce ?",
    image: { url: `${UNSPLASH}/photo-1514320291840-2e0a9bf2a9ae?w=600`, caption: "Unsplash" },
    answers: ["Orgue", "Piano", "Clavecin", "Synthétiseur"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel instrument ?",
    image: { url: `${UNSPLASH}/photo-1511735111819-9a3f7709049c?w=600`, caption: "Unsplash" },
    answers: ["Guitare classique", "Guitare électrique", "Basse", "Banjo"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel instrument ?",
    image: { url: `${UNSPLASH}/photo-1519892300165-cb5542fb47c7?w=600`, caption: "Unsplash" },
    answers: ["Trompette", "Saxophone", "Clarinette", "Trombone"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel instrument à vent ?",
    image: { url: `${UNSPLASH}/photo-1485579149621-3123dd979885?w=600`, caption: "Unsplash" },
    answers: ["Trompette", "Cor", "Trombone", "Tuba"],
    correct: 0, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel instrument ?",
    image: { url: `${UNSPLASH}/photo-1571327073757-71d13c24de30?w=600`, caption: "Unsplash" },
    answers: ["Tablas", "Batterie", "Bongos", "Djembé"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel instrument oriental est-ce ?",
    image: { url: `${UNSPLASH}/photo-1525201548942-d8732f6617a0?w=600`, caption: "Unsplash" },
    answers: ["Harpe", "Sitar", "Oud", "Koto"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quelle famille d'instruments ?",
    image: { url: `${UNSPLASH}/photo-1466921583968-f07aa80c526e?w=600`, caption: "Unsplash" },
    answers: ["Cordes", "Vents", "Percussions", "Claviers"],
    correct: 2, difficulty: "easy", hasImage: true
  },
  { question: "Qui chante 'Bohemian Rhapsody' ?", image: null, answers: ["The Beatles", "Queen", "Pink Floyd", "Led Zeppelin"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien de cordes a une guitare classique ?", image: null, answers: ["4", "5", "6", "7"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Qui est surnommé 'Le Roi de la Pop' ?", image: null, answers: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Timberlake"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel groupe a sorti 'Stairway to Heaven' ?", image: null, answers: ["Led Zeppelin", "Deep Purple", "Black Sabbath", "AC/DC"], correct: 0, difficulty: "easy", hasImage: false },
  { question: "Quel compositeur a écrit la 9e symphonie ?", image: null, answers: ["Mozart", "Bach", "Beethoven", "Brahms"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Combien de membres dans les Beatles ?", image: null, answers: ["3", "4", "5", "6"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Qui chante 'Shape of You' ?", image: null, answers: ["Justin Bieber", "Ed Sheeran", "Bruno Mars", "Charlie Puth"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel rappeur a sorti 'God's Plan' ?", image: null, answers: ["Kendrick Lamar", "Drake", "Travis Scott", "J. Cole"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "De quel pays vient le reggae ?", image: null, answers: ["Cuba", "Brésil", "Jamaïque", "Trinité"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Qui a composé 'Les Quatre Saisons' ?", image: null, answers: ["Bach", "Vivaldi", "Mozart", "Haendel"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle chanteuse a sorti 'Hello' en 2015 ?", image: null, answers: ["Beyoncé", "Adele", "Rihanna", "Sia"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel groupe a sorti 'Hotel California' ?", image: null, answers: ["Eagles", "Bee Gees", "Fleetwood Mac", "Doors"], correct: 0, difficulty: "medium", hasImage: false },
  { question: "Quel chanteur surnommé 'The Boss' ?", image: null, answers: ["Bob Dylan", "Bruce Springsteen", "Tom Petty", "Neil Young"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Combien de touches a un piano standard ?", image: null, answers: ["76", "88", "92", "100"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Qui a chanté 'Imagine' ?", image: null, answers: ["Paul McCartney", "John Lennon", "Bob Dylan", "George Harrison"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel groupe français a fait 'One More Time' ?", image: null, answers: ["Justice", "Daft Punk", "Air", "Cassius"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle chanson de Stromae ouvre 'Cheese' ?", image: null, answers: ["Alors on danse", "Papaoutai", "Formidable", "Tous les mêmes"], correct: 0, difficulty: "medium", hasImage: false },
  { question: "Qui a écrit 'La Marseillaise' ?", image: null, answers: ["Rouget de Lisle", "Berlioz", "Bizet", "Gounod"], correct: 0, difficulty: "medium", hasImage: false },
  { question: "Quel pays a remporté l'Eurovision 2024 ?", image: null, answers: ["Suède", "Suisse", "Croatie", "Italie"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quel groupe a sorti 'The Dark Side of the Moon' ?", image: null, answers: ["Pink Floyd", "Genesis", "Yes", "Rush"], correct: 0, difficulty: "easy", hasImage: false },
  { question: "Combien de symphonies a composées Beethoven ?", image: null, answers: ["7", "9", "11", "13"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Qui a chanté 'Like a Virgin' ?", image: null, answers: ["Cher", "Madonna", "Cyndi Lauper", "Whitney Houston"], correct: 1, difficulty: "easy", hasImage: false }
];

// ============================================================
// JEUX VIDÉO (30 questions, 8 avec images)
// ============================================================
const jeuxVideo = [
  {
    question: "Quel logo de console ?",
    image: { url: `${WIKI}/thumb/0/00/PlayStation_logo.svg/600px-PlayStation_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Xbox", "PlayStation", "Sega", "Nintendo"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel logo Nintendo ?",
    image: { url: `${WIKI}/thumb/0/0d/Nintendo.svg/600px-Nintendo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Sega", "Nintendo", "Atari", "Bandai"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel studio ?",
    image: { url: `${WIKI}/thumb/0/04/Rockstar_Games_Logo.svg/600px-Rockstar_Games_Logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Ubisoft", "Rockstar Games", "EA", "Activision"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel logo de studio français ?",
    image: { url: `${WIKI}/thumb/8/8a/Ubisoft_logo.svg/600px-Ubisoft_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Quantic Dream", "Ubisoft", "Arkane", "Asobo"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel jeu suggère cette image (manette) ?",
    image: { url: `${UNSPLASH}/photo-1486572788966-cfd3df1f5b42?w=600`, caption: "Unsplash" },
    answers: ["Console rétro", "Manette générique", "Joystick", "Volant"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quelle franchise par ce logo ?",
    image: { url: `${WIKI}/thumb/3/30/Xbox_one_logo.svg/600px-Xbox_one_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["PlayStation", "Xbox", "Switch", "Steam"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel logo Steam ?",
    image: { url: `${WIKI}/thumb/8/83/Steam_icon_logo.svg/600px-Steam_icon_logo.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Epic Games", "Steam", "GOG", "Origin"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quelle plateforme ?",
    image: { url: `${WIKI}/thumb/b/b2/Twitch_logo_%282019%29.svg/600px-Twitch_logo_%282019%29.svg.png`, caption: "Wikimedia Commons" },
    answers: ["YouTube Gaming", "Twitch", "Kick", "Mixer"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  { question: "Qui est le plombier mascotte de Nintendo ?", image: null, answers: ["Luigi", "Mario", "Wario", "Toad"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Dans quel jeu trouve-t-on Link ?", image: null, answers: ["Final Fantasy", "Zelda", "Skyrim", "Dragon Quest"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel jeu suit Master Chief ?", image: null, answers: ["Gears of War", "Halo", "Doom", "Killzone"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle entreprise a créé Minecraft ?", image: null, answers: ["Mojang", "Valve", "Blizzard", "Bethesda"], correct: 0, difficulty: "easy", hasImage: false },
  { question: "En quelle année est sorti Pong ?", image: null, answers: ["1968", "1972", "1976", "1980"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel personnage hérisson bleu court vite ?", image: null, answers: ["Tails", "Sonic", "Knuckles", "Shadow"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel jeu utilise le slogan 'Get Over Here!' ?", image: null, answers: ["Street Fighter", "Mortal Kombat", "Tekken", "Soul Calibur"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quelle console Sony est sortie en 2020 ?", image: null, answers: ["PS4 Pro", "PS5", "PS Vita 2", "PSP Go"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel jeu battle royale est sorti en 2017 (Epic) ?", image: null, answers: ["PUBG", "Fortnite", "Apex", "Warzone"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel studio a créé The Witcher 3 ?", image: null, answers: ["Bethesda", "CD Projekt Red", "BioWare", "Square Enix"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien de royaumes dans 'Super Mario Bros.' (1985) ?", image: null, answers: ["6", "8", "10", "12"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quel jeu suit Kratos ?", image: null, answers: ["Devil May Cry", "God of War", "Bayonetta", "Darksiders"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Dans GTA V, dans quelle ville se passe l'action ?", image: null, answers: ["Liberty City", "Vice City", "Los Santos", "San Fierro"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel jeu suit Geralt de Riv ?", image: null, answers: ["Skyrim", "Dragon Age", "The Witcher", "Elden Ring"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel jeu est devenu le plus vendu de l'histoire ?", image: null, answers: ["Tetris", "Minecraft", "GTA V", "Wii Sports"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Qui développe la série Assassin's Creed ?", image: null, answers: ["EA", "Ubisoft", "Activision", "Bethesda"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel personnage Pokémon est jaune et électrique ?", image: null, answers: ["Bulbizarre", "Salamèche", "Pikachu", "Carapuce"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel jeu PlayStation suit Aloy ?", image: null, answers: ["The Last of Us", "Horizon Zero Dawn", "Ghost of Tsushima", "Death Stranding"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quelle console Nintendo est sortie en 2017 ?", image: null, answers: ["Wii U", "Switch", "3DS", "DS Lite"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel FPS est associé à Counter-Terrorists et Terrorists ?", image: null, answers: ["Call of Duty", "Counter-Strike", "Valorant", "Rainbow Six"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel MOBA de Riot Games ?", image: null, answers: ["Dota 2", "Smite", "League of Legends", "Heroes of the Storm"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quel jeu de FromSoftware a gagné Game of the Year 2022 ?", image: null, answers: ["Sekiro", "Dark Souls", "Elden Ring", "Bloodborne"], correct: 2, difficulty: "medium", hasImage: false }
];

// ============================================================
// GASTRONOMIE (30 questions, 10 avec images)
// ============================================================
const gastronomie = [
  {
    question: "Quel plat voit-on ?",
    image: { url: `${UNSPLASH}/photo-1565299624946-b28f40a0ae38?w=600`, caption: "Unsplash" },
    answers: ["Pizza", "Tarte", "Quiche", "Focaccia"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel plat est-ce ?",
    image: { url: `${UNSPLASH}/photo-1617196034796-73dfa7b1fd56?w=600`, caption: "Unsplash" },
    answers: ["Ramen", "Sushi", "Tempura", "Yakitori"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel plat ?",
    image: { url: `${UNSPLASH}/photo-1604908176997-125f25cc6f3d?w=600`, caption: "Unsplash" },
    answers: ["Risotto", "Paella", "Couscous", "Biryani"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel plat oriental ?",
    image: { url: `${UNSPLASH}/photo-1585937421612-70a008356fbe?w=600`, caption: "Unsplash" },
    answers: ["Tajine", "Couscous", "Pastilla", "Méchoui"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel fruit ?",
    image: { url: `${UNSPLASH}/photo-1568702846914-96b305d2aaeb?w=600`, caption: "Unsplash" },
    answers: ["Pomme", "Poire", "Mangue", "Pêche"],
    correct: 0, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel dessert français ?",
    image: { url: `${UNSPLASH}/photo-1606312619070-d48b4c652a52?w=600`, caption: "Unsplash" },
    answers: ["Éclair", "Macaron", "Mille-feuille", "Religieuse"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel plat italien ?",
    image: { url: `${UNSPLASH}/photo-1551183053-bf91a1d81141?w=600`, caption: "Unsplash" },
    answers: ["Lasagnes", "Pâtes carbonara", "Spaghetti bolognaise", "Pesto"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  {
    question: "Quel plat asiatique ?",
    image: { url: `${UNSPLASH}/photo-1569718212165-3a8278d5f624?w=600`, caption: "Unsplash" },
    answers: ["Pho", "Ramen", "Udon", "Soba"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel fromage est-ce (à pâte persillée) ?",
    image: { url: `${UNSPLASH}/photo-1452195100486-9cc805987862?w=600`, caption: "Unsplash" },
    answers: ["Roquefort", "Camembert", "Comté", "Reblochon"],
    correct: 0, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel dessert ?",
    image: { url: `${UNSPLASH}/photo-1551024506-0bccd828d307?w=600`, caption: "Unsplash" },
    answers: ["Cheesecake", "Tiramisu", "Brownie", "Pavlova"],
    correct: 1, difficulty: "easy", hasImage: true
  },
  { question: "Quel pays a inventé la pizza ?", image: null, answers: ["Grèce", "Italie", "Turquie", "Espagne"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel est l'ingrédient principal du guacamole ?", image: null, answers: ["Tomate", "Avocat", "Concombre", "Courgette"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle épice donne sa couleur au curry ?", image: null, answers: ["Paprika", "Curcuma", "Cumin", "Safran"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel pays a inventé le chocolat ?", image: null, answers: ["Suisse", "Belgique", "Mexique", "France"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "De quel animal vient le foie gras ?", image: null, answers: ["Poulet", "Canard ou oie", "Dinde", "Pigeon"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle est la spécialité de Strasbourg ?", image: null, answers: ["Cassoulet", "Choucroute", "Bouillabaisse", "Aligot"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel ingrédient principal dans le houmous ?", image: null, answers: ["Lentilles", "Pois chiches", "Haricots", "Fèves"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel pays a inventé le ceviche ?", image: null, answers: ["Mexique", "Pérou", "Chili", "Espagne"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quelle viande dans un bœuf bourguignon ?", image: null, answers: ["Porc", "Veau", "Bœuf", "Agneau"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Quelle est la base du pesto ?", image: null, answers: ["Persil", "Basilic", "Coriandre", "Menthe"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "De quoi est fait le saké ?", image: null, answers: ["Orge", "Riz", "Maïs", "Pomme"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel champignon est utilisé dans le risotto célèbre ?", image: null, answers: ["Truffe blanche", "Bolet", "Girolle", "Pleurote"], correct: 0, difficulty: "medium", hasImage: false },
  { question: "Quel fruit est appelé 'pomme de l'amour' ?", image: null, answers: ["Pomme", "Tomate", "Mangue", "Cerise"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "À quelle température cuit-on un steak saignant ?", image: null, answers: ["45°C", "55°C", "65°C", "75°C"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quel ingrédient n'entre PAS dans une carbonara authentique ?", image: null, answers: ["Œuf", "Crème", "Guanciale", "Pecorino"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel pays a inventé le croissant ?", image: null, answers: ["France", "Autriche", "Allemagne", "Hongrie"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quelle ville française est célèbre pour ses calissons ?", image: null, answers: ["Marseille", "Aix-en-Provence", "Nice", "Avignon"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel est le pain plat traditionnel indien ?", image: null, answers: ["Tortilla", "Naan", "Pita", "Lavash"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel cocktail contient du rhum, du citron vert et de la menthe ?", image: null, answers: ["Caïpirinha", "Mojito", "Daiquiri", "Piña Colada"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel fromage italien dans un tiramisu ?", image: null, answers: ["Ricotta", "Mascarpone", "Mozzarella", "Burrata"], correct: 1, difficulty: "easy", hasImage: false }
];

// ============================================================
// MÉLANGE DIFFICILE (30 questions, 5 avec images)
// ============================================================
const melangeDifficile = [
  {
    question: "Quel scientifique est représenté ?",
    image: { url: `${WIKI}/thumb/c/c8/Marie_Curie_c1920.jpg/400px-Marie_Curie_c1920.jpg`, caption: "Wikimedia Commons" },
    answers: ["Rosalind Franklin", "Marie Curie", "Lise Meitner", "Ada Lovelace"],
    correct: 1, difficulty: "medium", hasImage: true
  },
  {
    question: "Quel drapeau ?",
    image: { url: `${WIKI}/thumb/3/3a/Flag_of_Bhutan.svg/600px-Flag_of_Bhutan.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Népal", "Bhoutan", "Sri Lanka", "Mongolie"],
    correct: 1, difficulty: "hard", hasImage: true
  },
  {
    question: "Quel monument peu connu ?",
    image: { url: `${WIKI}/thumb/b/b9/Petra_Jordan_BW_21.JPG/600px-Petra_Jordan_BW_21.JPG`, caption: "Wikimedia Commons" },
    answers: ["Pétra", "Persépolis", "Palmyre", "Baalbek"],
    correct: 0, difficulty: "hard", hasImage: true
  },
  {
    question: "Quel drapeau africain ?",
    image: { url: `${WIKI}/thumb/9/92/Flag_of_Mauritania.svg/600px-Flag_of_Mauritania.svg.png`, caption: "Wikimedia Commons" },
    answers: ["Mali", "Sénégal", "Mauritanie", "Algérie"],
    correct: 2, difficulty: "hard", hasImage: true
  },
  {
    question: "Quel paysage volcanique ?",
    image: { url: `${UNSPLASH}/photo-1551858726-d4f8b1a99eee?w=600`, caption: "Unsplash" },
    answers: ["Etna", "Vésuve", "Stromboli", "Krakatoa"],
    correct: 0, difficulty: "hard", hasImage: true
  },
  { question: "Quelle est la racine carrée de 169 ?", image: null, answers: ["11", "12", "13", "14"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Combien de pétales possède la fleur de Lys ?", image: null, answers: ["3", "5", "6", "8"], correct: 2, difficulty: "hard", hasImage: false },
  { question: "Quel astronome a découvert que la Terre tourne autour du Soleil ?", image: null, answers: ["Galilée", "Kepler", "Copernic", "Tycho Brahe"], correct: 2, difficulty: "medium", hasImage: false },
  { question: "Quelle est la traduction littérale de 'kamikaze' ?", image: null, answers: ["Vent fort", "Vent divin", "Esprit guerrier", "Fureur du ciel"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quelle est l'unité SI de la fréquence ?", image: null, answers: ["Newton", "Hertz", "Watt", "Pascal"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel pays consomme le plus de café par habitant ?", image: null, answers: ["Italie", "Finlande", "Brésil", "France"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "En programmation, que signifie 'AI' ?", image: null, answers: ["All Inclusive", "Artificial Intelligence", "Algorithmic Index", "Auto Interface"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle langue ancienne s'écrivait en hiéroglyphes ?", image: null, answers: ["Sumérien", "Égyptien ancien", "Grec ancien", "Hittite"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel est le plus petit nombre premier à 2 chiffres ?", image: null, answers: ["10", "11", "13", "17"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel président a démissionné suite au Watergate ?", image: null, answers: ["Kennedy", "Nixon", "Carter", "Ford"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel pays a inventé la fondue savoyarde ?", image: null, answers: ["France", "Suisse", "Italie", "Autriche"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quel pourcentage de la Terre est couvert d'eau ?", image: null, answers: ["51%", "62%", "71%", "82%"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Combien de pierres dans le jeu de Go ?", image: null, answers: ["180/180", "181/180", "200/200", "150/150"], correct: 1, difficulty: "hard", hasImage: false },
  { question: "Quel est l'antonyme de 'éphémère' ?", image: null, answers: ["Bref", "Pérenne", "Court", "Rapide"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Qui a peint 'La Nuit étoilée' ?", image: null, answers: ["Monet", "Van Gogh", "Cézanne", "Renoir"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel philosophe a écrit 'La République' ?", image: null, answers: ["Aristote", "Platon", "Socrate", "Épicure"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quelle est la formule de l'aire d'un cercle ?", image: null, answers: ["πr", "2πr", "πr²", "πd²"], correct: 2, difficulty: "easy", hasImage: false },
  { question: "Qui a inventé le téléphone ?", image: null, answers: ["Edison", "Bell", "Tesla", "Marconi"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel est le plus grand désert chaud du monde ?", image: null, answers: ["Gobi", "Sahara", "Kalahari", "Atacama"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien de degrés contient un triangle ?", image: null, answers: ["90°", "180°", "270°", "360°"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quel élément a le numéro atomique 1 ?", image: null, answers: ["Hélium", "Hydrogène", "Lithium", "Oxygène"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle ville organisera les JO 2028 ?", image: null, answers: ["Brisbane", "Los Angeles", "Paris", "Tokyo"], correct: 1, difficulty: "medium", hasImage: false },
  { question: "Quel auteur a écrit '1984' ?", image: null, answers: ["Huxley", "Orwell", "Bradbury", "Asimov"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Combien de bits dans un octet ?", image: null, answers: ["4", "8", "16", "32"], correct: 1, difficulty: "easy", hasImage: false },
  { question: "Quelle est la capitale du Kazakhstan ?", image: null, answers: ["Almaty", "Astana", "Bichkek", "Tachkent"], correct: 1, difficulty: "hard", hasImage: false }
];

// ============================================================
// Assemblage final
// ============================================================
const allCategories = {
  culture: { name: "Culture générale", icon: "🌍", questions: cultureGenerale },
  science: { name: "Science", icon: "🔬", questions: science },
  histoire: { name: "Histoire", icon: "📜", questions: histoire },
  geographie: { name: "Géographie", icon: "🗺️", questions: geographie },
  sport: { name: "Sport", icon: "⚽", questions: sport },
  cinema: { name: "Cinéma & Séries", icon: "🎬", questions: cinema },
  musique: { name: "Musique", icon: "🎵", questions: musique },
  jeuxvideo: { name: "Jeux Vidéo", icon: "🎮", questions: jeuxVideo },
  gastronomie: { name: "Gastronomie", icon: "🍕", questions: gastronomie },
  melange: { name: "Mélange difficile", icon: "🔥", questions: melangeDifficile }
};

function getRandomQuestions(categoryKey, count) {
  let pool;
  if (categoryKey === 'all') {
    pool = Object.values(allCategories).flatMap(c => c.questions);
  } else {
    pool = (allCategories[categoryKey] || allCategories.culture).questions.slice();
  }
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

function getCategoryList() {
  return Object.entries(allCategories).map(([key, c]) => ({
    key, name: c.name, icon: c.icon, count: c.questions.length
  }));
}

module.exports = { allCategories, getRandomQuestions, getCategoryList };

