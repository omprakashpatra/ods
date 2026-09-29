import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MessageSquare, 
  X, 
  Send, 
  HelpCircle, 
  Mail, 
  ExternalLink, 
  Paperclip,
  CheckCircle2
} from 'lucide-react';

export const FloatingSupport: React.FC = () => {
  const { 
    isSupportDrawerOpen, 
    setIsSupportDrawerOpen, 
    submitSupportTicket, 
    setActivePage,
    currentUser 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'quick' | 'ticket'>('quick');

  // Support Form State
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: '',
    service: 'General Support',
    subject: '',
    message: '',
    urgency: 'normal' as 'normal' | 'high' | 'urgent',
    attachmentName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicketId, setSubmittedTicketId] = useState<string | null>(null);

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    try {
      const ticketId = await submitSupportTicket({
        customerName: formData.name,
        customerEmail: formData.email,
        phone: formData.phone,
        service: formData.service,
        subject: formData.subject,
        message: formData.message,
        urgency: formData.urgency,
        hasAttachment: !!formData.attachmentName
      });
      setSubmittedTicketId(ticketId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedTicketId(null);
    setFormData({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      phone: '',
      service: 'General Support',
      subject: '',
      message: '',
      urgency: 'normal',
      attachmentName: ''
    });
  };

  // WhatsApp click handler
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello ODS team! I would like to inquire about your digital services.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating launcher button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            setIsSupportDrawerOpen(!isSupportDrawerOpen);
            if (submittedTicketId) resetForm();
          }}
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-sky-500 to-sky-700 text-white font-medium rounded-full shadow-lg shadow-sky-500/30 hover:shadow-xl hover:from-sky-600 hover:to-sky-800 transition-all transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-4 focus:ring-sky-200"
          aria-label="Open customer support"
        >
          {isSupportDrawerOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageSquare className="w-5 h-5 text-white" />
          )}
          <span className="text-sm font-semibold tracking-wide">
            {isSupportDrawerOpen ? 'Close' : 'Chat & Support'}
          </span>
        </button>
      </div>

      {/* Support Drawer Popup */}
      {isSupportDrawerOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-40 w-[92vw] sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 p-4.5 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-sm">
                  ODS
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">Customer Support Desk</h3>
                  <p className="text-[11px] text-slate-300">Fast, human assistance for your digital projects</p>
                </div>
              </div>
              <button
                onClick={() => setIsSupportDrawerOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Toggle Tabs */}
            <div className="flex items-center gap-2 mt-4 bg-slate-800/80 p-1 rounded-lg text-xs">
              <button
                onClick={() => setActiveTab('quick')}
                className={`flex-1 py-1.5 rounded-md font-medium text-center transition-colors cursor-pointer ${
                  activeTab === 'quick' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Direct Channels
              </button>
              <button
                onClick={() => setActiveTab('ticket')}
                className={`flex-1 py-1.5 rounded-md font-medium text-center transition-colors cursor-pointer ${
                  activeTab === 'ticket' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Submit Ticket
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-5 overflow-y-auto max-h-[60vh] bg-slate-50/50">
            {activeTab === 'quick' ? (
              <div className="space-y-3">
                {/* WhatsApp */}
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-between p-3.5 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 rounded-xl transition-colors text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      WA
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-950">WhatsApp Direct Support</h4>
                      <p className="text-[11px] text-emerald-700">Quick inquiries & status checks (9 AM – 7 PM)</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Email */}
                <a
                  href="mailto:support@omdigitalservices.com?subject=Inquiry%20from%20ODS%20Website"
                  className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Email Customer Desk</h4>
                      <p className="text-[11px] text-slate-500">support@omdigitalservices.com</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* FAQ Quick Link */}
                <button
                  onClick={() => {
                    setIsSupportDrawerOpen(false);
                    setActivePage('faq');
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Browse Knowledge Base & FAQ</h4>
                      <p className="text-[11px] text-slate-500">Answers to pricing, revisions & timelines</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Open Ticket CTA */}
                <div className="pt-2 text-center">
                  <p className="text-xs text-slate-500 mb-2">Have a specific technical issue or revision request?</p>
                  <button
                    onClick={() => setActiveTab('ticket')}
                    className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Open a Formal Support Ticket
                  </button>
                </div>
              </div>
            ) : submittedTicketId ? (
              <div className="text-center py-6 px-3 bg-white rounded-xl border border-slate-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-slate-900">Ticket Created Successfully</h4>
                <p className="text-xs font-semibold text-sky-700 mt-1">Ticket ID: #{submittedTicketId}</p>
                <p className="text-xs text-slate-600 mt-2 max-w-xs mx-auto">
                  A confirmation has been sent to your email. Our team typically responds within 2-4 hours during business days.
                </p>
                <div className="mt-5 flex gap-2">
                  <button
                    onClick={resetForm}
                    className="flex-1 py-2 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg"
                  >
                    New Request
                  </button>
                  <button
                    onClick={() => {
                      setIsSupportDrawerOpen(false);
                      setActivePage('dashboard');
                    }}
                    className="flex-1 py-2 text-xs font-medium bg-sky-600 hover:bg-sky-700 text-white rounded-lg"
                  >
                    View in Portal
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleTicketSubmit} className="space-y-3 bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Related Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs bg-white focus:ring-1 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="General Support">General Support</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Excel & Data Solutions">Excel & Data Solutions</option>
                      <option value="Digital Business Support">Digital Business Support</option>
                      <option value="Social Media Services">Social Media Services</option>
                      <option value="Document Services">Document Services</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Custom Digital Services">Custom Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Urgency</label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                      className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs bg-white focus:ring-1 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="normal">Normal Priority</option>
                      <option value="high">High Priority</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief description of the request"
                    className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Message Details *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query or issue..."
                    className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Simulated Attachment */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Attachment (Optional)</label>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 cursor-pointer transition-colors text-[11px]">
                      <Paperclip className="w-3.5 h-3.5 text-slate-500" />
                      <span>{formData.attachmentName || 'Attach file (.pdf, .png, .xlsx)'}</span>
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
                        className="text-rose-500 text-[10px] underline"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Support Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
