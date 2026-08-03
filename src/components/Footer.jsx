import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#080616] border-t border-[#1c153b] text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1c153b]">

          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#120e29] border border-[#2b2157] px-3.5 py-2 rounded-xl w-fit shadow-md">
              <Logo />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              NEXVIX SofTech Solutions creates high-performance, modern and scalable websites for global clients. Delivered in 48 hours.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 bg-[#160f38] px-3.5 py-1.5 rounded-full border border-[#2d1e6e] w-fit">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Serving Clients Worldwide 🌐</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-heading font-extrabold text-white text-sm mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/showcase" className="hover:text-purple-400 transition-colors">Portfolio Showcase</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-purple-400 transition-colors">Transparent Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-purple-400 transition-colors">Client Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Specializations Column */}
          <div>
            <h4 className="font-heading font-extrabold text-white text-sm mb-4 tracking-wide">
              Industries Served
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="hover:text-purple-400 transition-colors">Business & Commercial</li>
              <li className="hover:text-purple-400 transition-colors">Real Estate & Property</li>
              <li className="hover:text-purple-400 transition-colors">Healthcare & Dental</li>
              <li className="hover:text-purple-400 transition-colors">E-Commerce & Fashion</li>
              <li className="hover:text-purple-400 transition-colors">Blue-Collar & Solar</li>
              <li className="hover:text-purple-400 transition-colors">Custom React Web Apps</li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h4 className="font-heading font-extrabold text-white text-sm mb-4 tracking-wide">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="https://wa.me/+91 8778611693?text=Hi%20NEXVIX%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#120e29] border border-[#281e57] text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span className="font-bold truncate">WhatsApp Instant Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
              </a>

              <a
                href="mailto:nexvix.innovations@gmail.com?subject=Website%20Inquiry"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#120e29] border border-[#281e57] text-purple-400 hover:border-purple-500 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="font-bold truncate">Email Solutions Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
              </a>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NEXVIX SofTech Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors">48-Hour Delivery</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">Global Reach</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">Clean Code</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


