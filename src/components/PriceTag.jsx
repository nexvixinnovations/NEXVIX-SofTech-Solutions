import React from 'react';

export default function PriceTag({ original, offer, save, period = "" }) {
  // Support both pre-formatted string props and raw number props
  const displayOriginal = typeof original === 'number' ? `$${original.toLocaleString()}` : original;
  const displayOffer = typeof offer === 'number' ? `$${offer.toLocaleString()}` : offer;
  const displaySave = save ? (typeof save === 'number' ? `$${save.toLocaleString()}` : save) : null;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        {displayOriginal && (
          <span className="text-sm sm:text-base font-semibold text-slate-400 line-through font-mono">
            {displayOriginal}
          </span>
        )}
        {displaySave && (
          <span className="px-2.5 py-0.5 text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full">
            Save {displaySave}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F172A]">
          {displayOffer}
        </span>
        {period && <span className="text-sm font-medium text-slate-500">{period}</span>}
      </div>
    </div>
  );
}
