
import React from 'react';
import StepCard from '../ui/StepCard';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Describe Your Symptoms",
      description: "Enter your symptoms, age, gender, and relevant medical history into the chat interface."
    },
    {
      number: 2,
      title: "Receive AI-Powered Insights",
      description: "Doctor GPT analyzes your details and suggests possible causes based on medical knowledge."
    },
    {
      number: 3,
      title: "Explore Treatment Options",
      description: "Get recommendations for both pharmaceutical treatments and holistic remedies tailored to your condition."
    },
    {
      number: 4,
      title: "Upload Images (Optional)",
      description: "For visible conditions, upload images to enhance AI's symptom analysis."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-purple-500/10 opacity-20 animate-rotate-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-cyan-900/50 text-cyan-300 mb-4 backdrop-blur-sm border border-cyan-500/20">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-2"></span>
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">How Doctor GPT Works</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Getting started with Doctor GPT is quick and easy. Follow these simple steps to receive informational health insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Connecting line with glow effect */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-400/50 to-pink-500/50 shadow-glow"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:translate-y-24'}`}
            >
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-neutral-300 max-w-3xl mx-auto">
            🔹 Doctor GPT is designed to provide informational support only. Always consult a licensed healthcare provider before making medical decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
