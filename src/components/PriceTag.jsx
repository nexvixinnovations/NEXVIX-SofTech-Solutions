import React from 'react';

export default function PriceTag({ original, offer, period = "" }) {
  const savings = original && offer ? original - offer : 0;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        {original && (
          <span className="text-lg font-medium text-slate-400 line-through">
            ${original.toLocaleString()}
          </span>
        )}
        {savings > 0 && (
          <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
            Save ${savings.toLocaleString()}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="font-heading font-extrabold text-4xl text-indigo-600">
          ${offer.toLocaleString()}
        </span>
        {period && <span className="text-sm font-medium text-slate-500">{period}</span>}
      </div>
    </div>
  );
}

