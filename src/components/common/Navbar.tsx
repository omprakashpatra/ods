import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ActivePage } from '../../types';
import { 
  Menu, 
  X, 
  ArrowRight, 
  User, 
  ShieldCheck, 
  ChevronDown, 
  LogOut,
  Layers
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    activePage, 
    setActivePage, 
    openQuoteModalWithService, 
    currentUser, 
    setCurrentUser,
    setIsAuthModalOpen 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Reviews', page: 'reviews' },
    { label: 'About', page: 'about' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark with brand emblem */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
              ODS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                ODS
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase -mt-1 hidden sm:block">
                Om Digital Services
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors hover:text-sky-600 cursor-pointer ${
                  isActive 
                    ? 'text-sky-600 font-semibold' 
                    : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions & User Role Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* User Account / Role dropdown */}
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer border border-slate-200/60"
              title="Switch demo role or view portals"
            >
              {currentUser?.role === 'admin' ? (
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              ) : (
                <User className="w-3.5 h-3.5 text-slate-600" />
              )}
              <span className="whitespace-nowrap font-medium">
                {currentUser ? (currentUser.role === 'admin' ? 'Admin Mode' : 'Client Portal') : 'Account'}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {userDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setUserDropdownOpen(false)}
              >
                {currentUser && (
                  <div className="px-3.5 py-2 border-b border-slate-100">
                    <p className="text-xs font-semibold text-slate-900 truncate">{currentUser.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
                    <span className="inline-block mt-1 text-[10px] font-medium text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">
                      Role: {currentUser.role.toUpperCase()}
                    </span>
                  </div>
                )}

                <div className="py-1">
                  <button
                    onClick={() => {
                      handleNavClick('dashboard');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-slate-500" />
                    Customer Dashboard
                  </button>

                  <button
                    onClick={() => {
                      handleNavClick('admin');
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    Admin Control Panel
                  </button>

                  <div className="border-t border-slate-100 my-1"></div>

                  {currentUser ? (
                    <button
                      onClick={() => {
                        setCurrentUser(null);
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs text-sky-600 hover:bg-sky-50 flex items-center gap-2 cursor-pointer font-medium"
                    >
                      <User className="w-3.5 h-3.5" />
                      Log In / Register
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Primary CTA: Get Started */}
          <button
            onClick={() => openQuoteModalWithService()}
            className="flex items-center gap-2 px-4.5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg shadow-sm shadow-orange-500/25 transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => openQuoteModalWithService()}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-orange-500 rounded-md"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activePage === item.page 
                    ? 'bg-sky-50 text-sky-700 font-semibold' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleNavClick('dashboard')}
                  className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center"
                >
                  Client Portal
                </button>
                <button
                  onClick={() => handleNavClick('admin')}
                  className="px-3 py-2 text-xs font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg text-center"
                >
                  Admin Panel
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModalWithService();
                }}
                className="w-full mt-2 py-2.5 text-center text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm"
              >
                Get Started / Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
