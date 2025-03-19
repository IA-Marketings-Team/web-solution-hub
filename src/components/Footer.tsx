
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-darkblue-900 text-white pt-16 pb-8", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/9b43df0e-0943-4c2f-9433-cce569989739.png" 
                alt="i-numera logo" 
                className="h-14 w-auto" // Increased from h-12 to h-14
              />
            </div>
            <p className="text-white/80 mb-6">
              Des solutions digitales clés en main pour booster votre activité depuis plus de 20 ans.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                className="w-9 h-9 rounded-full bg-darkblue-800 hover:bg-darkblue-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                className="w-9 h-9 rounded-full bg-darkblue-800 hover:bg-darkblue-700 flex items-center justify-center transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                className="w-9 h-9 rounded-full bg-darkblue-800 hover:bg-darkblue-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="w-9 h-9 rounded-full bg-darkblue-800 hover:bg-darkblue-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/expertise" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Nos expertises
                </Link>
              </li>
              <li>
                <Link 
                  to="/vous-etes" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Vous êtes
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Nos tarifs
                </Link>
              </li>
              <li>
                <Link 
                  to="/references" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Nos références
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  i-numera et vous
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Besoin d'aide ?</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Support client
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-white/80 hover:text-white transition-colors hover-slide-right inline-flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  12 rue de la République<br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-red-500 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:contact@i-numera.com" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contact@i-numera.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-red-500 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+33102030405" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +33 1 02 03 04 05
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-darkblue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} i-numera. Tous droits réservés.
            </p>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
