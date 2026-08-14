import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/showcase' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled 
            ? 'bg-[#080616]/90 backdrop-blur-xl border-b border-[#211845]/60 shadow-xl py-3' 
            : 'bg-transparent backdrop-blur-sm py-4'
          : isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-[#E2DCCE] shadow-md py-3'
            : 'bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E5DFD3]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Name Text with Electric Blue NEXVIX Loading Style */}
          <Link
            to="/"
            className="whitespace-nowrap inline-flex items-center gap-2 group focus:outline-none transition-transform hover:scale-[1.02]"
          >
            <div className="inline-flex flex-col items-center">
              <span className="font-heading font-black italic text-lg sm:text-xl lg:text-2xl tracking-widest uppercase text-nexvix-blue-glow">
                NEXVIX
              </span>
              {/* Electric Blue Animated Loading Bar Line */}
              <div className="w-full h-[3px] bg-[#1a1c38] rounded-full overflow-hidden relative mt-0.5">
                <div className="h-full w-2/3 bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#6348f6] rounded-full animate-nexvix-loading-line shadow-[0_0_8px_#3b82f6]" />
              </div>
            </div>

            <span className={`font-sans font-bold text-sm sm:text-base lg:text-lg tracking-tight ${
              isHomePage ? 'text-slate-100' : 'text-[#0F172A]'
            }`}>
              SofTech Solutions
            </span>
          </Link>

          {/* Desktop Nav (Centered) */}
          <nav 
            className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md ${
              isHomePage
                ? 'bg-[#120e29]/80 border border-[#261d4e] shadow-inner'
                : 'bg-white/90 border border-[#E2DCCE] shadow-sm'
            }`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => {
                  const active = isActive && (item.path === location.pathname || (item.path === '/' && location.pathname === '/'));
                  if (isHomePage) {
                    return `px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                      active
                        ? 'bg-[#6348f6] text-white shadow-md shadow-purple-900/60'
                        : 'text-slate-300 hover:text-white hover:bg-[#1f1745]'
                    }`;
                  } else {
                    return `px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                      active
                        ? 'bg-[#0F172A] text-white shadow-md'
                        : 'text-slate-700 hover:text-[#0F172A] hover:bg-slate-100'
                    }`;
                  }
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-6 py-2.5 font-bold text-xs rounded-full transition-all duration-300 shadow-md hover:scale-105 ${
                isHomePage
                  ? 'bg-[#6348f6] hover:bg-[#5134e8] text-white shadow-purple-900/50'
                  : 'bg-[#0F172A] hover:bg-[#1E293B] text-white'
              }`}
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none ${isHomePage ? 'text-slate-300 hover:text-purple-400' : 'text-slate-800 hover:text-purple-600'}`}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-7 h-7 ${isHomePage ? 'text-purple-400' : 'text-[#0F172A]'}`} />
              ) : (
                <Menu className={`w-7 h-7 ${isHomePage ? 'text-slate-200' : 'text-[#0F172A]'}`} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isMobileMenuOpen && (
        <div 
          className={`lg:hidden backdrop-blur-2xl px-4 pt-4 pb-6 space-y-2 shadow-2xl ${
            isHomePage
              ? 'bg-[#090717]/95 border-b border-[#261d4e]'
              : 'bg-[#FDFBF7]/98 border-b border-[#E2DCCE]'
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => {
                const active = isActive && (item.path === location.pathname || (item.path === '/' && location.pathname === '/'));
                if (isHomePage) {
                  return `block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    active ? 'bg-[#6348f6] text-white' : 'text-slate-300 hover:bg-[#19133b]'
                  }`;
                } else {
                  return `block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    active ? 'bg-[#0F172A] text-white' : 'text-slate-700 hover:bg-[#FAF6EC]'
                  }`;
                }
              }}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              className={`w-full flex items-center justify-center gap-2 px-5 py-3 font-bold text-sm rounded-xl shadow-lg ${
                isHomePage ? 'bg-[#6348f6] text-white' : 'bg-[#0F172A] text-white'
              }`}
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


