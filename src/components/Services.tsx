
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  BarChart3, 
  Search, 
  MapPin, 
  Users, 
  Camera, 
  Star, 
  Award, 
  Bookmark, 
  ArrowRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const ServiceCard = ({ icon, title, description, delay, className }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "relative rounded-2xl p-6 hover-lift transition-all bg-white border border-gray-100 shadow-sm",
        className,
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: `${delay}ms`, 
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="rounded-xl bg-red-50 p-3 text-red-600 w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-darkblue-900 mb-3">{title}</h3>
        <p className="text-darkblue-700/80 mb-5 flex-grow">{description}</p>
        <Link 
          to="/expertise" 
          className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 hover-slide-right group"
        >
          En savoir plus
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

interface KeyMetricProps {
  value: string;
  label: string;
  delay: number;
}

const KeyMetric = ({ value, label, delay }: KeyMetricProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col items-center text-center p-6",
        inView ? "opacity-100" : "opacity-0 scale-95"
      )}
      style={{ 
        transitionDelay: `${delay}ms`, 
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <span className="text-4xl md:text-5xl font-bold text-darkblue-900 mb-2">{value}</span>
      <span className="text-darkblue-700/80 text-sm md:text-base">{label}</span>
    </div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const serviceCards = [
    {
      icon: <Globe size={24} />,
      title: "Création de site internet",
      description: "Des sites web modernes, responsives et optimisés pour convertir vos visiteurs en clients.",
      delay: 100
    },
    {
      icon: <Search size={24} />,
      title: "Référencement (SEO/SEA)",
      description: "Améliorez votre visibilité en ligne et attirez plus de clients grâce à nos stratégies SEO et SEA.",
      delay: 200
    },
    {
      icon: <MapPin size={24} />,
      title: "Google My Business",
      description: "Optimisez votre présence locale et apparaissez sur Google Maps pour attirer des clients près de chez vous.",
      delay: 300
    },
    {
      icon: <BarChart3 size={24} />,
      title: "E-réputation",
      description: "Construisez et maintenez une image positive en ligne avec notre gestion de la e-réputation.",
      delay: 400
    },
    {
      icon: <Users size={24} />,
      title: "Community Management",
      description: "Engagez votre audience sur les réseaux sociaux avec notre service de gestion de communauté.",
      delay: 500
    },
    {
      icon: <Camera size={24} />,
      title: "Photos et Vidéos",
      description: "Mettez en valeur votre activité avec nos services de création de contenu visuel professionnel.",
      delay: 600
    }
  ];

  const keyMetrics = [
    { value: "20+", label: "Années d'expérience", delay: 200 },
    { value: "50+", label: "Agences locales", delay: 300 },
    { value: "20k+", label: "Sites web créés", delay: 400 },
    { value: "96%", label: "Clients satisfaits", delay: 500 }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Nos expertises
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue-900 tracking-tight mb-4">
            Des solutions adaptées à vos besoins
          </h2>
          <p className="text-xl text-darkblue-700/80">
            Nous vous accompagnons dans votre transformation digitale avec des services sur mesure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
            />
          ))}
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {keyMetrics.map((metric, index) => (
              <KeyMetric
                key={index}
                value={metric.value}
                label={metric.label}
                delay={metric.delay}
              />
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div 
          className={cn(
            "max-w-3xl mx-auto text-center",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{ 
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '300ms'
          }}
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star size={20} className="text-red-600" />
            <h3 className="text-lg font-semibold text-darkblue-900">Certifications & Partenariats</h3>
            <Star size={20} className="text-red-600" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <div className="flex items-center space-x-2 text-darkblue-900 font-semibold">
              <Award size={24} />
              <span>Partenaire Google</span>
            </div>
            <div className="flex items-center space-x-2 text-darkblue-900 font-semibold">
              <Bookmark size={24} />
              <span>Facebook Partner</span>
            </div>
            <div className="flex items-center space-x-2 text-darkblue-900 font-semibold">
              <Award size={24} />
              <span>Microsoft Advertising</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
