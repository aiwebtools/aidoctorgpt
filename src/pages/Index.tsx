import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AnimatedButton from '@/components/ui/AnimatedButton';
import ConsentDialog from '@/components/ConsentDialog';
import ElevenLabsWidget from '@/components/ElevenLabsWidget';
import HeyGenAvatar from '@/components/HeyGenAvatar';
import VideoEmbed from '@/components/VideoEmbed';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // For smooth scrolling to sections
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Ensure all external links open in new tabs
  useEffect(() => {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
      if (!(link as HTMLElement).getAttribute('target')) {
        (link as HTMLElement).setAttribute('target', '_blank');
        (link as HTMLElement).setAttribute('rel', 'noopener noreferrer');
      }
    });
  }, []);

  const handleChatRedirect = () => {
    window.open('https://chatgpt.com/g/g-mFtK9rcS6-doctor-gpt', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO-optimized page structure */}
      <Header />
      <ConsentDialog />
      <ElevenLabsWidget />
      
      <main className="flex-grow">
        {/* H1 is in HeroSection for SEO */}
        <HeroSection />
        <HeyGenAvatar />
        <FeaturesSection />
        <HowItWorksSection />
        
        {/* SEO-optimized Call to Action Section */}
        <section className="py-20 relative overflow-hidden" aria-label="Get started with AI Doctor GPT">
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYxMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto text-balance">
                Start Your Free AI Health Consultation with <span className="text-gradient">AI Doctor GPT</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Join over 50,000+ users who trust AI Doctor GPT for free health guidance, symptom analysis, and medical information. Available 24/7 with instant responses.
              </p>
              
              <div className="mb-10">
                <AnimatedButton 
                  variant="secondary"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow btn-glow"
                  icon={<ArrowRight className="ml-1" />}
                  onClick={handleChatRedirect}
                  aria-label="Try AI Doctor GPT Now - Free Health Assistant"
                >
                  Try AI Doctor GPT Now - Free
                </AnimatedButton>
              </div>
              
              {/* SEO-optimized disclaimer with better structure */}
              <div id="main-disclaimer" className="max-w-3xl mx-auto p-6 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
                <h3 className="text-xl font-bold text-white/90 mb-3">⚠️ Important Medical Disclaimer</h3>
                <div className="text-left space-y-3">
                  <p className="text-neutral-400">
                    <strong>AI Doctor GPT is NOT a licensed medical professional.</strong> This AI health assistant provides information for educational purposes only and should NOT be used as a substitute for professional medical advice, diagnosis, or treatment from qualified healthcare providers.
                  </p>
                  <p className="text-neutral-400">
                    <strong>For medical emergencies:</strong> Call 911 (US), 999 (UK), or your local emergency services immediately. Do not use this AI tool for emergency situations.
                  </p>
                  <p className="text-neutral-400">
                    <strong>Always consult healthcare professionals:</strong> If you are experiencing persistent, severe, or worsening symptoms, consult a licensed doctor, physician, or qualified medical professional immediately.
                  </p>
                  <p className="text-neutral-400">
                    By using AI Doctor GPT, you acknowledge that all recommendations are general guidance and that you should always seek qualified medical attention for health concerns.
                  </p>
                </div>
                
                {/* SEO-optimized pricing information */}
                <div className="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                  <h4 className="font-medium text-purple-200 mb-2">Free AI Health Assistant - Access Information:</h4>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                      <span><strong>Unlimited free access</strong> with ChatGPT Plus or Pro subscription</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
                      <span><strong>Limited free interactions</strong> with standard ChatGPT accounts</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contact information for SEO */}
              <div className="mt-8">
                <h3 className="text-neutral-300 mb-2 font-semibold">📞 Contact AI Web Tools LLC</h3>
                <address className="not-italic">
                  <p className="text-neutral-400">📧 Email: <a href="mailto:Contact@ai-webtools.com" className="text-purple-400 hover:text-purple-300">Contact@ai-webtools.com</a></p>
                  <p className="text-neutral-400">☎ Support: <a href="tel:+14758008096" className="text-purple-400 hover:text-purple-300">(475) 800-8096</a></p>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
