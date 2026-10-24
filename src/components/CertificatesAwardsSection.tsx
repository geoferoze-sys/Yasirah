import React, { useState } from 'react';
import { 
  Award, 
  Trophy, 
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CertificatesAwardsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Academic Presentation',
    'Instrumentation & Analytical Training',
    'Industry 4.0 & Quality Systems',
    'Emerging Tech & Interdisciplinary',
    'Professional Development',
  ];

  const filteredAwards = activeCategory === 'All'
    ? portfolioData.certificates
    : portfolioData.certificates.filter(c => c.category === activeCategory);

  return (
    <section id="honors" className="py-10 md:py-14 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
          <div className="max-w-2xl space-y-1.5">
            <div className="text-xs font-semibold text-[#284f46] tracking-wider uppercase">
              Recognition & Continuing Education
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Honors, Awards & Advanced Training
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Recognized with 1st Prize oral presentation accolades and backed by specialized instrumentation workshops
              in HPLC, HPTLC, XPS, and Pharmaceuticals 4.0.
            </p>
          </div>

          <div className="text-[11px] text-slate-500 font-medium shrink-0">
            {portfolioData.certificates.length} Documented Certifications & Accolades
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-1 p-1 bg-[#ebeeed] rounded-lg overflow-x-auto mb-4 w-full lg:w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {cat === 'Instrumentation & Analytical Training' ? 'Instrumentation Training' : cat}
            </button>
          ))}
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredAwards.map((item) => {
            const isFirstPrize = item.awardType === 'First Prize';
            const isBestPresentation = item.awardType === 'Best Presentation';

            return (
              <div
                key={item.id}
                className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
                  isFirstPrize
                    ? 'bg-[#faf8f2] border-[#e8dec8]'
                    : isBestPresentation
                    ? 'bg-[#f4f8f6] border-[#cfe2db]'
                    : 'bg-[#f8faf9] border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="space-y-2">
                  {/* Clean unboxed header metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-[#284f46] text-[11px]">{item.category}</span>
                    <span className="font-mono text-slate-400 text-[10px]">{item.yearOrNote}</span>
                  </div>

                  {/* Title & Badge */}
                  <div>
                    {isFirstPrize && (
                      <div className="flex items-center gap-1 text-xs font-bold text-[#7c531d] mb-0.5">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>First Prize Winner</span>
                      </div>
                    )}
                    {isBestPresentation && (
                      <div className="flex items-center gap-1 text-xs font-bold text-[#284f46] mb-0.5">
                        <Award className="w-3.5 h-3.5" />
                        <span>Best Presentation Award</span>
                      </div>
                    )}
                    <h3 className="text-sm sm:text-base font-serif font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Issuer */}
                  <div className="text-xs text-slate-600 font-medium">
                    {item.issuer}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-slate-500 leading-relaxed pt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Subtle bottom note */}
                <div className="pt-2.5 mt-2.5 border-t border-slate-200/60 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Verified Credential</span>
                  <CheckCircle2 className="w-3 h-3 text-[#3c6c5e]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
