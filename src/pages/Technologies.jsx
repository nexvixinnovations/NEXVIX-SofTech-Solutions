import React from 'react';
import SEO from '../components/SEO';
import { Code2, Layers, Server, ShieldCheck, Zap } from 'lucide-react';

export default function Technologies() {
  const techCategories = [
    {
      title: "Core Programming Languages",
      icon: Code2,
      desc: "Modern standard web languages powering fast, scalable interfaces.",
      items: [
        { name: "JavaScript (ES6+)", desc: "Asynchronous, modern JS logic for dynamic user interaction." },
        { name: "HTML5", desc: "Semantic, accessible HTML markup structured for high SEO performance." },
        { name: "CSS3 / Modern Styling", desc: "Custom HSL design tokens, flexbox/grid, and micro-animations." }
      ]
    },
    {
      title: "Frontend Frameworks & Ecosystem",
      icon: Layers,
      desc: "Cutting-edge UI frameworks enabling sub-second component renders.",
      items: [
        { name: "React.js (v18)", desc: "Component-driven reactive architecture for blazing-fast page loads." },
        { name: "Tailwind CSS (v3)", desc: "Utility-first design system with curated gradient palettes and glassmorphism." },
        { name: "Vite", desc: "Next-generation frontend tooling with instant HMR and optimized production builds." },
        { name: "React Router DOM", desc: "Seamless single-page client routing with instant view transitions." },
        { name: "Lucide React", desc: "Pixel-perfect vector icon library integrated for ultra-clean iconography." }
      ]
    },
    {
      title: "Backend Services & APIs",
      icon: Server,
      desc: "Secure, reliable server endpoints and cloud form handling.",
      items: [
        { name: "Node.js Environment", desc: "High-performance JavaScript runtime for build orchestration and tooling." },
        { name: "FormSubmit Endpoint API", desc: "Direct AJAX contact form transmission directly to inbox." },
        { name: "REST APIs & JSON", desc: "Structured data exchange for dynamic review filtering and analytics." }
      ]
    },
    {
      title: "Performance & Security Standards",
      icon: ShieldCheck,
      desc: "Built-in speed optimization and global web safety compliance.",
      items: [
        { name: "Lighthouse 95+ Optimization", desc: "Aggressive asset compression and mobile-first speed architecture." },
        { name: "SSL / HTTPS Ready", desc: "Encrypted data transmission across all client interactions." },
        { name: "Cross-Browser Compatibility", desc: "Verified rendering on Chrome, Safari, Firefox, and Edge across iOS and Android." }
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080616] text-white min-h-screen">
      <SEO 
        title="Technologies & Languages Used" 
        description="Explore the languages, frameworks, and modern web stack powering NEXVIX SofTech Solutions applications."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-300 font-bold text-xs uppercase tracking-widest bg-[#1a123d] px-4 py-1.5 rounded-full border border-[#35266e]">
            OUR TECH STACK
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mt-4">
            Languages & Technologies Used
          </h1>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            We engineer high-performance web applications using industry-leading modern frameworks, languages, and build tools.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#120d29] border border-[#271d52] rounded-3xl p-8 shadow-xl hover:border-purple-500/60 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#21174d] border border-[#3b2a82] flex items-center justify-center text-purple-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#1f1745]">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-[#090717] border border-[#211847] p-4 rounded-2xl">
                      <h4 className="font-heading font-bold text-sm text-purple-300 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{item.name}</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
