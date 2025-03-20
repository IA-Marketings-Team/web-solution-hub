
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Search, 
  MapPin, 
  BarChart3, 
  Users, 
  Camera, 
  Smartphone,
  ShoppingCart,
  Mail,
  ArrowRight
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  delay: number;
}

const ExpertiseCard = ({ icon, title, description, features, delay }: ExpertiseCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover-lift transition-all",
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <div className="p-6 pb-0">
        <div className="rounded-xl bg-red-50 p-3 text-red-600 w-12 h-12 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-darkblue-900 mb-3">{title}</h3>
        <p className="text-darkblue-700/80 mb-6">{description}</p>
      </div>
      <div className="px-6 flex-grow">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-darkblue-700">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 mt-auto">
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-darkblue-900">0</span>
          <span className="text-sm text-darkblue-700 ml-2">HT/mois</span>
        </div>
        <Link
          to="/devis"
          className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
        >
          Je me lance !
          <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const Expertise = () => {
  const location = useLocation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const expertiseCards = [
    {
      icon: <Globe size={24} />,
      title: "Création de site internet",
      description: "Un site web professionnel et optimisé pour convertir vos visiteurs en clients.",
      features: [
        "Design moderne et responsive",
        "Optimisé pour le référencement",
        "CMS facile à utiliser",
        "Sécurisé et performant",
        "Adapté à tous les appareils"
      ],
      price: "0",
      delay: 100
    },
    {
      icon: <Search size={24} />,
      title: "Référencement (SEO)",
      description: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de clients.",
      features: [
        "Audit technique complet",
        "Optimisation on-page",
        "Création de contenu optimisé",
        "Suivi des positions",
        "Rapports mensuels détaillés"
      ],
      price: "0",
      delay: 200
    },
    {
      icon: <MapPin size={24} />,
      title: "Google My Business",
      description: "Optimisez votre présence locale et apparaissez sur Google Maps.",
      features: [
        "Création et optimisation de fiche",
        "Gestion des avis clients",
        "Publication de posts réguliers",
        "Mise à jour des informations",
        "Suivi des statistiques"
      ],
      price: "0",
      delay: 300
    },
    {
      icon: <BarChart3 size={24} />,
      title: "E-réputation",
      description: "Gérez et améliorez votre image en ligne pour gagner la confiance des clients.",
      features: [
        "Surveillance des mentions",
        "Gestion des avis négatifs",
        "Stratégie d'acquisition d'avis",
        "Présence sur les plateformes d'avis",
        "Rapports trimestriels"
      ],
      price: "0",
      delay: 400
    },
    {
      icon: <Users size={24} />,
      title: "Community Management",
      description: "Animez vos réseaux sociaux et développez votre communauté en ligne.",
      features: [
        "Stratégie de contenu personnalisée",
        "Publications régulières",
        "Modération des commentaires",
        "Analyse des performances",
        "Veille concurrentielle"
      ],
      price: "0",
      delay: 500
    },
    {
      icon: <Camera size={24} />,
      title: "Photos et Vidéos",
      description: "Mettez en valeur votre activité avec du contenu visuel professionnel.",
      features: [
        "Shooting photo professionnel",
        "Montage et retouche",
        "Vidéos promotionnelles",
        "Visite virtuelle 360°",
        "Optimisation pour le web"
      ],
      price: "0",
      delay: 600
    },
    {
      icon: <Smartphone size={24} />,
      title: "Application Mobile",
      description: "Développez votre présence mobile avec une application sur mesure.",
      features: [
        "Design intuitif et ergonomique",
        "Développement iOS et Android",
        "Intégration avec votre site web",
        "Maintenance et mises à jour",
        "Analyses et statistiques"
      ],
      price: "0",
      delay: 700
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce",
      description: "Vendez vos produits en ligne avec une boutique professionnelle et sécurisée.",
      features: [
        "Catalogue produits illimité",
        "Gestion des stocks",
        "Paiement sécurisé",
        "Expédition et logistique",
        "Tableau de bord détaillé"
      ],
      price: "0",
      delay: 800
    },
    {
      icon: <Mail size={24} />,
      title: "Email Marketing",
      description: "Communiquez efficacement avec vos clients et prospects par email.",
      features: [
        "Création de templates personnalisés",
        "Segmentation de votre audience",
        "Automatisation des campagnes",
        "Analyse des performances",
        "A/B testing"
      ],
      price: "0",
      delay: 900
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gray-50">
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
              <h1 className="text-3xl md:text-5xl font-bold text-darkblue-900 tracking-tight mb-6">
                Des solutions adaptées à chaque besoin
              </h1>
              <p className="text-xl text-darkblue-700/80">
                Découvrez notre gamme complète de services digitaux pour développer votre activité en ligne.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseCards.map((card, index) => (
                <ExpertiseCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  features={card.features}
                  price={card.price}
                  delay={card.delay}
                />
              ))}
            </div>
          </div>
        </section>

        <CallToAction variant="dark" />
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;
