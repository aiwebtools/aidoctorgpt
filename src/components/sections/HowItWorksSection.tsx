
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
      description: "Medicus analyzes your details and suggests possible causes based on medical knowledge."
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">How Medicus Works</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Getting started with Medicus, your personal AI Doctor, is quick and easy. Follow these simple steps to receive informational health insights.
          </p>
        </div>

        {/* Prominent disclaimer before steps */}
        <div className="mb-12 p-6 bg-red-900/30 backdrop-blur-sm border border-red-500/50 rounded-2xl shadow-glow">
          <h3 className="text-xl font-bold text-red-300 mb-3 flex items-center">
            ⚠️ CRITICAL MEDICAL DISCLAIMER
          </h3>
          <p className="text-red-200 font-medium">
            Medicus (AI Doctor GPT) is NOT a substitute for professional medical advice. This AI tool provides INFORMATIONAL content only. 
            Always consult licensed healthcare professionals for medical decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Connecting line with glow effect */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-400/50 to-pink-500/50 shadow-glow"></div>
          
          {steps.map((step, index) => (
            <div key={index}>
              <div 
                className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:translate-y-24'}`}
              >
                <StepCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </div>
              
              {/* Disclaimer after each step */}
              {index === 1 && (
                <div className="mt-8 p-4 bg-yellow-900/20 backdrop-blur-sm border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-200 text-sm font-medium">
                    🔔 Remember: AI insights are not medical diagnoses. Severe symptoms require immediate professional medical attention.
                  </p>
                </div>
              )}
              
              {index === 3 && (
                <div className="mt-8 p-4 bg-orange-900/20 backdrop-blur-sm border border-orange-500/30 rounded-lg">
                  <p className="text-orange-200 text-sm font-medium">
                    📋 Important: Never use AI recommendations to replace prescribed medications or treatments without consulting your doctor.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Final comprehensive disclaimer */}
        <div className="mt-16 p-8 bg-purple-900/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl shadow-glow">
          <h3 className="text-2xl font-bold text-purple-200 mb-4 text-center">⚠️ ESSENTIAL MEDICAL DISCLAIMERS ⚠️</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-red-900/40 rounded-lg border border-red-500/30">
                <h4 className="font-bold text-red-300 mb-2">🚨 Emergency Warning</h4>
                <p className="text-red-200 text-sm">
                  For chest pain, difficulty breathing, severe bleeding, loss of consciousness, or other emergencies - call 911 immediately. Do NOT use AI tools for emergencies.
                </p>
              </div>
              
              <div className="p-4 bg-yellow-900/40 rounded-lg border border-yellow-500/30">
                <h4 className="font-bold text-yellow-300 mb-2">⚖️ Legal Notice</h4>
                <p className="text-yellow-200 text-sm">
                  This AI is not licensed to practice medicine. Information provided is for educational purposes only and does not constitute medical advice.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-900/40 rounded-lg border border-blue-500/30">
                <h4 className="font-bold text-blue-300 mb-2">👨‍⚕️ Professional Consultation Required</h4>
                <p className="text-blue-200 text-sm">
                  Always consult qualified healthcare professionals for diagnosis, treatment, and medical decisions. AI cannot replace human medical expertise.
                </p>
              </div>
              
              <div className="p-4 bg-green-900/40 rounded-lg border border-green-500/30">
                <h4 className="font-bold text-green-300 mb-2">🔒 Privacy & Accuracy</h4>
                <p className="text-green-200 text-sm">
                  AI responses may contain errors. Never share sensitive medical information. This tool is for general information only.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-black/50 rounded-lg border border-white/20">
            <p className="text-neutral-300 text-center font-medium">
              By using Medicus, you acknowledge these disclaimers and agree to seek professional medical care for all health concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
