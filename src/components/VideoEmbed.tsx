
import React, { useEffect, useRef } from "react";

// Declare global YouTube API types
declare global {
  interface Window {
    YT: {
      Player: any;
      PlayerState: any;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

/**
 * Embeds a YouTube video player which auto-plays two videos sequentially.
 * First video: jwjNOKP5mf4, Second video: EKKIttUG0sI
 */
const VIDEO_IDS = ["jwjNOKP5mf4", "EKKIttUG0sI"];

const VideoEmbed: React.FC = () => {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstance = useRef<any>(null);
  const currentVideoIndex = useRef(0);

  useEffect(() => {
    // 1. Load the YouTube Iframe API script if not already present
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // 2. This function runs when the API is loaded
    function onYouTubeIframeAPIReady() {
      playerInstance.current = new window.YT.Player(playerRef.current, {
        videoId: VIDEO_IDS[0],
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          fs: 1,
          mute: 0,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            // Try to unmute and set to 1080p at start
            event.target.unMute();
            // Set to 1080p if supported
            setTimeout(() => {
              if (event.target.getAvailableQualityLevels) {
                const levels = event.target.getAvailableQualityLevels();
                if (levels.includes("hd1080")) {
                  event.target.setPlaybackQuality("hd1080");
                } else if (levels.includes("hd720")) {
                  event.target.setPlaybackQuality("hd720");
                }
              }
            }, 1000);
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            // When video ends (state 0), play the next video
            if (event.data === window.YT.PlayerState.ENDED) {
              currentVideoIndex.current++;
              if (currentVideoIndex.current < VIDEO_IDS.length) {
                event.target.loadVideoById(VIDEO_IDS[currentVideoIndex.current]);
              }
            }
          }
        }
      });
    }

    // Set global function for API
    if (!window.onYouTubeIframeAPIReady) {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      // If API already loaded
      if (window.YT && window.YT.Player) onYouTubeIframeAPIReady();
    }

    return () => {
      // Clean up YouTube player
      if (playerInstance.current && playerInstance.current.destroy) {
        playerInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-full max-w-3xl rounded-lg overflow-hidden border border-purple-600/30 shadow-lg aspect-video bg-black" style={{ touchAction: 'pan-y' }}>
        {/* The YouTube iframe player will be rendered here */}
        <div ref={playerRef} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default VideoEmbed;

