import React, { useState } from 'react';
import { 
  ChevronRight, 
  X, 
  Check
} from 'lucide-react';
import { portfolioData, ResearchProject } from '../data/portfolioData';

export const ResearchProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

  const filterCategories = [
    'All',
    'QbD & AQbD',
    'Green Chemistry',
    'Nitrosamines & Impurities',
    'Peptides & Complex Generics',
  ];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.researchProjects
    : portfolioData.researchProjects.filter(p => p.category === activeFilter);

  return (
    <section id="research" className="py-10 md:py-14 bg-[#f8faf9] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
          <div className="max-w-2xl space-y-1.5">
            <div className="text-xs font-semibold text-[#284f46] tracking-wider uppercase">
              Academic Research & Manuscripts
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Stability-Indicating & AQbD Method Development
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Five novel analytical research manuscripts currently under peer review, addressing high-impact 
              challenges: genotoxic nitrosamine screening, peptide stability, and green chromatographic separations.
            </p>
          </div>

          <div className="text-[11px] text-slate-500 font-medium shrink-0">
            Manuscripts Under Active Peer Review
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#ebeeed] rounded-lg overflow-x-auto mb-5 w-full sm:w-fit">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === cat
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 flex flex-col justify-between hover:border-[#86aba0] transition-all group"
            >
              <div className="space-y-2.5">
                
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[#284f46]">{project.category}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{project.techniques[0]}</span>
                  </div>
                  <span className="text-[#8a5d24] font-medium text-[11px]">Under Review</span>
                </div>

                {/* Project Title */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug group-hover:text-[#23453d] transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.summary}
                </p>

                {/* Analytes & Key Tech */}
                <div className="pt-1.5 text-xs text-slate-500 space-y-1 border-t border-slate-100">
                  <div>
                    <span className="font-semibold text-slate-700">Analytes:</span>{' '}
                    <span>{project.analytes.join(', ')}</span>
                  </div>
                  {project.aqbdFramework && (
                    <div>
                      <span className="font-semibold text-slate-700">AQbD DoE:</span>{' '}
                      <span>{project.aqbdFramework}</span>
                    </div>
                  )}
                  {project.greenMetrics && (
                    <div>
                      <span className="font-semibold text-[#284f46]">Green Factor:</span>{' '}
                      <span className="text-slate-600">{project.greenMetrics}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* View Deep Dive Action */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#284f46] hover:text-[#1c3832] transition-colors cursor-pointer group/btn"
                >
                  <span>Examine Methodology Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
                <span className="text-[10px] text-slate-400 font-mono">
                  0{index + 1}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Drawer for Selected Project */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/40 backdrop-blur-xs">
            <div 
              className="bg-white rounded-xl max-w-xl w-full max-h-[88vh] overflow-y-auto border border-slate-200/90 shadow-xl p-5 sm:p-6 space-y-4"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-semibold text-[#284f46] tracking-wider uppercase">
                    {selectedProject.category} · Academic Manuscript
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-semibold text-[#8a5d24]">Manuscript Under Review</span>
                <span className="text-slate-300">·</span>
                <span>Techniques: {selectedProject.techniques.join(', ')}</span>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Research Overview & Objective
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="bg-[#f8faf9] rounded-lg border border-slate-200/80 p-3 space-y-2 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Target Analytes</div>
                    <div className="font-medium text-slate-900 mt-0.5">{selectedProject.analytes.join(', ')}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Chromatography Platform</div>
                    <div className="font-medium text-slate-900 mt-0.5">{selectedProject.techniques.join(' · ')}</div>
                  </div>
                </div>

                {selectedProject.aqbdFramework && (
                  <div className="pt-1.5 border-t border-slate-200/70">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">AQbD / Experimental Design</div>
                    <div className="font-medium text-slate-900 mt-0.5">{selectedProject.aqbdFramework}</div>
                  </div>
                )}

                {selectedProject.greenMetrics && (
                  <div className="pt-1.5 border-t border-slate-200/70">
                    <div className="text-[10px] font-semibold text-[#284f46] uppercase tracking-wider">Green Metric</div>
                    <div className="font-medium text-[#1c3832] mt-0.5">{selectedProject.greenMetrics}</div>
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Methodological Innovations & Findings
                </div>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#3c6c5e] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Author: Yasirah Sabreen F · Department of Pharmaceutical Analysis
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#2d564c] hover:bg-[#23453d] rounded-md cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
