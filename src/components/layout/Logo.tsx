
import React from 'react';
import { Heart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex flex-col items-start">
      <a href="/" className="flex items-center hover-scale">
        <span className={`text-2xl font-bold text-gradient`}>
          AiDoctorGPT
        </span>
      </a>
      <p className="text-white/70 text-xs mt-1 flex items-center">
        Made with <Heart className="h-3 w-3 text-pink-500 mx-1 animate-pulse-slow" /> for a better world
      </p>
      <a 
        href="https://aiwebtools.lovable.app/?via=aiwebtools" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/70 text-xs mt-1 hover:text-purple-400 transition-colors interactive-link"
      >
        Presented by AiWebTools.Ai
      </a>
    </div>
  );
};

export default Logo;
