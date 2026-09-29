import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Globe, 
  Palette, 
  BarChart3, 
  Briefcase, 
  Share2, 
  FileText, 
  Cpu, 
  Sparkles,
  ArrowRight,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Service } from '../../types';

export const ServicesSection: React.FC = () => {
  const { 
    services, 
    setSelectedService, 
    openQuoteModalWithService 
  } = useApp();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'Palette': return Palette;
      case 'BarChart3': return BarChart3;
      case 'Briefcase': return Briefcase;
      case 'Share2': return Share2;
      case 'FileText': return FileText;
      case 'Cpu': return Cpu;
      case 'Sparkles': return Sparkles;
      default: return Sparkles;
    }
  };

  return (
    <section id="services-section" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>End-to-End Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Digital Services Built Around Your Needs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            High-caliber digital execution tailored for individual creators, budding startups, and growing enterprises. Explore our standard offerings or request a custom package.
          </p>
        </div>

        {/* 8-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service: Service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 group"
              >
                <div>
                  {/* Service Icon with subtle backdrop */}
                  <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-sky-600 text-sky-600 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Metadata */}
                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                    {service.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1 mb-3">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Avg. {service.turnaroundTime}</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Features preview (First 2) */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 py-1 px-1 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openQuoteModalWithService(service.id)}
                    className="py-1.5 px-3 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white font-semibold text-xs rounded-lg transition-all cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customized Bottom Prompt */}
        <div className="mt-12 p-6 bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg font-bold">Looking for a specialized combination?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              We frequently bundle web development, brand guidelines, and automated Excel models into unified client proposals.
            </p>
          </div>
          <button
            onClick={() => openQuoteModalWithService('custom-services')}
            className="shrink-0 flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>Request Custom Bundle</span>
            <ArrowRight className="w-4 h-4 text-orange-500" />
          </button>
        </div>

      </div>
    </section>
  );
};
