import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PriceTag from '../components/PriceTag';
import { currencies, pricingCategories } from '../data/pricingData';
import { Check, Zap, ChevronDown, ShieldCheck, ArrowRight, Star, Globe, Table, LayoutGrid, CheckCircle2, MessageSquare, Mail } from 'lucide-react';

export default function Pricing() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (key) => {
    setExpandedCards(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCurrencyObj = currencies.find(c => c.code === selectedCurrency) || currencies[0];

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
      q: "Can I view prices in USD, GBP, AUD, or CAD?",
      a: "Yes! Use the currency selector at the top of the pricing page to toggle instantly between US Dollar ($), British Pound (£), Australian Dollar (A$), and Canadian Dollar (C$)."
    },
    {
      q: "Do you serve clients in the USA, UK, and Australia?",
      a: "Yes, 100%. We have active clients across North America, the United Kingdom, and Australia, ensuring localized terminology, currency formats, and time-zone aligned support."
    },
    {
      q: "What if I need custom features like appointment booking or admin apps?",
      a: "Interactive contact forms, Google Maps embeds, appointment scheduling tools, e-commerce customizers, and admin dashboards are included in our Professional, Premium, and Web App tiers."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EC] to-[#F3EEE3] text-slate-800 min-h-screen">

      <SEO 
        title="Transparent Pricing Tiers & Multi-Currency Matrix | NEXVIX SofTech Solutions" 
        description="Flat, transparent pricing for high-converting websites starting at $1,499 with 48-hour delivery. View prices in USD, GBP, AUD, and CAD."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="inline-block text-[#0F172A] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E5DFD3] shadow-sm">
            No Hidden Fees • One-Time Payment • Global Multi-Currency
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] leading-tight bg-gradient-to-r from-slate-900 via-[#3b2a82] to-slate-900 bg-clip-text text-transparent">
            Transparent Pricing Built for ROI
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Select your project tier and currency below. Default currency is set to <strong className="text-[#0F172A]">USD ($)</strong> with options to switch to <strong className="text-[#0F172A]">GBP (£), AUD (A$), and CAD (C$)</strong>.
          </p>
        </div>

        {/* Currency Switcher & View Selector Controls */}
        <div className="bg-[#FFFCF9] border border-[#E8E2D5] rounded-3xl p-6 mb-12 shadow-sm max-w-5xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Currency Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 w-full lg:w-auto">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 shrink-0 mr-1">
                <Globe className="w-4 h-4 text-purple-600" />
                Currency:
              </span>

              <div className="flex flex-wrap items-center gap-2">
                {currencies.map((curr) => {
                  const isSelected = selectedCurrency === curr.code;
                  return (
                    <button
                      key={curr.code}
                      onClick={() => setSelectedCurrency(curr.code)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#0F172A] text-white shadow-md scale-105 border border-[#0F172A]'
                          : 'bg-[#FAF6EC] text-slate-700 hover:text-[#0F172A] hover:bg-slate-200 border border-[#E5DFD3]'
                      }`}
                    >
                      <span>{curr.flag}</span>
                      <span>{curr.code} ({curr.symbol})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* View Mode Switcher (Card vs Full Matrix Table) */}
            <div className="flex items-center gap-2 bg-[#F5F0E6] p-1.5 rounded-full border border-[#E2DCCE] shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'cards'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Card View</span>
              </button>

              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'table'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Pricing Matrix Table</span>
              </button>
            </div>

          </div>

          {/* Category Filters */}
          <div className="mt-6 pt-5 border-t border-[#E8E2D5] flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs text-slate-500 font-semibold mr-2">Category:</span>
            {['All', ...pricingCategories.map(c => c.category)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F172A] text-white font-bold shadow-xs'
                    : 'bg-[#FAF6EC] text-slate-600 hover:text-[#0F172A] border border-[#E5DFD3]'
                }`}
              >
                {cat === 'All' ? 'All Tiers' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* View Mode 1: Cards View */}
        {viewMode === 'cards' && (
          <div className="space-y-16 mb-20">
            {pricingCategories
              .filter(catGroup => selectedCategory === 'All' || selectedCategory === catGroup.category)
              .map((catGroup, groupIdx) => (
                <div key={groupIdx} className="space-y-6">
                  
                  {/* Section Title */}
                  <div className="border-b border-[#E5DFD3] pb-4 flex items-center justify-between">
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F172A]">
                      {catGroup.category}
                    </h2>
                    <span className="text-xs font-bold text-[#7E520A] bg-[#FAF0D9] px-3.5 py-1 rounded-full border border-[#F3DBA7]">
                      Prices in {selectedCurrency} ({activeCurrencyObj.symbol})
                    </span>
                  </div>

                  {/* Tier Cards Grid */}
                  <div className={`grid grid-cols-1 ${catGroup.tiers.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-6 items-stretch`}>
                    {catGroup.tiers.map((tier, tierIdx) => {
                      const priceObj = tier.prices[selectedCurrency];
                      const cardKey = `${groupIdx}-${tierIdx}`;
                      const isExpanded = expandedCards[cardKey];

                      return (
                        <div 
                          key={tierIdx} 
                          className={`bg-[#FFFCF9] rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 relative border ${
                            tier.popular 
                              ? 'border-2 border-[#0F172A] shadow-md' 
                              : 'border-[#E8E2D5] hover:border-purple-400'
                          }`}
                        >
                          {tier.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                              <span>Most Popular Choice</span>
                            </div>
                          )}

                          <div>
                            <div className="flex items-center justify-between mb-4 pt-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                {tier.tierName}
                              </span>
                              <span className="px-3 py-1 bg-[#FAF0D9] text-[#7E520A] font-bold text-[10px] sm:text-xs rounded-full border border-[#F3DBA7]">
                                {tier.delivery}
                              </span>
                            </div>

                            <h3 className="font-serif font-extrabold text-2xl text-[#0F172A] mb-2">
                              {tier.tierName}
                            </h3>
                            
                            <p className="text-xs text-slate-600 mb-6 min-h-[40px] leading-relaxed">
                              {tier.description}
                            </p>

                            {/* Dynamic Price Tag */}
                            <PriceTag 
                              original={priceObj.original} 
                              offer={priceObj.offer} 
                              save={priceObj.save}
                            />

                            <div className="my-6 border-t border-[#F0EAE0] pt-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
                              {tier.features.slice(0, 4).map((feat, fIdx) => (
                                <div key={fIdx} className="flex items-center gap-3">
                                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}

                              {/* Expandable Extra Features */}
                              {tier.features.length > 4 && (
                                <div className={`space-y-3.5 overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[600px] opacity-100 mt-3.5' : 'max-h-0 opacity-0'}`}>
                                  {tier.features.slice(4).map((feat, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3">
                                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                      <span>{feat}</span>
                                    </div>
                                  ))}

                                  <div className="space-y-2 pt-4 text-center border-t border-[#F0EAE0]">
                                    <span className="block text-xs font-bold text-emerald-700">100% Code & Asset Ownership</span>
                                    <span className="block text-xs font-bold text-[#7E520A]">🎁 Personal Domain Included FREE</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {tier.features.length > 4 && (
                              <button 
                                onClick={() => toggleExpand(cardKey)} 
                                className="text-slate-600 text-xs font-bold mt-2 flex items-center justify-center gap-1 w-full hover:text-[#0F172A] transition-colors pb-4 border-b border-[#F0EAE0] focus:outline-none"
                              >
                                {isExpanded ? 'Show Less' : 'Show Full Details'}
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                              </button>
                            )}
                          </div>

                          <Link
                            to="/contact"
                            className={`w-full mt-6 py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm text-center transition-all duration-300 ${
                              tier.popular
                                ? 'bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-md hover:scale-105'
                                : 'bg-white hover:bg-slate-100 text-slate-800 border border-[#E5DFD3] shadow-xs'
                            }`}
                          >
                            Select {tier.tierName}
                          </Link>
                        </div>
                      );
                    })}
                  </div>

                  {/* Optional Category Footnote (e.g. for custom length video inquiries) */}
                  {catGroup.footnote && (
                    <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-[#FAF6EC] border border-[#E8E2D5] text-center max-w-4xl mx-auto shadow-xs">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-2xl mx-auto mb-5 font-medium">
                        {catGroup.footnote}
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <a 
                          href="https://wa.me/918778611693?text=Hi%20NEXVIX%2C%20I%20would%20like%20a%20custom%20quote%20for%20an%20AI%20video%20production%20project." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-sm hover:shadow transition-all hover:scale-105"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>WhatsApp (+91 8778611693)</span>
                        </a>

                        <a 
                          href="mailto:nexvix.innovations@gmail.com?subject=Custom%20AI%20Video%20Production%20Inquiry"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-full shadow-sm hover:shadow transition-all hover:scale-105"
                        >
                          <Mail className="w-4 h-4 text-purple-400" />
                          <span>Gmail: nexvix.innovations@gmail.com</span>
                        </a>
                      </div>
                    </div>
                  )}

                </div>
              ))}
          </div>
        )}

        {/* View Mode 2: Official Pricing Matrix Table */}
        {viewMode === 'table' && (
          <div className="bg-[#FFFCF9] border border-[#E8E2D5] rounded-3xl p-6 sm:p-8 mb-20 shadow-sm overflow-x-auto">
            
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif font-bold text-2xl text-[#0F172A]">
                  Official Pricing Matrix
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Complete breakdown of Project Category, Project Tier, Currency, Original Price, Offer Price, and Savings.
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-bold">Showing Currency:</span>
                <span className="px-3 py-1 bg-[#0F172A] text-white font-bold text-xs rounded-full">
                  {selectedCurrency} ({activeCurrencyObj.symbol})
                </span>
              </div>
            </div>

            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#E8E2D5] text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-[#FAF6EC]">
                  <th className="py-4 px-4">Project Category</th>
                  <th className="py-4 px-4">Project Tier</th>
                  <th className="py-4 px-4 text-center">Currency</th>
                  <th className="py-4 px-4 text-right">Original Price</th>
                  <th className="py-4 px-4 text-right text-[#0F172A]">Offer Price</th>
                  <th className="py-4 px-4 text-right text-emerald-700">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EAE0] text-sm">
                {pricingCategories
                  .filter(catGroup => selectedCategory === 'All' || selectedCategory === catGroup.category)
                  .flatMap((catGroup) => 
                    catGroup.tiers.map((tier, tierIdx) => {
                      const priceObj = tier.prices[selectedCurrency];
                      return (
                        <tr key={`${catGroup.category}-${tier.tierName}`} className="hover:bg-[#FAF6EC] transition-colors">
                          <td className="py-4 px-4 font-bold text-[#0F172A]">
                            {tierIdx === 0 ? catGroup.category : ''}
                          </td>
                          <td className="py-4 px-4 font-medium text-slate-700">
                            {tier.tierName}
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="px-2.5 py-1 bg-[#FAF0D9] text-[#7E520A] font-mono text-xs rounded-full border border-[#F3DBA7]">
                              {selectedCurrency}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right text-slate-400 line-through font-mono">
                            {priceObj.original || '—'}
                          </td>
                          <td className="py-4 px-4 text-right font-extrabold text-[#0F172A] font-mono text-base">
                            {priceObj.offer}
                          </td>
                          <td className="py-4 px-4 text-right font-bold text-emerald-700 font-mono">
                            {priceObj.save || 'Flat Price'}
                          </td>
                        </tr>
                      );
                    })
                  )}
              </tbody>
            </table>

          </div>
        )}

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-[#E5DFD3]">
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-3xl text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Everything you need to know about working with NEXVIX SofTech Solutions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFCF9] rounded-2xl border border-[#E8E2D5] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-base text-[#0F172A]">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#F0EAE0] mt-2">
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
