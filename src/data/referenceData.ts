
export interface Reference {
  id: string;
  name: string;
  sector: string;
  description: string;
  url: string;
  categoryId: string;
}

export interface ReferenceCategory {
  id: string;
  name: string;
}

export interface PartnerLogo {
  name: string;
  image: string;
}

export const referenceCategories: ReferenceCategory[] = [
  {
    id: "websites",
    name: "Création de sites internet"
  },
  {
    id: "seo",
    name: "Référencement"
  },
  {
    id: "booking",
    name: "Prise de RDV en ligne"
  }
];

export const referenceData: Reference[] = [
  {
    id: "nature-interieur",
    name: "Nature d'intérieur",
    sector: "Paysagistes",
    description: "Paysagistes renommés dans la région Nord-Pas-de-Calais, Nature d'intérieur compte de nombreux clients fidèles parmi les entreprises et les collectivités. Proposant la vente et la location de plantes d'intérieur, Nature d'intérieur apporte une touche de bien-être à vos bureaux ou lieux publics.",
    url: "https://naturedinterieur.com",
    categoryId: "websites"
  },
  {
    id: "poissonnerie-michelet",
    name: "Poissonnerie Michelet",
    sector: "Poissonnerie",
    description: "La Poissonnerie Michelet vous accueille tous les jours dans leurs différents points de vente pour vous proposer une grande variété de produits de la mer.",
    url: "https://poissonnerie-fred-michelet.fr",
    categoryId: "websites"
  },
  {
    id: "garage-martin",
    name: "Garage Martin",
    sector: "Automobile",
    description: "Le Garage Martin est spécialisé dans la réparation et l'entretien de véhicules toutes marques. Avec plus de 20 ans d'expérience, notre équipe de mécaniciens qualifiés offre un service personnalisé et de qualité.",
    url: "https://garage-martin.fr",
    categoryId: "seo"
  },
  {
    id: "salon-beaute",
    name: "Salon Belle & Zen",
    sector: "Beauté & Bien-être",
    description: "Notre salon de beauté propose une gamme complète de soins esthétiques et de bien-être. Dans un cadre relaxant, nos professionnels vous accueillent pour des moments de détente absolue.",
    url: "https://belle-et-zen.fr",
    categoryId: "booking"
  },
  {
    id: "boulangerie-dupain",
    name: "Boulangerie Dupain",
    sector: "Boulangerie-Pâtisserie",
    description: "Artisan boulanger depuis trois générations, la Boulangerie Dupain propose des pains traditionnels, des viennoiseries et des pâtisseries faits maison avec des ingrédients de qualité et un savoir-faire authentique.",
    url: "https://boulangerie-dupain.fr",
    categoryId: "websites"
  },
  {
    id: "cabinet-juridique",
    name: "Cabinet Martin & Associés",
    sector: "Services juridiques",
    description: "Cabinet d'avocats spécialisé en droit des affaires, droit immobilier et droit de la famille. Notre équipe d'experts vous accompagne dans toutes vos démarches juridiques avec professionnalisme et confidentialité.",
    url: "https://martin-associes-avocats.fr",
    categoryId: "seo"
  },
  {
    id: "restaurant-saveurs",
    name: "Restaurant Les Saveurs",
    sector: "Restauration",
    description: "Restaurant gastronomique proposant une cuisine créative à base de produits frais et locaux. Notre chef revisite les plats traditionnels avec une touche de modernité pour une expérience culinaire unique.",
    url: "https://restaurant-les-saveurs.fr",
    categoryId: "booking"
  },
  {
    id: "agence-immo",
    name: "Agence Immobilière Centrale",
    sector: "Immobilier",
    description: "Spécialiste de l'immobilier dans votre région depuis plus de 15 ans. Notre équipe vous accompagne dans tous vos projets immobiliers : achat, vente, location et gestion de biens.",
    url: "https://agence-immobiliere-centrale.fr",
    categoryId: "websites"
  },
  {
    id: "fleuriste-petales",
    name: "Fleuriste Les Pétales",
    sector: "Fleuriste",
    description: "Artisan fleuriste passionné proposant des compositions florales pour toutes les occasions. Nos créations uniques sauront embellir vos événements et apporter une touche de nature à votre intérieur.",
    url: "https://fleuriste-les-petales.fr",
    categoryId: "seo"
  }
];

export const partnerLogos: PartnerLogo[] = [
  {
    name: "Entreprise A",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+A"
  },
  {
    name: "Entreprise B",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+B"
  },
  {
    name: "Entreprise C",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+C"
  },
  {
    name: "Entreprise D",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+D"
  },
  {
    name: "Entreprise E",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+E"
  },
  {
    name: "Entreprise F",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+F"
  },
  {
    name: "Entreprise G",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+G"
  },
  {
    name: "Entreprise H",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+H"
  },
  {
    name: "Entreprise I",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+I"
  },
  {
    name: "Entreprise J",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+J"
  },
  {
    name: "Entreprise K",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+K"
  },
  {
    name: "Entreprise L",
    image: "https://placehold.co/200x100/e2e8f0/1e3a8a?text=Logo+L"
  }
];
