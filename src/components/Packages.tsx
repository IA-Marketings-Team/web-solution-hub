
import React, { useState } from 'react';
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
  isExpert = false,
  isPremium = false,
}) => {
  const bgColor = isExpert 
    ? "bg-darkblue-600" 
    : isPremium 
      ? "bg-white border-2 border-darkblue-200" 
      : "bg-white border border-darkblue-100";
  
  const textColor = isExpert ? "text-white" : "text-darkblue-900";
  
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
          <Bookmark size={20} className={isExpert ? "text-white" : "text-darkblue-600"} />
          <span className={`ml-2 font-semibold text-lg ${textColor}`}>{title}</span>
        </div>
        
        <div className="mb-5">
          <div className="text-sm text-darkblue-400">à partir de</div>
          <div className={`text-3xl font-bold ${textColor}`}>
            {price}€ <span className="text-base font-normal">HT/mois</span>
          </div>
          <div className={`text-sm ${isExpert ? "text-darkblue-200" : "text-darkblue-500"}`}>
            {setupFee}€ ht de Frais de création
          </div>
        </div>
        
        {isExpert || isPremium ? (
          <div className={`mb-3 font-medium ${textColor}`}>
            {isExpert ? "Tout Essentiel +" : "Tout Expert +"}
          </div>
        ) : null}
        
        <div className="space-y-1">
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </div>
        
        <div className="mt-6">
          <Button 
            className={`w-full group ${isExpert ? "" : "bg-red-600 hover:bg-red-700"}`}
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

  // Artisan packages data
  const artisanPackages = [
    {
      type: "Artisans",
      title: "Essentiel",
      price: "255",
      setupFee: "1850",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800",
      features: [
        "Création d'un site web responsive design",
        "Quote by Linkeo",
        "Fiche d'établissement Google",
        "Booster SEO",
        "Achat d'espace",
        "Service et accompagnement"
      ],
      isExpert: false,
      isPremium: false
    },
    {
      type: "Artisans",
      title: "Expert",
      price: "357",
      setupFee: "2499",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
      features: [
        "Tout Essentiel +",
        "Photos et vidéo professionnelles"
      ],
      isExpert: true,
      isPremium: false
    },
    {
      type: "Artisans",
      title: "Premium",
      price: "561",
      setupFee: "2580",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
      features: [
        "Tout Expert +",
        "E-réputation",
        "Suivi Expert"
      ],
      isExpert: false,
      isPremium: true
    }
  ];

  // Commercants packages data
  const commercantsPackages = [
    {
      type: "Commerçants",
      title: "Essentiel",
      price: "252",
      setupFee: "840",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
      features: [
        "Création d'un site web responsive design",
        "Fiche d'établissement Google",
        "Deliver by Linkeo",
        "E-réputation",
        "Service et accompagnement"
      ],
      isExpert: false,
      isPremium: false
    },
    {
      type: "Commerçants",
      title: "Expert",
      price: "507",
      setupFee: "2580",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800",
      features: [
        "Tout Essentiel +",
        "Achat d'espace",
        "Booster SEO",
        "Photos et vidéo professionnelles"
      ],
      isExpert: true,
      isPremium: false
    },
    {
      type: "Commerçants",
      title: "Premium",
      price: "561",
      setupFee: "2580",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
      features: [
        "Tout Expert +",
        "Suivi Expert"
      ],
      isExpert: false,
      isPremium: true
    }
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artisanPackages.map((pkg, index) => (
                <PackageCard 
                  key={`artisan-${index}`}
                  {...pkg}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="commercants" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commercantsPackages.map((pkg, index) => (
                <PackageCard 
                  key={`commercant-${index}`}
                  {...pkg}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Packages;
