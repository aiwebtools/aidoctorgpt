
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-medical-500 mb-4">
              Doctor<span className="text-neutral-700">GPT</span>
            </h2>
            <p className="text-neutral-500 mb-4 max-w-xs">
              Your AI healthcare companion, providing personalized medical consultation 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-medical-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-medical-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-medical-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-neutral-500 hover:text-medical-500 transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-500 hover:text-medical-500 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-500 hover:text-medical-500 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-neutral-500 hover:text-medical-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-neutral-500 hover:text-medical-500 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-700 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-500">
                <span className="block">Email:</span>
                <a href="mailto:contact@doctorgpt.com" className="text-medical-500 hover:underline">contact@doctorgpt.com</a>
              </li>
              <li className="text-neutral-500">
                <span className="block">Support:</span>
                <a href="mailto:support@doctorgpt.com" className="text-medical-500 hover:underline">support@doctorgpt.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Doctor GPT. All rights reserved.
          </p>
          <p className="text-neutral-400 text-xs mt-2 flex items-center justify-center">
            Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
