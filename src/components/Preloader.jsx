import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Lock body scroll while splash preloader is visible
    document.body.style.overflow = 'hidden';

    // Begin fade out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Hide preloader element after fade out transition finishes (1500ms + 700ms)
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = 'unset';
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080616] select-none transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Glowing Italic NEXVIX Title */}
        <h1 className="font-heading font-black italic text-5xl sm:text-7xl tracking-widest uppercase text-nexvix-blue-glow drop-shadow-[0_0_30px_rgba(59,130,246,0.85)] mb-2">
          NEXVIX
        </h1>

        {/* Electric Blue Animated Loading Bar Line */}
        <div className="w-48 sm:w-64 h-[4px] bg-[#1a1c38] rounded-full overflow-hidden relative shadow-inner mb-3">
          <div className="h-full w-2/3 bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#6348f6] rounded-full animate-nexvix-loading-line shadow-[0_0_12px_#3b82f6]" />
        </div>

        {/* Subtitle */}
        <p className="font-sans font-bold text-xs sm:text-sm text-slate-300 tracking-widest uppercase opacity-80">
          SofTech Solutions
        </p>

      </div>
    </div>
  );
}
