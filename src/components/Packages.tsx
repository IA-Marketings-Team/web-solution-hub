
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight, Bookmark, ShoppingBag, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

// Feature list item component
const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2 mb-3">
    <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
    <span className="text-darkblue-800 text-sm">{children}</span>
  </div>
);

// Package card component with more visual design matching the example
const PackageCard = ({ 
  type,
  title,
  price,
  setupFee,
  features,
  image,
  isPrimary = false,
}) => {
  const bgColor = isPrimary 
    ? "bg-darkblue-600" 
    : "bg-white border border-darkblue-100";
  
  const textColor = isPrimary ? "text-white" : "text-darkblue-900";
  
  return (
    <Card className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${bgColor}`}>
      {/* Card image section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-darkblue-600 hover:bg-darkblue-700">
            Nos packs
          </Badge>
          <Badge className="ml-2 bg-darkblue-500 hover:bg-darkblue-600">
            {type}
          </Badge>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <Bookmark size={20} className={isPrimary ? "text-white" : "text-darkblue-600"} />
          <span className={`ml-2 font-semibold text-lg ${textColor}`}>{title}</span>
        </div>
        
        <div className="mb-5">
          <div className="text-sm text-darkblue-400">à partir de</div>
          <div className={`text-3xl font-bold ${textColor}`}>
            {price}€ <span className="text-base font-normal">HT/mois</span>
          </div>
          <div className={`text-sm ${isPrimary ? "text-darkblue-200" : "text-darkblue-500"}`}>
            {setupFee}€ ht de Frais de création
          </div>
        </div>
        
        <div className="space-y-1">
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </div>
        
        <div className="mt-6">
          <Button 
            className={`w-full group ${isPrimary ? "" : "bg-red-600 hover:bg-red-700"}`}
          >
            Je me lance !
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Artisan package data
  const artisanPackage = {
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
  const commercantPackage = {
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

  return (
    <section className="py-20 bg-gray-50" id="packages">
      <div className="container px-4 md:px-6">
        <div 
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{ 
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-100 text-darkblue-900 mb-4">
            Nos offres
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 tracking-tight mb-4">
            Des solutions adaptées à votre activité
          </h2>
          <p className="text-xl text-darkblue-700/80">
            Découvrez nos packs essentiels pour les artisans et commerçants.
          </p>
        </div>

        <Tabs defaultValue="artisans" className="w-full mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
            <TabsTrigger value="artisans" className="flex items-center gap-2 py-3">
              <UserRound size={18} />
              <span>Artisans</span>
            </TabsTrigger>
            <TabsTrigger value="commercants" className="flex items-center gap-2 py-3">
              <ShoppingBag size={18} />
              <span>Commerçants</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="artisans" className="pt-4">
            <div className="max-w-xl mx-auto">
              <PackageCard {...artisanPackage} />
            </div>
          </TabsContent>
          
          <TabsContent value="commercants" className="pt-4">
            <div className="max-w-xl mx-auto">
              <PackageCard {...commercantPackage} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Packages;
