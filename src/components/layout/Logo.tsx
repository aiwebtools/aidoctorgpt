
import React from 'react';
import { Heart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex flex-col items-start">
      <a href="/" className="flex items-center hover-scale">
        <span className={`text-2xl font-bold text-gradient`}>
          Ai<span className="text-white">DoctorGPT</span>
        </span>
      </a>
      <p className="text-neutral-500 text-xs mt-1 flex items-center">
        Made with <Heart className="h-3 w-3 text-pink-500 mx-1 animate-pulse-slow" /> for better and free healthcare
      </p>
    </div>
  );
};

export default Logo;
