
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  comment: string;
  rating: number;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jean Dupont",
    business: "Boulangerie La Mie Dorée",
    comment: "Depuis que j'ai fait appel à Linkeo pour mon site et ma présence Google, j'ai vu une augmentation significative du nombre de clients. Je recommande vivement leurs services !",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "15/04/2023"
  },
  {
    id: 2,
    name: "Marie Laurent",
    business: "Salon de Coiffure Style & Beauté",
    comment: "Un service client exceptionnel et des résultats concrets. Mon salon est maintenant visible sur Google et j'ai de nouveaux clients chaque semaine grâce à mon site web.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "22/05/2023"
  },
  {
    id: 3,
    name: "Thomas Moreau",
    business: "Garage Auto Prestige",
    comment: "Linkeo a créé un site qui représente parfaitement mon activité. Le référencement local fonctionne à merveille et mes clients me trouvent facilement. Excellent travail !",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    date: "08/03/2023"
  },
  {
    id: 4,
    name: "Sophie Dubois",
    business: "Fleuriste Les Pétales",
    comment: "Grâce à Linkeo, ma boutique est bien positionnée sur Google. Le site est magnifique et répond parfaitement à mes attentes. Je suis très satisfaite de leur service.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    date: "30/01/2023"
  },
  {
    id: 5,
    name: "Pierre Martin",
    business: "Restaurant Le Gourmet",
    comment: "La gestion de ma e-réputation par Linkeo est un vrai plus pour mon restaurant. Les avis positifs sont mis en avant et mon taux de réservation a augmenté.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    date: "12/02/2023"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover-lift transition-all mb-6",
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <div className="flex items-center space-x-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? "text-red-500 fill-red-500" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-darkblue-800 mb-6 italic flex-grow">"{testimonial.comment}"</p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-darkblue-900">{testimonial.name}</p>
          <p className="text-sm text-darkblue-700">{testimonial.business}</p>
        </div>
        <div className="ml-auto text-xs text-darkblue-500">{testimonial.date}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Double the testimonials for continuous scrolling effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20">
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
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-red-100 text-red-800 mb-4">
            Témoignages clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 tracking-tight mb-4">
            Nos clients parlent de nous
          </h2>
          <p className="text-xl text-darkblue-700/80">
            Découvrez ce que nos clients pensent de nos services et de notre accompagnement.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto flex overflow-hidden" style={{ height: "600px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 absolute w-full">
            <div className="flex flex-col h-full overflow-hidden">
              <div className="vertical-scroll w-full animate-marquee-vertical">
                {duplicatedTestimonials.slice(0, testimonials.length + 2).map((testimonial) => (
                  <TestimonialCard key={`scroll1-${testimonial.id}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
            
            <div className="hidden lg:flex lg:flex-col h-full overflow-hidden">
              <div className="vertical-scroll w-full animate-marquee-vertical-delayed">
                {duplicatedTestimonials.slice(testimonials.length - 2).map((testimonial) => (
                  <TestimonialCard key={`scroll2-${testimonial.id}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
