import React from "react";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  business: string;
  project: string;
  comment: string;
  rating: number;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    business: "Boulangerie La Mie Dorée",
    project: "Création de site web et optimisation Google",
    comment:
      "Depuis que j'ai fait appel à i-numera pour mon site et ma présence Google, j'ai vu une augmentation significative du nombre de clients. Je recommande vivement leurs services !",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "15/04/2023",
  },
  {
    id: 2,
    business: "Salon de Coiffure Style & Beauté",
    project: "Visibilité Google et site web",
    comment:
      "Un service client exceptionnel et des résultats concrets. Mon salon est maintenant visible sur Google et j'ai de nouveaux clients chaque semaine grâce à mon site web.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "22/05/2023",
  },
  {
    id: 3,
    business: "Garage Auto Prestige",
    project: "Création de site web et référencement local",
    comment:
      "i-numera a créé un site qui représente parfaitement mon activité. Le référencement local fonctionne à merveille et mes clients me trouvent facilement. Excellent travail !",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    date: "08/03/2023",
  },
  {
    id: 4,
    business: "Fleuriste Les Pétales",
    project: "Positionnement Google et site web",
    comment:
      "Grâce à i-numera, ma boutique est bien positionnée sur Google. Le site est magnifique et répond parfaitement à mes attentes. Je suis très satisfaite de leur service.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    date: "30/01/2023",
  },
  {
    id: 5,
    business: "Restaurant Le Gourmet",
    project: "Gestion de e-réputation",
    comment:
      "La gestion de ma e-réputation par i-numera est un vrai plus pour mon restaurant. Les avis positifs sont mis en avant et mon taux de réservation a augmenté.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    date: "12/02/2023",
  },
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
        "flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover-lift transition-all mr-6",
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{
        transitionProperty: "all",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        minWidth: "300px",
        maxWidth: "350px",
      }}
    >
      <div
        className="flex items-center space-x-1 mb-2"
        style={{ userSelect: "none" }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < testimonial.rating
                ? "text-red-500 fill-red-500"
                : "text-gray-300"
            }
          />
        ))}
      </div>
      <p
        className="text-darkblue-800 mb-6 italic flex-grow"
        style={{ userSelect: "none" }}
      >
        "{testimonial.comment}"
      </p>
      <div className="flex items-center mt-auto" style={{ userSelect: "none" }}>
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
          <img
            src={testimonial.image}
            alt={testimonial.business}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-darkblue-900">{testimonial.business}</p>
          <p className="text-sm text-darkblue-700">{testimonial.project}</p>
        </div>
        <div className="ml-auto text-xs text-darkblue-500">
          {testimonial.date}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Multiply testimonials for continuous scrolling effect
  const multipliedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Textured Background Pattern */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="testimonials-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#1A1F2C" strokeWidth="1"/>
                <circle cx="20" cy="20" r="2" fill="#F44336" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonials-pattern)" />
          </svg>
        </div>
        <div className="absolute -top-[20%] -right-[30%] h-[70%] w-[70%] rounded-full bg-red-500/20 blur-[100px]" />
        <div className="absolute -bottom-[30%] -left-[30%] h-[70%] w-[70%] rounded-full bg-darkblue-500/20 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{
            transition: "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)",
            userSelect: "none",
          }}
        >
          <div className="inline-block rounded-full px-3 py-1 text-sm bg-red-100 text-red-800 mb-4">
            Témoignages clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 tracking-tight mb-4">
            Nos clients parlent de nous
          </h2>
          <p className="text-xl text-darkblue-700/80">
            Découvrez ce que nos clients pensent de nos services et de notre
            accompagnement.
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{ height: "400px" }}
        >
          <div className="absolute w-full">
            <div className="flex overflow-hidden">
              <div
                className="animate-marquee-horizontal flex"
                style={{
                  animationDuration: "10s",
                }}
              >
                {multipliedTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`scroll1-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
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
