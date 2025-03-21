
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const InfoCards = () => {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-darkblue-900 mb-4">
            Intéressé par nos offres ?
          </h2>
          <p className="mb-4">
            Réservez une <span className="text-darkblue-600 font-medium">présentation gratuite</span> personnalisée sans engagement.
          </p>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-darkblue-900 mb-4">
            Déjà client ?
          </h2>
          <p className="mb-4">
            Vous pouvez nous joindre par téléphone au <span className="font-medium">01 23 45 67 89</span> ou utilisez <span className="text-darkblue-600 font-medium">la page dédiée Service clients</span>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoCards;
