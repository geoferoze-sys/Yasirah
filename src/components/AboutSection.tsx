import React from 'react';
import { 
  Microscope, 
  Leaf, 
  FileCheck2, 
  Binary, 
  Globe2, 
  Languages, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Microscope,
      title: 'Chromatographic Precision & Method Development',
      description:
        'Hands-on expertise developing and optimizing reverse-phase HPLC, UPLC, and HPTLC methods. Experienced in stationary phase selection, mobile phase gradient optimization, peak resolution enhancement, and system suitability criteria.',
    },
    {
      icon: Leaf,
      title: 'AQbD & Green Analytical Chemistry',
      description:
        'Applying Analytical Quality by Design (AQbD) principles, Ishikawa risk mapping, and Design of Experiments (DoE) while embedding green analytical chemistry (AGREE / Eco-scale metrics) to minimize environmental toxic solvent burdens.',
    },
    {
      icon: FileCheck2,
      title: 'Regulatory Compliance & Impurity Profiling',
      description:
        'Thorough knowledge of ICH Q2(R1/R2) validation guidelines, ICH Q1A stability testing, forced degradation kinetics, and ultra-sensitive screening for mutagenic nitrosamine impurities (NDMA, NDEA, and NDIPA).',
    },
    {
      icon: Binary,
      title: 'Data-Driven Pharmaceutical Analytics',
      description:
        'Bridging classical wet-lab chemistry with modern computational competencies. Utilizing Python and MySQL for data management, structured query parsing, and Power BI for analytical metrics visualization.',
    },
  ];

  return (
    <section id="about" className="py-10 md:py-14 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 space-y-1.5">
          <div className="text-xs font-semibold text-[#284f46] tracking-wider uppercase">
            Scientific Background & Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Pioneering Rigorous, Sustainable Pharmaceutical Analysis
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            From formulation release testing to trace genotoxic impurity quantification, my research focuses
            on making analytical protocols faster, greener, and mathematically robust under Quality by Design principles.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Detailed Narrative & Core Competencies (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2.5">
              <p>
                I am an M. Pharm scholar specializing in <strong>Pharmaceutical Analysis</strong> at 
                B.S. Abdur Rahman Crescent Institute of Science and Technology, maintaining an academic CGPA of 
                <strong> 8.79</strong>. As a licensed <strong>Registered Pharmacist</strong>, my academic and industrial 
                trajectory integrates pharmaceutical quality control, regulatory compliance, and cutting-edge analytical research.
              </p>
              <p>
                My analytical philosophy centers on <strong>Analytical Quality by Design (AQbD)</strong>: 
                understanding how critical process parameters—such as column temperature, mobile phase modifier ratios, 
                and flow rates—govern critical analytical attributes (resolution, tailing factor, retention time). By applying 
                multivariate statistical designs (Response Surface Methodology, Box-Behnken, and Plackett-Burman), 
                I construct robust Method Operable Design Regions (MODR) that withstand laboratory variations.
              </p>
              <p>
                Concurrently, I advocate for <strong>Green Analytical Chemistry</strong>, systematically evaluating methods 
                against the AGREE and Analytical Eco-Scale metrics to replace hazardous toxic organics with environmentally benign, 
                sustainable alternatives without compromising chromatographic selectivity or resolution.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#f8faf9] border border-slate-200/80 space-y-2 hover:border-[#86aba0] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#edf4f1] text-[#2d564c] flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Research Interests List */}
            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Core Research Interests & Analytical Disciplines
              </h3>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-xs text-slate-700">
                {portfolioData.personal.researchInterests.map((interest, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-medium hover:text-[#2d564c] transition-colors">
                      {interest}
                    </span>
                    {idx < portfolioData.personal.researchInterests.length - 1 && (
                      <span className="text-slate-300" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Facts & Professional Credentials Card (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#f8faf9] rounded-xl border border-slate-200/80 p-4 sm:p-5 space-y-4">
              <div className="border-b border-slate-200/70 pb-2.5">
                <h3 className="text-base font-serif font-bold text-slate-900">
                  Profile Snapshot
                </h3>
                <p className="text-[11px] text-slate-500">
                  Verified credentials & background
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Full Name
                  </div>
                  <div className="font-medium text-slate-900 mt-0.5">
                    {portfolioData.personal.fullName}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Licensure & Affiliation
                  </div>
                  <div className="font-medium text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3c6c5e] shrink-0" />
                    <span>Registered Pharmacist (India)</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Current Degree Program
                  </div>
                  <div className="font-medium text-slate-900 mt-0.5">
                    Master of Pharmacy in Pharmaceutical Analysis (2025–2027)
                  </div>
                  <div className="text-[11px] text-[#284f46] font-semibold mt-0.5">
                    CGPA: 8.79 / 10.0
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Geographic Mobility
                  </div>
                  <div className="font-medium text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>India & Qatar (Secondary in Doha)</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Languages
                  </div>
                  <div className="font-medium text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>English (Fluent), Tamil (Native)</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Analytical Software
                  </div>
                  <div className="font-medium text-slate-900 mt-0.5">
                    Power BI, Python (Pandas/NumPy), MySQL, MS Excel
                  </div>
                </div>
              </div>

              {/* Direct Inquiries Link */}
              <div className="pt-2 border-t border-slate-200/70">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#244b41] bg-[#edf4f1] hover:bg-[#e2ede9] rounded-lg transition-colors border border-[#d4e4de]"
                >
                  <span>Initiate Contact or Collaboration</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white space-y-1">
              <span className="text-[10px] font-semibold text-[#284f46] uppercase tracking-wider block">
                Quality Assurance Mandate
              </span>
              <p className="text-[11px] text-slate-600 italic leading-snug">
                "Analytical quality is not tested into products after formulation; it must be designed into the analytical procedure from its very inception."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
