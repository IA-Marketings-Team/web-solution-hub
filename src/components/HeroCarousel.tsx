
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroCarouselProps {
  className?: string;
}

const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1500&h=800",
    tag: "Solutions digitales pour professionnels",
    title: "Des solutions numériques <span class='text-red-500'>clés en main</span> pour booster votre activité.",
    description: "Nous accompagnons les professionnels et TPE/PME dans leur transformation digitale avec des solutions simples et efficaces."
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1500&h=800",
    tag: "Développement Web",
    title: "Sites internet <span class='text-red-500'>performants</span> et adaptés à votre métier",
    description: "Des sites web professionnels, optimisés pour le référencement et adaptés aux besoins de votre entreprise."
  },
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1500&h=800",
    tag: "Applications sur mesure",
    title: "Applications <span class='text-red-500'>personnalisées</span> pour votre métier",
    description: "Développement d'applications spécifiques pour simplifier vos processus et augmenter votre productivité."
  },
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1500&h=800",
    tag: "Marketing digital",
    title: "Stratégies <span class='text-red-500'>digitales</span> pour développer votre présence en ligne",
    description: "Des solutions de marketing digital pour améliorer votre visibilité et attirer de nouveaux clients."
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1500&h=800",
    tag: "Support technique",
    title: "Assistance et <span class='text-red-500'>maintenance</span> à votre service",
    description: "Un support technique réactif et des solutions de maintenance pour assurer la continuité de vos services numériques."
  }
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    
    // Auto advance slides
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      api.off("select", handleSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <Carousel className="w-full h-full" setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className={cn(
                  "w-full h-full transition-opacity duration-1000", 
                  index === currentSlide ? "opacity-100" : "opacity-0"
                )}
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0 bg-darkblue-900/70 z-10"></div>
                <img 
                  src={slide.image} 
                  alt={`Background ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                
                {/* Slide Content */}
                <div className="absolute inset-0 z-20">
                  <div className="container px-4 md:px-6 h-full flex items-center">
                    <div className="max-w-[640px] space-y-5">
                      <div className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-50/90 text-darkblue-900 backdrop-blur-sm opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                        {slide.tag}
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <p className="text-lg text-white/90 max-w-[600px] opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                        {slide.description}
                      </p>
                      <div className="flex gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
                        <Link 
                          to="/expertise" 
                          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
                        >
                          En savoir plus
                          <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation buttons */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          <button 
            onClick={() => api?.scrollPrev()} 
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => api?.scrollNext()} 
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentSlide 
                  ? "bg-white w-6" 
                  : "bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
