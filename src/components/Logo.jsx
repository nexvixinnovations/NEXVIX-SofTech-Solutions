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
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-lg tracking-wider text-white group-hover:text-purple-400 transition-colors leading-tight">
            NEXVIX
          </span>
          <span className="text-[10px] font-medium text-slate-400 tracking-tight leading-none">
            SofTech Solutions
          </span>
        </div>
      )}
    </Link>
  );
}


