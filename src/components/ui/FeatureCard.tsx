
import React from 'react';
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
  return (
    <div 
      className={cn(
        "glass-card p-6 flex flex-col h-full animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="rounded-full bg-medical-100 w-12 h-12 flex items-center justify-center text-medical-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-neutral-700">{title}</h3>
      <p className="text-neutral-500 flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;
