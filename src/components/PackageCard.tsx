
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

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
  features,
  image,
  isPrimary = false,
}: PackageCardProps) => {
  // Use the site's color scheme with blue and red
  const bgColor = isPrimary 
    ? "bg-darkblue-500 text-white" 
    : "bg-white border border-gray-200";
  
  const textColor = isPrimary ? "text-white" : "text-darkblue-900";
  const mutedTextColor = isPrimary ? "text-white/80" : "text-darkblue-600";
  const badgeColor = isPrimary 
    ? "bg-white/20 hover:bg-white/30 text-white" 
    : "bg-darkblue-100 hover:bg-darkblue-200 text-darkblue-700";
  const buttonColor = isPrimary 
    ? "bg-white text-darkblue-700 hover:bg-gray-100" 
    : "bg-red-500 hover:bg-red-600 text-white";
  
  const accordionTriggerColor = isPrimary 
    ? "text-white hover:text-white/90" 
    : "text-darkblue-900 hover:text-darkblue-700";
  
  const accordionBorderColor = isPrimary 
    ? "border-white/20" 
    : "border-gray-200";
  
  return (
    <Card className={`overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${bgColor}`}>
      {/* Card header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <Badge className={badgeColor}>
            {type}
          </Badge>
          <Badge className={badgeColor}>
            Essentiel
          </Badge>
        </div>
        
        <h3 className={`text-2xl font-bold ${textColor} mb-6`}>{title}</h3>
      </div>
      
      {/* Card content with accordion */}
      <div className={`p-6 pt-0 ${isPrimary ? "" : "text-darkblue-800"}`}>
        <Accordion type="single" collapsible className="w-full">
          {features.map((feature, index) => {
            // Split the feature into title and description at the first colon
            const parts = feature.split(': ');
            const title = parts[0];
            const description = parts.length > 1 ? parts[1] : '';
            
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={accordionBorderColor}
              >
                <AccordionTrigger className={accordionTriggerColor}>
                  {title}
                </AccordionTrigger>
                <AccordionContent className={mutedTextColor}>
                  {description}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        
        <div className="mt-8">
          <Link to="/contact">
            <Button 
              className={`w-full group ${buttonColor}`}
            >
              Je me lance !
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;
