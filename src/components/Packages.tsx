
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight, UserRound, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const PackageItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2 mb-4">
    <Check size={18} className="text-green-600 mt-0.5 shrink-0" />
    <span className="text-darkblue-800">{children}</span>
  </div>
);

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <Card className="border-2 border-darkblue-100">
              <CardHeader className="text-center bg-gradient-to-r from-darkblue-50 to-darkblue-100 rounded-t-lg pb-8">
                <div className="px-3 py-1 bg-white text-darkblue-900 rounded-full inline-block mb-2 font-medium">Pack Essentiel</div>
                <CardTitle className="text-3xl font-bold text-darkblue-900">Pour les Artisans</CardTitle>
                <CardDescription className="text-darkblue-700">Solution complète pour développer votre activité</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <PackageItem>
                      <span className="font-medium">Création d'un site web responsive design</span>
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Quote by Linkeo :</span> Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Fiche d'établissement Google :</span> Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Deliver by Linkeo :</span> E-boutique (Click & Collect), paiement en ligne, statistiques d'activité.
                    </PackageItem>
                  </div>
                  <div>
                    <PackageItem>
                      <span className="font-medium">E-réputation :</span> Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Booster SEO :</span> Rédaction de 30 landing pages, inscriptions annuaires, articles de blog.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Achat d'espace :</span> Sélection des mots clés, création et optimisation des annonces, suivi des budgets.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Service et accompagnement :</span> Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking.
                    </PackageItem>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Button variant="secondary" size="lg" className="group font-medium">
                  Demander un devis
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="commercants" className="pt-4">
            <Card className="border-2 border-darkblue-100">
              <CardHeader className="text-center bg-gradient-to-r from-darkblue-50 to-darkblue-100 rounded-t-lg pb-8">
                <div className="px-3 py-1 bg-white text-darkblue-900 rounded-full inline-block mb-2 font-medium">Pack Essentiel</div>
                <CardTitle className="text-3xl font-bold text-darkblue-900">Pour les Commerçants</CardTitle>
                <CardDescription className="text-darkblue-700">Solution complète pour développer votre commerce</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <PackageItem>
                      <span className="font-medium">Création d'un site web responsive design</span>
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Fiche d'établissement Google :</span> Création et administration de la fiche GMB, intégration de logo et photos, QR Code pour avis, animation trimestrielle, campagnes de collecte d'avis.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Deliver by Linkeo :</span> E-boutique (Click & Collect), paiement en ligne, statistiques d'activité.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">E-réputation :</span> Audit, publication hebdomadaire, newsletter, modération des avis, rapports mensuels, expert dédié.
                    </PackageItem>
                  </div>
                  <div>
                    <PackageItem>
                      <span className="font-medium">Quote by Linkeo :</span> Formulaire de devis en ligne, outil devis/facturation, bibliothèque de prix et produits, base de données clients, intégration GMB et réseaux sociaux.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Booster SEO :</span> Rédaction de 30 landing pages, inscriptions annuaires, articles de blog.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Achat d'espace :</span> Sélection des mots clés, création et optimisation des annonces, suivi des budgets.
                    </PackageItem>
                    <PackageItem>
                      <span className="font-medium">Service et accompagnement :</span> Suivi annuel, optimisation SEM, rapports SEA, accès au service client, hébergement, interface administrateur, modifications du site, call tracking.
                    </PackageItem>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Button variant="secondary" size="lg" className="group font-medium">
                  Demander un devis
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Packages;
