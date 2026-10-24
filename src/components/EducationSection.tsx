import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Check 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-10 md:py-14 bg-[#f8faf9] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 space-y-1.5">
          <div className="text-xs font-semibold text-[#284f46] tracking-wider uppercase">
            Academic Pedigree
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Education & Academic Distinction
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Formative pharmaceutical training characterized by top academic cohort performance (8.79 CGPA in M.Pharm)
            and international secondary education in Doha, Qatar.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {portfolioData.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 space-y-3 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                
                {/* Header Information */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-semibold text-[#284f46] uppercase tracking-wider">
                      {edu.status || 'Graduated'}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <div className="text-xs font-medium text-slate-600">
                        {edu.field}
                      </div>
                    )}
                  </div>

                  {/* Grade Badge */}
                  <div className="text-right shrink-0">
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#244b41]">
                      {edu.grade}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {edu.gradeLabel}
                    </div>
                  </div>
                </div>

                {/* Institution & Period */}
                <div className="pt-1.5 text-xs text-slate-600 space-y-0.5 border-t border-slate-100">
                  <div className="font-semibold text-slate-800">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {edu.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Key Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="pt-1 space-y-1">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#3c6c5e] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* PCI accreditation */}
              {(edu.id === 'edu-mpharm' || edu.id === 'edu-bpharm') && (
                <div className="pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>PCI Accredited Curriculum</span>
                  <span className="font-medium text-[#284f46]">Crescent University</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
