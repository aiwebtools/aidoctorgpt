
import React from 'react';
import { Heart } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import { handleChatRedirect, handleVetGPTRedirect, handleDentalGPTRedirect, handleMentalWellnessGPTRedirect } from './headerUtils';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  return (
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
            handleDentalGPTRedirect();
          }}
          className="text-neutral-300 hover:text-purple-400 transition-colors text-lg font-medium interactive-link"
        >
          Dental GPT
        </a>
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
          href="#"
          onClick={() => {
            toggleMenu();
            handleMentalWellnessGPTRedirect();
          }}
          className="text-neutral-300 hover:text-purple-400 transition-colors text-lg font-medium interactive-link"
        >
          Mental Wellness GPT
        </a>
        <a 
          href="#how-it-works" 
          className="text-neutral-300 hover:text-purple-400 transition-colors text-lg font-medium interactive-link"
          onClick={toggleMenu}
        >
          How It Works
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
          Made with <Heart className="h-3 w-3 text-pink-500 mx-1 animate-pulse-slow" /> for better and free healthcare
        </p>
      </nav>
    </div>
  );
};

export default MobileMenu;
