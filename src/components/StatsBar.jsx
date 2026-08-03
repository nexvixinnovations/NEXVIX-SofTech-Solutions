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
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 ${className}`}>
      <div className="bg-[#090717] border border-[#261e4e] rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#6348f6]/15 blur-[100px] pointer-events-none"></div>

        {/* 5 Stats Items Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-left w-full lg:w-auto flex-1">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-12 h-12 rounded-2xl bg-[#1a133b] border border-[#31256b] flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:border-purple-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-xl lg:text-2xl text-white block leading-tight group-hover:text-purple-300 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-slate-400 block mt-0.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Purple CTA Box on Right */}
        <div className="w-full lg:w-auto shrink-0 bg-gradient-to-r from-[#6348f6] to-[#5134e8] p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-purple-900/60">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-extrabold text-white text-base leading-snug">
              Have a Project in Mind?
            </h4>
            <p className="text-purple-100 text-xs mt-0.5 font-medium">
              Let's build something amazing together.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-[#5134e8] font-extrabold text-xs rounded-full shadow-md transition-all hover:scale-105 shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

