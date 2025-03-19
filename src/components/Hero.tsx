
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute -top-[40%] -right-[40%] h-[80%] w-[80%] rounded-full bg-darkblue-500/30 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[20%] h-[60%] w-[60%] rounded-full bg-red-500/20 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <div className="space-y-5 max-w-[640px]">
              <div className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-50 text-darkblue-900 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Solutions digitales pour professionnels
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-darkblue-900 leading-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                Des solutions numériques <span className="text-red-600">clés en main</span> pour booster votre activité.
              </h1>
              <p className="text-xl text-darkblue-900/80 max-w-[600px] opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                Nous accompagnons les professionnels et TPE/PME dans leur transformation digitale avec des solutions simples et efficaces.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <Link 
                to="/expertise" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
              >
                Découvrez nos prestations
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/devis" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-darkblue-800 hover:bg-darkblue-900 transition-all font-medium hover:shadow-lg group"
              >
                Demander un devis
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative lg:pl-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-darkblue-50 to-darkblue-100 shadow-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* i-numeria logo above the woman's head */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/d5ddb599-d81f-489d-af1d-fb8f195df9b3.png" 
                      alt="i-numeria logo" 
                      className="w-12 h-auto"
                    />
                  </div>
                </div>
                
                {/* Photo of a different professional woman with glasses */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="Femme professionnelle souriante avec des lunettes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-500 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-darkblue-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
