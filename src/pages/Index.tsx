
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

  const handleChatRedirect = () => {
    window.open('https://chatgpt.com/g/g-mFtK9rcS6-doctor-gpt', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ConsentDialog />
      <ElevenLabsWidget />
      
      <main className="flex-grow">
        <HeroSection />
        <HeyGenAvatar />
        <FeaturesSection />
        <HowItWorksSection />
        
        {/* Call to Action Section */}
        <section className="py-20 relative overflow-hidden">
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
                Get Started with <span className="text-gradient">AI Doctor GPT</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Join 50,000+ users who have already discovered the benefits of AI-powered healthcare insights.
              </p>
              
              <div className="mb-10">
                <AnimatedButton 
                  variant="secondary"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow btn-glow"
                  icon={<ArrowRight className="ml-1" />}
                  onClick={handleChatRedirect}
                >
                  Try AI Doctor GPT Now
                </AnimatedButton>
              </div>
              
              <div className="max-w-3xl mx-auto p-6 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
                <h3 className="text-xl font-bold text-white/90 mb-3">⚠️ Important Disclaimer</h3>
                <p className="text-neutral-400 mb-4">
                  Doctor GPT is NOT a licensed medical professional. The information provided is for informational purposes only and should NOT be used as a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="text-neutral-400 mb-4">
                  If you are experiencing severe, persistent, or worsening symptoms, consult a licensed doctor immediately.
                  For medical emergencies, call emergency services or visit the nearest hospital.
                </p>
                <p className="text-neutral-400">
                  By using this tool, you acknowledge that all recommendations are general guidance and that you should always seek qualified medical attention for health concerns.
                </p>
              </div>
              
              <div className="mt-8">
                <p className="text-neutral-300 mb-2">📞 Contact Us</p>
                <p className="text-neutral-400">📧 Email: Contact@ai-webtools.com</p>
                <p className="text-neutral-400">☎ Support: (475) 800-8096</p>
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
