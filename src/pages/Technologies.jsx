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
        { 
          name: "JavaScript (ES6+)", 
          desc: "Asynchronous, modern JS logic for dynamic user interaction.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        { 
          name: "HTML5 Markup", 
          desc: "Semantic, accessible HTML markup structured for high SEO performance.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        },
        { 
          name: "CSS3 / Modern Styling", 
          desc: "Custom HSL design tokens, flexbox/grid, and micro-animations.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
        }
      ]
    },
    {
      title: "Frontend Frameworks & Ecosystem",
      icon: Layers,
      desc: "Cutting-edge UI frameworks enabling sub-second component renders.",
      items: [
        { 
          name: "React.js (v18)", 
          desc: "Component-driven reactive architecture for blazing-fast page loads.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        { 
          name: "Tailwind CSS (v3)", 
          desc: "Utility-first design system with curated gradient palettes and glassmorphism.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
        },
        { 
          name: "Vite Bundler", 
          desc: "Next-generation frontend tooling with instant HMR and optimized production builds.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg"
        },
        { 
          name: "React Router DOM", 
          desc: "Seamless single-page client routing with instant view transitions.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        }
      ]
    },
    {
      title: "Backend Services & Infrastructure",
      icon: Server,
      desc: "Secure, reliable server endpoints and cloud form handling.",
      items: [
        { 
          name: "Node.js Environment", 
          desc: "High-performance JavaScript runtime for build orchestration and tooling.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        },
        { 
          name: "FormSubmit Endpoint API", 
          desc: "Direct AJAX contact form transmission directly to inbox.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
        },
        { 
          name: "REST APIs & JSON Data", 
          desc: "Structured data exchange for dynamic review filtering and analytics.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/json/json-original.svg"
        }
      ]
    },
    {
      title: "Performance & Security Standards",
      icon: ShieldCheck,
      desc: "Built-in speed optimization and global web safety compliance.",
      items: [
        { 
          name: "Lighthouse 95+ Score", 
          desc: "Aggressive asset compression and mobile-first speed architecture.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg"
        },
        { 
          name: "SSL / HTTPS Encryption", 
          desc: "Encrypted data transmission across all client interactions.",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
        }
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EC] to-[#F3EEE3] text-slate-800 min-h-screen">
      <SEO 
        title="Technologies & Languages Used | NEXVIX SofTech Solutions" 
        description="Explore the languages, frameworks, and modern web stack powering NEXVIX SofTech Solutions applications."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0F172A] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#E5DFD3] shadow-sm">
            OUR TECH STACK
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-[#0F172A] mt-4 bg-gradient-to-r from-slate-900 via-[#3b2a82] to-slate-900 bg-clip-text text-transparent">
            Languages & Technologies Used
          </h1>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
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
                className="bg-[#FFFCF9] border border-[#E8E2D5] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF3E6] border border-[#E6DCCB] flex items-center justify-center text-[#0F172A]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#0F172A]">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#E8E2D5]">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-white border border-[#E5DFD3] p-4 rounded-2xl flex items-start gap-3 shadow-xs">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-8 h-8 object-contain shrink-0 mt-0.5 p-1 bg-slate-50 rounded-lg border border-slate-100" 
                        />
                      )}
                      <div>
                        <h4 className="font-heading font-bold text-sm text-[#0F172A] flex items-center gap-2">
                          <span>{item.name}</span>
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
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
