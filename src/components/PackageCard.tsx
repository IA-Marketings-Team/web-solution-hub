
import React from 'react';
import { ArrowRight, Bookmark } from 'lucide-react';
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
  const bgColor = isPrimary 
    ? "bg-darkblue-600" 
    : "bg-white border border-darkblue-100";
  
  const textColor = isPrimary ? "text-white" : "text-darkblue-900";
  
  return (
    <Card className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${bgColor}`}>
      {/* Card image section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-darkblue-600 hover:bg-darkblue-700">
            Nos packs
          </Badge>
          <Badge className="ml-2 bg-darkblue-500 hover:bg-darkblue-600">
            {type}
          </Badge>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <Bookmark size={20} className={isPrimary ? "text-white" : "text-darkblue-600"} />
          <span className={`ml-2 font-semibold text-lg ${textColor}`}>{title}</span>
        </div>
        
        <div className="mb-5">
          <div className="text-sm text-darkblue-400">à partir de</div>
          <div className={`text-3xl font-bold ${textColor}`}>
            {price}€ <span className="text-base font-normal">HT/mois</span>
          </div>
          <div className={`text-sm ${isPrimary ? "text-darkblue-200" : "text-darkblue-500"}`}>
            {setupFee}€ ht de Frais de création
          </div>
        </div>
        
        <div className="space-y-1">
          {features.map((feature, index) => (
            <PackageFeatureItem key={index}>{feature}</PackageFeatureItem>
          ))}
        </div>
        
        <div className="mt-6">
          <Button 
            className={`w-full group ${isPrimary ? "" : "bg-red-600 hover:bg-red-700"}`}
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
