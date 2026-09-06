import React from 'react';
import SEO from '../components/SEO';
import StatsBar from '../components/StatsBar';
import DualDeviceMockup, { LaptopMockup } from '../components/DeviceMockup';
import {
  CheckCircle2,
  Rocket,
  Target,
  Code,
  Layers,
  ShieldCheck,
  Clock,
  MessageSquare,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const timelineSteps = [
    { step: '01', title: 'Discovery Brief', desc: 'We analyze your niche, competitors, and conversion goals in a focused intake form.' },
    { step: '02', title: 'Design Sprint', desc: 'We wireframe and design your mobile-first layout tailored to your brand palette.' },
    { step: '03', title: 'React Build', desc: 'Our engineers code clean, production-ready React components with Tailwind CSS.' },
    { step: '04', title: 'QA & Testing', desc: 'Rigorous cross-browser, cross-device testing before any staging deployment.' },
    { step: '05', title: 'Go Live', desc: 'Site goes live with SEO meta setup, fast hosting, and you receive all source files.' }
  ];

  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EC] to-[#F3EEE3] text-slate-800 min-h-screen">
      <SEO
        title="About Us & Our Story | NEXVIX SofTech Solutions"
        description="Learn how NEXVIX SofTech Solutions builds high-converting React websites in 48 hours for service businesses worldwide."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0F172A] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E5DFD3] shadow-sm">
              The NEXVIX Story
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl text-[#0F172A] leading-tight bg-gradient-to-r from-slate-900 via-[#3b2a82] to-slate-900 bg-clip-text text-transparent">
              Crafting High-Impact Digital Experiences for Global Leaders
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              NEXVIX SofTech Solutions was founded with a singular mission: to eliminate slow, traditional web development cycles and build high-converting, production-ready web apps for growing service brands <strong className="text-[#0F172A]">worldwide</strong>.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="NEXVIX SofTech team workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <StatsBar className="my-14" />

        {/* Our Story & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="bg-[#FFFCF9] p-8 rounded-3xl border border-[#E8E2D5] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF3E6] border border-[#E6DCCB] flex items-center justify-center mb-6 text-[#0F172A]">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#0F172A] mb-3">
              Our Story
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              After observing service business owners lose potential clients due to outdated, slow WordPress sites, we built a proprietary React & Tailwind engineering workflow. We guarantee delivery in 48 hours with zero compromise on speed or aesthetics.
            </p>
          </div>

          <div className="bg-[#FFFCF9] p-8 rounded-3xl border border-[#E8E2D5] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF3E6] border border-[#E6DCCB] flex items-center justify-center mb-6 text-[#0F172A]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#0F172A] mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To empower Solar, Roofing, Healthcare, and E-Commerce contractors with digital assets that generate predictable inbound leads, command authority, and turn traffic into loyal paying clients.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="my-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#0F172A] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E5DFD3] shadow-sm">
              Why We Stand Out
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mt-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: 'Zero Bloat Code', desc: 'We write clean React components without heavy page builders, yielding 95+ Google Lighthouse speed scores.' },
              { icon: Clock, title: 'Guaranteed 48h Turnaround', desc: 'Our structured sprint methodology guarantees your initial site build is live in 2 business days.' },
              { icon: Layers, title: 'Global Market Standards', desc: 'Deep understanding of buyer psychology for international conversion.' },
              { icon: ShieldCheck, title: '100% Code Ownership', desc: 'You retain full ownership of all source code, assets, and hosting credentials with zero vendor lock-in.' }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-[#FFFCF9] p-6 rounded-2xl border border-[#E8E2D5] hover:border-purple-400 transition-all duration-300 shadow-xs hover:shadow-md">
                  <Icon className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="font-serif font-bold text-lg text-[#0F172A] mb-2">{card.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#0F172A] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E5DFD3] shadow-sm">
              Step-by-Step Sprint
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mt-4">
              Our 5-Step Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {timelineSteps.map((s, idx) => (
              <div key={idx} className="bg-[#FFFCF9] p-6 rounded-2xl border border-[#E8E2D5] flex flex-col justify-between relative group hover:border-purple-400 transition-all duration-300 shadow-xs">
                <span className="font-heading font-black text-3xl text-slate-400 group-hover:text-[#0F172A] transition-colors">
                  {s.step}
                </span>
                <div className="mt-4">
                  <h4 className="font-serif font-bold text-lg text-[#0F172A] mb-2">{s.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="rounded-3xl p-8 sm:p-14 bg-[#0F172A] text-white shadow-xl text-center">
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-4">
            Ready to Accelerate Your Online Presence?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
            Speak directly with our technical lead today and get your custom website live in 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/+91 8778611693?text=Hi%20NEXVIX%2C%20I%20want%20to%20learn%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base rounded-2xl transition-all shadow-lg hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="mailto:nexvix.innovations@gmail.com?subject=About%20Page%20Inquiry"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#6348f6] hover:bg-[#5134e8] text-white font-extrabold text-base rounded-2xl transition-all shadow-xl shadow-purple-900/50 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email Solutions Team</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
