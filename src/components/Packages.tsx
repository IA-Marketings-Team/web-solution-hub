
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight, UserRound, ShoppingBag, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const PackageItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2 mb-4">
    <Check size={18} className="text-green-600 mt-0.5 shrink-0" />
    <span className="text-darkblue-800">{children}</span>
  </div>
);

const PackageCard = ({ 
  title, 
  description, 
  features, 
  highlight = false 
}: { 
  title: string; 
  description: string; 
  features: { title: string; description?: string }[]; 
  highlight?: boolean;
}) => (
  <Card className={cn(
    "border-2 transition-all duration-300 hover:shadow-lg",
    highlight ? "border-red-400 shadow-md" : "border-darkblue-100"
  )}>
    <CardHeader className={cn(
      "text-center rounded-t-lg pb-8",
      highlight 
        ? "bg-gradient-to-r from-red-50 to-red-100" 
        : "bg-gradient-to-r from-darkblue-50 to-darkblue-100"
    )}>
      {highlight && (
        <Badge className="mb-2 mx-auto bg-red-500 hover:bg-red-600">
          <Sparkles size={14} className="mr-1" /> Recommandé
        </Badge>
      )}
      <div className={cn(
        "px-3 py-1 bg-white rounded-full inline-block mb-2 font-medium",
        highlight ? "text-red-600" : "text-darkblue-900"
      )}>
        Pack Essentiel
      </div>
      <CardTitle className="text-3xl font-bold text-darkblue-900">{title}</CardTitle>
      <CardDescription className="text-darkblue-700">{description}</CardDescription>
    </CardHeader>
    <CardContent className="p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index}>
            <PackageItem>
              <span className="font-medium">{feature.title}</span>
              {feature.description && (
                <>: {feature.description}</>
              )}
            </PackageItem>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-center pb-8">
      <Button 
        variant={highlight ? "default" : "secondary"} 
        size="lg" 
        className={cn(
          "group font-medium",
          highlight ? "bg-red-600 hover:bg-red-700" : ""
        )}
      >
        Demander un devis
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Button>
    </CardFooter>
  </Card>
);

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const artisanFeatures = [
    { 
      title: "Création d'un site web responsive design" 
    },
    { 
      title: "Quote by Linkeo", 
      description: "Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux" 
    },
    { 
      title: "Fiche d'établissement Google", 
      description: "Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis" 
    },
    { 
      title: "Deliver by Linkeo", 
      description: "E-boutique (Click & Collect), paiement en ligne, statistiques d'activité" 
    },
    { 
      title: "E-réputation", 
      description: "Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié" 
    },
    { 
      title: "Booster SEO", 
      description: "Rédaction de 30 landing pages, inscriptions annuaires, articles de blog" 
    },
    { 
      title: "Achat d'espace", 
      description: "Sélection des mots clés, création et optimisation des annonces, suivi des budgets" 
    },
    { 
      title: "Service et accompagnement", 
      description: "Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking" 
    }
  ];

  const commercantsFeatures = [
    { 
      title: "Création d'un site web responsive design" 
    },
    { 
      title: "Fiche d'établissement Google", 
      description: "Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis" 
    },
    { 
      title: "Deliver by Linkeo", 
      description: "E-boutique (Click & Collect), paiement en ligne, statistiques d'activité" 
    },
    { 
      title: "E-réputation", 
      description: "Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié" 
    },
    { 
      title: "Quote by Linkeo", 
      description: "Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux" 
    },
    { 
      title: "Booster SEO", 
      description: "Rédaction de 30 landing pages, inscriptions annuaires, articles de blog" 
    },
    { 
      title: "Achat d'espace", 
      description: "Sélection des mots clés, création et optimisation des annonces, suivi des budgets" 
    },
    { 
      title: "Service et accompagnement", 
      description: "Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking" 
    }
  ];

  return (
    <section className="py-20 bg-white" id="packages">
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

        <Tabs defaultValue="artisans" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
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
            <PackageCard 
              title="Pour les Artisans" 
              description="Solution complète pour développer votre activité"
              features={artisanFeatures}
              highlight={true}
            />
          </TabsContent>
          
          <TabsContent value="commercants" className="pt-4">
            <PackageCard 
              title="Pour les Commerçants" 
              description="Solution complète pour développer votre commerce"
              features={commercantsFeatures}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Packages;
