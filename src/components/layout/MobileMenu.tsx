
import React from 'react';
import { Heart, X } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import { handleChatRedirect, handleVetGPTRedirect, handleDentalGPTRedirect, handleMentalWellnessGPTRedirect, handleApothecaryGPTRedirect } from './headerUtils';

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
      <nav className="flex flex-col items-center justify-center min-h-screen space-y-5 px-6 pb-20">
        <div className="mb-4 text-center">
          <p className="text-sm text-purple-300 font-semibold mb-1">Personal Healthcare AI Tools Suite</p>
          <h2 className="text-2xl font-bold text-white mb-2">AI Web Tools</h2>
          <p className="text-neutral-400 text-sm">5 Free AI Health Tools</p>
        </div>

        <div className="w-full max-w-sm space-y-3">
          <AnimatedButton 
            variant="primary" 
            size="lg"
            onClick={() => {
              toggleMenu();
              handleChatRedirect();
            }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow py-4 text-base font-semibold"
          >
            👨‍⚕️ AI Doctor GPT
          </AnimatedButton>
          
          <AnimatedButton 
            variant="primary" 
            size="lg"
            onClick={() => {
              toggleMenu();
              handleDentalGPTRedirect();
            }}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none hover:shadow-glow py-4 text-base font-semibold"
          >
            🦷 AI Dental GPT
          </AnimatedButton>
          
          <AnimatedButton 
            variant="primary" 
            size="lg"
            onClick={() => {
              toggleMenu();
              handleVetGPTRedirect();
            }}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none hover:shadow-glow py-4 text-base font-semibold"
          >
            🐾 AI Veterinarian GPT
          </AnimatedButton>
          
          <AnimatedButton 
            variant="primary" 
            size="lg"
            onClick={() => {
              toggleMenu();
              handleMentalWellnessGPTRedirect();
            }}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none hover:shadow-glow py-4 text-base font-semibold"
          >
            🧠 AI Mental Wellness GPT
          </AnimatedButton>
          
          <AnimatedButton 
            variant="primary" 
            size="lg"
            onClick={() => {
              toggleMenu();
              handleApothecaryGPTRedirect();
            }}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none hover:shadow-glow py-4 text-base font-semibold"
          >
            ⚗️ AI Apothecary GPT
          </AnimatedButton>
        </div>

        <div className="pt-4 border-t border-white/10 w-full max-w-sm">
          <a 
            href="#how-it-works" 
            className="block text-center text-neutral-300 hover:text-purple-400 transition-colors text-base font-medium py-3"
            onClick={toggleMenu}
          >
            📖 How It Works
          </a>
        </div>

        <p className="text-neutral-500 text-xs flex items-center mt-8">
          Made with <Heart className="h-3 w-3 text-pink-500 mx-1 animate-pulse-slow" /> for better and free healthcare
        </p>
      </nav>
    </div>
  );
};

export default MobileMenu;
