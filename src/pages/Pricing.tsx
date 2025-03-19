import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Search, 
  ShoppingCart,
  Users,
  Camera
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
}

interface PricingTabContentProps {
  plans: PricingPlan[];
}

const PricingTabContent: React.FC<PricingTabContentProps> = ({ plans }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
    >
      {plans.map((plan, index) => (
        <div
          key={index}
          className={cn(
            "relative flex flex-col rounded-2xl bg-white border shadow-sm transition-all duration-200 hover-lift overflow-hidden",
            plan.popular ? "border-red-200 shadow-md" : "border-gray-200",
            inView ? "opacity-100" : "opacity-0 translate-y-8"
          )}
          style={{ 
            transitionDelay: `${index * 150}ms`, 
            transitionProperty: 'all', 
            transitionDuration: '700ms', 
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
          }}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0">
              <div className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                Populaire
              </div>
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center mr-3",
                plan.popular ? "bg-red-100 text-red-600" : "bg-darkblue-100 text-darkblue-800"
              )}>
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold text-darkblue-900">{plan.name}</h3>
            </div>
            <p className="text-darkblue-700 mb-4 flex-grow">{plan.description}</p>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold text-darkblue-900">0€</span>
              <span className="text-darkblue-600 ml-2">HT/mois</span>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5",
                    plan.popular ? "bg-red-100 text-red-600" : "bg-darkblue-100 text-darkblue-800"
                  )}>
                    <Check size={12} />
                  </div>
                  <span className="text-darkblue-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={cn(
            "px-6 py-4 mt-auto",
            plan.popular ? "bg-red-50" : "bg-gray-50"
          )}>
            <Link
              to="/devis"
              className={cn(
                "w-full inline-flex items-center justify-center px-5 py-3 rounded-full font-medium transition-all group",
                plan.popular 
                  ? "bg-red-600 hover:bg-red-700 text-white" 
                  : "bg-darkblue-800 hover:bg-darkblue-900 text-white"
              )}
            >
              {plan.cta}
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "relative pl-16",
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: `${delay}ms`, 
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-darkblue-100 flex items-center justify-center text-xl font-bold text-darkblue-900">
        {number}
      </div>
      <h3 className="text-xl font-bold text-darkblue-900 mb-2">{title}</h3>
      <p className="text-darkblue-700">{description}</p>
    </div>
  );
};

