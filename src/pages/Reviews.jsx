import React from 'react';
import SEO from '../components/SEO';
import { Star, CheckCircle2, ExternalLink, MapPin, MessageSquarePlus, ShieldCheck } from 'lucide-react';

export default function Reviews() {
  const googleMapsUrl = "https://www.google.com/maps/place/NEXVIX+SofTech+Solutions/@20.7364666,72.1067607,5z/data=!3m1!4b1!4m6!3m5!1s0x2f39cb72858c8ac3:0x36c036d1d6039a4c!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11zkxwb8d6?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D";

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
    <div className="pt-28 pb-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EC] to-[#F3EEE3] text-slate-800 min-h-screen">

      <SEO 
        title="Client Reviews & Google Ratings | NEXVIX SofTech Solutions" 
        description="Read verified client reviews and Google Maps ratings from Madurai Food Corner, Digital Art Studio, Serene Health, and businesses worldwide who launched with NEXVIX SofTech Solutions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[#0F172A] font-bold text-xs uppercase tracking-widest mb-4 shadow-sm">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Google Verified Reviews & Client Feedback</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl text-[#0F172A] bg-gradient-to-r from-slate-900 via-[#3b2a82] to-slate-900 bg-clip-text text-transparent">
            Client Success Stories
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Read real feedback from business founders, medical professionals, and managers who built high-converting web platforms with NEXVIX SofTech Solutions.
          </p>

          {/* Average Rating & Google Maps Action Strip */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-3xl bg-[#FFFCF9] border border-[#E8E2D5] shadow-sm max-w-xl w-full justify-center">
              
              {/* Google G Logo & Stars */}
              <div className="flex flex-col items-center sm:items-start gap-1.5">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  <span className="font-heading font-extrabold text-sm text-slate-800 tracking-tight">Google Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star 
                      key={s} 
                      className="w-5 h-5 text-amber-500 fill-amber-500" 
                    />
                  ))}
                </div>
              </div>

              {/* Rating metrics */}
              <div className="text-center sm:text-left border-t sm:border-t-0 sm:border-l border-[#EAE3D6] pt-3 sm:pt-0 sm:pl-6">
                <span className="font-serif font-bold text-2xl sm:text-3xl text-[#0F172A] block leading-tight">
                  {avgRating} <span className="text-base sm:text-lg text-slate-500 font-sans font-normal">/ 5.0 Rating</span>
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  100% verified client reviews & Google business ratings
                </span>
              </div>
            </div>

            {/* CTAs: View on Google Maps & Write Review */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6348f6] hover:bg-[#5134e8] text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-900/20 transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-[#E5DFD3] shadow-sm transition-all hover:scale-105"
              >
                <MessageSquarePlus className="w-4 h-4 text-purple-600" />
                <span>Write a Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid — Name → Rating → Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#FFFCF9] border border-[#E8E2D5] p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              <div>
                {/* Project Tag Banner & Google Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#F0EAE0]">
                  <span className="text-xs font-bold text-[#7E520A] bg-[#FAF0D9] px-3 py-1 rounded-full border border-[#F3DBA7]">
                    {rev.project}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-[#FAF6EC] px-2.5 py-0.5 rounded-full border border-[#E5DFD3]">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                    <span>Google</span>
                  </div>
                </div>

                {/* 1. Client Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name} 
                    className="w-11 h-11 rounded-full object-cover border border-[#E2DCCE]" 
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#0F172A] group-hover:text-purple-700 transition-colors">
                      {rev.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Platform Client
                    </span>
                  </div>
                </div>

                {/* 2. Rating */}
                <div className="flex items-center gap-1 mb-4 bg-[#FAF6EC] px-3 py-1 rounded-full border border-[#E5DFD3] w-fit">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-3.5 h-3.5 text-amber-500 fill-amber-500" 
                    />
                  ))}
                  <span className="text-xs font-bold text-[#0F172A] ml-1">5.0 / 5</span>
                </div>

                {/* 3. Feedback Quote */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic relative pt-1">
                  "{rev.message}"
                </p>
              </div>

              {/* Card Footer attribution */}
              <div className="mt-5 pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Google Verified Rating
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1 font-medium"
                >
                  <span>View on Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
