import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  FileEdit, 
  Receipt, 
  CheckCheck, 
  Code2, 
  Send, 
  Headphones,
  ArrowRight
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { openQuoteModalWithService } = useApp();

  const steps = [
    {
      num: '01',
      title: 'Tell Us Your Requirement',
      desc: 'Submit your project goals, reference files, or operational bottlenecks via our simple online intake.',
      icon: FileEdit
    },
    {
      num: '02',
      title: 'Get a Transparent Quote',
      desc: 'Receive an itemized quote within 24 hours outlining deliverables, timeline, milestones, and total investment.',
      icon: Receipt
    },
    {
      num: '03',
      title: 'Approve the Project',
      desc: 'Review and confirm the scope with a clear milestone agreement and kickoff schedule.',
      icon: CheckCheck
    },
    {
      num: '04',
      title: 'We Build & Execute',
      desc: 'Our digital specialists construct your solution, adhering to best practices, clean code, and design guidelines.',
      icon: Code2
    },
    {
      num: '05',
      title: 'Review & Delivery',
      desc: 'Inspect staging links or draft models. We perform revisions until every requirement is met before handover.',
      icon: Send
    },
    {
      num: '06',
      title: 'Post-Launch Support',
      desc: 'Enjoy 30 days of warranty support, handover documentation, and guidance for your team.',
      icon: Headphones
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            <span>Seamless Workflow</span>
            <span aria-hidden="true">·</span>
            <span>Predictable Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How ODS Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            A structured, 6-step project delivery methodology ensuring zero surprises and on-time completion.
          </p>
        </div>

        {/* 6-Step Modern Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-slate-50/70 rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:bg-white hover:border-sky-300 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-sky-600 bg-sky-100/70 px-2.5 py-1 rounded-md">
                      STEP {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-slate-700 flex items-center justify-center group-hover:text-sky-600 group-hover:border-sky-300 transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Milestone {idx + 1} of 6</span>
                  <span className="text-emerald-700 font-semibold">Structured Phase</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below process */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openQuoteModalWithService()}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-md shadow-orange-500/25 transition-all cursor-pointer"
          >
            <span>Start Step 01: Tell Us Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
