
import React, { useEffect } from 'react';

const HeyGenAvatar = () => {
  useEffect(() => {
    // Create and inject the HeyGen script
    const script = document.createElement('script');
    script.textContent = `!function(window){const host="https://labs.heygen.com",url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJBbm5fRG9jdG9yX1NpdHRpbmdfcHVibGlj%0D%0AIiwicHJldmlld0ltZyI6Imh0dHBzOi8vZmlsZXMyLmhleWdlbi5haS9hdmF0YXIvdjMvMjZkZTM2%0D%0AOWIyZDQ0NDNlNTg2ZGVkZjI3YWYxZTBjMWRfNDU1NzAvcHJldmlld190YWxrXzEud2VicCIsIm5l%0D%0AZWRSZW1vdmVCYWNrZ3JvdW5kIjpmYWxzZSwia25vd2xlZGdlQmFzZUlkIjoiNTZmYmY3MTJjNThi%0D%0ANDQxMzg0MTNhOTliOWMzZmQwNGUiLCJ1c2VybmFtZSI6IjlkNjcxNjU4ZjFmOTRiNzE5YjJlNTg4%0D%0ANjM1ZDAxZjdiIn0%3D&inIFrame=1",clientWidth=document.body.clientWidth,wrapDiv=document.createElement("div");wrapDiv.id="heygen-streaming-embed";const container=document.createElement("div");container.id="heygen-streaming-container";const stylesheet=document.createElement("style");stylesheet.innerHTML=\`\\n  #heygen-streaming-embed {\\n    z-index: 9999;\\n    position: fixed;\\n    left: 40px;\\n    bottom: 40px;\\n    width: 200px;\\n    height: 200px;\\n    border-radius: 50%;\\n    border: 2px solid #fff;\\n    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);\\n    transition: all linear 0.1s;\\n    overflow: hidden;\\n\\n    opacity: 0;\\n    visibility: hidden;\\n  }\\n  #heygen-streaming-embed.show {\\n    opacity: 1;\\n    visibility: visible;\\n  }\\n  #heygen-streaming-embed.expand {\\n    \${clientWidth<540?"height: 266px; width: 96%; left: 50%; transform: translateX(-50%);":"height: 366px; width: calc(366px * 16 / 9);"}\\n    border: 0;\\n    border-radius: 8px;\\n  }\\n  #heygen-streaming-container {\\n    width: 100%;\\n    height: 100%;\\n  }\\n  #heygen-streaming-container iframe {\\n    width: 100%;\\n    height: 100%;\\n    border: 0;\\n  }\\n  \`;const iframe=document.createElement("iframe");iframe.allowFullscreen=!1,iframe.title="Streaming Embed",iframe.role="dialog",iframe.allow="microphone",iframe.src=url;let visible=!1,initial=!1;window.addEventListener("message",(e=>{e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&("init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):"show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):"hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible)))})),container.appendChild(iframe),wrapDiv.appendChild(stylesheet),wrapDiv.appendChild(container),document.body.appendChild(wrapDiv)}(globalThis);`;
    
    document.body.appendChild(script);
    
    // Clean up function to remove the script when component unmounts
    return () => {
      // Find and remove the HeyGen elements if they exist
      const heygenEmbed = document.getElementById('heygen-streaming-embed');
      if (heygenEmbed) {
        document.body.removeChild(heygenEmbed);
      }
      
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full relative py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">
          Meet Your AI Doctor Assistant
        </h3>
        <p className="text-neutral-300 mb-4">
          Interactive AI doctor powered by HeyGen - click on the avatar to interact
        </p>
        {/* This is a placeholder div to reserve space for the HeyGen avatar 
            The actual avatar is injected via script into the body */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default HeyGenAvatar;
