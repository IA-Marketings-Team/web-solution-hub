
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PackageFeatureItem from './PackageFeatureItem';

export interface PackageCardProps {
  type: string;
  title: string;
  price: string;
  setupFee: string;
  features: string[];
  image: string;
  isPrimary?: boolean;
}

const PackageCard = ({ 
  type,
  title,
  price,
  setupFee,
  features,
  image,
  isPrimary = false,
}: PackageCardProps) => {
  // Use the site's color scheme
  const bgColor = isPrimary 
    ? "bg-[#9b87f5] text-white" 
    : "bg-white border border-gray-200";
  
  const textColor = isPrimary ? "text-white" : "text-darkblue-900";
  const mutedTextColor = isPrimary ? "text-white/80" : "text-darkblue-600";
  
  return (
    <Card className={`overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${bgColor}`}>
      {/* Card header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <Badge className={`${isPrimary ? "bg-white/20 hover:bg-white/30 text-white" : "bg-[#E5DEFF] hover:bg-[#D6BCFA] text-[#7E69AB]"}`}>
            {type}
          </Badge>
          <Badge className={`${isPrimary ? "bg-white/20 hover:bg-white/30 text-white" : "bg-[#E5DEFF] hover:bg-[#D6BCFA] text-[#7E69AB]"}`}>
            Essentiel
          </Badge>
        </div>
        
        <h3 className={`text-2xl font-bold ${textColor} mb-6`}>{title}</h3>
        
        <div className="mb-5">
          <div className={`text-sm ${mutedTextColor}`}>à partir de</div>
          <div className={`text-3xl font-bold ${textColor} flex items-end`}>
            {price}€ <span className="text-base font-normal ml-1 mb-1">HT/mois</span>
          </div>
          <div className={`text-sm ${mutedTextColor}`}>
            {setupFee}€ ht de Frais de création
          </div>
        </div>
      </div>
      
      {/* Card content */}
      <div className={`p-6 pt-0 ${isPrimary ? "" : "text-darkblue-800"}`}>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <PackageFeatureItem key={index} isPrimary={isPrimary}>{feature}</PackageFeatureItem>
          ))}
        </div>
        
        <div className="mt-8">
          <Button 
            className={`w-full group ${isPrimary 
              ? "bg-white text-[#7E69AB] hover:bg-gray-100" 
              : "bg-[#9b87f5] hover:bg-[#8B5CF6] text-white"}`}
          >
            Je me lance !
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;
