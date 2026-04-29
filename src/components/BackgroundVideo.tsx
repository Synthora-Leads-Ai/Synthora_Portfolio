import React from 'react';

interface BackgroundVideoProps {
  videoUrl: string;
  opacity?: number;
  overlayColor?: string;
  className?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ 
  videoUrl, 
  opacity = 1, 
  overlayColor = "rgba(10, 10, 15, 0.8)", 
  className = "" 
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity }}
        referrerPolicy="no-referrer"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor }}
      />
      {/* Foggy Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/20 to-bg" />
    </div>
  );
};
