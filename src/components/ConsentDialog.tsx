
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
      title: "Welcome to AI Web Tools!",
      description: "Ready to explore our AI-powered features.",
      duration: 3000,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[95vw] max-w-md mx-auto border border-purple-500/30 bg-black/95 backdrop-blur-lg p-6 rounded-xl">
        <DialogHeader className="space-y-4 text-center">
          <DialogTitle className="text-xl text-white">Welcome to AI Web Tools! 🚀</DialogTitle>
          <DialogDescription className="text-neutral-300 text-sm">
            Get ready to explore powerful AI tools designed to enhance your productivity.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-3">
          <div className="p-3 bg-purple-950/40 border border-purple-500/50 rounded-md text-white">
            <p className="text-sm font-medium text-purple-200 mb-2">📋 Quick Disclaimer:</p>
            <ul className="space-y-1 text-xs text-white">
              <li>• This is an AI tool for informational purposes only</li>
              <li>• Not a substitute for professional advice</li>
              <li>• Always consult qualified professionals for important decisions</li>
            </ul>
          </div>
          
          <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-md text-white">
            <p className="text-xs text-red-200 font-medium">🚨 Emergency? Call 911 or your local emergency number immediately</p>
          </div>
        </div>

        <DialogFooter>
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-glow text-sm py-3"
            onClick={handleConsent}
          >
            Got It! Let's Get Started ✨
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentDialog;
