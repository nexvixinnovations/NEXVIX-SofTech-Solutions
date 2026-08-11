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
          <span className="text-lg font-medium text-slate-400 line-through">
            {displayOriginal}
          </span>
        )}
        {displaySave && (
          <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full">
            Save {displaySave}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="font-heading font-extrabold text-3xl sm:text-4xl text-purple-400">
          {displayOffer}
        </span>
        {period && <span className="text-sm font-medium text-slate-400">{period}</span>}
      </div>
    </div>
  );
}
