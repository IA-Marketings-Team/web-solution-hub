
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import PackageCard from './PackageCard';
import { artisanPackage, commercantPackage } from '@/data/packageData';

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
