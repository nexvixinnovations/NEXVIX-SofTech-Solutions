import React, { useState } from 'react';
import SEO from '../components/SEO';
import BrowserMockup from '../components/BrowserMockup';
import DualDeviceMockup, { LaptopMockup } from '../components/DeviceMockup';
import { Sparkles, X, ShieldCheck, CheckCircle2 } from 'lucide-react';


export default function Showcase() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = ['All', 'Blue-Collar', 'Healthcare', 'E-Commerce'];

  const projects = [
    {
      id: 1,
      name: 'SunPeak Solar Co.',

      industryTag: 'Blue-Collar',
      image: '/showcase/SunPeak Solar Co. MU.png',
      ambientColor: 'from-amber-100/70 via-orange-50/50 to-yellow-100/60',
      description: 'High-converting solar lead generation platform designed for homeowners seeking renewable energy installations.',
      fullDetails: 'Engineered with instant solar quote calculators, interactive roof mapping, and 48-hour rapid deployment. Resulted in +140% increase in qualified lead submissions.'
    },
    {
      id: 2,
      name: 'Summit Roof & Air',

      industryTag: 'Blue-Collar',
      image: '/showcase/Summit Roof & Air MU.png',
      ambientColor: 'from-slate-200/70 via-zinc-100/60 to-stone-200/50',
      description: 'Commercial and residential roofing & HVAC service engine built for rapid contractor emergency lead response.',
      fullDetails: 'Includes 1-click emergency service dispatching, customer review integration, and localized SEO schema for maximum regional Google dominance.'
    },
    {
      id: 3,
      name: 'Harley Street Dental Studio',

      industryTag: 'Healthcare',
      image: '/showcase/Cotswold Glow Aesthetics  MU.png',
      ambientColor: 'from-cyan-100/70 via-sky-50/50 to-indigo-100/60',
      description: 'Luxury dental practice web application featuring online patient consultations and smile transformation galleries.',
      fullDetails: 'Designed with ultra-sleek medical aesthetics, instant booking calendar integration, and patient portal access.'
    },
    {
      id: 4,
      name: 'Cotswold Glow Aesthetics',

      industryTag: 'Healthcare',
      image: '/showcase/Cotswold Glow Aesthetics  MU.png',
      ambientColor: 'from-teal-100/60 via-emerald-50/50 to-green-100/60',
      description: 'High-end cosmetic skin and laser clinic platform tailored for discerning clients.',
      fullDetails: 'Features treatment pricing breakdown, before/after interactive sliders, and automated deposit booking workflows.'
    },
    {
      id: 5,
      name: 'Bondi Bloom Boutique',

      industryTag: 'E-Commerce',
      image: '/showcase/Bondi Bloom Boutique MU.png',
      ambientColor: 'from-rose-100/70 via-pink-50/50 to-amber-100/50',
      description: 'Ultra-fast sustainable fashion storefront optimized for mobile shoppers.',
      fullDetails: 'Delivers sub-500ms page load speeds, Apple Pay / Mobile checkout integration, and instant inventory filtering.'
    },
    {
      id: 6,
      name: 'Outback Clean Commercial',

      industryTag: 'Blue-Collar',
      image: '/showcase/Outback Clean Commercial MU.png',
      ambientColor: 'from-blue-100/70 via-indigo-50/50 to-slate-200/60',
      description: 'Industrial and commercial facility cleaning lead generation site.',
      fullDetails: 'Built with automated quote estimation tools, compliance badge verifications, and corporate procurement enquiry forms.'
    }
  ];

  // Client-side filtering logic
  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'All') return true;
    return p.industryTag === activeTab;
  });

  return (
    <div className="pt-28 pb-20 bg-[#080616] text-white min-h-screen">
      <SEO
        title="Portfolio Showcase"
        description="Explore 6 real-world web projects for Blue-Collar, Healthcare, and E-Commerce businesses delivered in 48 hours globally."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-purple-300 font-bold text-xs uppercase tracking-widest bg-[#1a123d] px-4 py-1.5 rounded-full border border-[#35266e]">
            Real Work, Real Results
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mt-4">
            Our Client Showcase
          </h1>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            High-performing React & Tailwind websites crafted for industry leaders worldwide. Filter by category below.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${activeTab === tab
                ? 'bg-[#6348f6] text-white shadow-md shadow-purple-900/50 scale-105'
                : 'bg-[#120d29] text-slate-300 hover:text-white hover:bg-[#1f1745] border border-[#271d52]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Showcase Grid (6 Projects with Dual Device Mockups & Soft Muted Pastel Backgrounds) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <BrowserMockup
              key={project.id}
              url={project.url}
              title={project.name}
              imageSrc={project.image}
              industryTag={project.industryTag}
              description={project.description}
              ambientColor={project.ambientColor}
              onCardClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal (Without Sample Link URL Button as requested) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040210]/80 backdrop-blur-md">
          <div className="bg-[#0f0b24] border border-[#271d52] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-[#1a1240] hover:bg-[#241858] rounded-full text-slate-300 hover:text-white z-30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 bg-[#090717] border-b border-[#241c4a] relative">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-[#6348f6] text-white font-bold text-xs rounded-full shadow-sm">
                  {selectedProject.industryTag}
                </span>
              </div>
              <div className="max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg border border-[#2b2157]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                {selectedProject.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {selectedProject.description}
              </p>
              <div className="p-4 bg-[#090717] rounded-2xl border border-[#211847] text-xs text-slate-300 leading-relaxed mb-6">
                <span className="font-extrabold text-purple-400 block mb-1">Technical Highlights:</span>
                {selectedProject.fullDetails}
              </div>

              {/* Modal Actions - NO Sample Link URL Button as requested */}
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 bg-[#6348f6] hover:bg-[#5134e8] text-white font-bold text-sm rounded-xl shadow-md transition-all"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}


