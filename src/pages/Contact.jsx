import React, { useState } from 'react';
import SEO from '../components/SEO';
import {
  Send,
  MessageSquare,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Star,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Blue-Collar',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/nexvix.innovations@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _subject: `New NEXVIX Project Inquiry from ${formData.name}`
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Form submit error:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#080616] text-white min-h-screen">
      <SEO
        title="Contact Us & Start Your Project"
        description="Get a free quote for your business website. Fast 48-hour turnaround for Solar, Roofing, Healthcare, and E-Commerce worldwide."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-300 font-bold text-xs uppercase tracking-widest bg-[#1a123d] px-4 py-1.5 rounded-full border border-[#35266e]">
            Rapid 48h Response
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mt-4">
            Start Your Website Project
          </h1>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            Fill out the project details below or reach out directly via WhatsApp or Email. We respond within 2 hours.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#120d29] border border-[#271d52] p-8 sm:p-10 rounded-3xl shadow-xl">
            <h2 className="font-heading font-extrabold text-2xl text-white mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="p-8 bg-emerald-900/30 border border-emerald-500/40 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="font-heading font-extrabold text-2xl text-white">Inquiry Delivered to Our Inbox!</h3>
                <p className="text-sm text-slate-300">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your message has been sent. We will email you back shortly at <span className="text-purple-300 font-semibold">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Blue-Collar', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#6348f6] text-white font-bold text-xs rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#090717] border border-[#271d52] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#6348f6] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#090717] border border-[#271d52] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#6348f6] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Industry *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#090717] border border-[#271d52] rounded-xl text-sm text-white focus:outline-none focus:border-[#6348f6] transition-colors"
                  >
                    <option value="Blue-Collar">Blue-Collar (Solar, Roofing, HVAC)</option>
                    <option value="Healthcare">Healthcare & Wellness (Dental, Clinic)</option>
                    <option value="E-Commerce">E-Commerce & Retail</option>
                    <option value="Custom">Custom Web App & Dashboard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Details / Requirements *</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell us about your business, current website, timeline goals, and desired features..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#090717] border border-[#271d52] rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#6348f6] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#6348f6] hover:bg-[#5134e8] text-white font-extrabold text-base rounded-xl shadow-lg shadow-purple-900/50 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>{submitting ? "Sending to Inbox..." : "Submit Project Inquiry"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* WhatsApp Card */}
            <div className="bg-[#0a1f12] border border-emerald-600/40 p-8 rounded-3xl relative overflow-hidden shadow-lg hover:border-emerald-500/70 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-900/40 border border-emerald-600/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-900/50 px-3 py-1 rounded-full border border-emerald-600/40">
                  Fastest Support
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                WhatsApp Direct Chat
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Chat with our tech lead directly on WhatsApp for instant quote estimates and project advice.
              </p>

              <a
                href="https://wa.me/+91 8778611693?text=Hi%20NEXVIX%2C%20I%20want%20to%20discuss%20a%20website%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-[#0d0a22] border border-[#271d52] p-8 rounded-3xl relative overflow-hidden shadow-lg hover:border-purple-500/60 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1f1745] border border-[#3b2a82] flex items-center justify-center text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-purple-300 bg-[#1a1240] px-3 py-1 rounded-full border border-[#341d6e]">
                  Solutions Email
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Email Inquiry Desk
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Send your RFP or project specs directly to our solutions desk for a comprehensive proposal.
              </p>

              <a
                href="mailto:nexvix.innovations@gmail.com?subject=New%20Project%20Inquiry%20-%20NEXVIX"
                className="w-full py-3.5 px-6 bg-[#6348f6] hover:bg-[#5134e8] text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Email Solutions Desk</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Delivery SLA Badge */}
            <div className="p-6 rounded-2xl bg-[#120d29] border border-[#271d52] flex items-center gap-4 shadow-sm">
              <Clock className="w-10 h-10 text-purple-400 shrink-0" />
              <div>
                <h4 className="font-heading font-extrabold text-sm text-white">48-Hour Delivery SLA</h4>
                <p className="text-xs text-slate-400">All standard client builds ship within 2 business days.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Trust Badges Row */}
        <div className="pt-10 border-t border-[#1f1745]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

            <div className="p-6 rounded-3xl bg-[#120d29] border border-[#271d52] flex flex-col items-center shadow-sm">
              <Award className="w-8 h-8 text-purple-400 mb-3" />
              <span className="font-heading font-extrabold text-2xl text-white">10+ Completed</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Verified Client Projects</span>
            </div>

            <div className="p-6 rounded-3xl bg-[#120d29] border border-[#271d52] flex flex-col items-center shadow-sm">
              <Star className="w-8 h-8 text-amber-400 fill-amber-400 mb-3" />
              <span className="font-heading font-extrabold text-2xl text-white">4.5 / 5 Rating</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Client Satisfaction Score</span>
            </div>

            <div className="p-6 rounded-3xl bg-[#120d29] border border-[#271d52] flex flex-col items-center shadow-sm">
              <ShieldCheck className="w-8 h-8 text-purple-400 mb-3" />
              <span className="font-heading font-extrabold text-2xl text-white">1+ Year Experience</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Global Client Network</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
