import React from 'react';

export default function BrowserMockup({ 
  url = "https://nexvix.com/demo", 
  title = "Showcase Project", 
  imageSrc, 
  industryTag = "Blue-Collar",
  description = "",
  ambientColor = "from-indigo-100/60 via-purple-50/40 to-blue-100/50",
  onCardClick
}) {
  return (
    <div 
      onClick={onCardClick}
      className="bg-[#120d29] border border-[#271d52] rounded-2xl p-5 flex flex-col justify-between h-full group cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/30 hover:border-purple-500/60"
    >
      {/* Top Header Strip (Industry Tag & Badge) */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
        <span className="text-[11px] font-bold tracking-wider text-purple-300 uppercase bg-[#1a1240] px-3 py-1 rounded-full border border-[#341d6e]">
          {industryTag}
        </span>
        <span className="text-[11px] font-bold text-slate-400 bg-[#0f0b24] px-2.5 py-0.5 rounded-full border border-[#271d52]">
          48h Build
        </span>
      </div>

      {/* Clean Direct Showcase Image Container (No Device Frame / Bezel) */}
      <div className="relative z-10 my-2 overflow-hidden rounded-xl border border-[#2b2157] shadow-lg bg-[#090717] aspect-[16/10]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/showcase/SunPeak Solar Co. MU.png";
          }}
        />
      </div>

      {/* Card Details Bottom */}
      <div className="relative z-10 mt-3 pt-3 border-t border-[#1f1745]">
        <h3 className="font-heading font-extrabold text-lg text-white mb-1 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

}




