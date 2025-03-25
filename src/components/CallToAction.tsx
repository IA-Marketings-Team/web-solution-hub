
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CallToActionProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const CallToAction: React.FC<CallToActionProps> = ({ className, variant = 'light' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isDark = variant === 'dark';

  return (
    <section 
      ref={ref} 
      className={cn(
        "py-16 relative overflow-hidden",
        isDark ? "bg-darkblue-900 text-white" : "bg-white text-darkblue-900",
        className
      )}
    >
      {/* Textured Background Pattern */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 0 L60 0 L60 60 L0 60 Z" fill="none" stroke={isDark ? "#ffffff" : "#1A1F2C"} strokeWidth="1"/>
                <circle cx="30" cy="30" r="3" fill={isDark ? "#ffffff" : "#F44336"} opacity="0.5"/>
                <circle cx="0" cy="0" r="3" fill={isDark ? "#ffffff" : "#F44336"} opacity="0.3"/>
                <circle cx="60" cy="0" r="3" fill={isDark ? "#ffffff" : "#F44336"} opacity="0.3"/>
                <circle cx="0" cy="60" r="3" fill={isDark ? "#ffffff" : "#F44336"} opacity="0.3"/>
                <circle cx="60" cy="60" r="3" fill={isDark ? "#ffffff" : "#F44336"} opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>
        <div className="absolute -top-[40%] -right-[30%] h-[70%] w-[70%] rounded-full bg-red-500/20 blur-[100px]" />
        <div className="absolute -bottom-[30%] -left-[20%] h-[60%] w-[60%] rounded-full bg-darkblue-500/20 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div 
          className={cn(
            "max-w-4xl mx-auto text-center p-8 rounded-2xl relative overflow-hidden",
            isDark 
              ? "bg-darkblue-800/80 border border-darkblue-700 backdrop-blur-sm"
              : "bg-gray-50/90 border border-gray-100 backdrop-blur-sm",
            inView ? "opacity-100" : "opacity-0 translate-y-8"
          )}
          style={{ 
            transitionProperty: 'all', 
            transitionDuration: '700ms', 
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' 
          }}
        >
          {/* Background Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-darkblue-500 rounded-full blur-3xl opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold tracking-tight mb-4",
              isDark ? "text-white" : "text-darkblue-900"
            )}>
              Envie de démarrer ?
            </h2>
            <p className={cn(
              "text-xl mb-8 max-w-2xl mx-auto",
              isDark ? "text-white/80" : "text-darkblue-700/80"
            )}>
              Réservez une présentation gratuite personnalisée sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
              >
                <PhoneCall size={18} className="mr-2" />
                Contactez-moi
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/devis"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full transition-all font-medium hover:shadow-lg group",
                  isDark 
                    ? "bg-white text-darkblue-900 hover:bg-gray-100" 
                    : "bg-darkblue-800 text-white hover:bg-darkblue-900"
                )}
              >
                Demander un devis
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
