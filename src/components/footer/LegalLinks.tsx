
import React from 'react';
import { Link } from 'react-router-dom';

const LegalLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
      <Link 
        to="/terms" 
        className="hover:text-white transition-colors"
      >
        Mentions légales
      </Link>
      <Link 
        to="/privacy" 
        className="hover:text-white transition-colors"
      >
        Politique de confidentialité
      </Link>
      <Link 
        to="/cookies" 
        className="hover:text-white transition-colors"
      >
        Gestion des cookies
      </Link>
    </div>
  );
};

export default LegalLinks;
