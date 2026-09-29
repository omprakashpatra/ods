import React from 'react';
import { 
  CheckCircle, 
  DollarSign, 
  Zap, 
  Headphones, 
  Award,
  Sparkles
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      title: 'Professional Service',
      description: 'Dedicated focus on meticulous execution & clean architecture.',
      icon: CheckCircle
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear upfront quotes with no surprise charges or hidden tiers.',
      icon: DollarSign
    },
    {
      title: 'Fast Response',
      description: 'Same-day inquiries and rapid turnaround on all scopes.',
      icon: Zap
    },
    {
      title: 'Customer Support',
      description: 'Direct human guidance via WhatsApp, Email and portal tickets.',
      icon: Headphones
    },
    {
      title: 'Quality Focus',
      description: 'Rigorous testing across mobile, tablet, and high-DPI screens.',
      icon: Award
    }
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header banner */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
            Verified Principles & Commitments
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Why businesses choose ODS
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Built on reliability, honest communication, and genuine commercial value.
          </p>
        </div>

        {/* 5-Column Trust Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-sky-300 hover:bg-sky-50/30 transition-all text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 text-sky-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
