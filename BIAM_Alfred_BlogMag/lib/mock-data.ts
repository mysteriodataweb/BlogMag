export interface Article {
  id: number
  titre: string
  auteur: string
  auteurAvatar: string
  categorie: string
  image: string
  contenu: string
  note: number
  tempsLecture: number
  date: string
  partages: number
}

export interface Comment {
  id: number
  auteur: string
  avatar: string
  date: string
  texte: string
}

export const categories = [
  { nom: "Technologie", count: 12 },
  { nom: "Design", count: 8 },
  { nom: "Lifestyle", count: 15 },
  { nom: "Voyage", count: 10 },
  { nom: "Cuisine", count: 7 },
  { nom: "Business", count: 9 },
  { nom: "Santé", count: 6 },
]

export const articles: Article[] = [
  {
    id: 1,
    titre: "Les tendances du développement web en 2026",
    auteur: "Sophie Martin",
    auteurAvatar: "https://i.pravatar.cc/150?img=1",
    categorie: "Technologie",
    image: "/images/article-tech.jpg",
    contenu: `Le monde du développement web évolue à une vitesse fulgurante. En 2026, plusieurs tendances majeures redessinent le paysage numérique. L'intelligence artificielle s'intègre désormais directement dans les workflows de développement, automatisant la génération de code et l'optimisation des performances.\n\nLes frameworks JavaScript continuent leur évolution avec des approches de plus en plus centrées sur le serveur. Next.js, Nuxt et SvelteKit dominent le marché en offrant des expériences de développement inégalées. Le Server-Side Rendering (SSR) et les Server Components sont devenus la norme pour des applications plus rapides et plus sécurisées.\n\nL'accessibilité web n'est plus une option mais une obligation. Les développeurs intègrent dès la conception les standards WCAG, garantissant une expérience inclusive pour tous les utilisateurs. Les outils d'audit automatique facilitent cette démarche.\n\nEnfin, le WebAssembly ouvre de nouvelles possibilités en permettant d'exécuter du code natif dans le navigateur avec des performances proches du natif. Les applications web deviennent ainsi aussi puissantes que leurs équivalents desktop.`,
    note: 4.8,
    tempsLecture: 8,
    date: "15 Fév 2026",
    partages: 234,
  },
  {
    id: 2,
    titre: "Guide complet du design système moderne",
    auteur: "Lucas Dubois",
    auteurAvatar: "https://i.pravatar.cc/150?img=3",
    categorie: "Design",
    image: "/images/article-design.jpg",
    contenu: `Créer un design système cohérent est l'un des défis les plus importants pour les équipes produit modernes. Un bon design système ne se résume pas à une bibliothèque de composants — c'est une philosophie complète qui guide chaque décision visuelle et interactive.\n\nLes tokens de design constituent la fondation : couleurs, typographies, espacements et ombres sont définis de manière centralisée pour assurer la cohérence à travers toute l'application. Les composants atomiques sont ensuite construits sur cette base, puis assemblés en patterns plus complexes.\n\nLa documentation est essentielle. Chaque composant doit être documenté avec ses variantes, ses états, ses guidelines d'utilisation et ses exemples concrets. Des outils comme Storybook facilitent cette documentation interactive.`,
    note: 4.5,
    tempsLecture: 12,
    date: "12 Fév 2026",
    partages: 189,
  },
  {
    id: 3,
    titre: "10 habitudes pour un mode de vie équilibré",
    auteur: "Emma Laurent",
    auteurAvatar: "https://i.pravatar.cc/150?img=5",
    categorie: "Lifestyle",
    image: "/images/article-lifestyle.jpg",
    contenu: `Maintenir un équilibre entre vie professionnelle et personnelle est un défi quotidien. Voici dix habitudes simples mais puissantes pour améliorer votre qualité de vie.\n\nCommencez chaque journée par 15 minutes de méditation ou de respiration consciente. Cette pratique réduit le stress et améliore la concentration tout au long de la journée. Planifiez vos tâches la veille pour commencer chaque matin avec clarté.\n\nL'exercice physique régulier est indispensable. Même 30 minutes de marche rapide suffisent pour maintenir une bonne santé cardiovasculaire et un esprit vif. Complétez avec une alimentation riche en légumes, fruits et protéines de qualité.`,
    note: 4.7,
    tempsLecture: 6,
    date: "10 Fév 2026",
    partages: 312,
  },
  {
    id: 4,
    titre: "Découvrir la Côte Amalfitaine en 7 jours",
    auteur: "Thomas Bernard",
    auteurAvatar: "https://i.pravatar.cc/150?img=8",
    categorie: "Voyage",
    image: "/images/article-travel.jpg",
    contenu: `La Côte Amalfitaine est l'une des destinations les plus spectaculaires d'Europe. Perchée sur les falaises méditerranéennes du sud de l'Italie, cette région offre des panoramas à couper le souffle, une gastronomie exceptionnelle et une culture riche.\n\nJour 1-2 : Commencez par Positano, le joyau coloré de la côte. Ses maisons pastel accrochées aux falaises et ses plages de galets noirs créent un décor de carte postale. Visitez l'église Santa Maria Assunta et flânez dans les ruelles étroites bordées de boutiques artisanales.\n\nJour 3-4 : Direction Amalfi, la ville qui a donné son nom à cette côte légendaire. Ne manquez pas la cathédrale Sant'Andrea et le musée du papier.`,
    note: 4.9,
    tempsLecture: 10,
    date: "8 Fév 2026",
    partages: 456,
  },
  {
    id: 5,
    titre: "Recettes de pâtisserie française traditionnelle",
    auteur: "Marie Dupont",
    auteurAvatar: "https://i.pravatar.cc/150?img=9",
    categorie: "Cuisine",
    image: "/images/article-food.jpg",
    contenu: `La pâtisserie française est reconnue mondialement pour sa finesse et son élégance. Découvrez les secrets des grands classiques qui font la renommée de la gastronomie française.\n\nLe Paris-Brest, créé en 1910 par le pâtissier Louis Durand, est un incontournable. Sa pâte à choux croustillante garnie de crème pralinée aux noisettes est un pur délice. La clé réside dans la qualité du praliné maison.\n\nLe mille-feuille exige précision et patience. Trois couches de pâte feuilletée croustillante, alternées de crème pâtissière vanillée, couronnées d'un glaçage fondant marbré.`,
    note: 4.6,
    tempsLecture: 15,
    date: "5 Fév 2026",
    partages: 178,
  },
  {
    id: 6,
    titre: "Stratégies de croissance pour startups en 2026",
    auteur: "Alexandre Petit",
    auteurAvatar: "https://i.pravatar.cc/150?img=11",
    categorie: "Business",
    image: "/images/article-business.jpg",
    contenu: `Le paysage entrepreneurial de 2026 est marqué par des changements profonds. Les startups qui réussissent sont celles qui adoptent des stratégies de croissance innovantes et adaptées aux nouvelles réalités du marché.\n\nLe Product-Led Growth (PLG) continue de dominer. Les entreprises qui laissent leur produit parler de lui-même, en offrant une valeur immédiate dès la première utilisation, connaissent une croissance plus rapide et plus durable.\n\nL'automatisation intelligente est désormais accessible à toutes les tailles d'entreprise. Les outils d'IA permettent d'automatiser le marketing, le support client et même certains aspects du développement produit.`,
    note: 4.3,
    tempsLecture: 9,
    date: "3 Fév 2026",
    partages: 149,
  },
  {
    id: 7,
    titre: "Yoga et méditation : guide du débutant",
    auteur: "Claire Moreau",
    auteurAvatar: "https://i.pravatar.cc/150?img=16",
    categorie: "Santé",
    image: "/images/article-health.jpg",
    contenu: `Le yoga et la méditation sont des pratiques millénaires qui trouvent aujourd'hui une résonance particulière dans nos vies modernes hyperconnectées. Ce guide vous accompagne dans vos premiers pas.\n\nCommencez par le Hatha Yoga, la forme la plus accessible. Les postures de base — la montagne, le guerrier, l'arbre — renforcent le corps tout en apaisant l'esprit. Pratiquez 20 minutes par jour pour des résultats visibles dès les premières semaines.\n\nLa méditation de pleine conscience est le complément idéal. Installez-vous confortablement, concentrez-vous sur votre respiration et observez vos pensées sans jugement.`,
    note: 4.4,
    tempsLecture: 7,
    date: "1 Fév 2026",
    partages: 267,
  },
  {
    id: 8,
    titre: "L'avenir de l'intelligence artificielle",
    auteur: "Sophie Martin",
    auteurAvatar: "https://i.pravatar.cc/150?img=1",
    categorie: "Technologie",
    image: "/images/article-tech.jpg",
    contenu: `L'intelligence artificielle n'est plus de la science-fiction. Elle transforme radicalement chaque aspect de notre quotidien, de la santé à l'éducation en passant par les transports et la création artistique.\n\nLes modèles de langage multimodaux capables de comprendre texte, images, audio et vidéo ouvrent des possibilités inédites. Les agents IA autonomes commencent à réaliser des tâches complexes de manière indépendante.\n\nMais l'IA soulève aussi des questions éthiques fondamentales. La régulation, la transparence et l'équité algorithmique sont au cœur des débats. Les entreprises responsables intègrent désormais des principes éthiques dès la conception de leurs systèmes.`,
    note: 4.7,
    tempsLecture: 11,
    date: "28 Jan 2026",
    partages: 389,
  },
]

export const commentaires: Comment[] = [
  {
    id: 1,
    auteur: "Jean Dupont",
    avatar: "https://i.pravatar.cc/150?img=12",
    date: "16 Fév 2026",
    texte: "Excellent article ! Très bien documenté et agréable à lire. J'ai particulièrement apprécié la partie sur les Server Components qui est très claire.",
  },
  {
    id: 2,
    auteur: "Marie Claire",
    avatar: "https://i.pravatar.cc/150?img=20",
    date: "16 Fév 2026",
    texte: "Merci pour ce partage. Je suis d'accord sur l'importance de l'accessibilité web. C'est un sujet qui devrait faire partie de la formation des développeurs.",
  },
  {
    id: 3,
    auteur: "Pierre Lefebvre",
    avatar: "https://i.pravatar.cc/150?img=15",
    date: "17 Fév 2026",
    texte: "Article très intéressant. J'aurais aimé en savoir plus sur WebAssembly et ses cas d'usage concrets dans les entreprises. Peut-être un sujet pour un prochain article ?",
  },
]