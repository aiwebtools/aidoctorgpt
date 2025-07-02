
import React from 'react';
import { Heart, X } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import { handleChatRedirect, handleVetGPTRedirect, handleDentalGPTRedirect, handleMentalWellnessGPTRedirect } from './headerUtils';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
    >
      {/* Close button */}
      <div className="absolute top-4 right-4 z-[10000]">
        <button
          onClick={toggleMenu}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-white" />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-6 pt-6">
        <AnimatedButton 
          variant="primary" 
          size="sm"
          onClick={() => {
            toggleMenu();
            handleDentalGPTRedirect();
          }}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none hover:shadow-glow"
        >
          Dental GPT
        </AnimatedButton>
        <AnimatedButton 
          variant="primary" 
          size="sm"
          onClick={() => {
            toggleMenu();
            handleVetGPTRedirect();
          }}
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none hover:shadow-glow"
        >
          Veterinarian GPT
        </AnimatedButton>
        <AnimatedButton 
          variant="primary" 
          size="sm"
          onClick={() => {
            toggleMenu();
            handleMentalWellnessGPTRedirect();
          }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none hover:shadow-glow"
        >
          Mental Wellness GPT
        </AnimatedButton>
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
