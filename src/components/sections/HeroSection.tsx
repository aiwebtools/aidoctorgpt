
import React from 'react';
import { ArrowRight, Heart, Shield, Star, Users, FileText } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-medical-100 opacity-70 blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 rounded-full bg-medical-200 opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          <div className="flex-1 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-medical-100 text-medical-700 mb-5">
              <span className="flex h-2 w-2 rounded-full bg-medical-500 mr-2"></span>
              Your Personal AI Medical Assistant
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-medical-500">Healthcare</span> Reimagined with AI
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl">
              Doctor GPT provides personalized medical consultations, diagnoses, and treatment recommendations based on your symptoms and medical history.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <AnimatedButton 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="ml-1" />}
              >
                Try Doctor GPT Now
              </AnimatedButton>
              <AnimatedButton 
                variant="secondary" 
                size="lg"
              >
                Learn More
              </AnimatedButton>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-medical-500 mr-2" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-medical-500 mr-2" />
                <span>100,000+ Users</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-medical-500 mr-2" />
                <span>Trusted by Doctors</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-medical-500 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-6 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-medical-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                Live Demo
              </div>
              
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-medical-500" />
                </div>
                <div className="bg-neutral-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                  <p className="text-neutral-700">
                    Hi, I'm Doctor GPT. What symptoms are you experiencing today? Please provide your age, gender, and relevant medical history.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-4 justify-end">
                <div className="bg-medical-100 rounded-2xl rounded-tr-none p-4 max-w-xs">
                  <p className="text-neutral-700">
                    I've been having headaches, fatigue, and dizziness for the past 3 days. I'm a 34-year-old male with no pre-existing conditions.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-neutral-500" />
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-pulse">
                <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-medical-500" />
                </div>
                <div className="bg-neutral-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                  <p className="text-neutral-700">
                    Based on your symptoms, you might be experiencing...
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-neutral-200">
                <div className="flex items-center rounded-full border border-neutral-300 pl-4 focus-within:ring-2 focus-within:ring-medical-500 focus-within:border-medical-500">
                  <input
                    type="text"
                    placeholder="Describe your symptoms..."
                    className="w-full bg-transparent border-none focus:outline-none text-sm py-2"
                  />
                  <button className="ml-2 bg-medical-500 text-white rounded-full p-2">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
