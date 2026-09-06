import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Monitor,
  Smartphone,
  Search,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Mail,
  Building2,
  HeartPulse,
  ShoppingBag,
  Home as HomeIcon,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import StatsBar from '../components/StatsBar';
import DualDeviceMockup, { HeroTripleDeviceMockup, LaptopMockup } from '../components/DeviceMockup';
import { pricingCategories } from '../data/pricingData';


export default function Home() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'E-Commerce', 'Medical', 'Fitness', 'Catering'];

  const portfolioProjects = [
    {
      id: 1,
      title: 'Digital Art Studio',
      category: 'E-Commerce',
      categoryTag: 'E-Commerce Store',
      image: '/showcase/digital-art-studio.png',
      url: 'https://digitalartstudio.pages.dev/',
      desc: 'Custom e-commerce store built for personalized watercolor portraits.'
    },
    {
      id: 2,
      title: 'Serene Health',
      category: 'Medical',
      categoryTag: 'Medical & Healthcare',
      image: '/showcase/serene-health.png',
      url: 'https://serene-health.netlify.app/',
      desc: 'Calm, trust-focused website design for healthcare practice inquiries.'
    },
    {
      id: 3,
      title: 'Nexvix Gym',
      category: 'Fitness',
      categoryTag: 'Gym & Fitness',
      image: '/showcase/nexvix-gym.png',
      url: 'https://nexvix-gym.netlify.app/',
      desc: 'High-energy fitness platform focused on class signups and memberships.'
    },
    {
      id: 4,
      title: 'Nexvix E-commerce',
      category: 'E-Commerce',
      categoryTag: 'E-Commerce Store',
      image: '/showcase/nexvix-ecommerce.png',
      url: 'https://nexvix-ecommerce.netlify.app/',
      desc: 'Modern e-commerce storefront with product grid and checkout flow.'
    }
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeTab === 'All') return true;
    return p.category === activeTab;
  });

  return (
    <div className="bg-[#080616] text-white">
      <SEO
        title="We Build Websites That Build Your Business"
        description="NEXVIX SofTech Solutions creates high-performance, modern and scalable websites for global clients delivered in 48 hours."
      />

      {/* Hero Section — Video Background with Sharp Angled Shape & Glowing Border */}
      <section className="relative min-h-screen flex items-center overflow-hidden [clip-path:polygon(0_0,_100%_0,_100%_93%,_0_100%)] border-b-4 border-[#6348f6]/80 shadow-[0_20px_50px_rgba(99,72,246,0.3)]">

        {/* ── FULL-BLEED BACKGROUND VIDEO ── */}
        <div className="absolute inset-0 z-0">
          <video
            src="https://res.cloudinary.com/ji86uvi3/video/upload/v1785824473/0804_afpouk.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            preload="auto"
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none' }}
          />
          {/* Dark gradient overlay & Sharp Frame Borders */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080616]/95 via-[#080616]/70 to-[#080616]/30" />
          {/* Bottom fade for smooth sharp shape transition */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#080616] to-transparent" />
        </div>

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 w-full pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-7">

              {/* Badge */}
              <div className="hero-animate-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b143d]/80 border border-[#31246b] text-purple-300 font-semibold text-xs uppercase tracking-widest shadow-lg backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#6348f6] animate-ping"></span>
                <span>WE BUILD. YOU GROW.</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-animate-2 font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight drop-shadow-lg">
                We Build Websites <br />
                That Build <span className="text-bright-purple">Your Business.</span>
              </h1>

              {/* Paragraph */}
              <p className="hero-animate-3 text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed drop-shadow">
                NEXVIX SofTech Solutions creates high-performance, modern and scalable websites for global clients. From stunning designs to seamless functionality — we deliver digital experiences that convert.
              </p>

              {/* 4 Feature Pills */}
              <div className="hero-animate-4 grid grid-cols-2 gap-3 max-w-lg">
                {[
                  { icon: Sparkles, label: 'Modern Design' },
                  { icon: Monitor, label: 'Responsive Across All Devices' },
                  { icon: Search, label: 'SEO Optimized' },
                  { icon: ShieldCheck, label: 'Fast Loading & Secure' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 p-3 rounded-xl text-xs font-semibold text-slate-200"
                    style={{
                      background: 'rgba(18,14,41,0.55)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(99,72,246,0.2)'
                    }}>
                    <Icon className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="hero-animate-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/showcase"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#6348f6] hover:bg-[#5134e8] text-white font-extrabold text-sm rounded-full transition-all duration-300 shadow-xl shadow-purple-900/60 hover:scale-105"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-bold text-sm rounded-full border border-white/20 hover:border-[#6348f6] transition-all duration-300"
                  style={{
                    background: 'rgba(18,14,41,0.45)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Trusted by strip */}
              <div className="hero-animate-5 pt-4 border-t border-white/10 text-xs text-slate-400">
                <span className="block mb-2.5 text-slate-400 font-medium">Trusted by businesses worldwide</span>
                <div className="flex flex-wrap items-center gap-5 font-bold text-slate-300 opacity-90">
                  <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-purple-400" /> EcoBuild</span>
                  <span className="flex items-center gap-1.5"><HeartPulse className="w-3.5 h-3.5 text-purple-400" /> medilife</span>
                  <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-purple-400" /> Finova</span>
                  <span className="flex items-center gap-1.5"><HomeIcon className="w-3.5 h-3.5 text-purple-400" /> UrbanStay</span>
                  <span className="flex items-center gap-1.5"><ShoppingBag className="w-3.5 h-3.5 text-purple-400" /> TravelScape</span>
                </div>
              </div>

            </div>

            {/* Glass Stats Bar — Bottom overlaid on video */}
            <div className="hero-glass-animate mt-16 max-w-2xl">
              <div
                className="rounded-2xl px-6 py-4 flex items-center justify-between gap-4 flex-wrap"
                style={{
                  background: 'rgba(18, 13, 41, 0.55)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(99, 72, 246, 0.3)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)'
                }}
              >
                <div className="flex flex-col items-center text-center px-3">
                  <span className="font-heading font-extrabold text-2xl text-white leading-none">10+</span>
                  <span className="text-[11px] text-slate-400 mt-0.5 font-medium">Projects Done</span>
                </div>
                <div className="w-px h-8 bg-[#271d52] shrink-0"></div>
                <div className="flex flex-col items-center text-center px-3">
                  <span className="font-heading font-extrabold text-2xl text-white leading-none">48h</span>
                  <span className="text-[11px] text-slate-400 mt-0.5 font-medium">Delivery Time</span>
                </div>
                <div className="w-px h-8 bg-[#271d52] shrink-0"></div>
                <div className="flex flex-col items-center text-center px-3">
                  <span className="font-heading font-extrabold text-2xl text-white leading-none">100%</span>
                  <span className="text-[11px] text-slate-400 mt-0.5 font-medium">Satisfaction</span>
                </div>
                <div className="w-px h-8 bg-[#271d52] shrink-0"></div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6348f6] hover:bg-[#5134e8] text-white font-extrabold text-xs rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-900/40 shrink-0"
                >
                  <span>Start Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Portfolio Showcase Section (Light Background matching Reference Image) */}
      <section className="py-20 bg-[#f6f6f9] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header & Filter Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">

            {/* Title Info Left */}
            <div>
              <span className="text-purple-600 font-bold text-xs uppercase tracking-widest bg-purple-100 px-3.5 py-1.5 rounded-full border border-purple-200">
                OUR PORTFOLIO
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3">
                Websites That Speak Success
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Explore a selection of websites we've crafted for businesses across different industries.
              </p>
              <div className="mt-4">
                <Link
                  to="/showcase"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6348f6] hover:bg-[#5134e8] text-white font-extrabold text-xs rounded-full shadow-md transition-all hover:scale-105"
                >
                  <span>Explore All Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category Filter Pills Right */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeTab === cat
                      ? 'bg-[#6348f6] text-white shadow-md shadow-purple-200'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="portfolio-card-light overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                {/* Mockup Preview Area */}
                <div className="p-4 bg-slate-100 border-b border-slate-200/80 relative overflow-hidden">
                  <LaptopMockup
                    imageSrc={project.image}
                    title={project.title}
                  />
                </div>


                {/* Info Bottom */}
                <div className="p-5">
                  <h3 className="font-heading font-extrabold text-base text-slate-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-bold text-purple-600 block mt-1">
                    {project.categoryTag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services & Offers Overview */}
      <section className="py-20 bg-[#080616] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-purple-300 font-bold text-xs uppercase tracking-widest">SERVICES & CURRENT OFFERS</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-3">Choose the build that fits your next move.</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                From a fast business launch to a complete SaaS platform, every package includes a production-ready build, clear delivery timeline, and the current promotional price.
              </p>
            </div>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0F172A] hover:bg-purple-100 font-extrabold text-xs rounded-full transition-colors shrink-0"
            >
              <span>See Full Pricing Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingCategories.map((service) => (
              <article key={service.category} className="rounded-2xl border border-[#2b2352] bg-[#110d25] p-6">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl">{service.category}</h3>
                    <p className="text-xs text-slate-400 mt-1">{service.tiers.length} package{service.tiers.length === 1 ? '' : 's'} available</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1.5 rounded-full whitespace-nowrap">
                    Limited offers
                  </span>
                </div>

                <div className="space-y-3">
                  {service.tiers.map((tier) => {
                    const price = tier.prices.USD;
                    return (
                      <div key={tier.tierName} className="border-t border-[#2b2352] pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-bold text-sm truncate">{tier.tierName}</p>
                          <p className="text-xs text-slate-400 mt-1">{tier.delivery}</p>
                        </div>
                        <div className="text-left sm:text-right shrink-0">
                          <p className="text-[11px] text-slate-500 line-through">{price.original}</p>
                          <p className="font-heading font-extrabold text-lg text-white">{price.offer}</p>
                          <p className="text-[11px] font-bold text-emerald-300">Save {price.save}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Stats Bar & CTA */}
      <section className="bg-[#080616] py-10">
        <StatsBar />
      </section>

    </div>
  );
}



