
import React, { useEffect, useRef } from 'react';

const HeyGenAvatar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only create the script if the container exists
    if (!containerRef.current) return;

    const host = "https://labs.heygen.com";
    const url = host + "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJBbm5fRG9jdG9yX1NpdHRpbmdfcHVibGlj%0D%0AIiwicHJldmlld0ltZyI6Imh0dHBzOi8vZmlsZXMyLmhleWdlbi5haS9hdmF0YXIvdjMvMjZkZTM2%0D%0AOWIyZDQ0NDNlNTg2ZGVkZjI3YWYxZTBjMWRfNDU1NzAvcHJldmlld190YWxrXzEud2VicCIsIm5l%0D%0AZWRSZW1vdmVCYWNrZ3JvdW5kIjpmYWxzZSwia25vd2xlZGdlQmFzZUlkIjoiNTZmYmY3MTJjNThi%0D%0ANDQxMzg0MTNhOTliOWMzZmQwNGUiLCJ1c2VybmFtZSI6IjlkNjcxNjU4ZjFmOTRiNzE5YjJlNTg4%0D%0ANjM1ZDAxZjdiIn0%3D&inIFrame=1";
    
    const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;

    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.title = "Doctor GPT Avatar";
    iframe.allow = "microphone";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "8px";
    iframe.style.pointerEvents = isMobileViewport ? 'none' : 'auto';
    iframe.style.touchAction = 'pan-y';
    
    // Clear the container and append the iframe
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(iframe);
    }
    
    // Set up message listener to handle avatar interactions
    const messageHandler = (e: MessageEvent) => {
      if (e.origin === host && e.data && e.data.type && e.data.type === "streaming-embed") {
        if (e.data.action === "init" || e.data.action === "show") {
          // Make sure the avatar is visible
          if (iframe.style.display === 'none') {
            iframe.style.display = 'block';
          }
        }
      }
    };

    window.addEventListener('message', messageHandler);

    // Clean up on unmount
    return () => {
      window.removeEventListener('message', messageHandler);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full relative py-8 bg-black/30">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          Meet Your AI Doctor Assistant
        </h3>
        <p className="text-neutral-300 mb-6">
          Interactive AI doctor powered by HeyGen - click on the avatar to interact
        </p>
        
        {/* Container for the HeyGen Avatar iframe */}
        <div 
          ref={containerRef}
          className="mx-auto rounded-lg border border-purple-500/40 shadow-lg overflow-hidden"
          style={{ 
            height: "400px", 
            maxWidth: "650px", 
            aspectRatio: "16/9",
            backgroundColor: "#111827"
          }}
        >
          {/* The iframe will be injected here */}
        </div>
      </div>
    </div>
  );
};

export default HeyGenAvatar;
