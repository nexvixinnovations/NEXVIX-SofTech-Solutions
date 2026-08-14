import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Logo Component using N.png
 */
export default function Logo({ className = "h-9 w-auto", showText = true }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
      <div className="relative flex items-center justify-center">
        <img 
          src="/N.png" 
          alt="NEXVIX Logo" 
          className={`${className} object-contain transition-transform duration-300 group-hover:scale-105`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/logo.png";
          }}
        />
      </div>
      {showText && (
        <div className="flex flex-col items-start">
          <span className="font-heading font-black italic text-lg tracking-widest uppercase text-nexvix-blue-glow leading-tight">
            NEXVIX
          </span>
          <div className="w-full h-[2px] bg-[#1a1c38] rounded-full overflow-hidden relative my-0.5">
            <div className="h-full w-2/3 bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#6348f6] rounded-full animate-nexvix-loading-line shadow-[0_0_6px_#3b82f6]" />
          </div>
          <span className="text-[10px] font-bold text-slate-300 tracking-tight leading-none">
            SofTech Solutions
          </span>
        </div>
      )}
    </Link>
  );
}


