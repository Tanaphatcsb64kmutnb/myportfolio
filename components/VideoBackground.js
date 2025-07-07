// src/components/VideoBackground.js
import { useState, useEffect } from 'react';

const VideoBackground = ({ children, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Fixed Video Background - ครอบคลุมทั้งหน้า */}
      {!isMobile && !videoError && (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden" style={{ zIndex: -2 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            onLoadedData={() => {
              setIsLoaded(true);
            }}
            onError={(e) => {
              console.error('Video loading error:', e);
              setVideoError(true);
              setIsLoaded(true);
            }}
          >
            <source src="/videobackground2.mp4" type="video/mp4" />
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
      
      {/* Loading overlay */}
      {!isLoaded && !isMobile && !videoError && (
        <div className="fixed inset-0 bg-black flex items-center justify-center" style={{ zIndex: -1 }}>
          <div className="text-white text-lg animate-pulse">Loading video...</div>
        </div>
      )}
      
      {/* Overlay สำหรับทำให้ content อ่านง่าย - เพิ่มความจางและทับซ้อน */}
      <div className="fixed inset-0 bg-black/60 pointer-events-none" style={{ zIndex: -1 }}></div>
      
      {/* เพิ่ม gradient overlay เพื่อความนุ่มนวล */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 pointer-events-none" style={{ zIndex: -1 }}></div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;