import React from 'react';
import { ArrowUp, Download, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProtectedImage } from './ProtectedImage';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a2523] text-slate-300 py-8 sm:py-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Identity & summary (5 cols) */}
          <div className="md:col-span-5 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-[#3a524c]">
                <ProtectedImage
                  src={portfolioData.personal.profileImage}
                  alt={portfolioData.personal.fullName}
                  className="w-full h-full rounded-full"
                  roundedClassName="rounded-full"
                  showWatermark={false}
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {portfolioData.personal.fullName}
                </div>
                <div className="text-[11px] text-[#9bb3ad]">
                  {portfolioData.personal.credentials}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#abbdb8] leading-relaxed max-w-sm">
              Pharmaceutical Analyst specializing in Analytical Quality by Design (AQbD), 
              stability-indicating HPLC/UPLC method development, and green analytical chemistry.
            </p>

            <div className="text-[11px] text-[#9bb3ad] space-y-0.5 pt-0.5">
              <div>📍 Locations: India & Qatar · 📧 {portfolioData.personal.email}</div>
            </div>
          </div>

          {/* Quick Jump Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">
              Sections
            </div>
            <div className="space-y-1 text-xs flex flex-col text-[#abbdb8]">
              <a href="#about" className="hover:text-white transition-colors">About & Philosophy</a>
              <a href="#research" className="hover:text-white transition-colors">Research Manuscripts</a>
              <a href="#publications" className="hover:text-white transition-colors">Publications & Springer Chapter</a>
              <a href="#experience" className="hover:text-white transition-colors">Laboratory Experience</a>
              <a href="#skills" className="hover:text-white transition-colors">Chromatography & Skills</a>
              <a href="#education" className="hover:text-white transition-colors">Academic History</a>
              <a href="#honors" className="hover:text-white transition-colors">Awards & Certifications</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Document Access & Fast Actions (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">
              Official Documentation
            </div>
            <p className="text-[11px] text-[#abbdb8] leading-snug">
              Curriculum Vitae verified by institutional credentials, conference award citations, and Pharmacy Council registration.
            </p>
            <div className="flex flex-wrap gap-2 pt-0.5">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-[#253633] hover:bg-[#2d423e] rounded-md transition-colors cursor-pointer border border-[#354c47]"
              >
                <FileText className="w-3 h-3 text-[#77ad9f]" />
                <span>Examine CV</span>
              </button>
              <a
                href={portfolioData.personal.cvPdf}
                download="Yasirah_Sabreen_CV.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#335b52] hover:bg-[#3c6b60] rounded-md transition-colors"
              >
                <Download className="w-3 h-3" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-[#2a3d39] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#7a938d]">
          <div>
            © {new Date().getFullYear()} Yasirah Sabreen F. All rights reserved. Registered Pharmacist (India).
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
