
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ConsentDialog = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('user-consent');
    if (!hasConsented) {
      // Show popup after a short delay to ensure page is loaded
      setTimeout(() => setOpen(true), 1000);
    }
  }, []);

  const handleConsent = () => {
    // Save consent to localStorage
    localStorage.setItem('user-consent', 'true');
    setOpen(false);
    toast({
      title: "Welcome to AI Web Tools",
      description: "Access all 5 free AI health tools. Remember: For informational purposes only.",
      duration: 4000,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[95vw] max-w-2xl mx-auto border border-red-500/40 bg-black/95 backdrop-blur-lg p-6 rounded-xl mobile-safe">
        <DialogHeader className="space-y-3 text-center">
          <div className="mb-2">
            <p className="text-sm text-purple-300 font-semibold">Personal Healthcare AI Tools Suite</p>
          </div>
          <DialogTitle className="text-2xl text-white font-bold">⚠️ Important Medical Disclaimer</DialogTitle>
          <DialogDescription className="text-neutral-200 text-base leading-relaxed">
            Please read this carefully before using our AI health tools
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="p-4 bg-gradient-to-r from-red-950/60 to-orange-950/60 border border-red-500/50 rounded-lg">
            <p className="text-lg font-bold text-red-200 mb-3">🚨 NOT Medical Advice</p>
            <p className="text-sm text-neutral-200 leading-relaxed mb-3">
              <strong>Medicus (AI Doctor GPT) and all AI Web Tools are NOT licensed medical professionals.</strong> These AI tools do not provide medical advice, diagnosis, or treatment.
            </p>
            <p className="text-sm text-neutral-200 leading-relaxed">
              All information provided is for <strong>informational, educational, and exploratory purposes ONLY</strong> and should not replace consultation with qualified healthcare providers.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border border-purple-500/50 rounded-lg">
            <p className="text-lg font-medium text-purple-200 mb-3">🤖 Our 5 Free AI Tools</p>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-center"><span className="mr-2">👨‍⚕️</span> <strong>MEDICUS - AI Doctor GPT</strong> - Your personal AI doctor for general health guidance</li>
              <li className="flex items-center"><span className="mr-2">🦷</span> <strong>AI Dental GPT</strong> - Dental health information</li>
              <li className="flex items-center"><span className="mr-2">🐾</span> <strong>AI Veterinarian GPT</strong> - Pet care guidance</li>
              <li className="flex items-center"><span className="mr-2">🧠</span> <strong>AI Mental Wellness GPT</strong> - Mental health support</li>
              <li className="flex items-center"><span className="mr-2">⚗️</span> <strong>AI Apothecary GPT</strong> - Homeopathic remedies & formulations</li>
            </ul>
          </div>

          <div className="p-4 bg-gradient-to-r from-amber-950/50 to-yellow-950/50 border border-amber-500/50 rounded-lg">
            <p className="text-sm font-bold text-amber-200 mb-2">⚠️ For Emergencies:</p>
            <p className="text-sm text-neutral-200">
              Call 911 (US), 999 (UK), or your local emergency services immediately. <strong>Do not use these AI tools for emergency situations.</strong>
            </p>
          </div>

          <div className="p-3 bg-black/40 border border-white/20 rounded-lg">
            <p className="text-xs text-white/90 italic">
              By continuing, you acknowledge this is an AI tool for informational purposes only and agree to consult qualified medical professionals for actual health concerns.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-glow text-base py-6 font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            onClick={handleConsent}
          >
            I Understand - Continue to AI Tools
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentDialog;
