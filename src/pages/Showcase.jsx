import React, { useState } from 'react';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import { projectsData, filterCategories } from '../data/projectsData';
import { Sparkles, X, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight, Layers, Award, Clock, Globe } from 'lucide-react';

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  // Client-side category filtering
  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'All Projects') return true;
    return project.categoryTag === activeTab;
  });

  return (
    <div className="pt-28 pb-24 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EC] to-[#F3EEE3] text-slate-800 min-h-screen font-sans selection:bg-[#0F172A] selection:text-white">
      <SEO
        title="Selected Work & Live Client Platforms | NEXVIX SofTech Solutions"
        description="Explore live client platforms and custom web solutions built by NEXVIX SofTech Solutions for E-Commerce, Healthcare, Fitness, Dining, and Commercial businesses."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF3E6] border border-[#E6DCCB] text-[#0F172A] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>NEXVIX SofTech Solutions Showcase</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.08] bg-gradient-to-r from-slate-900 via-[#3b2a82] to-slate-900 bg-clip-text text-transparent">
            Selected Work & Live Client Platforms
          </h1>

          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            High-converting digital experiences engineered for ambitious brands. Explore our live portfolio of custom e-commerce stores, medical practices, fitness platforms, and commercial web solutions.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto p-4 rounded-2xl bg-white/70 border border-[#E8E2D5] shadow-sm backdrop-blur-sm">
            <div className="text-center">
              <span className="font-serif font-bold text-2xl text-[#0F172A] block">100%</span>
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Live & Functional</span>
            </div>
            <div className="text-center border-x border-[#E8E2D5]">
              <span className="font-serif font-bold text-2xl text-[#0F172A] block">48 Hours</span>
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Rapid Delivery</span>
            </div>
            <div className="text-center">
              <span className="font-serif font-bold text-2xl text-[#0F172A] block">Global</span>
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Client Standards</span>
            </div>
          </div>
        </div>

        {/* Editorial Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterCategories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-250 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F172A] text-[#FDFBF7] shadow-md scale-105 font-semibold'
                    : 'bg-white text-slate-600 hover:text-[#0F172A] hover:bg-[#FAF6EC] border border-[#E5DFD3] shadow-sm'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Projects Grid (2-Column Grid with Full-Width Flagships #1 & #2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-[#E8E2D5] max-w-md mx-auto">
            <p className="text-slate-500 text-sm">No projects found in this category.</p>
            <button
              onClick={() => setActiveTab('All Projects')}
              className="mt-3 px-5 py-2 rounded-full bg-[#0F172A] text-white text-xs font-semibold"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Pillar Sub-Sections — Cohesive Editorial Light Theme */}
        <div className="mt-24 pt-16 border-t border-[#E5DFD3]">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#0F172A] font-semibold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-[#E2DCCE] shadow-sm">
              ENGINEERING STANDARDS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mt-3">
              Why NEXVIX SofTech Solutions Stands Apart
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every platform is custom-built with React, Tailwind CSS, and optimized for maximum conversion velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFCF9] border border-[#E8E2D5] rounded-2xl p-7 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#0F172A] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#0F172A] mb-2">
                High-Converting E-Commerce Stores
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailored store design with portrait artwork previews, instant INR/USD currency flows, slide-out carts, and frictionless checkout paths.
              </p>
            </div>

            <div className="bg-[#FFFCF9] border border-[#E8E2D5] rounded-2xl p-7 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#0F172A] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#0F172A] mb-2">
                Business & Medical Practice Platforms
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calm, trust-centric healthcare & medical web architectures built to reassure patients, communicate clinical excellence, and drive bookings.
              </p>
            </div>

            <div className="bg-[#FFFCF9] border border-[#E8E2D5] rounded-2xl p-7 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#0F172A] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#0F172A] mb-2">
                48-Hour Rapid Delivery Engine
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From initial kickoff to live deployment, NEXVIX SofTech Solutions delivers fully functional, production-ready web platforms within 48 hours.
              </p>
            </div>
          </div>

        </div>

        {/* Continuous Slow Sliding Client Reviews Column Section */}
        <div className="mt-24 pt-16 border-t border-[#E5DFD3] overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#0F172A] font-semibold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-[#E2DCCE] shadow-sm">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mt-3">
              What Our Platform Clients Say
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Continuous feedback from verified business founders and project leads worldwide.
            </p>
          </div>

          {/* Marquee Ticker Container */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="animate-marquee-slow flex gap-6">
              {[
                {
                  name: 'Rohan Sundaram',
                  project: 'Madurai Food Corner',
                  role: 'Restaurant Owner',
                  comment: 'The interactive South Indian menu and instant WhatsApp ordering platform increased catering inquiries by 180%. The video walkthrough and speed give us a massive edge!'
                },
                {
                  name: 'Ananya Sharma',
                  project: 'Digital Art Studio',
                  role: 'E-Commerce Founder',
                  comment: 'NEXVIX built our watercolor portrait e-commerce store with live INR pricing & before/after artwork sliders. Online portrait sales doubled in 30 days.'
                },
                {
                  name: 'Marcus Vance',
                  project: 'SunPeak Solar Co.',
                  role: 'Solar Director',
                  comment: 'Inbound quote inquiries surged by over 140% in our first month after launching the SunPeak platform. Sub-second load times!'
                },
                {
                  name: 'Dr. Sarah Jenkins',
                  project: 'Serene Health',
                  role: 'Medical Director',
                  comment: 'Patient online appointment bookings doubled since launching our calm, trust-focused healthcare portal. Exceptional design and SLA turnaround!'
                },
                {
                  name: 'Alex Turner',
                  project: 'Nexvix Gym',
                  role: 'Fitness Manager',
                  comment: 'High-energy fitness platform with direct free-trial booking calls to action. The 48-hour delivery SLA was strictly met with zero compromise on quality.'
                },
                /* Duplicate set for infinite marquee loop */
                {
                  name: 'Rohan Sundaram',
                  project: 'Madurai Food Corner',
                  role: 'Restaurant Owner',
                  comment: 'The interactive South Indian menu and instant WhatsApp ordering platform increased catering inquiries by 180%. The video walkthrough and speed give us a massive edge!'
                },
                {
                  name: 'Ananya Sharma',
                  project: 'Digital Art Studio',
                  role: 'E-Commerce Founder',
                  comment: 'NEXVIX built our watercolor portrait e-commerce store with live INR pricing & before/after artwork sliders. Online portrait sales doubled in 30 days.'
                },
                {
                  name: 'Marcus Vance',
                  project: 'SunPeak Solar Co.',
                  role: 'Solar Director',
                  comment: 'Inbound quote inquiries surged by over 140% in our first month after launching the SunPeak platform. Sub-second load times!'
                },
                {
                  name: 'Dr. Sarah Jenkins',
                  project: 'Serene Health',
                  role: 'Medical Director',
                  comment: 'Patient online appointment bookings doubled since launching our calm, trust-focused healthcare portal. Exceptional design and SLA turnaround!'
                },
                {
                  name: 'Alex Turner',
                  project: 'Nexvix Gym',
                  role: 'Fitness Manager',
                  comment: 'High-energy fitness platform with direct free-trial booking calls to action. The 48-hour delivery SLA was strictly met with zero compromise on quality.'
                }
              ].map((rev, rIdx) => (
                <div 
                  key={rIdx} 
                  className="w-[320px] sm:w-[380px] shrink-0 bg-[#FFFCF9] border border-[#E8E2D5] rounded-2xl p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#7E520A] bg-[#FAF0D9] border border-[#F3DBA7] px-2.5 py-0.5 rounded-full">
                        {rev.project}
                      </span>
                      <span className="text-xs text-amber-500 font-bold">★★★★★</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                      "{rev.comment}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F0EAE0] flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-[#0F172A]">{rev.name}</h4>
                      <span className="text-[10px] text-slate-500">{rev.role}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Project Detail Light Editorial Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/50 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#FDFBF7] border border-[#E2DCCE] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white hover:bg-[#FAF6EC] border border-[#E5DFD3] rounded-full text-slate-700 hover:text-[#0F172A] z-30 transition-colors shadow-sm"
              aria-label="Close detail modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Scrollable */}
            <div className="overflow-y-auto p-6 sm:p-8">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium border bg-[#FAF0D9] text-[#7E520A] border-[#F3DBA7]">
                  {selectedProject.categoryTag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  NEXVIX SofTech Solutions
                </span>
              </div>

              <h2 className="font-serif font-bold text-3xl text-[#0F172A] mb-3">
                {selectedProject.name}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Browser Preview Frame inside Modal */}
              <div className="overflow-hidden rounded-2xl border border-[#E2DCCE] bg-[#FAF8F3] shadow-md mb-6">
                <div className="bg-[#EFEAE1] px-4 py-2.5 flex items-center gap-3 border-b border-[#E2DCCE]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="bg-[#F8F5EE] border border-[#E0D8C8] px-3 py-0.5 rounded-full text-xs font-mono text-stone-600 truncate">
                    {selectedProject.url || 'client-platform.nexvix.internal'}
                  </div>
                </div>
                {selectedProject.video ? (
                  <div className="relative aspect-[16/10] bg-black">
                    <video
                      src={selectedProject.video}
                      autoPlay={true}
                      loop={true}
                      muted={true}
                      controls={true}
                      playsInline={true}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-auto object-cover object-top max-h-[380px]"
                  />
                )}
              </div>

              {/* Technical Highlights Box */}
              {selectedProject.fullDetails && (
                <div className="p-5 bg-[#F5F0E6] rounded-2xl border border-[#E5DFD3] text-xs text-slate-700 leading-relaxed mb-6">
                  <span className="font-bold text-[#0F172A] block mb-1 text-sm">
                    Platform Architecture & Features:
                  </span>
                  {selectedProject.fullDetails}
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#E8E2D5]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-white border border-[#E5DFD3] text-slate-700 hover:text-[#0F172A] font-semibold text-xs rounded-full shadow-sm"
                >
                  Close
                </button>

                {selectedProject.hasLiveLink && selectedProject.url ? (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs rounded-full shadow-md transition-all hover:scale-105"
                  >
                    <span>View Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF0D9] text-[#7E520A] text-xs font-bold border border-[#F3DBA7]">
                    <span>Private Client Platform</span>
                  </span>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
