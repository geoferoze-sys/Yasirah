import React, { useState } from 'react';
import { 
  FlaskConical, 
  Activity, 
  FileCheck, 
  Database, 
  Check, 
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsMatrixSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chromatography' | 'analytical' | 'methodology' | 'data'>('chromatography');

  const categories = [
    { id: 'chromatography', label: 'Chromatography (HPLC/UPLC/GC)', icon: FlaskConical },
    { id: 'analytical', label: 'Spectroscopy & Stability', icon: Activity },
    { id: 'methodology', label: 'AQbD & Regulatory Compliance', icon: FileCheck },
    { id: 'data', label: 'Data Science & Computation', icon: Database },
  ] as const;

  return (
    <section id="skills" className="py-10 md:py-14 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-5 space-y-1.5">
          <div className="text-xs font-semibold text-[#284f46] tracking-wider uppercase">
            Instrumentation & Technical Matrix
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Specialized Analytical Competencies
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Proficiencies encompassing wet-lab chromatographic method development, spectrophotometric assays, 
            Good Laboratory Practice (GLP) protocols, and quantitative scientific programming.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#ebeeed] rounded-lg overflow-x-auto mb-5 w-full lg:w-fit">
          {categories.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#3c6c5e]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {activeTab === 'chromatography' &&
            portfolioData.skills.chromatography.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8faf9] rounded-xl border border-slate-200/80 p-4 space-y-2 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-[#284f46] uppercase tracking-wider text-[11px]">{item.level}</span>
                    <span className="font-mono text-slate-400 text-[10px]">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/70 text-xs text-slate-500 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#3c6c5e]" />
                  <span>Hands-on laboratory verified</span>
                </div>
              </div>
            ))}

          {activeTab === 'analytical' &&
            portfolioData.skills.analyticalTechniques.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8faf9] rounded-xl border border-slate-200/80 p-4 space-y-2 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-[#284f46] uppercase tracking-wider text-[11px]">{item.level}</span>
                    <span className="font-mono text-slate-400 text-[10px]">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/70 text-xs text-slate-500 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#3c6c5e]" />
                  <span>Routine instrument operation</span>
                </div>
              </div>
            ))}

          {activeTab === 'methodology' &&
            portfolioData.skills.methodologyAndQuality.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8faf9] rounded-xl border border-slate-200/80 p-4 space-y-2 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-[#284f46] uppercase tracking-wider text-[11px]">{item.level}</span>
                    <span className="font-mono text-slate-400 text-[10px]">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/70 text-xs text-slate-500 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#3c6c5e]" />
                  <span>ICH & GMP regulatory aligned</span>
                </div>
              </div>
            ))}

          {activeTab === 'data' &&
            portfolioData.skills.dataAndComputation.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8faf9] rounded-xl border border-slate-200/80 p-4 space-y-2 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-[#284f46] uppercase tracking-wider text-[11px]">{item.level}</span>
                    <span className="font-mono text-slate-400 text-[10px]">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/70 text-xs text-slate-500 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#3c6c5e]" />
                  <span>Statistical & analytical application</span>
                </div>
              </div>
            ))}
        </div>

        {/* Soft Skills & Professional Attributes Banner */}
        <div className="mt-6 p-4 rounded-xl bg-[#f5f8f7] border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              Core Professional Attributes
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-800 mt-0.5">
              Analytical Thinking · Critical Problem Solving · Attention to Detail · Adaptability · Multidisciplinary Collaboration
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-[#284f46] hover:text-[#1c3832] inline-flex items-center gap-1 shrink-0"
          >
            <span>Inquire for research</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
