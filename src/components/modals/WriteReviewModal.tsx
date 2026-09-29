import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceId } from '../../types';
import { X, Star, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WriteReviewModal: React.FC = () => {
  const { 
    isReviewModalOpen, 
    setIsReviewModalOpen, 
    services, 
    submitReview, 
    currentUser 
  } = useApp();

  const [formData, setFormData] = useState({
    customerName: currentUser?.name || '',
    roleOrCompany: currentUser?.company || '',
    serviceId: 'web-dev' as ServiceId,
    rating: 5,
    reviewText: ''
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isReviewModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.reviewText) return;

    setIsSubmitting(true);
    try {
      const selectedService = services.find((s) => s.id === formData.serviceId);
      await submitReview({
        customerName: formData.customerName,
        roleOrCompany: formData.roleOrCompany || 'Verified Client',
        serviceId: formData.serviceId,
        serviceName: selectedService ? selectedService.name : 'Digital Service',
        rating: formData.rating,
        reviewText: formData.reviewText
      });
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsReviewModalOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold tracking-tight">Share Your Experience with ODS</h2>
            <p className="text-[11px] text-slate-300">Your genuine feedback helps us continuously improve</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Close review modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">Review Submitted for Moderation</h3>
              <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you for your review! To protect the authenticity of reviews and avoid spam, our moderation desk audits submissions before publishing them live.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Overall Rating *</label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-slate-300 hover:scale-110 transition-transform cursor-pointer focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || formData.rating) >= star
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-700">
                    {formData.rating} out of 5 stars
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Role / Company</label>
                  <input
                    type="text"
                    value={formData.roleOrCompany}
                    onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                    placeholder="e.g. Founder, Acme Co."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Purchased *</label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value as ServiceId })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white focus:ring-1 focus:ring-sky-500 focus:outline-none"
                >
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Review *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.reviewText}
                  onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                  placeholder="Share details of your experience with ODS, project quality, responsiveness, and results..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Anti-Spam Policy: Reviews undergo standard human moderation before publishing.</span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
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
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Review'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
