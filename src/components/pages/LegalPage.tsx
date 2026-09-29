import React from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, FileText, RefreshCw, ArrowLeft } from 'lucide-react';

export const LegalPage: React.FC<{ type: 'privacy' | 'terms' | 'refund' }> = ({ type }) => {
  const { setActivePage } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => setActivePage('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 hover:text-sky-900 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </button>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xs space-y-6">
          
          {type === 'privacy' && (
            <>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
                  <p className="text-xs text-slate-500">Effective Date: January 1, 2026 · ODS – Om Digital Services</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
                <p>
                  ODS collects client contact details, project specifications, and reference files solely for the purpose of executing agreed digital services, delivering quotations, and fulfilling customer support requests.
                </p>

                <h2 className="text-base font-bold text-slate-900">2. Non-Disclosure & Confidentiality</h2>
                <p>
                  Any proprietary data, financial spreadsheets, patient information, or internal business documentation provided to ODS is treated under strict commercial confidentiality. We execute non-disclosure agreements (NDAs) upon request.
                </p>

                <h2 className="text-base font-bold text-slate-900">3. Third-Party Sharing</h2>
                <p>
                  We never sell, rent, or trade client email addresses or phone numbers to external marketing brokers. Data is transmitted securely only through necessary hosting and email infrastructure.
                </p>

                <h2 className="text-base font-bold text-slate-900">4. Data Inquiries & Contact</h2>
                <p>
                  For data access, correction, or deletion requests, please contact our privacy compliance desk at <a href="mailto:support@omdigitalservices.com" className="text-sky-600 underline font-semibold">support@omdigitalservices.com</a>.
                </p>
              </div>
            </>
          )}

          {type === 'terms' && (
            <>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Terms & Conditions</h1>
                  <p className="text-xs text-slate-500">Last Updated: September 2026 · ODS – Om Digital Services</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h2 className="text-base font-bold text-slate-900">1. Scope of Digital Work</h2>
                <p>
                  All project engagements are governed by an itemized written quotation or Scope of Work (SOW). Any additions beyond the agreed scope are treated as additional deliverables and quoted separately.
                </p>

                <h2 className="text-base font-bold text-slate-900">2. Deliverables & Intellectual Property</h2>
                <p>
                  Upon receipt of full payment, the client receives full ownership and commercial rights to final customized website code, graphic design vector assets, and Excel models created for them.
                </p>

                <h2 className="text-base font-bold text-slate-900">3. Revisions & Approvals</h2>
                <p>
                  Standard engagements include 2 to 3 structured rounds of feedback. Final sign-off constitutes project delivery and triggers the 30-day technical warranty window.
                </p>

                <h2 className="text-base font-bold text-slate-900">4. Payment Terms</h2>
                <p>
                  Unless specified otherwise in a custom quotation, projects typically require a 50% advance deposit to initiate engineering, with the remaining 50% due upon staging review prior to final deployment.
                </p>
              </div>
            </>
          )}

          {type === 'refund' && (
            <>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Refund Policy</h1>
                  <p className="text-xs text-slate-500">Effective Date: January 1, 2026 · ODS – Om Digital Services</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <h2 className="text-base font-bold text-slate-900">1. Milestone-Based Protection</h2>
                <p>
                  We structure projects into clear milestones so clients only pay for demonstrated progress. If a project is cancelled prior to kickoff, deposits are refunded minus minor administrative fees.
                </p>

                <h2 className="text-base font-bold text-slate-900">2. Revision Commitment</h2>
                <p>
                  If a deliverable does not match the specifications written in your quotation, we prioritize dedicated revision rounds until the criteria are satisfied.
                </p>

                <h2 className="text-base font-bold text-slate-900">3. Customized Services</h2>
                <p>
                  Due to the bespoke nature of software development, graphic artwork, and data architecture, completed milestones approved by the client are non-refundable. Any dispute is evaluated amicably by senior management.
                </p>

                <h2 className="text-base font-bold text-slate-900">4. Contacting Accounts</h2>
                <p>
                  For any billing inquiries, email our accounts office at <a href="mailto:support@omdigitalservices.com" className="text-sky-600 underline font-semibold">support@omdigitalservices.com</a>.
                </p>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
