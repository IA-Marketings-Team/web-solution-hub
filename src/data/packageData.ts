
export interface PackageData {
  type: string;
  title: string;
  price: string;
  setupFee: string;
  image: string;
  features: string[];
  isPrimary: boolean;
}

// Artisan package data
export const artisanPackage: PackageData = {
  type: "Artisans",
  title: "Essentiel",
  price: "255",
  setupFee: "1850",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800",
  features: [
    "Création d'un site web responsive design",
    "Quote by Linkeo : Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Deliver by Linkeo : E-boutique (Click & Collect), paiement en ligne, statistiques d'activité",
    "E-réputation : Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié",
    "Booster SEO : Rédaction de 30 landing pages, inscriptions annuaires, articles de blog",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: true
};

// Commercants package data
export const commercantPackage: PackageData = {
  type: "Commerçants",
  title: "Essentiel",
  price: "252",
  setupFee: "840",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
  features: [
    "Création d'un site web responsive design",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Deliver by Linkeo : E-boutique (Click & Collect), paiement en ligne, statistiques d'activité",
    "E-réputation : Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié",
    "Quote by Linkeo : Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux",
    "Booster SEO : Rédaction de 30 landing pages, inscriptions annuaires, articles de blog",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: false
};
