
import { PackageData } from "./types/packageData";

// Artisan package data
export const artisanPackage: PackageData = {
  type: "Artisans",
  title: "Essentiel",
  price: "255",
  setupFee: "1380",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800", 
  features: [
    "Création d'un site web responsive design",
    "Citation de i-numera : Formulaire de devis en ligne, outil de création de devis et facturation, catalogue de prix et produits, gestion des données clients, intégration à Google My Business et aux réseaux sociaux",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Proposition d'i-numera : Boutique en ligne (Click & Collect), paiements en ligne, analyse des statistiques d'activité.",
    "Gestion de la réputation en ligne : Audit, publications hebdomadaires, newsletters, modération des avis, rapports mensuels, expert dédié.",
    "Optimisation SEO : Rédaction de 30 pages de destination, inscriptions dans des annuaires, rédaction d'articles de blog.",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: true,
  hasPremium: true,
  premiumFeatures: [
    "i-mailx : Messagerie professionnelle, signature personnalisée, calendrier partagé",
    "Suivi-expert : Accompagnement personnalisé par un expert dédié, rapports mensuels, optimisation continue"
  ]
};

// Commercants package data
export const commercantPackage: PackageData = {
  type: "Commerçants",
  title: "Essentiel",
  price: "295",
  setupFee: "1480",
  image: "https://plus.unsplash.com/premium_photo-1661721852953-3da7e4fa15d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  features: [
    "Création d'un site web responsive design",
    "Citation de i-numera : Formulaire de devis en ligne, outil de création de devis et facturation, catalogue de prix et produits, gestion des données clients, intégration à Google My Business et aux réseaux sociaux",
    "Fiche d'établissement Google : Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis",
    "Proposition d'i-numera : Boutique en ligne (Click & Collect), paiements en ligne, analyse des statistiques d'activité.",
    "Gestion de la réputation en ligne : Audit, publications hebdomadaires, newsletters, modération des avis, rapports mensuels, expert dédié.",
    "Optimisation SEO : Rédaction de 30 pages de destination, inscriptions dans des annuaires, rédaction d'articles de blog.",
    "Achat d'espace : Sélection des mots clés, création et optimisation des annonces, suivi des budgets",
    "Service et accompagnement : Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking"
  ],
  isPrimary: false,
  hasPremium: true,
  premiumFeatures: [
    "i-mailx : Messagerie professionnelle, signature personnalisée, calendrier partagé",
    "Suivi-expert : Accompagnement personnalisé par un expert dédié, rapports mensuels, optimisation continue"
  ]
};
