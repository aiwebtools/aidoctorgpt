
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
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

  const handleVetGPTRedirect = () => {
    window.open('https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt', '_blank');
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/50 backdrop-blur-md shadow-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center hover-scale">
              <span className={`text-2xl font-bold text-gradient`}>
                Ai<span className="text-white">DoctorGPT</span>
              </span>
            </a>
            <p className="text-neutral-500 text-xs ml-4 hidden sm:flex items-center">
              Made with <Heart className="h-3 w-3 text-pink-500 mx-1 animate-pulse-slow" /> for better healthcare
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#"
              onClick={handleVetGPTRedirect}
              className="text-neutral-400 hover:text-purple-400 transition-all text-sm font-medium interactive-link"
            >
              Veterinarian GPT
            </a>
            <a 
              href="#how-it-works" 
              className="text-neutral-400 hover:text-purple-400 transition-all text-sm font-medium interactive-link"
            >
              How It Works
            </a>
            <a 
              href="#disclaimer" 
              className="text-neutral-400 hover:text-purple-400 transition-all text-sm font-medium interactive-link"
            >
              Disclaimer
            </a>
            <AnimatedButton 
              variant="primary" 
              size="sm"
              onClick={handleChatRedirect}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Try Doctor GPT
            </AnimatedButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md text-white hover:bg-white/10 transition-colors`}
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
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="flex flex-col items-center space-y-8 pt-6">
          <a 
            href="#"
            onClick={() => {
              toggleMenu();
              handleVetGPTRedirect();
            }}
            className="text-neutral-300 hover:text-purple-400 transition-colors text-lg font-medium interactive-link"
          >
            Veterinarian GPT
          </a>
          <a 
            href="#how-it-works" 
            className="text-neutral-300 hover:text-purple-400 transition-colors text-lg font-medium interactive-link"
            onClick={toggleMenu}
          >
            How It Works
          </a>
          <a 
            href="#disclaimer" 
            className="text-neutral-300 hover:text-purple-400 transition-colors text-lg font-medium interactive-link"
            onClick={toggleMenu}
          >
            Disclaimer
          </a>
          <AnimatedButton 
            variant="primary" 
            onClick={() => {
              toggleMenu();
              handleChatRedirect();
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow mt-4"
          >
            Try Doctor GPT
          </AnimatedButton>
          <p className="text-neutral-500 text-xs flex items-center mt-6">
            Made with <Heart className="h-3 w-3 text-pink-500 mx-1 animate-pulse-slow" /> for better healthcare
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
