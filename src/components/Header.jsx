import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080616]/95 backdrop-blur-xl border-b border-[#211845] shadow-xl py-3' 
          : 'bg-[#080616]/80 backdrop-blur-md border-b border-[#181136]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Reusable Logo Component */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#120e29]/80 p-1.5 rounded-full border border-[#261d4e] backdrop-blur-md shadow-inner">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive && (item.path === location.pathname || (item.path === '/' && location.pathname === '/'))
                      ? 'bg-[#6348f6] text-white font-bold shadow-md shadow-purple-900/60'
                      : 'text-slate-300 hover:text-white hover:bg-[#1f1745]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6348f6] hover:bg-[#5134e8] text-white font-bold text-xs rounded-full transition-all duration-300 shadow-lg shadow-purple-900/50 hover:scale-105"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-purple-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7 text-purple-400" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#090717]/95 backdrop-blur-2xl border-b border-[#261d4e] px-4 pt-4 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#6348f6] text-white'
                    : 'text-slate-300 hover:bg-[#19133b]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#6348f6] text-white font-bold text-sm rounded-xl shadow-lg"
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


