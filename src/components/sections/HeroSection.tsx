
import React from 'react';
import { ArrowRight, Heart, Shield, Star, Users, FileText } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';

const HeroSection = () => {
  const handleChatRedirect = () => {
    window.open('https://chatgpt.com/g/g-mFtK9rcS6-doctor-gpt', '_blank');
  };
  
  const handleVetGPTRedirect = () => {
    window.open('https://petcaregpt.lovable.app/', '_blank');
  };
  
  return <div className="relative overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.15),_transparent_70%)]"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl animate-float"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" style={{
        animationDelay: '1.5s',
        animationDuration: '7s'
      }}></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-[20%] w-2 h-2 rounded-full bg-purple-500/70 animate-float" style={{
        animationDuration: '3s'
      }}></div>
        <div className="absolute top-40 left-[70%] w-2 h-2 rounded-full bg-cyan-400/70 animate-float" style={{
        animationDuration: '5s',
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-60 left-[30%] w-3 h-3 rounded-full bg-pink-500/70 animate-float" style={{
        animationDuration: '4s',
        animationDelay: '0.5s'
      }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          <div className="flex-1 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-900/50 text-purple-300 mb-5 backdrop-blur-sm border border-purple-500/20">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse-slow"></span>
              Your Personal AI Medical Assistant
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              <span className="text-gradient">Healthcare</span> Reimagined with AI
            </h1>
            
            <p className="text-xl text-neutral-400 mb-8 max-w-2xl">Doctor GPT provides personalized medical consultations, potential diagnoses, and treatment recommendations based on your symptoms and medical history.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <AnimatedButton variant="primary" size="lg" icon={<ArrowRight className="ml-1" />} onClick={handleChatRedirect} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow btn-glow">
                Try Doctor GPT Now
              </AnimatedButton>
              <AnimatedButton variant="secondary" size="lg" onClick={handleVetGPTRedirect} className="bg-black/30 border-purple-500/30 backdrop-blur-sm text-white hover:bg-black/40 hover:border-purple-500/50">
                Veterinarian GPT
              </AnimatedButton>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
              <div className="flex items-center group hover-scale">
                <Shield className="h-5 w-5 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="group-hover:text-neutral-300 transition-colors">Secure & Confidential</span>
              </div>
              <div className="flex items-center group hover-scale">
                <Users className="h-5 w-5 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="group-hover:text-neutral-300 transition-colors">50,000+ Users</span>
              </div>
              <div className="flex items-center group hover-scale">
                <Heart className="h-5 w-5 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="group-hover:text-neutral-300 transition-colors">AI-Powered Care</span>
              </div>
              <div className="flex items-center group hover-scale">
                <Star className="h-5 w-5 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="group-hover:text-neutral-300 transition-colors">4.7/5 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="glass-card p-6 rounded-2xl shadow-xl relative overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-bl-lg">
                Live Demo
              </div>
              
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center shrink-0 hover-scale">
                  <FileText className="h-5 w-5 text-purple-300" />
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 max-w-xs border border-white/10">
                  <p className="text-neutral-300">
                    Hi, I'm Doctor GPT. What symptoms are you experiencing today? Please provide your age, gender, and relevant medical history.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-4 justify-end">
                <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl rounded-tr-none p-4 max-w-xs border border-purple-500/20">
                  <p className="text-neutral-300">
                    I've been having headaches, fatigue, and dizziness for the past 3 days. I'm a 34-year-old male with no pre-existing conditions.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 hover-scale">
                  <Users className="h-5 w-5 text-neutral-400" />
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-pulse">
                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-purple-300" />
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 max-w-xs border border-white/10">
                  <p className="text-neutral-300">
                    Based on your symptoms, you might be experiencing...
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-neutral-800">
                <div className="flex items-center rounded-full border border-purple-500/30 pl-4 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 backdrop-blur-sm bg-black/20">
                  <input type="text" placeholder="Describe your symptoms..." className="w-full bg-transparent border-none focus:outline-none text-sm py-2 text-neutral-300" onClick={handleChatRedirect} readOnly />
                  <button className="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-2 hover:shadow-glow transition-shadow duration-300" onClick={handleChatRedirect}>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Disclaimer Section */}
            <div id="disclaimer" className="mt-6 p-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
              <h3 className="text-lg font-bold text-neutral-300 mb-2">Disclaimer:</h3>
              <p className="text-neutral-400 font-medium text-sm leading-relaxed">
                Doctor GPT provides general medical information and guidance based on the symptoms and details you provide. However, this tool is not a substitute for professional medical advice, diagnosis, or treatment from a licensed healthcare provider. Always consult a doctor or healthcare professional for serious, persistent, or worsening symptoms. If you are experiencing a medical emergency, call emergency services or seek immediate medical attention.
              </p>
              <p className="text-neutral-400 font-medium text-sm mt-2 leading-relaxed">
                By using this tool, you acknowledge that any advice given is for informational purposes only and should not be used as a definitive medical diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default HeroSection;
