import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, User, ShieldCheck, ArrowRight } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    setCurrentUser, 
    addToast,
    setActivePage 
  } = useApp();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  if (!isAuthModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const isAdmin = email.toLowerCase().includes('admin');
    setCurrentUser({
      id: 'usr_' + Date.now(),
      name: name || (isAdmin ? 'ODS Administrator' : 'Client User'),
      email: email,
      role: isAdmin ? 'admin' : 'customer',
      company: company || 'Business Client'
    });

    addToast({
      type: 'success',
      title: 'Signed In Successfully',
      message: `Welcome back! You are authenticated as ${isAdmin ? 'Admin' : 'Customer'}.`
    });

    setIsAuthModalOpen(false);
    if (isAdmin) {
      setActivePage('admin');
    } else {
      setActivePage('dashboard');
    }
  };

  const loginAsDemoCustomer = () => {
    setCurrentUser({
      id: 'usr-demo-1',
      name: 'Kunal Verma',
      email: 'kunal.verma@example.com',
      role: 'customer',
      company: 'Verma Dental & Healthcare'
    });
    addToast({
      type: 'info',
      title: 'Demo Customer Mode',
      message: 'Logged in as Kunal Verma (Customer with active quotes and tickets).'
    });
    setIsAuthModalOpen(false);
    setActivePage('dashboard');
  };

  const loginAsDemoAdmin = () => {
    setCurrentUser({
      id: 'usr-admin-1',
      name: 'Om Prakash (Lead Architect)',
      email: 'admin@omdigitalservices.com',
      role: 'admin',
      company: 'ODS Executive Team'
    });
    addToast({
      type: 'info',
      title: 'Admin Access Granted',
      message: 'Logged in to ODS Control Panel with quotation, review & support permissions.'
    });
    setIsAuthModalOpen(false);
    setActivePage('admin');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 px-6 py-4.5 text-white flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold tracking-tight">ODS Account Portal</h2>
            <p className="text-[11px] text-slate-300">Access quotes, project tracking, invoices & support</p>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Demo Shortcuts for seamless evaluation */}
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 text-center">
            Instant Demo Account Sign-in
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={loginAsDemoCustomer}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-lg text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors cursor-pointer shadow-xs"
            >
              <User className="w-3.5 h-3.5 text-sky-600" />
              <span>Client Portal</span>
            </button>
            <button
              onClick={loginAsDemoAdmin}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-lg text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors cursor-pointer shadow-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              <span>Admin Panel</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-6 space-y-3.5">
          <div className="flex border-b border-slate-200 pb-2 mb-3">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 text-center py-1 text-xs font-semibold cursor-pointer ${
                mode === 'login' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-500'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode('register')}
              className={`flex-1 text-center py-1 text-xs font-semibold cursor-pointer ${
                mode === 'register' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-slate-500'
              }`}
            >
              Create Account
            </button>
          </div>

          {mode === 'register' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Brand Name</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Digital"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@business.com (type 'admin' for admin role)"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">Password</label>
              {mode === 'login' && (
                <button
                  type="button"
                  onClick={() => alert("Password reset link sent to registered email address.")}
                  className="text-[11px] text-sky-600 hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{mode === 'login' ? 'Sign In to Portal' : 'Register Customer Account'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
