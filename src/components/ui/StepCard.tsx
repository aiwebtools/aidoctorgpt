
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

const StepCard = ({
  number,
  title,
  description,
  className,
}: StepCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative p-6 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-500 group",
        isHovered ? "shadow-neon -translate-y-2" : "shadow-soft hover:-translate-y-1",
        "animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${number * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md z-10 transition-all duration-500 ${
          isHovered ? 'bg-gradient-to-br from-purple-500 to-pink-500 scale-110' : 'bg-purple-600'
        }`}
      >
        <div className="text-white relative z-10">{number}</div>
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse-slow"></div>
        )}
      </div>
      
      <div className="pt-2">
        <h3 className={`text-lg font-semibold mb-2 transition-all duration-300 ${
          isHovered ? 'text-gradient' : 'text-white/90'
        }`}>
          {title}
        </h3>
        <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Border glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 ${
        isHovered ? 'border-purple-500/50 blur-[1px]' : ''
      }`}></div>
    </div>
  );
};

export default StepCard;
