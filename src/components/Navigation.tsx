
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    // Set initial scroll state when component mounts
    if (window.scrollY > 10) {
      setScrolled(true);
    }
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Nos expertises', path: '/expertise' },
    { name: 'Vous êtes', path: '/vous-etes' },
    { name: 'Nos tarifs', path: '/pricing' },
    { name: 'Nos références', path: '/references' },
    { name: 'i-numera et vous', path: '/contact' },
  ];

  // Check if we're on a page with dark header (like Contact page)
  const isDarkHeader = location.pathname === '/contact';
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 lg:px-12',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : isDarkHeader 
            ? 'bg-darkblue-900/90 backdrop-blur-md py-5' 
            : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2" 
          onClick={closeMenu}
        >
          <img 
            src="/lovable-uploads/b24ee520-7478-4b85-b844-07dbec409cf5.png" 
            alt="i-numera logo" 
            className="h-12 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-darkblue-600',
                location.pathname === item.path 
                  ? 'text-darkblue-800' 
                  : (!scrolled && isDarkHeader) 
                    ? 'text-white/90' 
                    : 'text-darkblue-900/80'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            to="/contact" 
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full transition-all hover:shadow-lg",
              (!scrolled && isDarkHeader) 
                ? "bg-red-600 hover:bg-red-700 text-white" 
                : "bg-red-600 hover:bg-red-700 text-white"
            )}
          >
            Contactez-nous
          </Link>
          <Link 
            to="/devis" 
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full transition-all hover:shadow-lg",
              (!scrolled && isDarkHeader) 
                ? "bg-white hover:bg-gray-100 text-darkblue-900" 
                : "bg-darkblue-800 hover:bg-darkblue-900 text-white"
            )}
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "lg:hidden p-2",
            (!scrolled && isDarkHeader) ? "text-white" : "text-darkblue-900"
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 z-50 bg-white transition-transform duration-300 lg:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link 
                to="/" 
                className="flex items-center space-x-2" 
                onClick={closeMenu}
              >
                <img 
                  src="/lovable-uploads/b24ee520-7478-4b85-b844-07dbec409cf5.png" 
                  alt="i-numera logo" 
                  className="h-12 w-auto" // Increased from h-10 to h-12
                />
              </Link>
              <button 
                className="p-2 text-darkblue-900"
                onClick={closeMenu}
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-5 mb-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-darkblue-600 py-2',
                    location.pathname === item.path 
                      ? 'text-darkblue-800' 
                      : 'text-darkblue-900/80'
                  )}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col space-y-4 mt-auto pt-6">
              <Link 
                to="/contact" 
                className="px-6 py-3 font-medium rounded-full transition-all hover:shadow-lg bg-red-600 hover:bg-red-700 text-white text-center"
                onClick={closeMenu}
              >
                Contactez-nous
              </Link>
              <Link 
                to="/devis" 
                className="px-6 py-3 font-medium rounded-full transition-all hover:shadow-lg bg-darkblue-800 hover:bg-darkblue-900 text-white text-center"
                onClick={closeMenu}
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
