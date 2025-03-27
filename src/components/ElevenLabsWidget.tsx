
import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

declare global {
  interface Window {
    ElevenLabsConvaiWidget?: {
      open: () => void;
      close: () => void;
      isOpen: () => boolean;
      setApiKey: (key: string) => void;
    };
  }
}

const ElevenLabsWidget = () => {
  const [isWidgetReady, setIsWidgetReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Set up the Eleven Labs API key and check if widget is loaded
  useEffect(() => {
    const apiKey = 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2';
    
    const checkWidgetInterval = setInterval(() => {
      if (window.ElevenLabsConvaiWidget) {
        clearInterval(checkWidgetInterval);
        window.ElevenLabsConvaiWidget.setApiKey(apiKey);
        setIsWidgetReady(true);
      }
    }, 500);
    
    return () => {
      clearInterval(checkWidgetInterval);
    };
  }, []);
  
  const toggleWidget = () => {
    if (!isWidgetReady) return;
    
    if (window.ElevenLabsConvaiWidget?.isOpen()) {
      window.ElevenLabsConvaiWidget.close();
      setIsOpen(false);
    } else {
      window.ElevenLabsConvaiWidget.open();
      setIsOpen(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleWidget}
        className={`
          flex items-center justify-center
          w-14 h-14 rounded-full shadow-lg transition-all duration-300
          ${isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-glow'}
        `}
        aria-label="Doctor GPT Voice Assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
      {!isOpen && (
        <div className="absolute bottom-16 right-0 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white text-sm w-48 shadow-lg border border-purple-500/30">
          <p className="font-medium">Need help?</p>
          <p className="text-neutral-300 text-xs mt-1">Talk to our AI voice assistant</p>
        </div>
      )}
    </div>
  );
};

export default ElevenLabsWidget;
