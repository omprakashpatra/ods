import React from 'react';
import { useApp } from '../../context/AppContext';
import { ActivePage, ServiceId } from '../../types';
import { 
  ArrowUpRight, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { 
    setActivePage, 
    openQuoteModalWithService, 
    setIsSupportDrawerOpen 
  } = useApp();

  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: ServiceId) => {
    openQuoteModalWithService(serviceId);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Tagline (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                ODS
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base tracking-tight">ODS</h3>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider -mt-0.5">
                  Om Digital Services
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm italic font-medium">
              “Your Digital Partner for Smarter Business.”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing reliable, affordable, and high-standard digital solutions to creators, startups, and growing enterprises worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-sky-600 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                aria-label="ODS on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                aria-label="ODS on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                aria-label="ODS on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors text-slate-400"
                aria-label="ODS on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <button 
                onClick={() => {
                  const text = encodeURIComponent("Hello ODS team! I would like to inquire about your digital services.");
                  window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
                }}
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-slate-400 cursor-pointer"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About ODS
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Pricing & Quotations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-white transition-colors cursor-pointer">
                  Portfolio Showcases
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Client Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Digital Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleServiceClick('web-dev')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('graphic-design')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Graphic Design & Branding
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('excel-data')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Excel & Data Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('business-support')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Digital Business Support
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('social-media')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Social Media Services
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('document-services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Document Services (PDF/Word)
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('ai-solutions')} className="hover:text-white transition-colors cursor-pointer text-left">
                  AI Solutions & Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleServiceClick('custom-services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Custom Digital Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Portals (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Knowledge Base & FAQ
                </button>
              </li>
              <li>
                <button onClick={() => openQuoteModalWithService()} className="hover:text-white transition-colors cursor-pointer">
                  Request a Quote
                </button>
              </li>
              <li>
                <button onClick={() => setIsSupportDrawerOpen(true)} className="hover:text-white transition-colors cursor-pointer">
                  Customer Support Desk
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dashboard')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                  <span>Customer Dashboard</span>
                  <ArrowUpRight className="w-3 h-3 text-sky-400" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admin')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-slate-500 hover:text-sky-300">
                  <span>Admin Control Console</span>
                  <ShieldCheck className="w-3 h-3 text-orange-400" />
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <p className="text-[11px] text-slate-500">Direct Support Hours</p>
              <p className="text-xs text-slate-300 font-semibold">Mon – Sat: 9:00 AM – 7:00 PM IST</p>
              <p className="text-[11px] text-sky-400 mt-1">support@omdigitalservices.com</p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 ODS – Om Digital Services. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNav('privacy')} 
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button 
              onClick={() => handleNav('terms')} 
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button 
              onClick={() => handleNav('refund')} 
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
