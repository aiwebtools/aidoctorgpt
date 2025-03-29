
import React, { useEffect } from 'react';

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
  // Set up the Eleven Labs API key and check if widget is loaded
  useEffect(() => {
    const apiKey = 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2';
    
    const checkWidgetInterval = setInterval(() => {
      if (window.ElevenLabsConvaiWidget) {
        clearInterval(checkWidgetInterval);
        window.ElevenLabsConvaiWidget.setApiKey(apiKey);
      }
    }, 500);
    
    return () => {
      clearInterval(checkWidgetInterval);
    };
  }, []);

  return null; // No UI needed as the widget is loaded via the script in index.html
};

export default ElevenLabsWidget;
