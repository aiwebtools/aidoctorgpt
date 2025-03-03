
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index?: number;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  index = 0,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "glass-card p-6 flex flex-col h-full animate-fade-in-up relative overflow-hidden group",
        className
      )}
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
      
      {/* Icon wrapper with animation */}
      <div 
        className={`rounded-full bg-purple-900/50 w-14 h-14 flex items-center justify-center text-purple-300 mb-5 transition-all duration-300 relative ${
          isHovered ? 'scale-110 shadow-glow' : ''
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 opacity-30 animate-pulse-slow"></div>
        <div className="relative">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-neutral-400 flex-grow group-hover:text-neutral-300 transition-colors duration-300">
        {description}
      </p>
      
      {/* Interactive indicator */}
      <div className={`w-full h-0.5 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    </div>
  );
};

export default FeatureCard;
