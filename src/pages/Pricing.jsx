import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PriceTag from '../components/PriceTag';
import { Check, Zap, ChevronDown, ShieldCheck, ArrowRight, Star } from 'lucide-react';

export default function Pricing() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState({ 0: false, 1: false, 2: false, 3: false });

  const toggleExpand = (idx) => {
    setExpandedCards(prev => ({ ...prev, [idx]: !prev[idx] }));
  };


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
        
        {/* Header — Full Width Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-purple-300 font-bold text-xs uppercase tracking-widest bg-[#1a123d] px-4 py-1.5 rounded-full border border-[#35266e]">
            No Hidden Fees • One-Time Payment
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Transparent Pricing Built for ROI
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Choose the perfect package for your business. Every tier includes 100% mobile optimization, clean React code, and fast turnaround.
          </p>
        </div>

                        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start mb-20">
          
          {/* Tier 1: Basic */}
          <div className="bg-[#120d29] rounded-3xl border border-[#271d52] p-6 lg:p-8 flex flex-col hover:border-purple-500/50 transition-all duration-300 shadow-lg h-full">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Launchpad</span>
                <span className="px-3 py-1 bg-[#1a1240] text-purple-300 font-bold text-[10px] sm:text-xs rounded-full border border-[#341d6e]">
                  48-Hour Delivery
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Basic Package
              </h3>
              <p className="text-xs text-slate-400 mb-6 min-h-[48px]">
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
                
                {/* Hidden Features */}
                <div className={`space-y-3.5 overflow-hidden transition-all duration-500 ${expandedCards[0] ? 'max-h-[700px] opacity-100 mt-3.5' : 'max-h-0 opacity-0'}`}>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Fast 48-Hour Delivery Guarantee</span>
                  </div>
                  
                  {/* Maintenance Section */}
                  <div className="bg-[#1a1240]/50 rounded-xl p-4 border border-[#341d6e]/50 space-y-2 mt-4 mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-sm">Optional Maintenance</h4>
                      <span className="text-purple-300 font-extrabold text-xs">$300/mo</span>
                    </div>
                    <p className="text-[10px] text-amber-300 font-medium">✨ Added only if you are interested</p>
                    <ul className="space-y-1.5 text-xs text-slate-300 mt-2">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Custom Code Changes</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Offers & Add-ons Setup</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Photo & Asset Changes</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Style & UI Upgrades</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Technical Support & Bug Fixes</li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#1f1745]/50 flex items-center justify-center">
                    <span className="text-sm font-bold text-emerald-400">✅ Personal Domain ID Included FREE</span>
                  </div>
                </div>
              </div>

              <button onClick={() => toggleExpand(0)} className="text-purple-400 text-xs font-bold mt-2 flex items-center justify-center gap-1 w-full hover:text-purple-300 transition-colors pb-4 border-b border-[#1f1745] focus:outline-none">
                {expandedCards[0] ? 'Show Less' : 'Show Full Details'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[0] ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link
              to="/contact"
              className="w-full mt-6 py-3.5 px-6 rounded-2xl bg-[#1a1240] hover:bg-[#241858] text-white font-extrabold text-sm text-center border border-[#341d6e] hover:border-purple-500/60 transition-all duration-300"
            >
              Start My Launchpad
            </Link>
          </div>

          {/* Tier 2: Standard */}
          <div className="bg-[#0f0b24] rounded-3xl border-2 border-[#6348f6] p-6 lg:p-8 flex flex-col relative shadow-2xl shadow-purple-900/40 h-full">
            {/* Most Popular Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6348f6] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span>Most Popular Choice</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Multi-Page Growth</span>
                <span className="px-3 py-1 bg-[#1a1240] text-purple-300 font-bold text-[10px] sm:text-xs rounded-full border border-[#341d6e]">
                  72-Hour Delivery
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Standard Package
              </h3>
              <p className="text-xs text-slate-400 mb-6 min-h-[48px]">
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

                <div className={`space-y-3.5 overflow-hidden transition-all duration-500 ${expandedCards[1] ? 'max-h-[1000px] opacity-100 mt-3.5' : 'max-h-0 opacity-0'}`}>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>WhatsApp & Mailto Integration</span>
                  </div>
                  
                  {/* Maintenance Section */}
                  <div className="bg-[#1a1240]/50 rounded-xl p-4 border border-[#341d6e]/50 space-y-2 mt-4 mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-sm">Optional Maintenance</h4>
                      <span className="text-purple-300 font-extrabold text-xs">$300/mo</span>
                    </div>
                    <p className="text-[10px] text-amber-300 font-medium">✨ Added only if you are interested</p>
                    <ul className="space-y-1.5 text-xs text-slate-300 mt-2">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Custom Code Changes</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Offers & Add-ons Setup</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Photo & Asset Changes</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Style & UI Upgrades</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Technical Support & Bug Fixes</li>
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 text-center border-t border-[#1f1745]">
                    <span className="block text-xs font-bold text-slate-300">No Hidden Charges</span>
                    <span className="block text-xs font-bold text-emerald-400">No Extra Charges Will Be Applied</span>
                    <span className="block text-sm font-bold text-amber-300 mt-2">🎁 Personal Domain ID Included FREE</span>
                  </div>
                </div>
              </div>

              <button onClick={() => toggleExpand(1)} className="text-purple-400 text-xs font-bold mt-2 flex items-center justify-center gap-1 w-full hover:text-purple-300 transition-colors pb-4 border-b border-[#1f1745] focus:outline-none">
                {expandedCards[1] ? 'Show Less' : 'Show Full Details'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[1] ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link
              to="/contact"
              className="w-full mt-6 py-4 px-6 rounded-2xl bg-[#6348f6] hover:bg-[#5134e8] text-white font-extrabold text-base text-center shadow-lg shadow-purple-900/50 transition-all duration-300 hover:scale-105"
            >
              Choose Standard
            </Link>
          </div>

          {/* Tier 3: Premium Website */}
          <div className="bg-[#120d29] rounded-3xl border border-[#271d52] p-6 lg:p-8 flex flex-col hover:border-purple-500/50 transition-all duration-300 shadow-lg h-full">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Enterprise</span>
                <span className="px-3 py-1 bg-[#1a1240] text-slate-300 font-semibold text-[10px] sm:text-xs rounded-full border border-[#271d52]">
                  4-7 Days Delivery
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Premium Website Package
              </h3>
              <p className="text-xs text-slate-400 mb-6 min-h-[48px]">
                High-performance premium business website with advanced UI, immersive 3D experiences, enterprise integrations, cloud deployment, and a powerful admin dashboard built for growing businesses.
              </p>

              {/* Reusable PriceTag Component */}
              <PriceTag original={5000} offer={4200} />

              <div className="my-6 border-t border-[#1f1745] pt-6 space-y-3.5 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Premium Business Website</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Modern 3D Website Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Interactive 3D Animations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Custom UI/UX Design</span>
                </div>

                <div className={`space-y-3.5 overflow-hidden transition-all duration-500 ${expandedCards[2] ? 'max-h-[1500px] opacity-100 mt-3.5' : 'max-h-0 opacity-0'}`}>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Premium Responsive Design</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Admin Dashboard</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Customer Management</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Advanced SEO Setup</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Google Analytics Integration</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Cloud Deployment</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>SSL Security</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>API Integration</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Payment Gateway Integration</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>High-Speed Performance</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Unlimited Scalability</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Priority Technical Support</span></div>
                  
                  {/* Maintenance Section */}
                  <div className="bg-[#1a1240]/50 rounded-xl p-4 border border-[#341d6e]/50 space-y-2 mt-4 mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-sm">Optional Maintenance</h4>
                      <span className="text-purple-300 font-extrabold text-xs">$500/mo</span>
                    </div>
                    <p className="text-[10px] text-emerald-400 font-bold">🎁 1st Month FREE • Added only if interested</p>
                    <ul className="space-y-1.5 text-xs text-slate-300 mt-2">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Custom Code Changes</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Offers & Add-ons Integration</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Photo & Asset Changes</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Style & UI Upgrades</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Advanced Technical Support & Security</li>
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 text-center border-t border-[#1f1745]">
                    <span className="block text-xs font-bold text-emerald-400">No Extra Charges Will Be Applied</span>
                    <span className="block text-sm font-bold text-amber-300 mt-2">🎁 Personal Domain ID Included FREE</span>
                  </div>
                </div>
              </div>

              <button onClick={() => toggleExpand(2)} className="text-purple-400 text-xs font-bold mt-2 flex items-center justify-center gap-1 w-full hover:text-purple-300 transition-colors pb-4 border-b border-[#1f1745] focus:outline-none">
                {expandedCards[2] ? 'Show Less' : 'Show Full Details'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[2] ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link
              to="/contact"
              className="w-full mt-6 py-3.5 px-6 rounded-2xl bg-[#1a1240] hover:bg-[#241858] text-white font-extrabold text-sm text-center border border-[#341d6e] hover:border-purple-500/60 transition-all duration-300"
            >
              Start Premium Website
            </Link>
          </div>

          {/* Tier 4: Full Business Solution */}
          <div className="bg-[#120d29] rounded-3xl border border-[#271d52] p-6 lg:p-8 flex flex-col hover:border-purple-500/50 transition-all duration-300 shadow-lg relative overflow-hidden h-full">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-[#6348f6] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-md">
              Most Complete
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4 mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Ultimate</span>
                <span className="px-3 py-1 bg-[#1a1240] text-slate-300 font-semibold text-[10px] sm:text-xs rounded-full border border-[#271d52]">
                  7-10 Days Delivery
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Full Business Solution
              </h3>
              <p className="text-xs text-slate-400 mb-6 min-h-[48px]">
                Complete digital business ecosystem including customer website, secure cloud backend, admin application, billing system, customer management, reporting, and business automation.
              </p>

              {/* Reusable PriceTag Component */}
              <PriceTag original={8000} offer={6500} />

              <div className="my-6 border-t border-[#1f1745] pt-6 space-y-3.5 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Premium Customer Website</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Cloud Backend Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Admin Management App</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Customer Dashboard</span>
                </div>

                <div className={`space-y-3.5 overflow-hidden transition-all duration-500 ${expandedCards[3] ? 'max-h-[2000px] opacity-100 mt-3.5' : 'max-h-0 opacity-0'}`}>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Billing & Invoice System</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Order Management</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Customer Database</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Role-Based Authentication</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Secure Login System</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Payment Gateway Integration</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Cloud Database</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>API Development</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Business Analytics Dashboard</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Reports & Statistics</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>WhatsApp Integration</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Email Notifications</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Backup & Recovery</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Advanced Security</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>SEO Optimization</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Mobile Responsive Website</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Source Code Included</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Includes up to 2 rounds of revisions</span></div>
                  <div className="flex items-center gap-3"><Check className="w-4 h-4 text-purple-400 shrink-0" /><span>Client must provide content/copy</span></div>

                  {/* Maintenance Section */}
                  <div className="bg-[#1a1240]/50 rounded-xl p-4 border border-[#341d6e]/50 space-y-2 mt-4 mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-sm">Optional Maintenance</h4>
                      <span className="text-purple-300 font-extrabold text-xs">$500/mo</span>
                    </div>
                    <p className="text-[10px] text-emerald-400 font-bold">🎁 1st Month FREE • Added only if interested</p>
                    <ul className="space-y-1.5 text-xs text-slate-300 mt-2">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Custom Code Changes</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Offers & Add-ons Integration</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Photo & Asset Changes</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Style & UI Upgrades</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Advanced Technical Support & Security</li>
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 text-center border-t border-[#1f1745]">
                    <span className="block text-xs font-bold text-emerald-400">No Extra Charges Will Be Applied</span>
                    <span className="block text-sm font-bold text-amber-300 mt-2">🎁 Personal Domain ID Included FREE</span>
                  </div>
                </div>
              </div>

              <button onClick={() => toggleExpand(3)} className="text-purple-400 text-xs font-bold mt-2 flex items-center justify-center gap-1 w-full hover:text-purple-300 transition-colors pb-4 border-b border-[#1f1745] focus:outline-none">
                {expandedCards[3] ? 'Show Less' : 'Show Full Details'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCards[3] ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link
              to="/contact"
              className="w-full mt-6 py-3.5 px-6 rounded-2xl bg-[#1a1240] hover:bg-[#241858] text-white font-extrabold text-sm text-center border border-[#341d6e] hover:border-purple-500/60 transition-all duration-300"
            >
              Get Full Solution
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

