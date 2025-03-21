
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
  price: "0",
  setupFee: "0",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800",
  features: [
    "Création d'un site web responsive design",
    "Quote by i-numera : Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Deliver by i-numera : E-boutique (Click & Collect), paiement en ligne, statistiques d'activité",
    "i-mailx : Messagerie professionnelle, signature personnalisée, calendrier partagé",
    "E-réputation : Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié",
    "Booster SEO : Rédaction de 30 landing pages, inscriptions annuaires, articles de blog",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: true
};

// Artisan Premier package
export const artisanPremierPackage: PackageData = {
  type: "Artisans",
  title: "Premier",
  price: "0",
  setupFee: "0",
  image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
  features: [
    "Création d'un site web responsive design",
    "Quote by i-numera : Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Deliver by i-numera : E-boutique (Click & Collect), paiement en ligne, statistiques d'activité",
    "i-mailx : Messagerie professionnelle, signature personnalisée, calendrier partagé",
    "Suivi Expert : Accompagnement personnalisé, conseils stratégiques, optimisation continue",
    "E-réputation : Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié",
    "Booster SEO : Rédaction de 30 landing pages, inscriptions annuaires, articles de blog",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: false
};

// Commercants package data
export const commercantPackage: PackageData = {
  type: "Commerçants",
  title: "Essentiel",
  price: "0",
  setupFee: "0",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
  features: [
    "Création d'un site web responsive design",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Deliver by i-numera : E-boutique (Click & Collect), paiement en ligne, statistiques d'activité",
    "i-mailx : Messagerie professionnelle, signature personnalisée, calendrier partagé",
    "E-réputation : Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié",
    "Quote by i-numera : Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux",
    "Booster SEO : Rédaction de 30 landing pages, inscriptions annuaires, articles de blog",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: false
};

// Commercant Premier package
export const commercantPremierPackage: PackageData = {
  type: "Commerçants",
  title: "Premier",
  price: "0",
  setupFee: "0",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
  features: [
    "Création d'un site web responsive design",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Deliver by i-numera : E-boutique (Click & Collect), paiement en ligne, statistiques d'activité",
    "i-mailx : Messagerie professionnelle, signature personnalisée, calendrier partagé",
    "Suivi Expert : Accompagnement personnalisé, conseils stratégiques, optimisation continue",
    "E-réputation : Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié",
    "Quote by i-numera : Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux",
    "Booster SEO : Rédaction de 30 landing pages, inscriptions annuaires, articles de blog",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: false
};
