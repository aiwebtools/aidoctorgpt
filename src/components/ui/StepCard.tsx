
import React from 'react';
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
  return (
    <div 
      className={cn(
        "relative p-6 bg-white rounded-2xl shadow-soft transition-transform duration-300 hover:shadow-medium hover:-translate-y-1 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${number * 0.1}s` }}
    >
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-medical-500 text-white flex items-center justify-center font-bold shadow-md">
        {number}
      </div>
      <div className="pt-2">
        <h3 className="text-lg font-semibold mb-2 text-neutral-700">{title}</h3>
        <p className="text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
