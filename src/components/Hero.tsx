
import React from 'react';
import { cn } from '@/lib/utils';
import HeroCarousel from './HeroCarousel';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32", className)}>
      {/* Background Carousel Slider with content */}
      <HeroCarousel />
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 -z-5 opacity-10">
        <div className="absolute -top-[40%] -right-[40%] h-[80%] w-[80%] rounded-full bg-darkblue-500/30 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[20%] h-[60%] w-[60%] rounded-full bg-red-500/20 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Logo image section */}
          <div className="relative lg:pl-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-darkblue-50/90 to-darkblue-100/90 shadow-xl backdrop-blur-sm">
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* Only the new logo in center */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img 
                    src="/lovable-uploads/b3c33571-dd4d-4269-a516-f847893fdd7f.png" 
                    alt="i-numera logo" 
                    className="w-[1500px] max-w-[95%] h-auto drop-shadow-lg transform scale-110" 
                  />
                </div>
                
                {/* Professional smiling woman image with increased white overlay for better logo visibility */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-white/90 z-[5]"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                    alt="Femme professionnelle souriante avec des lunettes" 
                    className="w-full h-full object-cover opacity-30"
                  />
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
