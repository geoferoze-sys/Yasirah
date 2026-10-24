import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Copy,
  ArrowRight,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProtectedImage } from './ProtectedImage';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-16 pb-8 md:pt-20 md:pb-10 border-b border-slate-200/70 overflow-hidden bg-gradient-to-b from-[#f4f7f6] via-[#f8faf9] to-[#f8faf9]">
      {/* Subtle, soft grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2d564c 1px, transparent 1px), radial-gradient(#2d564c 1px, #f8faf9 1px)`,
          backgroundSize: `36px 36px`,
          backgroundPosition: `0 0, 18px 18px`
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Professional Credentials Tagline */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[#284f46] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3c6c5e]" />
            Registered Pharmacist (India)
          </span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-slate-600">M. Pharm (Pharmaceutical Analysis)</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 text-slate-600">
            <MapPin className="w-3 h-3 text-slate-400" />
            India & Qatar
          </span>
        </div>

        {/* Hero Grid: Profile & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Narrative Column (9 cols) */}
          <div className="lg:col-span-9 space-y-3.5">
            
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                {portfolioData.personal.fullName}
              </h1>
              <p className="text-sm sm:text-base text-[#284f46] font-medium leading-snug">
                Analytical Method Development, AQbD & Green Pharmaceutical Chemistry
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              Detail-driven pharmaceutical analyst dedicated to advancing modern drug quality through 
              stability-indicating HPLC/UPLC development, forced degradation kinetics, and Analytical 
              Quality by Design (AQbD). Combining analytical laboratory rigor with computational insights in 
              Python and Power BI.
            </p>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-0.5">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-[#284f46] transition-colors py-0.5 cursor-pointer group"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-[#3c6c5e]" />
                <span className="underline decoration-slate-300 group-hover:decoration-[#3c6c5e] underline-offset-2">
                  {portfolioData.personal.email}
                </span>
                {copiedEmail ? (
                  <span className="text-[11px] text-[#284f46] font-medium">Copied!</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#research"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2d564c] hover:bg-[#23453d] rounded-lg transition-all shadow-2xs"
              >
                <span>View Research Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-lg transition-all cursor-pointer shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-[#3c6c5e]" />
                <span>Examine CV PDF</span>
              </button>

              <a
                href={portfolioData.personal.cvPdf}
                download="Yasirah_Sabreen_CV.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-lg transition-all shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Download PDF</span>
              </a>
            </div>

          </div>

          {/* Small, Medium-Resolution Protected Profile Picture (3 cols) */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <div className="w-full max-w-[170px] sm:max-w-[185px] space-y-1.5">
              
              {/* Compact Protected Photo Frame */}
              <div className="relative p-1.5 bg-white rounded-xl border border-slate-200/90 shadow-xs">
                <ProtectedImage
                  src={portfolioData.personal.profileImage}
                  alt="Yasirah Sabreen F - Registered Pharmacist"
                  className="w-full aspect-square rounded-lg bg-slate-100 shadow-inner"
                  imgClassName="w-full h-full object-cover object-top"
                  showWatermark={true}
                  watermarkText="Yasirah Sabreen · Protected"
                />

                {/* Micro info bar under image */}
                <div className="pt-1.5 px-0.5 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#3c6c5e] shrink-0" />
                    <span>Reg. Pharmacist</span>
                  </span>
                  <span className="text-slate-400 flex items-center gap-0.5">
                    <Lock className="w-2.5 h-2.5 text-slate-400" />
                    <span>Protected</span>
                  </span>
                </div>
              </div>

              {/* Status Note below photo */}
              <div className="px-1 text-[10px] text-slate-500 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4e8172]"></span>
                  <span>M.Pharm Scholar</span>
                </span>
                <span className="font-mono text-slate-600 font-semibold">8.79 CGPA</span>
              </div>

            </div>
          </div>

        </div>

        {/* Clean Typographic Metrics Row */}
        <div className="mt-6 pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {portfolioData.personal.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] font-semibold text-[#284f46] uppercase tracking-wider">
                {metric.label}
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                {metric.note}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
