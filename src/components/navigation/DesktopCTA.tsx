
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface DesktopCTAProps {
  scrolled: boolean;
  isDarkHeader: boolean;
  isContactPage: boolean;
}

const DesktopCTA: React.FC<DesktopCTAProps> = ({ scrolled, isDarkHeader, isContactPage }) => (
  <div className="hidden lg:flex items-center space-x-4">
    <Link 
      to="/contact" 
      className={cn(
        "px-5 py-2 text-sm font-medium rounded-full transition-all hover:shadow-lg",
        "bg-red-600 hover:bg-red-700 text-white"
      )}
    >
      Contactez-nous
    </Link>
    <Link 
      to="/devis" 
      className={cn(
        "px-5 py-2 text-sm font-medium rounded-full transition-all hover:shadow-lg",
        "bg-darkblue-800 hover:bg-darkblue-900 text-white"
      )}
    >
      Demander un devis
    </Link>
  </div>
);

export default DesktopCTA;
