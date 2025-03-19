
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Tag, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { referenceCategories, referenceData } from '@/data/referenceData';
import ReferenceCard from '@/components/reference/ReferenceCard';
import PartnerLogos from '@/components/reference/PartnerLogos';

const References = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue-900 mb-4">
            Nos Références
          </h1>
          <p className="text-lg text-darkblue-700/80 mb-12">
            i-numeria accompagne près de 20 000 entrepreneurs, artisans et TPE dans 150 secteurs d'activités différents.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <Check size={32} className="text-red-600" />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-darkblue-900 mb-2">
            Professionnels de la construction, de la beauté, de la restauration, etc.,<br />ils font confiance à i-numeria
          </h2>
        </motion.div>

        {/* Services Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent mb-8">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-darkblue-800 data-[state=active]:text-white rounded-full py-2"
              >
                Tous nos clients
              </TabsTrigger>
              {referenceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-darkblue-800 data-[state=active]:text-white rounded-full py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {referenceData.map((reference, index) => (
                  <ReferenceCard 
                    key={reference.id} 
                    reference={reference} 
                    index={index} 
                  />
                ))}
              </div>
            </TabsContent>

            {referenceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {referenceData
                    .filter(ref => ref.categoryId === category.id)
                    .map((reference, index) => (
                      <ReferenceCard 
                        key={reference.id} 
                        reference={reference} 
                        index={index} 
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-darkblue-900">
              Ils nous font confiance
            </h2>
            <div className="h-1 w-16 bg-red-600 mt-2 mx-auto"></div>
          </div>
          
          <PartnerLogos />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center py-12 px-6 md:px-12 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 mb-20"
        >
          <h2 className="text-2xl font-semibold text-darkblue-900 mb-4">
            Vous souhaitez faire partie de nos références ?
          </h2>
          <p className="text-darkblue-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et rejoignez notre réseau de clients satisfaits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact" 
              className="px-6 py-3 text-base font-medium rounded-full transition-all hover:shadow-lg bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto text-center"
            >
              Contactez-nous
            </Link>
            <Link 
              to="/devis" 
              className="px-6 py-3 text-base font-medium rounded-full transition-all hover:shadow-lg bg-darkblue-800 hover:bg-darkblue-900 text-white w-full sm:w-auto text-center"
            >
              Demander un devis
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default References;
