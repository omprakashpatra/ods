import React from 'react';
import { useApp } from '../../context/AppContext';
import { PRICING_PACKAGES } from '../../data/initialData';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { openQuoteModalWithService, setActivePage } = useApp();

  return (
    <section id="pricing-section" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            <span>Transparent Investment</span>
            <span aria-hidden="true">·</span>
            <span>Zero Hidden Fees</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear, Scope-Based Pricing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Every digital requirement is unique. We provide transparent, itemized quotes based on exact deliverables rather than rigid, inflated packages.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isFeatured = pkg.id === 'tier-pro';

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-sky-900 via-slate-900 to-slate-950 text-white shadow-2xl ring-2 ring-sky-500 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 text-slate-900 hover:border-sky-300 shadow-sm'
                }`}
              >
                {/* Feature highlight */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-bold tracking-tight ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                      {pkg.name}
                    </h3>
                    {!isFeatured && (
                      <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs mb-6 ${isFeatured ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.subtitle}
                  </p>

                  {/* Pricing callout */}
                  <div className={`p-4 rounded-xl mb-6 ${isFeatured ? 'bg-white/10 border border-white/15' : 'bg-slate-50 border border-slate-200/70'}`}>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${isFeatured ? 'text-sky-300' : 'text-sky-700'}`}>
                      Pricing Model
                    </p>
                    <p className={`text-sm font-bold mt-1 ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                      {pkg.priceDescription}
                    </p>
                    <p className={`text-[11px] mt-1 ${isFeatured ? 'text-slate-300' : 'text-slate-500'}`}>
                      Estimated Turnaround: <span className="font-semibold">{pkg.typicalTurnaround}</span>
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className={`text-xs font-bold uppercase tracking-wider ${isFeatured ? 'text-slate-300' : 'text-slate-500'}`}>
                      Scope Breakdown:
                    </p>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isFeatured ? 'bg-sky-500/20 text-sky-300' : 'bg-sky-100 text-sky-600'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <div>
                  <button
                    onClick={() => openQuoteModalWithService()}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                    }`}
                  >
                    <span>Request Quote for {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className={`text-[11px] text-center mt-3 ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                    Ideal for: {pkg.recommendedFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Requirements Prompt */}
        <div className="mt-14 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold text-slate-900">
            Need something different or a specialized recurring service?
          </p>
          <p className="text-xs text-slate-600 mt-1 max-w-lg mx-auto">
            Contact us for a customized quotation. We will happily analyze your unique specifications and propose an optimal, cost-efficient path forward.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActivePage('contact')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg cursor-pointer"
            >
              Contact Advisory Team
            </button>
            <button
              onClick={() => openQuoteModalWithService('custom-services')}
              className="px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg cursor-pointer"
            >
              Request Custom Quotation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
