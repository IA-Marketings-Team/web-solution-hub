
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
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
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-[#E5DEFF] text-[#7E69AB] mb-4">
            Nos offres
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 tracking-tight mb-4">
            Des solutions adaptées à votre activité
          </h2>
          <p className="text-xl text-darkblue-700/80">
            Découvrez nos packs essentiels pour les artisans et commerçants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className={cn(
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-100"
          )}>
            <PackageCard {...artisanPackage} />
          </div>
          <div className={cn(
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            "transition-all duration-700 delay-300"
          )}>
            <PackageCard {...commercantPackage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
