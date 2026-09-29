import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Clock, 
  Tag, 
  CheckCircle, 
  Package, 
  ArrowRight,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { 
    selectedService, 
    setSelectedService, 
    openQuoteModalWithService 
  } = useApp();

  if (!selectedService) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 px-6 py-5 text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold mb-1">
              <span>ODS Professional Service</span>
              <span aria-hidden="true">·</span>
              <span>Turnaround: {selectedService.turnaroundTime}</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white">{selectedService.name}</h2>
            <p className="text-xs text-slate-300 mt-1 max-w-lg">{selectedService.tagline}</p>
          </div>
          <button
            onClick={() => setSelectedService(null)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Service Overview</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedService.longDescription}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-sky-600 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-500">Estimated Turnaround</p>
                <p className="text-xs font-semibold text-slate-900">{selectedService.turnaroundTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Tag className="w-4 h-4 text-orange-500 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-500">Pricing Base</p>
                <p className="text-xs font-semibold text-slate-900">{selectedService.startingPrice}</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Key Capabilities Included</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-sky-50/50 border border-sky-100">
                  <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">What You Receive (Deliverables)</h3>
            <div className="space-y-1.5">
              {selectedService.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <Package className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {selectedService.faqs.length > 0 && (
            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {selectedService.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                    <p className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                      {faq.question}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 pl-5 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trust note */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200/60">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>ODS policy: Transparent scope, structured revisions, and zero hidden licensing fees.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-200 px-6 py-4 bg-slate-50 flex items-center justify-between gap-3">
          <button
            onClick={() => setSelectedService(null)}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              const currentId = selectedService.id;
              setSelectedService(null);
              openQuoteModalWithService(currentId);
            }}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg shadow-sm shadow-orange-500/30 transition-all cursor-pointer"
          >
            <span>Get Quote for {selectedService.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
