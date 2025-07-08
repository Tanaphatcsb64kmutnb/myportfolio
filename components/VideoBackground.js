// src/components/VideoBackground.js
import { useState, useEffect, useRef } from 'react';

const VideoBackground = ({ children, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to handle video load and play
  const handleVideoLoad = async () => {
    const video = videoRef.current;
    if (video) {
      try {
        // Reset error state
        setVideoError(false);
        
        // Wait for video to be ready
        await new Promise((resolve, reject) => {
          video.onloadeddata = resolve;
          video.onerror = reject;
        });
        
        // Try to play video
        await video.play();
        setIsPlaying(true);
        setIsLoaded(true);
        
        console.log('Video loaded and playing successfully');
      } catch (error) {
        console.error('Video play failed:', error);
        setVideoError(true);
        setIsLoaded(true);
      }
    }
  };

  // Function to handle video error
  const handleVideoError = (e) => {
    console.error('Video loading error:', e);
    console.error('Error details:', e.target.error);
    setVideoError(true);
    setIsLoaded(true);
  };

  // Function to handle video ended (for loop fallback)
  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(console.error);
    }
  };

  // Re-attempt video load on mount
  useEffect(() => {
    if (!isMobile && !videoError) {
      const timer = setTimeout(() => {
        handleVideoLoad();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile, videoError]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Fixed Video Background */}
      {!isMobile && !videoError && (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden" style={{ zIndex: -2 }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onEnded={handleVideoEnded}
            onCanPlay={() => {
              console.log('Video can play');
              setIsLoaded(true);
            }}
            onLoadStart={() => {
              console.log('Video load started');
            }}
          >
            <source src="https://sdpjneouogwaatdu.public.blob.vercel-storage.com/videobackground2-AtU7mPXetHRDl5khtAbYVqFzE6B6au.mp4" type="video/mp4" />
            <source src="/videobackground2.mp4" type="video/mp4" />
            <source src="./videobackground2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      
      {/* Fallback background สำหรับ mobile หรือเมื่อ video โหลดไม่ได้ */}
      {(isMobile || videoError) && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"
          style={{ zIndex: -2 }}
        />
      )}
      
      {/* Loading overlay with better UX */}
      {!isLoaded && !isMobile && !videoError && (
        <div className="fixed inset-0 bg-black flex items-center justify-center" style={{ zIndex: -1 }}>
          <div className="text-center">
            <div className="text-white text-lg animate-pulse mb-4">Loading video...</div>
            <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-full h-full bg-white animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Error message */}
      {videoError && !isMobile && (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center" style={{ zIndex: -1 }}>
          <div className="text-center text-white">
            <p className="text-lg mb-4">Video unavailable</p>
            <button 
              onClick={() => {
                setVideoError(false);
                setIsLoaded(false);
                handleVideoLoad();
              }}
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}
      
      {/* Overlay สำหรับทำให้ content อ่านง่าย */}
      <div className="fixed inset-0 bg-black/50 pointer-events-none" style={{ zIndex: -1 }}></div>
      
      {/* เพิ่ม gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 pointer-events-none" style={{ zIndex: -1 }}></div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;