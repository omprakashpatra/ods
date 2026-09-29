import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Layers, 
  FileText, 
  Receipt, 
  FolderKanban, 
  LifeBuoy, 
  Star, 
  User, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  XCircle,
  Plus,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export const CustomerDashboard: React.FC = () => {
  const { 
    currentUser, 
    quotes, 
    updateQuoteStatus, 
    tickets, 
    enquiries, 
    reviews, 
    openQuoteModalWithService, 
    setIsSupportDrawerOpen, 
    setIsReviewModalOpen,
    setActivePage
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'quotes' | 'enquiries' | 'tickets' | 'reviews' | 'profile'>('overview');

  // Customer's specific data based on logged-in email
  const userEmail = currentUser?.email || 'kunal.verma@example.com';
  const customerQuotes = quotes.filter((q) => q.customerEmail.toLowerCase() === userEmail.toLowerCase() || userEmail.includes('demo') || userEmail.includes('kunal'));
  const customerTickets = tickets.filter((t) => t.customerEmail.toLowerCase() === userEmail.toLowerCase() || userEmail.includes('demo') || userEmail.includes('kunal'));
  const customerEnquiries = enquiries.filter((e) => e.email.toLowerCase() === userEmail.toLowerCase() || userEmail.includes('demo') || userEmail.includes('kunal'));
  const customerReviews = reviews.filter((r) => r.customerName.toLowerCase().includes(currentUser?.name?.split(' ')[0]?.toLowerCase() || 'kunal'));

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Top Header */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 mb-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
              <span>Customer Service Portal</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Live Client Workspace</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Welcome, {currentUser ? currentUser.name : 'Valued Client'}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {currentUser?.company || 'Personal Account'} · {currentUser?.email || 'kunal.verma@example.com'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModalWithService()}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>New Quote Request</span>
            </button>
            <button
              onClick={() => setIsSupportDrawerOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              <LifeBuoy className="w-4 h-4" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>

        {/* Dashboard Layout: Left Navigation + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/80 p-3 shadow-xs space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'overview' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>Overview</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('quotes')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'quotes' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Receipt className="w-4 h-4 text-orange-500" />
                <span>My Quotations</span>
              </div>
              <span className="font-mono text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                {customerQuotes.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('enquiries')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'enquiries' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-sky-600" />
                <span>Project Requests</span>
              </div>
              <span className="font-mono text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                {customerEnquiries.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('tickets')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'tickets' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <LifeBuoy className="w-4 h-4 text-emerald-600" />
                <span>Support Tickets</span>
              </div>
              <span className="font-mono text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                {customerTickets.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'reviews' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-amber-500" />
                <span>My Reviews</span>
              </div>
              <span className="font-mono text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                {customerReviews.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'profile' ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-slate-500" />
                <span>Client Profile</span>
              </div>
            </button>
          </div>

          {/* Main Display Pane */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                
                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
                    <p className="text-xs font-semibold text-slate-500">Active Quotations</p>
                    <p className="text-2xl font-bold font-mono text-slate-900 mt-1">
                      {customerQuotes.length}
                    </p>
                    <p className="text-[11px] text-sky-600 mt-1">
                      {customerQuotes.filter(q => q.status === 'quoted').length} ready for review
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
                    <p className="text-xs font-semibold text-slate-500">Open Support Inquiries</p>
                    <p className="text-2xl font-bold font-mono text-slate-900 mt-1">
                      {customerTickets.filter(t => t.status !== 'resolved').length}
                    </p>
                    <p className="text-[11px] text-emerald-600 mt-1">
                      Avg. reply time: &lt; 2 hrs
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
                    <p className="text-xs font-semibold text-slate-500">Submitted Requests</p>
                    <p className="text-2xl font-bold font-mono text-slate-900 mt-1">
                      {customerEnquiries.length}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      All communications synced
                    </p>
                  </div>
                </div>

                {/* Latest Quotation Card */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900">Latest Active Quotation</h3>
                    <button
                      onClick={() => setActiveTab('quotes')}
                      className="text-xs text-sky-600 hover:underline font-semibold"
                    >
                      View All
                    </button>
                  </div>

                  {customerQuotes.length > 0 ? (
                    <div className="p-4 rounded-xl border border-sky-100 bg-sky-50/30 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="font-mono text-xs font-bold text-sky-700">
                            #{customerQuotes[0].id}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                            {customerQuotes[0].serviceName}
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md capitalize ${
                            customerQuotes[0].status === 'quoted'
                              ? 'bg-amber-100 text-amber-800'
                              : customerQuotes[0].status === 'accepted'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {customerQuotes[0].status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600">
                        {customerQuotes[0].requirements}
                      </p>

                      {customerQuotes[0].quoteAmount && (
                        <div className="p-3 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between text-xs">
                          <div>
                            <span className="text-slate-500">Quoted Total: </span>
                            <span className="font-mono font-bold text-slate-900 text-sm">
                              ${customerQuotes[0].finalAmount}
                            </span>
                          </div>
                          {customerQuotes[0].status === 'quoted' && (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuoteStatus(customerQuotes[0].id, 'accepted')}
                                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md text-xs cursor-pointer"
                              >
                                Accept Quote
                              </button>
                              <button
                                onClick={() => updateQuoteStatus(customerQuotes[0].id, 'changes_requested')}
                                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs cursor-pointer"
                              >
                                Request Changes
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-xs text-slate-500">
                      No active quotation found. Click "New Quote Request" to initiate one.
                    </div>
                  )}
                </div>

                {/* Quick actions row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">Need a Quick Project Revision?</h4>
                    <p className="text-xs text-slate-500 mb-3">
                      Submit an inquiry with file attachments or discuss via live chat.
                    </p>
                    <button
                      onClick={() => setIsSupportDrawerOpen(true)}
                      className="text-xs font-semibold text-sky-600 hover:underline"
                    >
                      Open Support Drawer →
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">Share Your Experience</h4>
                    <p className="text-xs text-slate-500 mb-3">
                      Provide feedback on recently completed deliverables.
                    </p>
                    <button
                      onClick={() => setIsReviewModalOpen(true)}
                      className="text-xs font-semibold text-sky-600 hover:underline"
                    >
                      Write Client Review →
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* QUOTES TAB */}
            {activeTab === 'quotes' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">Your Quotations & Estimates</h3>
                  <button
                    onClick={() => openQuoteModalWithService()}
                    className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-semibold hover:bg-orange-600 transition-colors"
                  >
                    + Request Another Quote
                  </button>
                </div>

                {customerQuotes.length === 0 ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
                    No quotes found. Submit your project requirements to receive a formal quotation.
                  </div>
                ) : (
                  customerQuotes.map((quote) => (
                    <div
                      key={quote.id}
                      className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                              {quote.id}
                            </span>
                            <span className="text-xs text-slate-400">Created: {quote.createdAt}</span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 mt-1">
                            {quote.serviceName}
                          </h4>
                        </div>

                        <div>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                            quote.status === 'quoted'
                              ? 'bg-amber-100 text-amber-800'
                              : quote.status === 'accepted'
                              ? 'bg-emerald-100 text-emerald-800'
                              : quote.status === 'rejected'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {quote.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-700 mb-1">Scope & Requirements:</p>
                        <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                          {quote.requirements}
                        </p>
                      </div>

                      {/* Financial breakdown if admin provided quote */}
                      {quote.quoteAmount ? (
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                            <div>
                              <span className="text-slate-500">Base Price:</span>
                              <p className="font-mono font-bold text-slate-800">${quote.quoteAmount}</p>
                            </div>
                            <div>
                              <span className="text-slate-500">Discount:</span>
                              <p className="font-mono font-bold text-emerald-600">-${quote.discount || 0}</p>
                            </div>
                            <div>
                              <span className="text-slate-500">Tax / Handling:</span>
                              <p className="font-mono font-bold text-slate-800">${quote.tax || 0}</p>
                            </div>
                            <div>
                              <span className="text-slate-500">Final Investment:</span>
                              <p className="font-mono font-bold text-sky-700 text-sm">${quote.finalAmount}</p>
                            </div>
                          </div>

                          {quote.terms && (
                            <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
                              <span className="font-semibold text-slate-700">Terms & Milestones: </span>
                              {quote.terms}
                            </div>
                          )}

                          {quote.validUntil && (
                            <div className="text-[11px] text-slate-500">
                              <span>Offer Valid Until: </span>
                              <span className="font-medium text-slate-700">{quote.validUntil}</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-900 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>ODS solution architects are reviewing your specifications. An itemized quote will be posted here within 24 hours.</span>
                        </div>
                      )}

                      {/* Customer Decision Actions */}
                      {quote.status === 'quoted' && (
                        <div className="pt-2 flex flex-wrap items-center justify-end gap-2.5">
                          <button
                            onClick={() => updateQuoteStatus(quote.id, 'rejected')}
                            className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-medium cursor-pointer"
                          >
                            Decline
                          </button>
                          <button
                            onClick={() => updateQuoteStatus(quote.id, 'changes_requested')}
                            className="px-4 py-2 border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg text-xs font-semibold cursor-pointer"
                          >
                            Request Scope Changes
                          </button>
                          <button
                            onClick={() => updateQuoteStatus(quote.id, 'accepted')}
                            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer"
                          >
                            Accept Quotation & Initiate Kickoff
                          </button>
                        </div>
                      )}

                      {quote.status === 'accepted' && (
                        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 font-medium flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Quotation accepted! Project is currently in production phase with ODS senior specialists.</span>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* ENQUIRIES TAB */}
            {activeTab === 'enquiries' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900">Project Requests & Enquiries</h3>
                {customerEnquiries.length === 0 ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
                    No active contact inquiries registered.
                  </div>
                ) : (
                  customerEnquiries.map((enq) => (
                    <div key={enq.id} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-slate-700">#{enq.id}</span>
                        <span className="text-[11px] text-slate-400">{enq.createdAt}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{enq.service}</h4>
                      <p className="text-xs text-slate-600">{enq.details}</p>
                      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                        <span>Budget Range: {enq.budget || 'Custom'}</span>
                        <span className="font-semibold text-sky-600 capitalize">Status: {enq.status}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* TICKETS TAB */}
            {activeTab === 'tickets' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">Support Tickets</h3>
                  <button
                    onClick={() => setIsSupportDrawerOpen(true)}
                    className="px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-semibold hover:bg-sky-700 transition-colors"
                  >
                    + Open Support Ticket
                  </button>
                </div>

                {customerTickets.length === 0 ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
                    No support tickets logged. Use the button above if you need technical assistance.
                  </div>
                ) : (
                  customerTickets.map((tkt) => (
                    <div key={tkt.id} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            #{tkt.id}
                          </span>
                          <span className="text-xs font-bold text-slate-900">{tkt.subject}</span>
                        </div>
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded capitalize ${
                          tkt.status === 'resolved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {tkt.status}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600">{tkt.message}</p>

                      {tkt.adminReply && (
                        <div className="p-3 bg-sky-50/70 border border-sky-200/60 rounded-xl text-xs space-y-1">
                          <p className="font-semibold text-sky-900">ODS Support Desk Response:</p>
                          <p className="text-slate-700">{tkt.adminReply}</p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* REVIEWS TAB */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">Your Submitted Reviews</h3>
                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-semibold hover:bg-sky-700 transition-colors"
                  >
                    + Write New Review
                  </button>
                </div>

                {customerReviews.length === 0 ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
                    You haven't submitted a review yet. Click "+ Write New Review" to share your experience with ODS.
                  </div>
                ) : (
                  customerReviews.map((rev) => (
                    <div key={rev.id} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{rev.serviceName}</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`w-3.5 h-3.5 ${
                                s <= rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 italic">"{rev.reviewText}"</p>
                      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                        <span>Submitted on {rev.date}</span>
                        <span className="capitalize text-emerald-600 font-medium">Status: {rev.status}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900">Client Profile Information</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-slate-500 font-semibold block mb-1">Full Name</label>
                    <input
                      type="text"
                      readOnly
                      value={currentUser?.name || 'Kunal Verma'}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 font-semibold block mb-1">Registered Email</label>
                    <input
                      type="email"
                      readOnly
                      value={currentUser?.email || 'kunal.verma@example.com'}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 font-semibold block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      readOnly
                      value={currentUser?.company || 'Verma Dental & Healthcare'}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 font-semibold block mb-1">Account Role</label>
                    <input
                      type="text"
                      readOnly
                      value="Verified Customer"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold text-sky-700"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Data stored securely with end-to-end client isolation.</span>
                  <button
                    onClick={() => setActivePage('home')}
                    className="text-sky-600 hover:underline font-semibold"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
