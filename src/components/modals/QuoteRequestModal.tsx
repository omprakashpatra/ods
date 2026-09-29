import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceId } from '../../types';
import { 
  X, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const QuoteRequestModal: React.FC = () => {
  const { 
    isQuoteModalOpen, 
    setIsQuoteModalOpen, 
    preselectedServiceId, 
    setPreselectedServiceId, 
    services, 
    submitQuoteRequest,
    currentUser,
    setActivePage
  } = useApp();

  const [formData, setFormData] = useState({
    customerName: currentUser?.name || '',
    customerEmail: currentUser?.email || '',
    customerPhone: '',
    serviceId: (preselectedServiceId || 'web-dev') as ServiceId,
    requirements: '',
    budget: '$300 – $600',
    deadline: 'Within 2 weeks'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdQuoteId, setCreatedQuoteId] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.customerEmail || !formData.requirements) {
      return;
    }

    setIsSubmitting(true);
    try {
      const selectedService = services.find((s) => s.id === formData.serviceId);
      const serviceName = selectedService ? selectedService.name : 'Custom Digital Service';

      const quoteId = await submitQuoteRequest({
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        serviceId: formData.serviceId,
        serviceName,
        requirements: formData.requirements,
        budget: formData.budget,
        deadline: formData.deadline
      });

      setCreatedQuoteId(quoteId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsQuoteModalOpen(false);
    setPreselectedServiceId(null);
    setCreatedQuoteId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">Request a Transparent Quote</h2>
              <p className="text-xs text-slate-300">Fast review & custom proposal within 24 hours</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {createdQuoteId ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Quotation Request Registered</h3>
              <p className="text-sm font-semibold text-sky-700 mt-1">Reference ID: #{createdQuoteId}</p>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-3 leading-relaxed">
                Thank you! Your quotation request has been dispatched to ODS solution architects. We will evaluate your scope and issue a detailed breakdown with pricing and timeline milestones.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    handleClose();
                    setActivePage('dashboard');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Track in Customer Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Target Service *</label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value as ServiceId })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    {services.map((svc) => (
                      <option key={svc.id} value={svc.id}>
                        {svc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Requirements & Scope *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Describe your goals, pages needed, features, or data problems you want solved..."
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none resize-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Under $150">Under $150 (Quick task / formatting)</option>
                    <option value="$150 – $300">$150 – $300 (Small project)</option>
                    <option value="$300 – $600">$300 – $600 (Standard business scope)</option>
                    <option value="$600 – $1,200">$600 – $1,200 (Comprehensive solution)</option>
                    <option value="$1,200+">$1,200+ (Custom / Enterprise / Multi-service)</option>
                    <option value="Need Advice">Need advice on budget</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Target Timeline</label>
                  <select
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Within 48 hours (Rush)">Within 48 hours (Rush)</option>
                    <option value="Within 5 days">Within 5 business days</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Flexible / 1 Month">Flexible (Within 1 month)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-lg border border-sky-100 text-[11px] text-slate-600">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Zero obligations. All quotes include fixed milestone scope and transparent terms.</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg shadow-sm shadow-orange-500/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Quotation Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
