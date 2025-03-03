
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const AnimatedButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon,
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medical-500 overflow-hidden";
  
  const variantStyles = {
    primary: "bg-medical-500 text-white hover:bg-medical-600 transform hover:-translate-y-1 shadow-md hover:shadow-xl",
    secondary: "bg-white text-medical-500 border border-medical-300 hover:border-medical-500 transform hover:-translate-y-1 shadow-sm hover:shadow-md",
    outline: "bg-transparent text-medical-500 border border-medical-500 hover:bg-medical-100 transform hover:-translate-y-1",
    ghost: "bg-transparent text-medical-500 hover:bg-medical-100 transform hover:-translate-y-0.5"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        {children}
      </span>
      <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-medical-400 to-medical-600 origin-left transition-transform duration-500" />
    </button>
  );
};

export default AnimatedButton;
