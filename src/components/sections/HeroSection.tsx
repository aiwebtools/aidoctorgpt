import React from 'react';
import { ArrowRight, Heart, Shield, Star, Users, FileText, AlertTriangle } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import VideoEmbed from '../VideoEmbed';
import { handleChatRedirect, handleMoreAIToolsRedirect } from '../layout/headerUtils';

const HeroSection = () => {
  return <div className="relative pt-20 sm:pt-28 pb-16 sm:pb-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.15),_transparent_70%)]"></div>
        <div className="hidden md:block absolute top-1/3 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          {/* --- LEFT COLUMN: Hero Content --- */}
          <div className="flex-1 animate-fade-in-up w-full">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-900/50 text-purple-300 mb-5 backdrop-blur-sm border border-purple-500/20">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse-slow"></span>
              Personal Healthcare AI Tools Suite
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-5 text-balance leading-tight">
              <span className="text-gradient">MEDICUS</span> - Your Personal AI Doctor GPT & Free Healthcare Tools
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <AnimatedButton variant="primary" size="lg" icon={<ArrowRight className="ml-1" />} onClick={handleChatRedirect} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow btn-glow">
                Talk to Medicus - Free
              </AnimatedButton>
              <AnimatedButton variant="secondary" size="lg" onClick={handleMoreAIToolsRedirect} className="bg-black/30 border-purple-500/30 backdrop-blur-sm text-white hover:bg-black/40 hover:border-purple-500/50">
                More AI Tools
              </AnimatedButton>
            </div>
            
            <p className="text-base sm:text-lg text-white/80 mb-5 max-w-2xl">Meet <strong className="text-purple-300">Medicus</strong>, your personal AI Doctor GPT — powered by advanced artificial intelligence. Get instant medical guidance, symptom analysis, and healthcare insights 24/7. Part of our comprehensive free AI tools platform serving 75,000+ users worldwide. 100% FREE</p>

            {/* Compact Disclaimer */}
            <div className="mb-6 p-4 bg-red-950/30 border border-red-500/40 rounded-lg backdrop-blur-sm">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-200 font-semibold text-sm mb-1">⚠️ Medical Disclaimer:</p>
                  <p className="text-white/90 text-sm leading-relaxed">
                    <strong>NOT a licensed medical professional.</strong> Medicus and all AI tools provide information for educational purposes only and should NOT replace professional medical advice, diagnosis, or treatment. 
                    <strong className="text-red-300"> For emergencies, call 911 immediately.</strong> Always consult qualified healthcare providers for medical concerns.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced stats section with AI Web Tools branding */}
            <div className="flex flex-wrap gap-6 text-sm text-white/80 mb-8">
              <div className="flex items-center group hover-scale">
                <Shield className="h-5 w-5 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="group-hover:text-white/90 transition-colors">AI Web Tools Certified</span>
              </div>
              <div className="flex items-center group hover-scale">
                <Users className="h-5 w-5 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="group-hover:text-white/90 transition-colors">75,000+ AI Tool Users</span>
              </div>
              <div className="flex items-center group hover-scale">
                <Heart className="h-5 w-5 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="group-hover:text-white/90 transition-colors">Free AI Platform</span>
              </div>
              <div className="flex items-center group hover-scale">
                <Star className="h-5 w-5 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors" />
                <span className="group-hover:text-white/90 transition-colors">4.8/5 Rating</span>
              </div>
            </div>
          </div>
          
          {/* --- RIGHT COLUMN: Video Embed --- */}
          <div className="flex-1 animate-fade-in-up w-full max-w-xl mx-auto lg:mx-0" style={{
          animationDelay: '0.2s'
        }}>
            <div className="w-full h-full flex items-center justify-center">
              <VideoEmbed />
            </div>
          </div>
        </div>
        {/* DEMO/Disclaimer below */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <div className="flex-1" />
          <div className="flex-1 glass-card p-6 rounded-2xl shadow-xl relative overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 mt-6">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-bl-lg">
              Live Demo
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center shrink-0 hover-scale">
                <FileText className="h-5 w-5 text-purple-300" />
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 max-w-xs border border-white/10">
                <p className="text-white/90">
                  Hi, I'm <strong className="text-purple-300">Medicus</strong>, your personal AI Doctor. What symptoms are you experiencing today? Please provide your age, gender, and relevant medical history.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-4 justify-end">
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl rounded-tr-none p-4 max-w-xs border border-purple-500/20">
                <p className="text-white/90">
                  I've been having headaches, fatigue, and dizziness for the past 3 days. I'm a 34-year-old male with no pre-existing conditions.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 hover-scale">
                <Users className="h-5 w-5 text-white/80" />
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-pulse">
              <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center shrink-0">
                <FileText className="h-5 w-5 text-purple-300" />
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl rounded-tl-none p-4 max-w-xs border border-white/10">
                <p className="text-white/90">
                  Based on your symptoms, Medicus is analyzing...
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800">
              <div className="flex items-center rounded-full border border-purple-500/30 pl-4 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 backdrop-blur-sm bg-black/20">
                <input type="text" placeholder="Ask Medicus about your symptoms..." className="w-full bg-transparent border-none focus:outline-none text-sm py-2 text-white/90" onClick={handleChatRedirect} readOnly />
                <button className="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-2 hover:shadow-glow transition-shadow duration-300" onClick={handleChatRedirect}>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Comprehensive Disclaimer Section */}
            <div id="comprehensive-disclaimer" className="mt-6 p-6 bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg space-y-4">
              <h3 className="text-xl font-bold text-red-300 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                🚨 COMPREHENSIVE MEDICAL DISCLAIMER
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-950/40 border border-red-500/30 rounded">
                  <p className="font-bold text-red-200 mb-2">🚨 EMERGENCY WARNING:</p>
                  <p className="text-white/90">IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, call 911 (US) or your local emergency number IMMEDIATELY. DO NOT use this AI tool for emergency situations.</p>
                </div>

                <div className="p-3 bg-purple-950/40 border border-purple-500/30 rounded">
                  <p className="font-bold text-purple-200 mb-2">⚠️ NOT A MEDICAL PROFESSIONAL:</p>
                  <p className="text-white/90">Medicus (AI Doctor GPT) is NOT a licensed medical professional, doctor, nurse, or healthcare provider. This AI does not provide medical advice, diagnosis, or treatment. All information is for educational and research purposes ONLY.</p>
                </div>

                <div className="p-3 bg-orange-950/40 border border-orange-500/30 rounded">
                  <p className="font-bold text-orange-200 mb-2">🛡️ NO LIABILITY:</p>
                  <p className="text-white/90">The creators, developers, and operators of this tool are not liable for any health outcomes, medical decisions, or consequences resulting from use of this AI. You use this tool at your own risk.</p>
                </div>

                <div className="p-3 bg-yellow-950/40 border border-yellow-500/30 rounded">
                  <p className="font-bold text-yellow-200 mb-2">⚠️ ACCURACY NOT GUARANTEED:</p>
                  <p className="text-white/90">AI responses may contain errors, inaccuracies, or outdated medical information. Medical practices vary by location and this tool cannot account for local standards or regulations.</p>
                </div>

                <div className="p-3 bg-blue-950/40 border border-blue-500/30 rounded">
                  <p className="font-bold text-blue-200 mb-2">👩‍⚕️ WHAT TO DO INSTEAD:</p>
                  <ul className="text-white/90 space-y-1 ml-4">
                    <li>• Consult licensed physicians for medical concerns</li>
                    <li>• Visit urgent care for non-emergency health issues</li>
                    <li>• Use telehealth services from licensed providers</li>
                    <li>• Call your doctor's office for medical questions</li>
                    <li>• Consult pharmacists for medication questions</li>
                  </ul>
                </div>

                <div className="p-3 bg-green-950/40 border border-green-500/30 rounded">
                  <p className="font-bold text-green-200 mb-2">📊 USAGE INFORMATION:</p>
                  <ul className="text-white/90 space-y-1">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                      <span><strong>ChatGPT Plus/Pro Users:</strong> Unlimited access to Medicus</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
                      <span><strong>Free ChatGPT Users:</strong> Limited interactions (rate-limited after several messages every few hours)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-gray-950/40 border border-gray-500/30 rounded">
                  <p className="font-bold text-gray-200 mb-2">📞 CONTACT INFORMATION:</p>
                  <p className="text-white/90">
                    📧 Email: Contact@ai-webtools.com<br />
                    ☎ Support: (475) 800-8096
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-700">
                <p className="text-xs text-white/80 italic">
                  By using this tool, you acknowledge that you have read, understood, and agree to all terms in this disclaimer. 
                  You agree to hold harmless the creators from any claims, damages, or losses. Use of this service constitutes 
                  acceptance of these terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;
