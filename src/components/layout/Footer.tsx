import React from 'react';
import { Heart, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black/60 via-purple-950/40 to-indigo-950/60 backdrop-blur-xl pt-20 pb-12 relative overflow-hidden">
      {/* Divine Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-float opacity-60" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 blur-3xl animate-float opacity-50" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        
        {/* Shimmering particles */}
        <div className="absolute top-16 left-[15%] w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-float opacity-80" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-32 right-[20%] w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-float opacity-70" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-[60%] w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-float opacity-60" style={{ animationDuration: '5s', animationDelay: '2.5s' }}></div>
        <div className="absolute top-24 left-[70%] w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 animate-float opacity-75" style={{ animationDuration: '7s', animationDelay: '0.5s' }}></div>
        
        {/* Glistening light rays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/5 to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan-500/5 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Divine border effects */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent shadow-lg shadow-purple-500/20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-lg shadow-cyan-500/20"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 hover-scale">
              AiDoctorGPT
            </h2>
            <p className="text-neutral-300 mb-6 max-w-xs hover:text-neutral-200 transition-all duration-500 leading-relaxed">
              Your AI healthcare companion, providing personalized medical consultation 24/7.
            </p>
            <p className="text-neutral-400 text-sm mb-3 flex items-center">
              Made with <Heart className="h-4 w-4 text-pink-400 mx-2 animate-pulse-slow" /> for a better world
            </p>
            <a 
              href="https://aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 text-sm hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 interactive-link inline-block mb-6 hover-scale"
            >
              Presented by AiWebTools.Ai
            </a>
            
            {/* Educational Disclaimer */}
            <div className="p-4 bg-gradient-to-r from-amber-950/30 via-yellow-950/20 to-amber-950/30 border border-amber-500/30 rounded-xl backdrop-blur-sm mb-6">
              <p className="text-amber-200 text-sm font-medium">
                ℹ️ For informational, educational, and research purposes only.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 hover-scale">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 hover-scale">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 hover-scale">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://chatgpt.com/g/g-mFtK9rcS6-doctor-gpt" target="_blank" rel="noopener noreferrer" 
                   className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200 hover:from-yellow-400/30 hover:via-amber-400/30 hover:to-orange-400/30 hover:border-yellow-300/50 hover:text-yellow-100 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 glow-on-hover backdrop-blur-sm font-medium">
                  Doctor GPT
                </a>
              </li>
              <li>
                <a href="https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert" target="_blank" rel="noopener noreferrer" 
                   className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200 hover:from-yellow-400/30 hover:via-amber-400/30 hover:to-orange-400/30 hover:border-yellow-300/50 hover:text-yellow-100 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 glow-on-hover backdrop-blur-sm font-medium">
                  Dental GPT
                </a>
              </li>
              <li>
                <a href="https://petcaregpt.lovable.app/" target="_blank" rel="noopener noreferrer" 
                   className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200 hover:from-yellow-400/30 hover:via-amber-400/30 hover:to-orange-400/30 hover:border-yellow-300/50 hover:text-yellow-100 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 glow-on-hover backdrop-blur-sm font-medium">
                  Veterinarian GPT
                </a>
              </li>
              <li>
                <a href="https://mentalwellnessgpt.lovable.app/" target="_blank" rel="noopener noreferrer" 
                   className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200 hover:from-yellow-400/30 hover:via-amber-400/30 hover:to-orange-400/30 hover:border-yellow-300/50 hover:text-yellow-100 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 glow-on-hover backdrop-blur-sm font-medium">
                  Mental Wellness GPT
                </a>
              </li>
              <li>
                <a href="#features" 
                   className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200 hover:from-yellow-400/30 hover:via-amber-400/30 hover:to-orange-400/30 hover:border-yellow-300/50 hover:text-yellow-100 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 glow-on-hover backdrop-blur-sm font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" 
                   className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200 hover:from-yellow-400/30 hover:via-amber-400/30 hover:to-orange-400/30 hover:border-yellow-300/50 hover:text-yellow-100 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 glow-on-hover backdrop-blur-sm font-medium">
                  How It Works
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" 
                   className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200 hover:from-yellow-400/30 hover:via-amber-400/30 hover:to-orange-400/30 hover:border-yellow-300/50 hover:text-yellow-100 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 glow-on-hover backdrop-blur-sm font-medium">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-neutral-300">
                <span className="block mb-2 text-neutral-400">Email:</span>
                <a href="mailto:Contact@ai-webtools.com" className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-500 interactive-link inline-block hover-scale">Contact@ai-webtools.com</a>
              </li>
              <li className="text-neutral-300">
                <span className="block mb-2 text-neutral-400">Support:</span>
                <a href="tel:4758008096" className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400 transition-all duration-500 hover-scale inline-flex items-center group">
                  <Phone className="h-5 w-5 mr-2 text-purple-400 group-hover:text-pink-400 transition-colors duration-500" /> (475) 800-8096
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 pt-12 text-center">
          <p className="text-neutral-300 text-base mb-4">
            © {currentYear} <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-500">AI WEB TOOLS LLC</a>. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-pink-400 mx-2 animate-pulse-slow" /> for a better world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
