
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
      title: "Consent Acknowledged",
      description: "Thank you for acknowledging our comprehensive disclaimer.",
      duration: 4000, // 4 seconds
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg max-w-[95vw] max-h-[85vh] overflow-y-auto border border-purple-500/30 bg-black/95 backdrop-blur">
        <DialogHeader>
          <div className="flex justify-between items-start mb-2">
            <DialogTitle className="text-lg text-white flex-1">⚠️ MEDICAL DISCLAIMER</DialogTitle>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-glow text-sm px-4 py-1 ml-2"
              onClick={handleConsent}
            >
              I AGREE
            </Button>
          </div>
          <DialogDescription className="text-neutral-300 text-sm">
            Please read and acknowledge before continuing.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-2 space-y-3">
          <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-md text-white">
            <p className="mb-2 font-bold text-red-200 text-base">🚨 EMERGENCY WARNING 🚨</p>
            <p className="mb-2 font-semibold text-sm">IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY:</p>
            <ul className="space-y-1 text-xs text-white ml-4">
              <li>• Call 911 (US) or your local emergency number IMMEDIATELY</li>
              <li>• Go to the nearest emergency room</li>
              <li>• DO NOT rely on this AI tool for emergency situations</li>
            </ul>
          </div>

          <div className="p-3 bg-purple-950/40 border border-purple-500/50 rounded-md text-white">
            <p className="mb-2 font-bold text-purple-200 text-sm">I UNDERSTAND AND ACKNOWLEDGE:</p>
            <ul className="space-y-1 text-xs text-white">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">NOT A DOCTOR:</strong> This AI is NOT a licensed medical professional.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">NO MEDICAL ADVICE:</strong> Information is for educational purposes ONLY.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">CONSULT PROFESSIONALS:</strong> Always consult licensed healthcare professionals.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">NO LIABILITY:</strong> Creators are not liable for any health outcomes.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">ACCURACY NOT GUARANTEED:</strong> AI responses may contain errors.</span>
              </li>
            </ul>
          </div>
          
          <div className="p-3 bg-yellow-950/40 border border-yellow-500/50 rounded-md text-white">
            <p className="mb-2 font-bold text-yellow-200 text-sm">⚠️ USAGE LIMITATIONS:</p>
            <ul className="space-y-1 text-xs text-white">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-green-300">ChatGPT Plus/Pro:</strong> Unlimited access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-yellow-300">Free ChatGPT:</strong> Limited interactions</span>
              </li>
            </ul>
          </div>

          <div className="p-3 bg-blue-950/40 border border-blue-500/50 rounded-md text-white">
            <p className="mb-2 font-bold text-blue-200 text-sm">📋 WHAT TO DO INSTEAD:</p>
            <ul className="space-y-1 text-xs text-white">
              <li>• Schedule appointments with licensed physicians</li>
              <li>• Visit urgent care for non-emergency concerns</li>
              <li>• Use telehealth services from licensed providers</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-glow text-base py-2"
            onClick={handleConsent}
          >
            I HAVE READ, UNDERSTAND, AND AGREE TO ALL TERMS ABOVE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentDialog;
