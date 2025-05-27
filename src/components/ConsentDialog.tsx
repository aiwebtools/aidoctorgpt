
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
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto border border-purple-500/30 bg-black/95 backdrop-blur">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">⚠️ CRITICAL MEDICAL DISCLAIMER - READ CAREFULLY</DialogTitle>
          <DialogDescription className="text-neutral-300">
            This disclaimer is legally binding. Please read and acknowledge before continuing.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-md text-white">
            <p className="mb-3 font-bold text-red-200 text-lg">🚨 EMERGENCY WARNING 🚨</p>
            <p className="mb-2 font-semibold">IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY:</p>
            <ul className="space-y-1 text-sm text-white ml-4">
              <li>• Call 911 (US) or your local emergency number IMMEDIATELY</li>
              <li>• Go to the nearest emergency room</li>
              <li>• Contact emergency medical services</li>
              <li>• DO NOT rely on this AI tool for emergency situations</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-950/40 border border-purple-500/50 rounded-md text-white">
            <p className="mb-3 font-bold text-purple-200">I UNDERSTAND AND ACKNOWLEDGE:</p>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">NOT A DOCTOR:</strong> This AI is NOT a licensed medical professional, doctor, nurse, or healthcare provider.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">NO MEDICAL ADVICE:</strong> Information provided is for educational/research purposes ONLY and does not constitute medical advice, diagnosis, or treatment.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">NO DOCTOR-PATIENT RELATIONSHIP:</strong> Use of this tool does not create any doctor-patient relationship.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">CONSULT PROFESSIONALS:</strong> I will consult licensed healthcare professionals for all medical concerns, symptoms, or health decisions.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">NO LIABILITY:</strong> The creators, developers, and operators of this tool are not liable for any health outcomes, decisions, or consequences.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">ACCURACY NOT GUARANTEED:</strong> AI responses may contain errors, inaccuracies, or outdated information.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-purple-300">LOCATION SPECIFIC:</strong> Medical practices vary by location. This tool cannot account for local medical standards or regulations.</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-yellow-950/40 border border-yellow-500/50 rounded-md text-white">
            <p className="mb-2 font-bold text-yellow-200">⚠️ USAGE LIMITATIONS:</p>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-green-300">ChatGPT Plus/Pro Users:</strong> Unlimited access to Doctor GPT</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="text-yellow-300">Free ChatGPT Users:</strong> Limited interactions (rate-limited after several messages every few hours)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Usage limits are determined by OpenAI's ChatGPT policies, not by us</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-orange-950/40 border border-orange-500/50 rounded-md text-white">
            <p className="mb-2 font-bold text-orange-200">🛡️ LEGAL DISCLAIMERS:</p>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>USE AT YOUR OWN RISK:</strong> You assume all risks associated with using this tool.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>NO WARRANTIES:</strong> This service is provided "as is" without any warranties or guarantees.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>INDEMNIFICATION:</strong> You agree to hold harmless the creators from any claims, damages, or losses.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>JURISDICTION:</strong> Any disputes will be governed by applicable laws in our jurisdiction.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-blue-950/40 border border-blue-500/50 rounded-md text-white">
            <p className="mb-2 font-bold text-blue-200">📋 WHAT TO DO INSTEAD:</p>
            <ul className="space-y-1 text-sm text-white">
              <li>• Schedule appointments with licensed physicians</li>
              <li>• Visit urgent care for non-emergency concerns</li>
              <li>• Call your doctor's office for medical questions</li>
              <li>• Use telehealth services from licensed providers</li>
              <li>• Consult pharmacists for medication questions</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-glow text-lg py-3"
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
