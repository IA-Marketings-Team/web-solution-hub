
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 tendances en cybersécurité à surveiller en 2023",
    slug: "tendances-cybersecurite-2023",
    excerpt: "Découvrez les principales tendances en matière de cybersécurité qui façonneront le paysage numérique en 2023 et comment vous préparer.",
    content: "Contenu complet de l'article sur les tendances en cybersécurité...",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    category: "Cybersécurité",
    author: "Jean Dupont",
    date: "15 juillet 2023",
    readTime: 7
  },
  {
    id: 2,
    title: "Comment moderniser votre infrastructure IT avec le cloud",
    slug: "moderniser-infrastructure-cloud",
    excerpt: "La migration vers le cloud offre de nombreux avantages pour les entreprises. Voici comment planifier et exécuter cette transition efficacement.",
    content: "Contenu complet de l'article sur la modernisation de l'infrastructure IT...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    category: "Cloud",
    author: "Sophie Martin",
    date: "2 août 2023",
    readTime: 5
  },
  {
    id: 3,
    title: "Les avantages de l'automatisation des processus métier",
    slug: "avantages-automatisation-processus",
    excerpt: "L'automatisation des processus peut considérablement améliorer l'efficacité et réduire les coûts. Découvrez comment l'implémenter dans votre entreprise.",
    content: "Contenu complet de l'article sur l'automatisation des processus métier...",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    category: "Automatisation",
    author: "Pierre Leroy",
    date: "18 septembre 2023",
    readTime: 6
  },
  {
    id: 4,
    title: "Développement d'applications mobiles: natif vs cross-platform",
    slug: "developpement-applications-mobiles-natif-crossplatform",
    excerpt: "Analyse comparative des approches de développement d'applications mobiles et comment choisir la meilleure solution pour votre projet.",
    content: "Contenu complet de l'article sur le développement d'applications mobiles...",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    category: "Développement",
    author: "Marie Dubois",
    date: "5 octobre 2023",
    readTime: 8
  },
  {
    id: 5,
    title: "Comment préparer votre entreprise à l'ère de l'IA",
    slug: "preparer-entreprise-ere-ia",
    excerpt: "L'intelligence artificielle transforme les entreprises. Voici les étapes clés pour intégrer l'IA dans votre stratégie et vos opérations.",
    content: "Contenu complet de l'article sur la préparation à l'ère de l'IA...",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
    category: "Intelligence Artificielle",
    author: "Thomas Bernard",
    date: "22 novembre 2023",
    readTime: 9
  },
  {
    id: 6,
    title: "Sécuriser efficacement le télétravail: guide complet",
    slug: "securiser-teletravail-guide-complet",
    excerpt: "Le télétravail présente des défis uniques en matière de sécurité. Découvrez comment protéger vos données et vos employés à distance.",
    content: "Contenu complet de l'article sur la sécurisation du télétravail...",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    category: "Télétravail",
    author: "Claire Fournier",
    date: "10 décembre 2023",
    readTime: 7
  }
];