const Pricing = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("sites");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const tabsData = {
    sites: [
      {
        name: "Site Vitrine",
        description: "Idéal pour présenter votre activité et vos services avec un site simple et efficace.",
        price: "0€",
        features: [
          "5 pages personnalisées",
          "Design responsive",
          "Optimisation SEO de base",
          "Formulaire de contact",
          "Mise à jour mensuelle"
        ],
        cta: "Je me lance !",
        icon: <Globe size={20} />
      },
      {
        name: "Site Catalogue",
        description: "Présentez tous vos produits et services de manière détaillée et attractive.",
        price: "0€",
        features: [
          "10 pages personnalisées",
          "Catalogue produits illimité",
          "Optimisation SEO avancée",
          "Intégration réseaux sociaux",
          "Statistiques de visite"
        ],
        cta: "Je me lance !",
        popular: true,
        icon: <Globe size={20} />
      },
      {
        name: "Site E-commerce",
        description: "Vendez vos produits en ligne avec une boutique professionnelle et sécurisée.",
        price: "0€",
        features: [
          "Boutique complète",
          "Panier d'achat sécurisé",
          "Gestion des stocks",
          "Paiement en ligne",
          "Dashboard administrateur"
        ],
        cta: "Je me lance !",
        icon: <ShoppingCart size={20} />
      }
    ],
    seo: [
      {
        name: "SEO Essentiel",
        description: "Les bases pour améliorer votre visibilité sur les moteurs de recherche.",
        price: "0€",
        features: [
          "Audit technique initial",
          "Optimisation on-page",
          "3 mots-clés principaux",
          "Rapport mensuel",
          "Support par email"
        ],
        cta: "Je me lance !",
        icon: <Search size={20} />
      },
      {
        name: "SEO Premium",
        description: "Une stratégie complète pour dominer les résultats de recherche dans votre secteur.",
        price: "0€",
        features: [
          "Audit technique approfondi",
          "Optimisation on-page et off-page",
          "10 mots-clés ciblés",
          "Création de contenu mensuel",
          "Suivi de positionnement"
        ],
        cta: "Je me lance !",
        popular: true,
        icon: <Search size={20} />
      },
      {
        name: "Google Ads",
        description: "Obtenez des résultats immédiats avec des campagnes publicitaires ciblées.",
        price: "0€",
        features: [
          "Configuration de compte",
          "Création de campagnes",
          "Sélection des mots-clés",
          "Suivi des conversions",
          "Optimisation continue"
        ],
        cta: "Je me lance !",
        icon: <Search size={20} />
      }
    ],
    social: [
      {
        name: "Gestion Basique",
        description: "Maintenez une présence régulière sur les réseaux sociaux principaux.",
        price: "0€",
        features: [
          "2 plateformes",
          "8 publications par mois",
          "Modération des commentaires",
          "Rapport mensuel",
          "Support par email"
        ],
        cta: "Je me lance !",
        icon: <Users size={20} />
      },
      {
        name: "Gestion Avancée",
        description: "Développez votre communauté avec une stratégie de contenu complète.",
        price: "0€",
        features: [
          "4 plateformes",
          "16 publications par mois",
          "Création de contenu original",
          "Veille concurrentielle",
          "Gestion des campagnes"
        ],
        cta: "Je me lance !",
        popular: true,
        icon: <Users size={20} />
      },
      {
        name: "Publicité Social Media",
        description: "Amplifiez votre portée avec des campagnes publicitaires ciblées.",
        price: "0€",
        features: [
          "2 plateformes",
          "Création des visuels",
          "Ciblage avancé",
          "Suivi des conversions",
          "Optimisation continue"
        ],
        cta: "Je me lance !",
        icon: <Users size={20} />
      }
    ],
    photo: [
      {
        name: "Pack Photo",
        description: "Des photos professionnelles pour valoriser votre activité.",
        price: "0€",
        features: [
          "Shooting professionnel",
          "Retouche photo",
          "10 photos HD",
          "Droits d'utilisation",
          "Livraison rapide"
        ],
        cta: "Je me lance !",
        icon: <Camera size={20} />
      },
      {
        name: "Pack Vidéo",
        description: "Des vidéos impactantes pour présenter votre entreprise et vos produits.",
        price: "0€",
        features: [
          "Tournage professionnel",
          "Montage et post-production",
          "Vidéo de 1-2 minutes",
          "Habillage sonore",
          "Format pour web et réseaux"
        ],
        cta: "Je me lance !",
        popular: true,
        icon: <Camera size={20} />
      },
      {
        name: "Pack Complet",
        description: "Une solution complète avec photos et vidéos pour tous vos besoins.",
        price: "0€",
        features: [
          "Shooting photo complet",
          "Vidéo promotionnelle",
          "Visite virtuelle 360°",
          "Contenu pour réseaux sociaux",
          "Livraison sous 15 jours"
        ],
        cta: "Je me lance !",
        icon: <Camera size={20} />
      }
    ]
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div 
              ref={ref}
              className={cn(
                "max-w-3xl mx-auto text-center mb-12",
                inView ? "opacity-100" : "opacity-0"
              )}
              style={{ 
                transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-100 text-darkblue-900 mb-4">
                Tarifs transparents
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-darkblue-900 tracking-tight mb-6">
                Des solutions adaptées à votre budget
              </h1>
              <p className="text-xl text-darkblue-700/80">
                Découvrez nos offres pensées pour répondre aux besoins de chaque entrepreneur.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex flex-wrap justify-center bg-gray-100 rounded-full p-1 max-w-3xl mx-auto mb-10">
                <button
                  onClick={() => setActiveTab("sites")}
                  className={cn(
                    "py-2 px-4 text-sm font-medium rounded-full transition-all",
                    activeTab === "sites" 
                      ? "bg-white shadow-sm text-darkblue-900" 
                      : "text-darkblue-700 hover:text-darkblue-900"
                  )}
                >
                  Création de site internet
                </button>
                <button
                  onClick={() => setActiveTab("seo")}
                  className={cn(
                    "py-2 px-4 text-sm font-medium rounded-full transition-all",
                    activeTab === "seo" 
                      ? "bg-white shadow-sm text-darkblue-900" 
                      : "text-darkblue-700 hover:text-darkblue-900"
                  )}
                >
                  Référencement (SEM)
                </button>
                <button
                  onClick={() => setActiveTab("social")}
                  className={cn(
                    "py-2 px-4 text-sm font-medium rounded-full transition-all",
                    activeTab === "social" 
                      ? "bg-white shadow-sm text-darkblue-900" 
                      : "text-darkblue-700 hover:text-darkblue-900"
                  )}
                >
                  Community management
                </button>
                <button
                  onClick={() => setActiveTab("photo")}
                  className={cn(
                    "py-2 px-4 text-sm font-medium rounded-full transition-all",
                    activeTab === "photo" 
                      ? "bg-white shadow-sm text-darkblue-900" 
                      : "text-darkblue-700 hover:text-darkblue-900"
                  )}
                >
                  Photos et vidéos
                </button>
              </div>

              <div className="tab-content">
                {activeTab === "sites" && <PricingTabContent plans={tabsData.sites} />}
                {activeTab === "seo" && <PricingTabContent plans={tabsData.seo} />}
                {activeTab === "social" && <PricingTabContent plans={tabsData.social} />}
                {activeTab === "photo" && <PricingTabContent plans={tabsData.photo} />}
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-darkblue-900 mb-4">
                  Notre approche en 3 étapes
                </h2>
                <p className="text-lg text-darkblue-700/80">
                  Nous vous accompagnons tout au long de la mise en place de votre projet, et même après !
                </p>
              </div>

              <div className="space-y-10">
                <Step 
                  number={1} 
                  title="Rendez-vous téléphonique" 
                  description="Un premier échange pour comprendre vos besoins et vous proposer les solutions les plus adaptées à votre activité."
                  delay={100}
                />
                
                <Step 
                  number={2} 
                  title="Entretien avec votre chef de projet" 
                  description="Définition précise de votre projet avec un expert dédié qui vous accompagnera tout au long de la réalisation."
                  delay={200}
                />
                
                <Step 
                  number={3} 
                  title="Mise en ligne de vos solutions" 
                  description="Lancement de vos outils digitaux et formation à leur utilisation. Un support continu est assuré après la mise en ligne."
                  delay={300}
                />
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <CallToAction variant="dark" />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
