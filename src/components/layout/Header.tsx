
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChatRedirect = () => {
    window.open('https://chatgpt.com/g/g-mFtK9rcS6-doctor-gpt', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-medical-500' : 'text-medical-500'}`}>
                Ai<span className="text-neutral-700">DoctorGPT</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-neutral-600 hover:text-medical-500 transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-neutral-600 hover:text-medical-500 transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-neutral-600 hover:text-medical-500 transition-colors text-sm font-medium"
            >
              FAQ
            </a>
            <AnimatedButton 
              variant="primary" 
              size="sm"
              onClick={handleChatRedirect}
            >
              Try Doctor GPT
            </AnimatedButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-neutral-700' : 'text-neutral-700'}`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="flex flex-col items-center space-y-6 pt-6">
          <a 
            href="#features" 
            className="text-neutral-700 hover:text-medical-500 transition-colors text-lg font-medium"
            onClick={toggleMenu}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-neutral-700 hover:text-medical-500 transition-colors text-lg font-medium"
            onClick={toggleMenu}
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="text-neutral-700 hover:text-medical-500 transition-colors text-lg font-medium"
            onClick={toggleMenu}
          >
            FAQ
          </a>
          <AnimatedButton 
            variant="primary" 
            onClick={() => {
              toggleMenu();
              handleChatRedirect();
            }}
          >
            Try Doctor GPT
          </AnimatedButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;
