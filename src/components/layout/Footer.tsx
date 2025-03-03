import React from 'react';
import { Heart, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-md pt-16 pb-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-4">
              Ai<span className="text-white">DoctorGPT</span>
            </h2>
            <p className="text-neutral-400 mb-4 max-w-xs hover:text-neutral-300 transition-colors duration-300">
              Your AI healthcare companion, providing personalized medical consultation 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors hover-scale">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors hover-scale">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors hover-scale">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-neutral-400 hover:text-purple-400 transition-colors interactive-link inline-block">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-400 hover:text-purple-400 transition-colors interactive-link inline-block">How It Works</a>
              </li>
              <li>
                <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-400 transition-colors interactive-link inline-block">Veterinarian GPT</a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-400 transition-colors interactive-link inline-block">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400">
                <span className="block">Email:</span>
                <a href="mailto:Contact@ai-webtools.com" className="text-purple-400 hover:text-purple-300 interactive-link inline-block">Contact@ai-webtools.com</a>
              </li>
              <li className="text-neutral-400">
                <span className="block">Support:</span>
                <a href="tel:4758008096" className="text-purple-400 hover:text-purple-300 hover-scale inline-flex items-center group">
                  <Phone className="h-4 w-4 mr-1 group-hover:text-purple-300 transition-colors" /> (475) 800-8096
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © {currentYear} AI WEB TOOLS LLC. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs mt-2 flex items-center justify-center">
            Made with <Heart className="h-3 w-3 text-pink-500 mx-1 animate-pulse-slow" /> for better and free healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
