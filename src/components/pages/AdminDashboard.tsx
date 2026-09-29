import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { QuoteRequest } from '../../types';
import { 
  ShieldCheck, 
  BarChart3, 
  Receipt, 
  FileText, 
  Star, 
  LifeBuoy, 
  Users, 
  CheckCircle, 
  XCircle, 
  Edit3, 
  Send, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Inbox,
  AlertCircle
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    currentUser, 
    quotes, 
    updateQuoteStatus, 
    enquiries, 
    reviews, 
    moderateReview, 
    tickets, 
    replySupportTicket, 
    services, 
    portfolio,
    newsletterEmails,
    addToast,
    setActivePage 
  } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<'metrics' | 'quotes' | 'enquiries' | 'reviews' | 'tickets' | 'newsletter'>('metrics');

  // Active quote being priced/edited by admin
  const [editingQuote, setEditingQuote] = useState<QuoteRequest | null>(null);
  const [quotePriceForm, setQuotePriceForm] = useState({
    quoteAmount: 450,
    discount: 50,
    tax: 0,
    validUntil: '2026-10-30',
    terms: '50% advance upon contract signing, 50% upon final delivery review. Includes 30-day technical support.',
    adminNotes: 'Scope reviewed and verified by ODS technical specialist.'
  });

  // Ticket reply state
  const [replyingTicketId, setReplyingTicketId] = useState<string | null>(null);
  const [ticketReplyText, setTicketReplyText] = useState('');

  const handleSaveQuotePricing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuote) return;

    const finalAmount = Math.max(0, (quotePriceForm.quoteAmount || 0) - (quotePriceForm.discount || 0) + (quotePriceForm.tax || 0));

    updateQuoteStatus(editingQuote.id, 'quoted', {
      quoteAmount: quotePriceForm.quoteAmount,
      discount: quotePriceForm.discount,
      tax: quotePriceForm.tax,
      finalAmount,
      validUntil: quotePriceForm.validUntil,
      terms: quotePriceForm.terms,
      adminNotes: quotePriceForm.adminNotes
    });

    addToast({
      type: 'success',
      title: 'Quotation Dispatched',
      message: `Quotation #${editingQuote.id} configured and published for client review.`
    });

    setEditingQuote(null);
  };

  const handleTicketReplySubmit = (ticketId: string, resolve: boolean = false) => {
    if (!ticketReplyText.trim()) return;

    replySupportTicket(ticketId, ticketReplyText, resolve);
    setReplyingTicketId(null);
    setTicketReplyText('');
  };

  // KPIs
  const totalRevenueQuoted = quotes
    .filter(q => q.status === 'accepted')
    .reduce((sum, q) => sum + (q.finalAmount || 0), 0);

  const pendingQuotesCount = quotes.filter(q => q.status === 'pending_review').length;
  const pendingReviewsCount = reviews.filter(r => r.status === 'pending').length;
  const openTicketsCount = tickets.filter(t => t.status === 'open').length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Top Header */}
        <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 mb-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
                <span>ODS Mission Control</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">Admin Clearance Level</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white mt-0.5">
                Executive Operations Console
              </h1>
              <p className="text-xs text-slate-400">
                Logged in as: {currentUser?.name || 'Om Prakash (Lead Architect)'} ({currentUser?.email || 'admin@omdigitalservices.com'})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActivePage('dashboard')}
              className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Switch to Client Portal
            </button>
            <button
              onClick={() => setActivePage('home')}
              className="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              View Public Website
            </button>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-800">
          <button
            onClick={() => setActiveAdminTab('metrics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeAdminTab === 'metrics' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Operations & KPIs</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('quotes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeAdminTab === 'quotes' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>Manage Quotations</span>
            {pendingQuotesCount > 0 && (
              <span className="px-1.5 py-0.2 bg-orange-500 text-white rounded-full text-[10px] font-bold">
                {pendingQuotesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveAdminTab('enquiries')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeAdminTab === 'enquiries' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Inbound Inquiries</span>
            <span className="text-[11px] text-slate-400">({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('reviews')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeAdminTab === 'reviews' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Review Moderation</span>
            {pendingReviewsCount > 0 && (
              <span className="px-1.5 py-0.2 bg-amber-500 text-slate-900 rounded-full text-[10px] font-bold">
                {pendingReviewsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveAdminTab('tickets')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeAdminTab === 'tickets' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <LifeBuoy className="w-4 h-4" />
            <span>Support Desk</span>
            {openTicketsCount > 0 && (
              <span className="px-1.5 py-0.2 bg-rose-500 text-white rounded-full text-[10px] font-bold">
                {openTicketsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveAdminTab('newsletter')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeAdminTab === 'newsletter' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Subscribers</span>
            <span className="text-[11px] text-slate-400">({newsletterEmails.length})</span>
          </button>
        </div>

        {/* METRICS & OVERVIEW */}
        {activeAdminTab === 'metrics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800 border border-slate-700/80 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Accepted Revenue</span>
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-3xl font-extrabold font-mono text-emerald-400">${totalRevenueQuoted}</p>
                <p className="text-[11px] text-slate-400 mt-1">From approved proposals</p>
              </div>

              <div className="bg-slate-800 border border-slate-700/80 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Pending Quotes</span>
                  <Clock className="w-4 h-4 text-orange-400" />
                </div>
                <p className="text-3xl font-extrabold font-mono text-orange-400">{pendingQuotesCount}</p>
                <p className="text-[11px] text-slate-400 mt-1">Awaiting price assignment</p>
              </div>

              <div className="bg-slate-800 border border-slate-700/80 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Open Support Tickets</span>
                  <LifeBuoy className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-3xl font-extrabold font-mono text-sky-400">{openTicketsCount}</p>
                <p className="text-[11px] text-slate-400 mt-1">Requires specialist reply</p>
              </div>

              <div className="bg-slate-800 border border-slate-700/80 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Reviews in Queue</span>
                  <Star className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-3xl font-extrabold font-mono text-amber-400">{pendingReviewsCount}</p>
                <p className="text-[11px] text-slate-400 mt-1">Awaiting moderation</p>
              </div>
            </div>

            {/* Services Inventory Snapshot */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">Active Catalog Services & Deliverables</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {services.map((svc) => (
                  <div key={svc.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                    <p className="font-bold text-sky-400">{svc.name}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Turnaround: {svc.turnaroundTime}</p>
                    <p className="text-[10px] text-slate-500 mt-2 line-clamp-1">{svc.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* QUOTES MANAGEMENT */}
        {activeAdminTab === 'quotes' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Quotation Requests & Proposals</h3>
                <p className="text-xs text-slate-400">Assign itemized fees, discounts, and milestone terms to incoming requests</p>
              </div>
            </div>

            {/* Modal for editing a quote price */}
            {editingQuote && (
              <div className="bg-slate-800 border-2 border-sky-500 rounded-2xl p-6 shadow-2xl mb-6">
                <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Price Proposal for Quote #{editingQuote.id}
                    </h4>
                    <p className="text-xs text-sky-400">
                      Client: {editingQuote.customerName} ({editingQuote.customerEmail}) · Service: {editingQuote.serviceName}
                    </p>
                  </div>
                  <button
                    onClick={() => setEditingQuote(null)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>

                <div className="mb-4 p-3 bg-slate-900 rounded-lg text-xs text-slate-300">
                  <span className="font-bold text-slate-400">Client Requirements: </span>
                  {editingQuote.requirements}
                </div>

                <form onSubmit={handleSaveQuotePricing} className="space-y-4 text-xs">
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-slate-400 mb-1">Base Price ($) *</label>
                      <input
                        type="number"
                        required
                        value={quotePriceForm.quoteAmount}
                        onChange={(e) => setQuotePriceForm({ ...quotePriceForm, quoteAmount: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Client Discount ($)</label>
                      <input
                        type="number"
                        value={quotePriceForm.discount}
                        onChange={(e) => setQuotePriceForm({ ...quotePriceForm, discount: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Tax / Handling ($)</label>
                      <input
                        type="number"
                        value={quotePriceForm.tax}
                        onChange={(e) => setQuotePriceForm({ ...quotePriceForm, tax: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-sky-950/60 border border-sky-800 rounded-lg text-xs font-mono font-bold text-sky-300">
                    Calculated Final Client Investment: ${Math.max(0, (quotePriceForm.quoteAmount || 0) - (quotePriceForm.discount || 0) + (quotePriceForm.tax || 0))}
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Terms & Milestone Structure *</label>
                    <textarea
                      rows={2}
                      required
                      value={quotePriceForm.terms}
                      onChange={(e) => setQuotePriceForm({ ...quotePriceForm, terms: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingQuote(null)}
                      className="px-4 py-2 text-slate-400 hover:text-white"
                    >
                      Dismiss
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg cursor-pointer shadow-md"
                    >
                      Publish & Send Quote to Client
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Quotes Table */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/80 text-[11px] text-slate-400 uppercase tracking-wider border-b border-slate-700">
                    <tr>
                      <th className="px-4 py-3">Quote ID</th>
                      <th className="px-4 py-3">Customer</th>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Budget</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Priced Amount</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {quotes.map((q) => (
                      <tr key={q.id} className="hover:bg-slate-750">
                        <td className="px-4 py-3 font-mono font-bold text-sky-400">{q.id}</td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-white">{q.customerName}</p>
                          <p className="text-[11px] text-slate-400">{q.customerEmail}</p>
                        </td>
                        <td className="px-4 py-3">{q.serviceName}</td>
                        <td className="px-4 py-3">{q.budget}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            q.status === 'quoted'
                              ? 'bg-amber-900/60 text-amber-300'
                              : q.status === 'accepted'
                              ? 'bg-emerald-900/60 text-emerald-300'
                              : q.status === 'rejected'
                              ? 'bg-rose-900/60 text-rose-300'
                              : 'bg-slate-700 text-slate-300'
                          }`}>
                            {q.status.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono">
                          {q.finalAmount ? `$${q.finalAmount}` : 'Unpriced'}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => {
                              setEditingQuote(q);
                              setQuotePriceForm({
                                quoteAmount: q.quoteAmount || 450,
                                discount: q.discount || 50,
                                tax: q.tax || 0,
                                validUntil: q.validUntil || '2026-10-30',
                                terms: q.terms || '50% upfront, 50% on delivery.',
                                adminNotes: q.adminNotes || ''
                              });
                            }}
                            className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded-md text-xs font-semibold cursor-pointer"
                          >
                            {q.status === 'quoted' ? 'Edit Price' : 'Price Scope'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* INBOUND INQUIRIES */}
        {activeAdminTab === 'enquiries' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white">General Inbound Inquiries</h3>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/80 text-[11px] text-slate-400 uppercase tracking-wider border-b border-slate-700">
                    <tr>
                      <th className="px-4 py-3">Enquiry ID</th>
                      <th className="px-4 py-3">Client</th>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Details</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {enquiries.map((e) => (
                      <tr key={e.id} className="hover:bg-slate-750">
                        <td className="px-4 py-3 font-mono font-bold text-slate-400">{e.id}</td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-white">{e.fullName}</p>
                          <p className="text-[11px] text-slate-400">{e.email}</p>
                          {e.phone && <p className="text-[10px] text-slate-500">{e.phone}</p>}
                        </td>
                        <td className="px-4 py-3">{e.service}</td>
                        <td className="px-4 py-3 max-w-xs">{e.details}</td>
                        <td className="px-4 py-3 text-slate-400">{e.createdAt}</td>
                        <td className="px-4 py-3">
                          <span className="capitalize text-sky-400 font-semibold">{e.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* REVIEW MODERATION */}
        {activeAdminTab === 'reviews' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Review Moderation Desk</h3>
                <p className="text-xs text-slate-400">Protect brand trust by vetting client feedback before public display</p>
              </div>
            </div>

            <div className="grid gap-4">
              {reviews.map((rev) => (
                <div key={rev.id} className="bg-slate-800 border border-slate-700 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{rev.customerName}</span>
                      <span className="text-xs text-slate-400">({rev.roleOrCompany})</span>
                      <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                        {rev.rating} ★
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize ${
                        rev.status === 'approved'
                          ? 'bg-emerald-900/60 text-emerald-300'
                          : rev.status === 'pending'
                          ? 'bg-amber-900/60 text-amber-300'
                          : 'bg-rose-900/60 text-rose-300'
                      }`}>
                        {rev.status}
                      </span>
                    </div>
                    <p className="text-xs text-sky-400 font-medium">Service: {rev.serviceName}</p>
                    <p className="text-xs text-slate-300 italic">"{rev.reviewText}"</p>
                    <p className="text-[10px] text-slate-500">Submitted on: {rev.date}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {rev.status !== 'approved' && (
                      <button
                        onClick={() => moderateReview(rev.id, 'approved')}
                        className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
                      >
                        Approve
                      </button>
                    )}
                    {rev.status !== 'rejected' && (
                      <button
                        onClick={() => moderateReview(rev.id, 'rejected')}
                        className="px-3.5 py-1.5 bg-rose-700 hover:bg-rose-600 text-white rounded-lg text-xs font-semibold cursor-pointer"
                      >
                        Reject
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUPPORT DESK */}
        {activeAdminTab === 'tickets' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white">Support Tickets & Client Inquiries</h3>
            <div className="grid gap-4">
              {tickets.map((tkt) => (
                <div key={tkt.id} className="bg-slate-800 border border-slate-700 p-5 rounded-2xl space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-sky-400">#{tkt.id}</span>
                      <h4 className="text-sm font-bold text-white">{tkt.subject}</h4>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize ${
                      tkt.status === 'resolved' ? 'bg-emerald-900 text-emerald-300' : 'bg-amber-900 text-amber-300'
                    }`}>
                      {tkt.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">From: </span>
                    {tkt.customerName} ({tkt.customerEmail}) · Service: {tkt.service} · Urgency: {tkt.urgency}
                  </div>

                  <p className="text-xs text-slate-200 bg-slate-900/80 p-3 rounded-lg border border-slate-700/60">
                    {tkt.message}
                  </p>

                  {tkt.adminReply && (
                    <div className="p-3 bg-sky-950/60 border border-sky-800 rounded-lg text-xs">
                      <span className="font-bold text-sky-400">Logged Reply: </span>
                      <p className="text-slate-200 mt-1">{tkt.adminReply}</p>
                    </div>
                  )}

                  {replyingTicketId === tkt.id ? (
                    <div className="pt-2 space-y-2">
                      <textarea
                        rows={3}
                        value={ticketReplyText}
                        onChange={(e) => setTicketReplyText(e.target.value)}
                        placeholder="Type response to client..."
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white resize-none"
                      />
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setReplyingTicketId(null)}
                          className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleTicketReplySubmit(tkt.id, true)}
                          className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold"
                        >
                          Reply & Resolve
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-1">
                      <button
                        onClick={() => {
                          setReplyingTicketId(tkt.id);
                          setTicketReplyText('');
                        }}
                        className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
                      >
                        Reply to Ticket
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEWSLETTER SUBSCRIBERS */}
        {activeAdminTab === 'newsletter' && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-white">Subscribed Contact Emails</h3>
            <p className="text-xs text-slate-400">Active leads receiving ODS digital bulletins and industry articles</p>
            <div className="divide-y divide-slate-700">
              {newsletterEmails.map((email, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-300">{email}</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">Active Subscriber</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
