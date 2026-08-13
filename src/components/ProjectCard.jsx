import React from 'react';
import { ExternalLink, Lock, Sparkles, ShieldCheck } from 'lucide-react';
import { categoryBadgeStyles } from '../data/projectsData';

export default function ProjectCard({ project, onCardClick }) {
  const {
    name,
    url,
    hasLiveLink,
    categoryTag,
    description,
    image,
    video,
    isFlagship,
    fullDetails
  } = project;

  const badgeStyle = categoryBadgeStyles[categoryTag] || 'bg-slate-100 text-slate-800 border-slate-200';

  // Format clean displayed URL string
  const displayUrl = url 
    ? url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'client-platform.nexvix.internal';

  if (isFlagship) {
    return (
      <div 
        className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#FFFCF9] border border-[#E8E2D5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.04),_0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08),_0_2px_8px_rgba(0,0,0,0.03)] hover:-translate-y-1"
        onClick={() => onCardClick && onCardClick(project)}
      >
        {/* Flagship Header Banner */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A] text-[#FDFBF7] text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Flagship Showcase
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${badgeStyle}`}>
              {categoryTag}
            </span>
          </div>
          <span className="text-xs text-slate-600 font-medium hidden sm:inline-block">
            NEXVIX SofTech Solutions
          </span>
        </div>

        {/* Grid layout inside flagship card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Browser Frame Preview Left/Top (7 cols on lg) */}
          <div className="lg:col-span-7 overflow-hidden rounded-xl border border-[#E2DCCE] bg-[#FAF8F3] shadow-md group-hover:shadow-lg transition-shadow">
            
            {/* Browser Chrome Bar */}
            <div className="bg-[#EFEAE1] px-4 py-2.5 flex items-center gap-3 border-b border-[#E2DCCE]">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>

              <div className="flex-grow flex items-center justify-center">
                <div className="bg-[#F8F5EE] border border-[#E0D8C8] px-3 py-1 rounded-full text-[11px] font-mono text-stone-600 flex items-center gap-1.5 max-w-[280px] w-full truncate shadow-inner">
                  <Lock className="w-3 h-3 text-stone-400 shrink-0" />
                  <span className="truncate">{displayUrl}</span>
                </div>
              </div>
            </div>

            {/* Preview Media Area */}
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
              {video ? (
                <video
                  src={video}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Card Info Right (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#0F172A] leading-tight mb-3 group-hover:text-[#1E293B] transition-colors">
                {name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {description}
              </p>
              {fullDetails && (
                <p className="text-xs text-slate-500 bg-[#F5F0E6]/70 p-3.5 rounded-xl border border-[#E8E2D5] leading-relaxed mb-6">
                  <span className="font-semibold text-slate-800 block mb-1">Project Impact & Stack:</span>
                  {fullDetails}
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              {hasLiveLink && url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium text-xs shadow-md transition-all group/btn hover:scale-105"
                >
                  <span>View Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF0D9] text-[#7E520A] text-xs font-bold border border-[#F3DBA7]">
                  <Lock className="w-3 h-3 text-[#7E520A]" />
                  Private Client Platform
                </span>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCardClick && onCardClick(project);
                }}
                className="text-xs font-semibold text-slate-600 hover:text-[#0F172A] underline underline-offset-4"
              >
                Case Details
              </button>
            </div>

          </div>

        </div>

      </div>
    );
  }

  // Regular Project Card Layout
  return (
    <div
      className="bg-[#FFFCF9] border border-[#E8E2D5] rounded-2xl p-5 flex flex-col justify-between h-full group cursor-pointer relative overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04),_0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08),_0_2px_6px_rgba(0,0,0,0.03)] hover:-translate-y-1.5"
      onClick={() => onCardClick && onCardClick(project)}
    >
      <div>
        {/* Category Pill Tag Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${badgeStyle}`}>
            {categoryTag}
          </span>
          {video ? (
            <span className="text-[10px] font-bold text-[#7E520A] bg-[#FAF0D9] border border-[#F3DBA7] px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Video Demo
            </span>
          ) : (
            <span className="text-[10px] font-semibold text-slate-600 tracking-wide uppercase">
              NEXVIX
            </span>
          )}
        </div>

        {/* Browser Chrome Frame */}
        <div className="overflow-hidden rounded-xl border border-[#E2DCCE] bg-[#FAF8F3] shadow-sm mb-4 relative">
          <div className="bg-[#EFEAE1] px-3 py-2 flex items-center gap-2.5 border-b border-[#E2DCCE]">
            <div className="flex items-center gap-1 shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
              <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
            </div>

            <div className="flex-grow flex items-center justify-center">
              <div className="bg-[#F8F5EE] border border-[#E0D8C8] px-2.5 py-0.5 rounded-full text-[10px] font-mono text-stone-600 flex items-center gap-1 max-w-[200px] w-full truncate shadow-inner">
                <Lock className="w-2.5 h-2.5 text-stone-400 shrink-0" />
                <span className="truncate">{displayUrl}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
            {video ? (
              <video
                src={video}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                className="w-full h-full object-cover object-top transition-transform duration-600 ease-out group-hover:scale-105"
              />
            ) : (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top transition-transform duration-600 ease-out group-hover:scale-105"
                loading="lazy"
              />
            )}
          </div>
        </div>

        {/* Title & One-line Description */}
        <h3 className="font-serif font-bold text-xl text-[#0F172A] mb-2 leading-snug group-hover:text-[#1E293B] transition-colors">
          {name}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* CTA Footer */}
      <div className="mt-5 pt-3 border-t border-[#F0EAE0] flex items-center justify-between gap-2">
        {hasLiveLink && url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-semibold text-[#0F172A] hover:text-[#6348f6] inline-flex items-center gap-1.5 transition-colors group/link"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        ) : (
          <span className="text-[11px] font-semibold text-slate-500 inline-flex items-center gap-1">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>Private Client Platform</span>
          </span>
        )}

        <span className="text-[11px] font-medium text-slate-600 group-hover:text-slate-[#0F172A]">
          Details &rarr;
        </span>
      </div>
    </div>
  );
}

