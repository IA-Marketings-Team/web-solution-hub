
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DevisForm from '@/components/devis/DevisForm';
import InfoCards from '@/components/devis/InfoCards';

const Devis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Info Cards */}
            <div>
              <InfoCards />
            </div>
            
            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <DevisForm />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Devis;
