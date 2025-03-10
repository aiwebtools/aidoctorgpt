
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
      setOpen(true);
    }
  }, []);

  const handleConsent = () => {
    // Save consent to localStorage
    localStorage.setItem('user-consent', 'true');
    setOpen(false);
    toast({
      title: "Consent Acknowledged",
      description: "Thank you for acknowledging our disclaimer.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border border-purple-500/30 bg-black/95 backdrop-blur">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">Important Disclaimer</DialogTitle>
          <DialogDescription className="text-neutral-300">
            Please read and acknowledge before continuing
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="mb-6 p-4 bg-purple-950/40 border border-purple-500/50 rounded-md text-white">
            <p className="mb-3 font-semibold text-purple-200">I understand and acknowledge that:</p>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>This is <strong className="text-purple-300">NOT</strong> an actual doctor and provides no medical diagnosis or treatment.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>I am using this application for research and informational/educational purposes only.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>For any medical concerns, I should consult with a licensed healthcare professional.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>In case of a medical emergency, I should call emergency services immediately.</span>
              </li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-glow"
            onClick={handleConsent}
          >
            I AGREE AND UNDERSTAND
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentDialog;
