
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ExpertiseHeader from '@/components/expertise/ExpertiseHeader';
import ExpertiseGrid from '@/components/expertise/ExpertiseGrid';
import { expertiseCards } from '@/data/expertiseData';

const Expertise = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <ExpertiseHeader 
              title="Des solutions adaptées à chaque besoin"
              subtitle="Découvrez notre gamme complète de services digitaux pour développer votre activité en ligne."
            />

            <ExpertiseGrid expertiseCards={expertiseCards} />
          </div>
        </section>

        <CallToAction variant="dark" />
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;
