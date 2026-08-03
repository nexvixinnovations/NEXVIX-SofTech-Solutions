import React from 'react';

/**
 * 3D Isometric Desktop Display with Floating Angled Screens
 * Matching the User's Reference Image Composition
 */
export function Isometric3DHeroShowcase({ 
  leftImage = "/showcase/Bondi Bloom Boutique.png", 
  centerImage = "/showcase/SunPeak Solar Co..png",
  rightImage = "/showcase/Summit Roof & Air.png",
  className = ""
}) {
  return (
    <div className={`relative w-full max-w-4xl mx-auto py-8 ${className}`}>
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6348f6]/20 blur-[130px] rounded-full pointer-events-none"></div>

      {/* 3D Isometric Screen Group Container */}
      <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] perspective-[1200px]">
        
        {/* 1. Left Angled Floating Screen */}
        <div 
          className="absolute left-0 sm:left-4 z-20 w-[48%] sm:w-[46%] rounded-2xl overflow-hidden border border-[#372b6e]/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-700 hover:scale-105"
          style={{
            transform: 'rotateY(22deg) rotateX(10deg) rotateZ(-4deg) translateY(-10px)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="bg-[#0f0b24] p-1 border-b border-[#2a1e57] flex items-center gap-1.5 px-3">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          </div>
          <img 
            src={leftImage} 
            alt="Left Showcase Preview" 
            className="w-full h-auto object-cover object-top aspect-[16/10]"
          />
        </div>

        {/* 2. Center Desktop Monitor (Main Focus) */}
        <div className="relative z-30 w-[68%] sm:w-[65%] flex flex-col items-center shadow-[0_35px_70px_-15px_rgba(99,72,246,0.35)] transition-all duration-700 hover:scale-[1.02]">
          {/* Monitor Frame */}
          <div className="w-full bg-[#120d2e] border-2 border-[#382b75] rounded-2xl p-2 sm:p-3 shadow-2xl relative">
            <div className="overflow-hidden rounded-xl bg-[#080616] aspect-[16/10] border border-[#261c54]">
              <img 
                src={centerImage} 
                alt="Center Showcase Preview" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Front Chin Logo */}
            <div className="flex items-center justify-center pt-2 pb-0.5">
              <div className="w-3 h-3 rounded-full bg-[#6348f6]/80"></div>
            </div>
          </div>
          
          {/* Monitor Stand Base */}
          <div className="w-24 sm:w-32 h-6 bg-gradient-to-b from-[#241a52] to-[#140e36] rounded-b-xl border-x border-b border-[#3b2c7d] shadow-lg"></div>
          <div className="w-40 sm:w-52 h-2.5 bg-gradient-to-r from-[#1a123d] via-[#352775] to-[#1a123d] rounded-full shadow-xl"></div>
        </div>

        {/* 3. Right Angled Floating Screen */}
        <div 
          className="absolute right-0 sm:right-4 z-10 w-[48%] sm:w-[46%] rounded-2xl overflow-hidden border border-[#372b6e]/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-700 hover:scale-105"
          style={{
            transform: 'rotateY(-22deg) rotateX(10deg) rotateZ(4deg) translateY(-20px)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="bg-[#0f0b24] p-1 border-b border-[#2a1e57] flex items-center gap-1.5 px-3">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          </div>
          <img 
            src={rightImage} 
            alt="Right Showcase Preview" 
            className="w-full h-auto object-cover object-top aspect-[16/10]"
          />
        </div>

      </div>

    </div>
  );
}

export function LaptopMockup({ imageSrc, title = "Project Showcase", className = "" }) {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#2b2157] bg-[#090717] ${className}`}>
      <div className="relative overflow-hidden aspect-[16/10] group">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/showcase/SunPeak Solar Co..png";
          }}
        />
      </div>
    </div>
  );
}

export function TabletMockup({ imageSrc, title = "Tablet Preview", className = "" }) {
  return (
    <div className={`relative w-full rounded-xl overflow-hidden shadow-xl border border-[#2b2157] bg-[#090717] ${className}`}>
      <div className="relative overflow-hidden aspect-[4/3] group">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/showcase/Summit Roof & Air.png";
          }}
        />
      </div>
    </div>
  );
}

export function MobileMockup({ imageSrc, title = "Mobile Preview", className = "" }) {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#2b2157] bg-[#090717] ${className}`}>
      <div className="relative overflow-hidden aspect-[9/16] group">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/showcase/Harley Street Dental Studio.png";
          }}
        />
      </div>
    </div>
  );
}

export function HeroTripleDeviceMockup({ 
  laptopImage = "/showcase/SunPeak Solar Co..png", 
  tabletImage = "/showcase/Summit Roof & Air.png",
  mobileImage = "/showcase/Harley Street Dental Studio.png",
  className = ""
}) {
  return (
    <Isometric3DHeroShowcase 
      centerImage={laptopImage}
      leftImage={tabletImage}
      rightImage={mobileImage}
      className={className}
    />
  );
}

export default function DualDeviceMockup({ 
  laptopImage, 
  title = "Project Mockup", 
  className = ""
}) {
  return (
    <div className={`relative w-full max-w-2xl mx-auto py-2 group ${className}`}>
      <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
        <img 
          src={laptopImage} 
          alt={title} 
          className="w-full h-full object-cover object-top aspect-[16/10]"
        />
      </div>
    </div>
  );
}

