import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Check, ShieldCheck } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const { subscribeNewsletter } = useApp();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const ok = await subscribeNewsletter(email);
      if (ok) {
        setSubscribed(true);
        setEmail('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-400 text-xs font-semibold mb-4 border border-white/10">
          <Mail className="w-3.5 h-3.5" />
          <span>ODS Digital Briefing</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Stay Updated With ODS
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 leading-relaxed">
          Receive occasional practical tips on web development, Excel data automation, and digital branding. No spam, ever.
        </p>

        {subscribed ? (
          <div className="mt-6 inline-flex items-center gap-2 p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs font-semibold">
            <Check className="w-4 h-4" />
            <span>Thank you for subscribing! Check your inbox for our latest digital guide.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:bg-white/20 focus:ring-2 focus:ring-sky-400 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-[11px] text-slate-400 mt-3 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
          <span>Unsubscribe anytime with 1-click. We respect your inbox privacy.</span>
        </p>
      </div>
    </section>
  );
};
