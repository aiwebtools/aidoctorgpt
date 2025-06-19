
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
      <DialogContent className="w-[95vw] max-w-md mx-auto border border-purple-500/30 bg-black/95 backdrop-blur-lg p-6 rounded-xl mobile-safe">
        <DialogHeader className="space-y-4 text-center">
          <DialogTitle className="text-xl text-white">Welcome to AI Web Tools! 🚀</DialogTitle>
          <DialogDescription className="text-neutral-300 text-sm">
            Discover powerful AI tools designed to boost your productivity and creativity.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-3">
          <div className="p-4 bg-gradient-to-r from-purple-950/40 to-pink-950/40 border border-purple-500/50 rounded-lg text-center">
            <p className="text-lg font-medium text-purple-200 mb-2">✨ What's Inside</p>
            <ul className="space-y-1 text-sm text-white">
              <li>🤖 Advanced AI Chat Assistant</li>
              <li>🎨 Creative AI Tools</li>
              <li>⚡ Lightning-Fast Results</li>
              <li>📱 Mobile Optimized</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-glow text-sm py-3 hover:from-purple-500 hover:to-pink-500 transition-all"
            onClick={handleConsent}
          >
            Start Exploring ✨
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentDialog;
