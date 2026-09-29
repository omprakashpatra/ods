import React from 'react';
import { useApp } from '../../context/AppContext';
import { HERO_IMAGE } from '../../data/initialData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Headphones, 
  Zap 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openQuoteModalWithService, setActivePage } = useApp();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-sky-50/20 to-slate-50 border-b border-slate-200/60">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-10 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean editorial label - Zero Pill rule compliant */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-sky-800">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>Full-Spectrum Digital Agency</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">Reliable & Affordable Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              Your Digital Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-orange-500">
                Smarter Business.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              From websites and digital solutions to creative services and business support, ODS helps you build, improve and grow your digital presence with zero complexity.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => openQuoteModalWithService()}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Get Started / Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActivePage('services');
                  const el = document.getElementById('services-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-sky-600 bg-white hover:bg-slate-50 border border-slate-300 hover:border-sky-300 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust highlights checklist */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Professional Services</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Headphones className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Customer Support</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Affordable Solutions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
                <img
                  src={HERO_IMAGE}
                  alt="ODS modern digital workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Embedded status caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">ODS Digital Delivery Framework</p>
                    <p className="text-[11px] text-slate-500">Milestone-driven digital solutions for startups & SMBs</p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400" />
                </div>
              </div>

              {/* Floating Feature Card 1: Fast Delivery */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/80 shadow-lg items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Fast Turnaround</p>
                  <p className="text-[10px] text-slate-500">Structured project milestones</p>
                </div>
              </div>

              {/* Floating Feature Card 2: Satisfaction & Support */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-lg items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Direct Human Support</p>
                  <p className="text-[10px] text-slate-500">WhatsApp & Email Assistance</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
