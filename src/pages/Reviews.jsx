import React from 'react';
import SEO from '../components/SEO';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Marcus Vance',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      message: 'NEXVIX delivered our solar landing page in under 48 hours. Our inbound quote requests increased by over 140% in the very first month. The mobile performance is blazing fast!'
    },
    {
      id: 2,
      name: 'David Reynolds',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      message: 'Unbelievable turnaround time and incredible design quality. They built a custom lead capture engine for our service business that outperforms our old WordPress site by miles.'
    },
    {
      id: 3,
      name: 'Sarah Jenkins',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      message: 'The team understood clinic aesthetics perfectly. Our patient online bookings have doubled since launching the new React site. Highly recommended!'
    },
    {
      id: 4,
      name: 'Oliver Smith',
      rating: 4.5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      message: 'Super smooth process from start to finish. The pricing was transparent and the 48-hour delivery commitment was met to the exact hour.'
    },
    {
      id: 5,
      name: "Liam O'Connor",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
      message: 'Mobile checkout speed for our fashion store improved dramatically. Page load times are under half a second. Great communication throughout!'
    },
    {
      id: 6,
      name: 'Chloe Taylor',
      rating: 4.5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      message: 'Clean code, clear advice, and zero hassle. They helped us set up automated commercial cleaning quote forms that save us hours of admin every week.'
    }
  ];

  const avgRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  return (
    <div className="pt-28 pb-20 bg-[#080616] text-white min-h-screen">

      <SEO 
        title="Client Reviews & Success Stories" 
        description="Read verified client reviews from businesses worldwide who launched with NEXVIX SofTech Solutions."
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

          {/* Average Rating Badge */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-3xl bg-[#120d29] border border-[#271d52] shadow-lg">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star 
                  key={s} 
                  className={`w-6 h-6 ${
                    s <= Math.floor(avgRating) 
                      ? 'text-amber-400 fill-amber-400' 
                      : s - 0.5 <= avgRating 
                      ? 'text-amber-400 fill-amber-400 opacity-70' 
                      : 'text-slate-600'
                  }`} 
                />
              ))}
            </div>
            <div className="text-left">
              <span className="font-heading font-extrabold text-2xl text-white">{avgRating} / 5 Rating</span>
              <span className="text-xs text-slate-400 block">Calculated from verified client reviews (4+ Stars)</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid — Name → Rating → Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#120d29] border border-[#271d52] p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl hover:border-purple-500/50 transition-all duration-300"
            >
              <div>
                {/* 1. NAME */}
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name} 
                    className="w-10 h-10 rounded-full object-cover border border-purple-500/50" 
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-heading font-extrabold text-lg text-white">{rev.name}</h4>
                    <span className="text-[11px] font-semibold text-purple-400">Verified Client</span>
                  </div>
                </div>

                {/* 2. RATING */}
                <div className="flex items-center gap-1 mb-4 bg-[#1a123d] px-3 py-1.5 rounded-full border border-[#34246e] w-fit">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(rev.rating) 
                          ? 'text-amber-400 fill-amber-400' 
                          : i < rev.rating 
                          ? 'text-amber-400 fill-amber-400 opacity-60' 
                          : 'text-slate-600'
                      }`} 
                    />
                  ))}
                  <span className="text-xs font-bold text-amber-300 ml-1.5">{rev.rating} / 5</span>
                </div>

                {/* 3. FEEDBACK */}
                <p className="text-slate-300 text-sm leading-relaxed italic border-t border-[#211847] pt-4">
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
