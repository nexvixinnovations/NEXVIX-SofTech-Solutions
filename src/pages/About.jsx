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
    <div className="pt-28 pb-20 bg-[#080616] text-white min-h-screen">
      <SEO
        title="About Us & Our Story"
        description="Learn how NEXVIX SofTech Solutions builds high-converting React websites in 48 hours for service businesses worldwide."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-purple-300 font-bold text-xs uppercase tracking-widest bg-[#1a123d] px-4 py-1.5 rounded-full border border-[#35266e]">
              The NEXVIX Story
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight">
              Crafting High-Impact Digital Experiences for Global Leaders
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              NEXVIX SofTech Solutions was founded with a singular mission: to eliminate slow, traditional web development cycles and build high-converting, production-ready web apps for growing service brands <strong className="text-purple-300">worldwide</strong>.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-[#2b2157] shadow-2xl shadow-purple-900/30">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="NEXVIX SofTech team workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <StatsBar className="my-12 rounded-3xl border border-[#271d52] shadow-lg" />

        {/* Our Story & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="bg-[#120d29] p-8 rounded-3xl border border-[#271d52] shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#1f1745] border border-[#3b2a82] flex items-center justify-center mb-6 text-purple-400">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
              Our Story
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              After observing service business owners lose potential clients due to outdated, slow WordPress sites, we built a proprietary React & Tailwind engineering workflow. We guarantee delivery in 48 hours with zero compromise on speed or aesthetics.
            </p>
          </div>

          <div className="bg-[#120d29] p-8 rounded-3xl border border-[#271d52] shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#1f1745] border border-[#3b2a82] flex items-center justify-center mb-6 text-purple-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
              Our Mission
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To empower Solar, Roofing, Healthcare, and E-Commerce contractors with digital assets that generate predictable inbound leads, command authority, and turn traffic into loyal paying clients.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="my-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-300 font-bold text-xs uppercase tracking-widest bg-[#1a123d] px-4 py-1.5 rounded-full border border-[#35266e]">
              Why We Stand Out
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-4">
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
                <div key={idx} className="bg-[#120d29] p-6 rounded-2xl border border-[#271d52] hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
                  <Icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h4 className="font-heading font-extrabold text-lg text-white mb-2">{card.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-purple-300 font-bold text-xs uppercase tracking-widest bg-[#1a123d] px-4 py-1.5 rounded-full border border-[#35266e]">
              Step-by-Step Sprint
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-4">
              Our 5-Step Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {timelineSteps.map((s, idx) => (
              <div key={idx} className="bg-[#120d29] p-6 rounded-2xl border border-[#271d52] flex flex-col justify-between relative group hover:border-purple-500/60 transition-all duration-300">
                <span className="font-heading font-black text-3xl text-[#3b2a82] group-hover:text-purple-400 transition-colors">
                  {s.step}
                </span>
                <div className="mt-4">
                  <h4 className="font-heading font-extrabold text-lg text-white mb-2">{s.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#0d0a22] via-[#1a123d] to-[#0d0a22] border border-[#271d52] shadow-2xl text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
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
