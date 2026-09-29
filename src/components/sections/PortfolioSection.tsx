import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PortfolioItem } from '../../types';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const { portfolio, setSelectedProject, openQuoteModalWithService } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Websites', 'Graphic Design', 'Excel/Data', 'Business Solutions'];

  const filteredItems = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio-section" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            <span>Work & Case Studies</span>
            <span aria-hidden="true">·</span>
            <span>Proven Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Digital Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Explore sample projects and demonstrations illustrating our standards in responsive engineering, visual branding, and automated data solutions.
          </p>
        </div>

        {/* Category Segmented Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl border border-slate-300/60 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((project: PortfolioItem) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between hover:border-sky-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[11px] font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-[11px] text-sky-700 font-semibold mb-1">
                    {project.clientType}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Impact preview */}
                  <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 text-[11px] text-emerald-950 font-medium">
                    <span className="font-bold">Result: </span>
                    <span className="line-clamp-1">{project.outcome}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors cursor-pointer py-1"
                >
                  <span>View Project Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => openQuoteModalWithService()}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Request Similar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 mb-3">
            Have a custom requirement or need to see tailored examples for your sector?
          </p>
          <button
            onClick={() => openQuoteModalWithService()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors cursor-pointer"
          >
            <span>Discuss Your Project Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
