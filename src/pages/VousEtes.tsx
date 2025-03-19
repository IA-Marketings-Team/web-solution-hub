
import React, { useState } from 'react';
import { professions } from '@/data/professionData';
import ProfessionSelector from '@/components/profession/ProfessionSelector';
import ServiceList from '@/components/profession/ServiceList';
import { motion } from 'framer-motion';

const VousEtes = () => {
  const [activeProfession, setActiveProfession] = useState(professions[0].id);
  
  const selectedProfession = professions.find(
    (profession) => profession.id === activeProfession
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue-900 mb-4">
            Nos solutions adaptées à votre profession
          </h1>
          <p className="text-lg text-darkblue-700/80 mb-12">
            Découvrez comment nous pouvons vous aider à développer votre activité en ligne, quelle que soit votre profession.
          </p>
        </motion.div>

        {/* Profession selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <ProfessionSelector
            professions={professions}
            activeProfession={activeProfession}
            onProfessionChange={setActiveProfession}
          />
        </motion.div>

        {/* Service list section */}
        {selectedProfession && (
          <motion.div
            key={selectedProfession.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-24"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-darkblue-900">
                Solutions pour {selectedProfession.label}
              </h2>
              <div className="h-1 w-16 bg-red-600 mt-2"></div>
            </div>
            
            <ServiceList services={selectedProfession.services} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VousEtes;
