import React from 'react';
import { 
  Sparkles, 
  Users, 
  Tag, 
  MessageCircle, 
  Sliders, 
  LifeBuoy 
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      title: 'Professional Quality',
      description: 'Every project is handled with rigorous attention to detail, strict code quality, and crisp visual standards.',
      icon: Sparkles
    },
    {
      title: 'Customer First',
      description: 'Solutions are specifically designed around your distinct commercial requirements, not forced into rigid molds.',
      icon: Users
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear pricing without confusing tiers or undisclosed fees. You receive a detailed breakdown before work begins.',
      icon: Tag
    },
    {
      title: 'Fast Communication',
      description: 'Reach our team directly via WhatsApp, Email, or support desk with regular sprint and milestone updates.',
      icon: MessageCircle
    },
    {
      title: 'Flexible Solutions',
      description: 'Mix and match website development, data formulas, branding, and automation to match your exact workflow.',
      icon: Sliders
    },
    {
      title: 'Long-Term Support',
      description: 'We provide post-delivery warranty assistance to ensure seamless onboarding and lasting peace of mind.',
      icon: LifeBuoy
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            <span>The ODS Advantage</span>
            <span aria-hidden="true">·</span>
            <span>Client Commitments</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Om Digital Services?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            A reliable digital partner delivering enterprise-grade quality with boutique agility and personalized attention.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-6.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center mb-4.5 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Standard Standard Policy</span>
                  <span className="text-sky-600 font-semibold">Active Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
