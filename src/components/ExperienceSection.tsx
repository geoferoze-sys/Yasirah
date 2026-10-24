import React from 'react';
import { 
  MapPin, 
  Calendar, 
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-10 md:py-14 bg-[#f8faf9] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 space-y-1.5">
          <div className="text-xs font-semibold text-[#284f46] tracking-wider uppercase">
            Industrial & Laboratory Exposure
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Commercial QC/QA, Method Development & GMP Practice
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Real-world laboratory tenure across licensed drug testing facilities, softgel manufacturing plants,
            and formulation laboratories—executing chromatographic runs, stability pulls, and compliance documentation.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200/80 ml-2.5 sm:ml-3 space-y-5 pl-5 sm:pl-7">
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[26px] sm:-left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2d564c] group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 space-y-3 hover:border-slate-300 transition-all">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5">
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#284f46] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 font-medium sm:text-right space-y-0.5">
                    <div className="flex items-center sm:justify-end gap-1 text-slate-700 font-semibold">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1 text-slate-500 text-[11px]">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Instruments Handled in this Lab */}
                <div className="pt-0.5 text-xs text-slate-600 space-y-0.5 border-t border-slate-100">
                  <span className="font-semibold text-slate-700">Instruments & Techniques:</span>{' '}
                  <span>{exp.instruments.join(' · ')}</span>
                </div>

                {/* Responsibilities */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
                    Key Laboratory Responsibilities
                  </div>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3c6c5e] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Learnings / Impact */}
                {exp.learnings.length > 0 && (
                  <div className="p-2.5 rounded-lg bg-[#f5f8f7] border border-slate-200/60 text-xs text-slate-700">
                    <span className="font-semibold text-[#23453d]">Practical Competency Acquired:</span>{' '}
                    <span>{exp.learnings.join(' ')}</span>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
