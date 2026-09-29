import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Paperclip, 
  CheckCircle2, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { submitContactEnquiry, openQuoteModalWithService } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '$300 – $600',
    details: '',
    attachmentName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.details.trim() || formData.details.trim().length < 15) {
      setErrorMessage('Please provide a bit more detail about your project (at least 15 characters).');
      return;
    }

    setIsSubmitting(true);
    try {
      const enqId = await submitContactEnquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        details: formData.details,
        hasAttachment: !!formData.attachmentName
      });
      setSubmittedEnquiryId(enqId);
    } catch (err) {
      setErrorMessage('An unexpected error occurred while transmitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedEnquiryId(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Website Development',
      budget: '$300 – $600',
      details: '',
      attachmentName: ''
    });
    setErrorMessage(null);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello ODS team! I would like to inquire about your digital services.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            <span>Direct Inquiry</span>
            <span aria-hidden="true">·</span>
            <span>Fast Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let’s Build Something Great Together.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Share your requirements or challenge. We evaluate every inquiry promptly with genuine commercial care.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Business Channels & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Direct Communication Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Business & Inquiries Email</p>
                    <a 
                      href="mailto:support@omdigitalservices.com" 
                      className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      support@omdigitalservices.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Phone & Voice Line</p>
                    <a 
                      href="tel:+919876543210" 
                      className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Business Working Hours</p>
                    <p className="text-sm font-bold text-slate-900">Monday – Saturday</p>
                    <p className="text-xs text-slate-600">09:00 AM – 07:00 PM IST</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Operations & Delivery Center</p>
                    <p className="text-sm font-bold text-slate-900">ODS Digital Services</p>
                    <p className="text-xs text-slate-600">Global Digital Solutions (India & Worldwide)</p>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={openWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </button>

                <a
                  href="mailto:support@omdigitalservices.com?subject=ODS%20Digital%20Inquiry"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors text-center"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Quick Quote Prompt Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-sky-400">Need formal quotation numbers?</p>
                <p className="text-xs text-slate-300 mt-0.5">Use our dedicated quote builder wizard</p>
              </div>
              <button
                onClick={() => openQuoteModalWithService()}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Request a Quote
              </button>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
              
              {submittedEnquiryId ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank you! Your request has been received.
                  </h3>
                  <p className="text-sm font-semibold text-sky-700 mt-1">
                    Enquiry ID: #{submittedEnquiryId}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-3 leading-relaxed">
                    ODS will contact you shortly. A copy of your submission has been forwarded to our customer desk.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-1">
                    <h3 className="text-base font-bold text-slate-900">Project Inquiry Form</h3>
                    <p className="text-xs text-slate-500">Fill in the project details below for rapid review</p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Service Needed <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Graphic Design">Graphic Design & Branding</option>
                        <option value="Excel & Data Solutions">Excel & Data Solutions</option>
                        <option value="Digital Business Support">Digital Business Support</option>
                        <option value="Social Media Services">Social Media Services</option>
                        <option value="Document Services">Document Services</option>
                        <option value="AI Solutions">AI Solutions & Automation</option>
                        <option value="Custom Digital Services">Customized Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="Under $150">Under $150 (Quick turnaround task)</option>
                      <option value="$150 – $300">$150 – $300 (Standard requirement)</option>
                      <option value="$300 – $600">$300 – $600 (Complete website or brand kit)</option>
                      <option value="$600 – $1,200">$600 – $1,200 (Comprehensive project)</option>
                      <option value="$1,200+">$1,200+ (Custom / Enterprise / Multi-solution)</option>
                      <option value="To be determined">To be determined</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Details & Description <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us what you want to achieve, your expected outcomes, or any reference websites/sheets..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Attachment simulation */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Attachment / Reference File (Optional)
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-slate-700 text-xs cursor-pointer transition-colors">
                        <Paperclip className="w-4 h-4 text-slate-500" />
                        <span>{formData.attachmentName || 'Attach Brief or Mockup (.pdf, .zip, .xlsx, .png)'}</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              setFormData({ ...formData, attachmentName: e.target.files[0].name });
                            }
                          }}
                        />
                      </label>
                      {formData.attachmentName && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, attachmentName: '' })}
                          className="text-xs text-rose-500 hover:underline"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Protected by ODS Confidentiality Guarantee. We never spam or distribute contact details.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-md shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Send Enquiry'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
