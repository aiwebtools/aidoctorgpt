
import React from 'react';
import AnimatedButton from '../ui/AnimatedButton';
import { handleChatRedirect, handleVetGPTRedirect, handleDentalGPTRedirect, handleMentalWellnessGPTRedirect, handleApothecaryGPTRedirect, handleAmazonClinicRedirect, handleOneMedicalRedirect, handleAntibioticsRedirect, handleMoreAIToolsRedirect } from './headerUtils';

const NavigationMenu = () => {
  const handleDownloadPrompt = () => {
    window.open('https://docs.google.com/document/d/e/2PACX-1vSoix5D-3HfYurJZdgqjQ7n2y6UuwRlB_HqtA1yDfgkQ6Wk6djLrVDwjD-hIBSlnNHkBCWgeF2rmXlK/pub', '_blank');
  };

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
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleApothecaryGPTRedirect}
        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Apothecary GPT
      </AnimatedButton>
      <AnimatedButton 
        variant="secondary" 
        size="sm"
        onClick={handleDownloadPrompt}
        className="bg-black/30 border-purple-500/30 backdrop-blur-sm text-white hover:bg-black/40 hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
      >
        Download Open Source Doctor GPT Prompt
      </AnimatedButton>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleChatRedirect}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Try Doctor GPT
      </AnimatedButton>
      <AnimatedButton 
        variant="secondary" 
        size="sm"
        onClick={handleAmazonClinicRedirect}
        className="bg-gradient-to-r from-orange-600/80 to-amber-600/80 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Amazon Clinic
      </AnimatedButton>
      <AnimatedButton 
        variant="secondary" 
        size="sm"
        onClick={handleOneMedicalRedirect}
        className="bg-gradient-to-r from-teal-600/80 to-cyan-600/80 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        One Medical
      </AnimatedButton>
    </nav>
  );
};

export default NavigationMenu;
