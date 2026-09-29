import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Info, 
  ArrowRight 
} from 'lucide-react';

export const ProjectDetailModal: React.FC = () => {
  const { 
    selectedProject, 
    setSelectedProject, 
    openQuoteModalWithService 
  } = useApp();

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Portfolio</span>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-sky-600">{selectedProject.category}</span>
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Visual */}
          <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Category tag */}
            <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-medium">
              {selectedProject.category}
            </div>
          </div>

          {/* Title & Client Type */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {selectedProject.title}
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">
              <span>Client Segment:</span>
              <span className="font-semibold text-slate-800">{selectedProject.clientType}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Brief & Solution</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedProject.fullDescription}
            </p>
          </div>

          {/* Outcomes / Impact */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">Delivered Business Impact</h3>
            <p className="text-xs font-semibold text-emerald-950 leading-relaxed">
              {selectedProject.outcome}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Key Deliverables</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {selectedProject.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg text-xs text-slate-800 border border-slate-200/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies used */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Tech Stack & Tools</h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
              {selectedProject.technologies.map((tech, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-[11px] font-medium border border-slate-200/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Demo disclaimer notice as requested */}
          {selectedProject.demoNotice && (
            <div className="flex items-start gap-2.5 p-3.5 bg-sky-50/60 border border-sky-200/70 rounded-xl text-xs text-slate-600">
              <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <p>
                <strong className="text-sky-950 font-semibold">Note: </strong>
                {selectedProject.demoNotice}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 px-6 py-4 bg-slate-50 flex items-center justify-between gap-3">
          <button
            onClick={() => setSelectedProject(null)}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              setSelectedProject(null);
              openQuoteModalWithService();
            }}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <span>Request Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
