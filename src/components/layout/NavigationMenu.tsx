
import React from 'react';
import AnimatedButton from '../ui/AnimatedButton';
import { handleChatRedirect, handleVetGPTRedirect, handleDentalGPTRedirect, handleMentalWellnessGPTRedirect } from './headerUtils';

const NavigationMenu = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <a 
        href="#"
        onClick={handleDentalGPTRedirect}
        className="text-neutral-400 hover:text-purple-400 transition-all text-sm font-medium interactive-link"
      >
        Dental GPT
      </a>
      <a 
        href="#"
        onClick={handleVetGPTRedirect}
        className="text-neutral-400 hover:text-purple-400 transition-all text-sm font-medium interactive-link"
      >
        Veterinarian GPT
      </a>
      <a 
        href="#"
        onClick={handleMentalWellnessGPTRedirect}
        className="text-neutral-400 hover:text-purple-400 transition-all text-sm font-medium interactive-link"
      >
        Mental Wellness GPT
      </a>
      <a 
        href="#how-it-works" 
        className="text-neutral-400 hover:text-purple-400 transition-all text-sm font-medium interactive-link"
      >
        How It Works
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
  );
};

export default NavigationMenu;
