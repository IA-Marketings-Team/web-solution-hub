
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-float">
                    <svg width="520" height="390" viewBox="0 0 520 390" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <rect x="40" y="20" width="440" height="280" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2"/>
                      <rect x="60" y="50" width="400" height="40" rx="6" fill="#EEF2FF"/>
                      <rect x="80" y="65" width="100" height="10" rx="2" fill="#4F46E5" fillOpacity="0.3"/>
                      <rect x="200" y="65" width="80" height="10" rx="2" fill="#4F46E5" fillOpacity="0.3"/>
                      <rect x="300" y="65" width="60" height="10" rx="2" fill="#4F46E5" fillOpacity="0.3"/>
                      <rect x="380" y="65" width="60" height="10" rx="2" fill="#E11D48" fillOpacity="0.8"/>
                      <rect x="60" y="110" width="190" height="160" rx="6" fill="#F1F5F9"/>
                      <rect x="80" y="130" width="140" height="10" rx="2" fill="#0F172A"/>
                      <rect x="80" y="150" width="100" height="8" rx="2" fill="#64748B"/>
                      <rect x="80" y="166" width="120" height="8" rx="2" fill="#64748B"/>
                      <rect x="80" y="182" width="90" height="8" rx="2" fill="#64748B"/>
                      <rect x="80" y="210" width="80" height="30" rx="4" fill="#E11D48"/>
                      <rect x="270" y="110" width="190" height="160" rx="6" fill="#F1F5F9"/>
                      <rect x="290" y="130" width="140" height="10" rx="2" fill="#0F172A"/>
                      <rect x="290" y="150" width="100" height="8" rx="2" fill="#64748B"/>
                      <rect x="290" y="166" width="120" height="8" rx="2" fill="#64748B"/>
                      <rect x="290" y="182" width="90" height="8" rx="2" fill="#64748B"/>
                      <rect x="290" y="210" width="80" height="30" rx="4" fill="#1E40AF"/>
                      <rect x="0" y="310" width="520" height="80" rx="8" fill="#1E40AF"/>
                      <rect x="40" y="340" width="80" height="10" rx="2" fill="white" fillOpacity="0.8"/>
                      <rect x="150" y="340" width="60" height="10" rx="2" fill="white" fillOpacity="0.6"/>
                      <rect x="240" y="340" width="70" height="10" rx="2" fill="white" fillOpacity="0.6"/>
                      <rect x="340" y="340" width="50" height="10" rx="2" fill="white" fillOpacity="0.6"/>
                      <rect x="420" y="340" width="60" height="10" rx="2" fill="white" fillOpacity="0.6"/>
                    </svg>
                  </div>
                </div>
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
