
import React from 'react';
import AnimatedButton from '../ui/AnimatedButton';
import { handleChatRedirect, handleVetGPTRedirect, handleDentalGPTRedirect, handleMentalWellnessGPTRedirect } from './headerUtils';

const NavigationMenu = () => {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleDentalGPTRedirect}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Dental GPT
      </AnimatedButton>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleVetGPTRedirect}
        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Veterinarian GPT
      </AnimatedButton>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleMentalWellnessGPTRedirect}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Mental Wellness GPT
      </AnimatedButton>
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
