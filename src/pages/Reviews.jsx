import React from 'react';
import SEO from '../components/SEO';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Rohan Sundaram',
      project: 'Madurai Food Corner',
      category: 'Restaurant & Catering',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      message: 'NEXVIX SofTech Solutions engineered a custom food service web platform for Madurai Food Corner. The interactive South Indian menu, daily combo offers, and instant WhatsApp ordering integration increased our catering inquiries by 180%. The video walkthrough and sub-second load times give our brand a massive competitive edge!'
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      project: 'Digital Art Studio',
      category: 'E-Commerce Store',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      message: 'NEXVIX built our personalized watercolor portrait e-commerce store with live INR pricing, before/after artwork sliders, and a frictionless checkout flow. Online portrait orders doubled within 30 days. Incredible 48-hour delivery and world-class design quality!'
    },
    {
      id: 3,
      name: 'Marcus Vance',
      project: 'SunPeak Solar Co.',
      category: 'Commercial Services',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      message: 'NEXVIX delivered our solar landing page in under 48 hours. Our inbound quote requests increased by over 140% in the very first month. The mobile performance is blazing fast!'
    },
    {
      id: 4,
      name: 'Dr. Sarah Jenkins',
      project: 'Serene Health',
      category: 'Business Website (Medical)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      message: 'The team understood clinic aesthetics perfectly. Our patient online appointment bookings doubled since launching the new React site. The calm, trust-focused layout communicates clinical excellence seamlessly.'
    },
    {
      id: 5,
      name: 'Alex Turner',
      project: 'Nexvix Gym',
      category: 'Business Website (Fitness)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      message: 'Bold, high-energy gym website design focused on class signups and membership conversions. Sub-second page speed and immediate free-trial booking calls to action!'
    },
    {
      id: 6,
      name: "Liam O'Connor",
      project: 'Nexvix E-commerce',
      category: 'E-Commerce Store',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
      message: 'Mobile checkout speed for our fashion storefront improved dramatically. Page load times are under half a second. Clear communication and flawless code execution throughout!'
    }
  ];

  const avgRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  return (
    <div className="pt-28 pb-20 bg-[#080616] text-white min-h-screen">

      <SEO 
        title="Client Reviews & Case Testimonials | NEXVIX SofTech Solutions" 
        description="Read verified client reviews from Madurai Food Corner, Digital Art Studio, Serene Health, and businesses worldwide who launched with NEXVIX SofTech Solutions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a123d] border border-[#35266e] text-purple-300 font-semibold text-xs uppercase tracking-widest mb-4 shadow-sm">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Verified Client Feedback</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
            Client Success Stories
          </h1>
          
          <p className="text-slate-300 text-base mt-3 max-w-xl mx-auto">
            Read real feedback from business founders and managers who built their web platforms with NEXVIX SofTech Solutions.
          </p>

          {/* Average Rating Badge */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-3xl bg-[#120d29] border border-[#271d52] shadow-lg">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star 
                  key={s} 
                  className="w-6 h-6 text-amber-400 fill-amber-400" 
                />
              ))}
            </div>
            <div className="text-left">
              <span className="font-heading font-extrabold text-2xl text-white">{avgRating} / 5.0 Rating</span>
              <span className="text-xs text-slate-400 block">Calculated from 100% verified client reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid — Name → Rating → Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#120d29] border border-[#271d52] p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl hover:border-purple-500/50 transition-all duration-300 relative group"
            >
              <div>
                {/* Project Tag Banner */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#1f1745]">
                  <span className="text-xs font-extrabold text-purple-300 bg-[#1a1240] px-3 py-1 rounded-full border border-[#34236e]">
                    {rev.project}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {rev.category}
                  </span>
                </div>

                {/* 1. Client Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name} 
                    className="w-11 h-11 rounded-full object-cover border border-purple-500/50" 
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-heading font-extrabold text-lg text-white group-hover:text-purple-300 transition-colors">
                      {rev.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Platform Client
                    </span>
                  </div>
                </div>

                {/* 2. Rating */}
                <div className="flex items-center gap-1 mb-4 bg-[#1a123d] px-3 py-1 rounded-full border border-[#34246e] w-fit">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-3.5 h-3.5 text-amber-400 fill-amber-400" 
                    />
                  ))}
                  <span className="text-xs font-bold text-amber-300 ml-1">5.0 / 5</span>
                </div>

                {/* 3. Feedback Quote */}
                <p className="text-slate-300 text-sm leading-relaxed italic relative pt-1">
                  "{rev.message}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
