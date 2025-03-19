
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const ServiceCard = ({ icon, title, description, delay, className }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "relative rounded-2xl p-6 hover-lift transition-all bg-white border border-gray-100 shadow-sm",
        className,
        inView ? "opacity-100" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: `${delay}ms`, 
        transitionProperty: 'all', 
        transitionDuration: '700ms', 
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="rounded-xl bg-red-50 p-3 text-red-600 w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-darkblue-900 mb-3">{title}</h3>
        <p className="text-darkblue-700/80 mb-5 flex-grow">{description}</p>
        <Link 
          to="/expertise" 
          className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 hover-slide-right group"
        >
          En savoir plus
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
