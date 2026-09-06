import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Smile, Globe, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function StatsBar({ className = "" }) {
  const stats = [
    {
      icon: Rocket,
      value: "10+",
      label: "Projects Completed"
    },
    {
      icon: Smile,
      value: "10+",
      label: "Happy Clients"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries Served"
    },
    {
      icon: Clock,
      value: "99%",
      label: "On-Time Delivery"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      <div className="bg-[#FFFCF9] border border-[#E8E2D5] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
        <div className="flex flex-col 2xl:flex-row items-stretch 2xl:items-center justify-between gap-8">

          {/* 5 Stats Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 flex-1">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF3E6] border border-[#E6DCCB] flex items-center justify-center text-[#0F172A] group-hover:scale-110 transition-all duration-300 shrink-0 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-xl sm:text-2xl text-[#0F172A] block leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-slate-600 block mt-0.5 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Integrated CTA Box */}
          <div className="bg-[#0F172A] p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-md text-white 2xl:shrink-0 border border-slate-800">
            <div className="text-center sm:text-left">
              <h4 className="font-serif font-bold text-white text-base leading-snug">
                Have a Project in Mind?
              </h4>
              <p className="text-slate-300 text-xs mt-0.5 font-medium">
                Let's build something amazing together.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-[#0F172A] font-bold text-xs rounded-full shadow-xs transition-all hover:scale-105 shrink-0 whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
