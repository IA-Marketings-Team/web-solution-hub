
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
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
  );
};

export default ContactInfo;
