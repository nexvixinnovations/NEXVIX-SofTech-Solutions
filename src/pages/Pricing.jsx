import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PriceTag from '../components/PriceTag';
import { MobileMockup } from '../components/DeviceMockup';
import { Check, Zap, ChevronDown, ShieldCheck, ArrowRight, Star } from 'lucide-react';

export default function Pricing() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      q: "How does the 48-hour delivery guarantee work?",
      a: "Once you complete our quick onboarding brief and provide your brand guidelines/content, our engineering team immediately starts coding your site on our pre-tested React & Tailwind framework. Your fully responsive site goes live within 48 hours."
    },
    {
      q: "Are there any hidden recurring fees?",
      a: "No! All our pricing tiers are flat, one-time fees. You own 100% of your code and assets. Optional monthly maintenance and hosting plans are available if you prefer hands-off management."
    },
    {
      q: "Can I swap in my own logo and brand colors?",
      a: "Yes! We set up a single reusable logo component and CSS design tokens so you can easily drop in your uploaded logo image and custom color scheme."
    },
    {
      q: "Do you serve clients in the USA, UK, and Australia?",
      a: "Yes, 100%. We have active clients across North America, the United Kingdom, and Australia, ensuring localized terminology, currency formats, and time-zone aligned support."
    },
    {
      q: "What if I need custom features like appointment booking or maps?",
      a: "Interactive contact forms, Google Maps embeds, appointment scheduling tools, and lead webhooks are included in our Standard and Premium packages."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080616] text-white min-h-screen">

      <SEO 
        title="Transparent Pricing Tiers" 
        description="Flat, transparent pricing for high-converting websites starting at $1,000 with 48-hour delivery for USA, UK, and Australian businesses."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Tasteful Floating Mobile Mockup Illustration */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 max-w-5xl mx-auto">
          <div className="text-left flex-1 space-y-4">
            <span className="text-purple-300 font-bold text-xs uppercase tracking-widest bg-[#1a123d] px-4 py-1.5 rounded-full border border-[#35266e]">
              No Hidden Fees • One-Time Payment
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight">
              Transparent Pricing Built for ROI
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Choose the perfect package for your business. Every tier includes 100% mobile optimization, clean React code, and fast turnaround.
            </p>
          </div>

          {/* Small Tasteful Mobile Mockup Illustration */}
          <div className="w-44 sm:w-52 shrink-0">
            <div className="shadow-2xl rounded-2xl overflow-hidden border border-[#2b2157] bg-[#090717]">
              <img 
                src="/showcase/SunPeak Solar Co..png" 
                alt="Quote Request Booking Preview"
                className="w-full h-auto object-cover object-top aspect-[9/16]"
              />
            </div>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          
          {/* Tier 1: Basic */}
          <div className="bg-[#120d29] rounded-3xl border border-[#271d52] p-8 flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Launchpad</span>
                <span className="px-3 py-1 bg-[#1a1240] text-purple-300 font-bold text-xs rounded-full border border-[#341d6e]">
                  48-Hour Delivery
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Basic Package
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Ideal for single-service businesses needing a fast, high-converting landing page.
              </p>

              {/* Reusable PriceTag Component */}
              <PriceTag original={1200} offer={1000} />

              <div className="my-6 border-t border-[#1f1745] pt-6 space-y-3.5 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>High-Converting Single Landing Page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Built with React + Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Mobile-First Responsive Layout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Basic On-Page SEO Meta Setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Fast 48-Hour Delivery Guarantee</span>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="w-full mt-6 py-3.5 px-6 rounded-2xl bg-[#1a1240] hover:bg-[#241858] text-white font-extrabold text-sm text-center border border-[#341d6e] hover:border-purple-500/60 transition-all duration-300"
            >
              Start My Launchpad
            </Link>
          </div>

          {/* Tier 2: Standard (Middle Elevated "Most Popular") */}
          <div className="bg-[#0f0b24] rounded-3xl border-2 border-[#6348f6] p-8 flex flex-col justify-between relative shadow-2xl shadow-purple-900/40 lg:-translate-y-4">
            {/* Most Popular Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6348f6] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span>Most Popular Choice</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Multi-Page Growth</span>
                <span className="px-3 py-1 bg-[#1a1240] text-purple-300 font-bold text-xs rounded-full border border-[#341d6e]">
                  72-Hour Delivery
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Standard Package
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Complete multi-page marketing website built for established service providers & clinics.
              </p>

              {/* Reusable PriceTag Component */}
              <PriceTag original={2800} offer={2400} />

              <div className="my-6 border-t border-[#271d52] pt-6 space-y-3.5 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-extrabold text-white">Up to 5 Custom Pages (Home, Work, Pricing, About, Contact)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Sub-Second Speed Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Interactive Contact Forms & Maps</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Advanced Localized SEO Setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>WhatsApp & Mailto Integration</span>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="w-full mt-6 py-4 px-6 rounded-2xl bg-[#6348f6] hover:bg-[#5134e8] text-white font-extrabold text-base text-center shadow-lg shadow-purple-900/50 transition-all duration-300 hover:scale-105"
            >
              Choose Standard
            </Link>
          </div>

          {/* Tier 3: Premium */}
          <div className="bg-[#120d29] rounded-3xl border border-[#271d52] p-8 flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Enterprise</span>
                <span className="px-3 py-1 bg-[#1a1240] text-slate-300 font-semibold text-xs rounded-full border border-[#271d52]">
                  4-7 Days Delivery
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Premium Package
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Full web application & custom dashboard for scaled enterprises & multi-location brands.
              </p>

              {/* Reusable PriceTag Component */}
              <PriceTag original={6500} offer={4200} />

              <div className="my-6 border-t border-[#1f1745] pt-6 space-y-3.5 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Full Web App + Custom Admin Dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Multi-Language & Multi-Currency Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>3 Months Unlimited Code Refinements</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Priority 24/7 Developer Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Custom API & Payment Gateway Integrations</span>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="w-full mt-6 py-3.5 px-6 rounded-2xl bg-[#1a1240] hover:bg-[#241858] text-white font-extrabold text-sm text-center border border-[#341d6e] hover:border-purple-500/60 transition-all duration-300"
            >
              Go Full-Stack
            </Link>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-[#1f1745]">
          <div className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-3xl text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Everything you need to know about working with NEXVIX SofTech.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#120d29] rounded-2xl border border-[#271d52] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-extrabold text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed border-t border-[#1f1745] mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

