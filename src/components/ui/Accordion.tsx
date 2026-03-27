
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle: () => void;
  index: number;
}

const AccordionItem = ({ question, answer, isOpen, onToggle, index }: AccordionItemProps) => {
  return (
    <div 
      className="border-b border-neutral-200 last:border-none animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-neutral-700">{question}</h3>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-white/70 transition-transform",
            isOpen && "transform rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-4 px-2 text-white/70">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface CustomAccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

const CustomAccordion = ({ items, className }: CustomAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("rounded-xl overflow-hidden bg-white shadow-soft", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default CustomAccordion;
