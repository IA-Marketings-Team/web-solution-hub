
import React from 'react';
import ExpertiseCard, { ExpertiseCardProps } from './ExpertiseCard';

interface ExpertiseGridProps {
  expertiseCards: Omit<ExpertiseCardProps, 'ref' | 'inView'>[];
}

const ExpertiseGrid = ({ expertiseCards }: ExpertiseGridProps) => {
  return (
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
  );
};

export default ExpertiseGrid;
