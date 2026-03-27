import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import ConsentDialog from '@/components/ConsentDialog';
import { handleChatRedirect } from '@/components/layout/headerUtils';
import VideoEmbed from '@/components/VideoEmbed';
import { ArrowRight, Star, Users, Shield, Zap, Globe, Heart } from 'lucide-react';
import ozioKitImage from '@/assets/ozio-emergency-kit.jpg';

const MEDICUS_MATCH = 'g-69c4da4473b0819185462889b7348a28-medicus-wellcheck-gpt';

const Index = () => {
  // For smooth scrolling to sections
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (anchor?.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Ensure external links open in new tabs and play click sounds reliably
  useEffect(() => {
    const externalLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');
    externalLinks.forEach((link) => {
      if (!link.getAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });

    const handleExternalLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="http"]') as HTMLAnchorElement | null;
      if (!anchor || e.defaultPrevented) return;

      e.preventDefault();
      const href = anchor.href;
      const isMedicus = href.includes(MEDICUS_MATCH);
      const popup = window.open('', '_blank', 'noopener,noreferrer');

      try {
        const audio = new Audio(isMedicus ? '/sounds/medicus-click.mp3' : '/sounds/general-click.mp3');
        audio.volume = 0.7;
        audio.preload = 'auto';
        audio.play().catch(() => {});
      } catch {}

      if (popup) {
        popup.location.href = href;
      } else {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    };

    document.addEventListener('click', handleExternalLinkClick);
    return () => document.removeEventListener('click', handleExternalLinkClick);
  }, []);

  // Mobile scroll hardening: remove known third-party touch blockers
  useEffect(() => {
    if (!window.matchMedia('(max-width: 768px)').matches) return;

    const html = document.documentElement;
    const body = document.body;

    html.style.overflowY = 'auto';
    body.style.overflowY = 'auto';
    html.style.touchAction = 'auto';
    body.style.touchAction = 'auto';

    const removeTouchBlockers = () => {
      document
        .querySelectorAll('elevenlabs-convai, script[src*="elevenlabs.io/convai-widget"], iframe[src*="elevenlabs"]')
        .forEach((el) => el.remove());
    };

    removeTouchBlockers();
    const timeoutA = window.setTimeout(removeTouchBlockers, 1000);
    const timeoutB = window.setTimeout(removeTouchBlockers, 3000);

    return () => {
      window.clearTimeout(timeoutA);
      window.clearTimeout(timeoutB);
      html.style.touchAction = '';
      body.style.touchAction = '';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative" style={{ overflowX: 'hidden' }}>
      {/* Divine Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950"></div>
        
        {/* Orbs - hidden on mobile for performance */}
        <div className="hidden md:block absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/15 via-cyan-500/10 to-pink-500/15 blur-3xl animate-float opacity-80"></div>
        <div className="hidden md:block absolute top-1/3 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-cyan-500/10 blur-3xl animate-float opacity-70" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="hidden md:block absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-indigo-500/15 blur-3xl animate-float opacity-60" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        
        {/* Subtle glow - single layer on mobile */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/5 to-transparent"></div>
      </div>

      {/* SEO-optimized page structure */}
      <div className="relative z-10">
        <Header />
        <ConsentDialog />
        
        <main className="flex-grow">
          {/* H1 is in HeroSection for SEO */}
          <HeroSection />
          
          
          {/* SEO-optimized AI Tools Section */}
          <section className="py-20 relative overflow-hidden" aria-label="Free AI Tools by AI Web Tools">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-indigo-900/60 to-cyan-900/70 backdrop-blur-sm"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent shadow-lg shadow-purple-500/30"></div>
            </div>
            
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <div className="text-center mb-16">
                <p className="text-sm text-purple-300 font-semibold mb-3">Personal Healthcare AI Tools Suite</p>
                <h2 className="text-4xl sm:text-5xl font-bold mb-8 max-w-4xl mx-auto text-balance leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">AI Web Tools</span> - 5 Free AI Health Tools
                </h2>
                <p className="text-neutral-200 text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
                  Access our complete suite of specialized AI health assistants - each powered by advanced artificial intelligence to provide instant guidance 24/7. All tools are 100% free and serve 75,000+ users worldwide.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10 max-w-6xl mx-auto">
              <div className="p-6 bg-gradient-to-br from-purple-900/50 via-pink-900/40 to-purple-900/50 rounded-xl border border-purple-400/40 backdrop-blur-lg hover:border-purple-300/60 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-3">👨‍⚕️</div>
                    <h3 className="text-xl font-bold text-purple-200 mb-2">MEDICUS - AI Doctor GPT</h3>
                    <p className="text-white/90 text-sm">Meet Medicus — your personal AI doctor for health guidance, symptoms analysis & medical information</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-900/50 via-cyan-900/40 to-blue-900/50 rounded-xl border border-cyan-400/40 backdrop-blur-lg hover:border-cyan-300/60 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-3">🦷</div>
                    <h3 className="text-xl font-bold text-cyan-200 mb-2">AI Dental GPT</h3>
                    <p className="text-white/90 text-sm">Dental care guidance, oral health tips & teeth concerns</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-green-900/50 via-emerald-900/40 to-green-900/50 rounded-xl border border-emerald-400/40 backdrop-blur-lg hover:border-emerald-300/60 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-3">🐾</div>
                    <h3 className="text-xl font-bold text-emerald-200 mb-2">AI Vet GPT</h3>
                    <p className="text-white/90 text-sm">Pet health guidance, animal care tips & veterinary information</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-indigo-900/50 via-purple-900/40 to-indigo-900/50 rounded-xl border border-indigo-400/40 backdrop-blur-lg hover:border-indigo-300/60 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-3">🧠</div>
                    <h3 className="text-xl font-bold text-indigo-200 mb-2">AI Mental Wellness GPT</h3>
                    <p className="text-white/90 text-sm">Mental health support, stress management & wellness guidance</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-amber-900/50 via-orange-900/40 to-amber-900/50 rounded-xl border border-amber-400/40 backdrop-blur-lg hover:border-amber-300/60 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-3">⚗️</div>
                    <h3 className="text-xl font-bold text-amber-200 mb-2">AI Apothecary GPT</h3>
                    <p className="text-white/90 text-sm">Lost homeopathic remedies & at-home medication formulations</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-white/90 text-lg mb-6">Platform Statistics</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="p-6 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-purple-900/40 rounded-2xl border border-purple-400/30 backdrop-blur-lg hover:border-purple-300/50 transition-all duration-500 hover:scale-105">
                    <Shield className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-bold text-purple-200 mb-2">75,000+</h3>
                    <p className="text-white/90">Active AI Tool Users</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-cyan-900/40 via-blue-900/30 to-cyan-900/40 rounded-2xl border border-cyan-400/30 backdrop-blur-lg hover:border-cyan-300/50 transition-all duration-500 hover:scale-105">
                    <Zap className="h-12 w-12 text-cyan-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-bold text-cyan-200 mb-2">4.8/5</h3>
                    <p className="text-white/90">User Satisfaction Rating</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-pink-900/40 via-purple-900/30 to-pink-900/40 rounded-2xl border border-pink-400/30 backdrop-blur-lg hover:border-pink-300/50 transition-all duration-500 hover:scale-105">
                    <Globe className="h-12 w-12 text-pink-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-bold text-pink-200 mb-2">24/7</h3>
                    <p className="text-white/90">AI Availability</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-green-900/40 rounded-2xl border border-green-400/30 backdrop-blur-lg hover:border-green-300/50 transition-all duration-500 hover:scale-105">
                    <Heart className="h-12 w-12 text-green-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-bold text-green-200 mb-2">100%</h3>
                    <p className="text-white/90">Free AI Access</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <FeaturesSection />
          <HowItWorksSection />
          
          {/* Ozio Emergency Antibiotics Section */}
          <section className="py-16 md:py-20 relative overflow-hidden" aria-label="Emergency Antibiotics from Ozio Medical">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 via-rose-950/50 to-red-950/60"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-black/50 via-red-950/30 to-black/50 backdrop-blur-lg border border-red-500/30 rounded-2xl p-6 md:p-10 shadow-2xl shadow-red-500/10">
                  
                  {/* Image */}
                  <div className="w-full md:w-2/5 flex-shrink-0">
                    <img 
                      src={ozioKitImage} 
                      alt="Ozio Medical Emergency Antibiotics and Medical Kits" 
                      className="rounded-xl border border-red-500/20 shadow-lg w-full"
                      loading="lazy"
                      width={800}
                      height={512}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-red-900/50 text-red-300 mb-4 border border-red-500/30">
                      🚨 Emergency Preparedness
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white leading-tight">
                      Emergency Antibiotics & Medical Kits <span className="text-red-400">— No Prescription Required</span>
                    </h2>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      <strong className="text-red-200">Ozio Medical</strong> is an official member of the <strong>American Telehealth Association (ATA)</strong> and certified by <strong>LegitScript</strong> for safety, legality, and compliance. Get doctor-verified emergency antibiotics, medical kits, and standalone medications shipped directly to you.
                    </p>
                    <ul className="text-white/90 text-sm space-y-2 mb-6">
                      <li className="flex items-center justify-center md:justify-start">
                        <span className="h-2 w-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                        ATA Certified — American Telehealth Association Member
                      </li>
                      <li className="flex items-center justify-center md:justify-start">
                        <span className="h-2 w-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                        LegitScript Verified for Safety & Compliance
                      </li>
                      <li className="flex items-center justify-center md:justify-start">
                        <span className="h-2 w-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                        Emergency Kits starting at $195 — Travel, Contagion & Advanced Kits
                      </li>
                      <li className="flex items-center justify-center md:justify-start">
                        <span className="h-2 w-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                        Standalone Antibiotics & Ivermectin Available
                      </li>
                    </ul>
                    <AnimatedButton 
                      variant="primary" 
                      size="lg"
                      onClick={() => window.open('https://ozio.com', '_blank')}
                      className="bg-gradient-to-r from-red-600 to-rose-600 text-white border-none hover:shadow-2xl hover:shadow-red-500/30 text-lg px-8 py-3"
                      icon={<ArrowRight className="ml-2" />}
                    >
                      💊 Get Emergency Antibiotics — Ozio Medical
                    </AnimatedButton>
                    <p className="text-white/70 text-xs mt-3">
                      Ozio Medical is a third-party service. AI Web Tools LLC is not affiliated with Ozio Medical.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* SEO-optimized Call to Action Section */}
          <section className="py-24 relative overflow-hidden" aria-label="Get started with Medicus AI Doctor GPT">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-pink-900/90 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYxMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-2xl animate-float"></div>
              <div className="absolute bottom-10 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
              
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent shadow-lg shadow-purple-500/30"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent shadow-lg shadow-pink-500/30"></div>
            </div>
            
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <div className="text-center space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-8 max-w-4xl mx-auto text-balance leading-tight">
                  Start Your Free AI Health Consultation with <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Medicus - AI Doctor GPT</span>
                </h2>
                <p className="text-neutral-200 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join over 75,000+ users who trust Medicus, your personal AI Doctor GPT, for free health guidance, symptom analysis, and medical information. Available 24/7 with instant responses powered by advanced AI technology.
                </p>
                
                {/* Educational Disclaimer */}
                <div className="mb-12 p-6 bg-gradient-to-r from-amber-950/40 via-yellow-950/30 to-amber-950/40 border border-amber-400/40 rounded-2xl backdrop-blur-lg max-w-2xl mx-auto shadow-xl shadow-amber-500/10">
                  <p className="text-amber-100 text-lg font-medium flex items-center justify-center">
                    <span className="mr-3 text-2xl">ℹ️</span>
                    For informational, educational, and research purposes only.
                  </p>
                </div>
                
                <div className="mb-12">
                  <AnimatedButton 
                    variant="secondary"
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white border-none hover:shadow-2xl hover:shadow-purple-500/30 btn-glow text-xl px-10 py-4 hover-scale"
                    icon={<ArrowRight className="ml-2" />}
                    onClick={handleChatRedirect}
                    aria-label="Talk to Medicus Now - Free AI Doctor"
                  >
                    Talk to Medicus - Free
                  </AnimatedButton>
                </div>
                
                {/* SEO-optimized disclaimer with better structure */}
                <div id="main-disclaimer" className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-black/50 via-gray-900/40 to-black/50 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-purple-500/10">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">⚠️ Important Medical Disclaimer</h3>
                  <div className="text-left space-y-6">
                    <p className="text-white/90 leading-relaxed text-lg">
                      <strong>Medicus (AI Doctor GPT) is NOT a licensed medical professional.</strong> This AI health assistant provides information for educational purposes only and should NOT be used as a substitute for professional medical advice, diagnosis, or treatment from qualified healthcare providers.
                    </p>
                    <p className="text-white/90 leading-relaxed text-lg">
                      <strong>For medical emergencies:</strong> Call 911 (US), 999 (UK), or your local emergency services immediately. Do not use this AI tool for emergency situations.
                    </p>
                    <p className="text-white/90 leading-relaxed text-lg">
                      <strong>Always consult healthcare professionals:</strong> If you are experiencing persistent, severe, or worsening symptoms, consult a licensed doctor, physician, or qualified medical professional immediately.
                    </p>
                    <p className="text-white/90 leading-relaxed text-lg">
                      By using Medicus (AI Doctor GPT), you acknowledge that all recommendations are general guidance and that you should always seek qualified medical attention for health concerns.
                    </p>
                  </div>
                  
                  {/* SEO-optimized pricing information */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-purple-900/40 rounded-xl border border-purple-400/30 backdrop-blur-sm">
                    <h4 className="font-medium text-purple-200 mb-4 text-xl">Free AI Health Assistant - Access Information:</h4>
                    <ul className="text-white/90 space-y-3 text-lg">
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-green-400 rounded-full mr-4"></span>
                        <span><strong>Unlimited free access</strong> with ChatGPT Plus or Pro subscription</span>
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-yellow-400 rounded-full mr-4"></span>
                        <span><strong>Limited free interactions</strong> with standard ChatGPT accounts</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Contact information for SEO */}
                <div className="mt-12 p-6 bg-gradient-to-r from-gray-900/50 via-slate-900/40 to-gray-900/50 rounded-2xl backdrop-blur-lg border border-white/10">
                  <h3 className="text-neutral-200 mb-4 font-semibold text-xl">📞 Contact AI Web Tools LLC</h3>
                  <address className="not-italic">
                    <p className="text-white/90 mb-2 text-lg">📧 Email: <a href="mailto:Contact@ai-webtools.com" className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-500">Contact@ai-webtools.com</a></p>
                    <p className="text-white/90 text-lg">☎ Support: <a href="tel:+14758008096" className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400 transition-all duration-500">(475) 800-8096</a></p>
                  </address>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
