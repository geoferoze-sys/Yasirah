import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CvViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvViewerModal: React.FC<CvViewerModalProps> = ({ isOpen, onClose }) => {
  const [activeView, setActiveView] = useState<'pdf' | 'summary'>('pdf');

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col border border-slate-200/90 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-3 border-b border-slate-200/80 bg-[#f8faf9] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2d564c] text-white flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 leading-tight">
                Curriculum Vitae — Yasirah Sabreen F
              </div>
              <div className="text-xs text-slate-500">
                M. Pharm (Pharmaceutical Analysis) · Registered Pharmacist
              </div>
            </div>
          </div>

          {/* View mode toggle + actions */}
          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center p-0.5 bg-[#ebeeed] rounded-lg text-xs font-semibold">
              <button
                onClick={() => setActiveView('pdf')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeView === 'pdf' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PDF Document
              </button>
              <button
                onClick={() => setActiveView('summary')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeView === 'summary' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Structured CV
              </button>
            </div>

            <a
              href={portfolioData.personal.cvPdf}
              download="Yasirah_Sabreen_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#2d564c] hover:bg-[#23453d] rounded-lg transition-all shadow-2xs"
              title="Download original PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 bg-[#f4f7f6] overflow-hidden relative">
          {activeView === 'pdf' ? (
            <div className="w-full h-full flex flex-col">
              <iframe
                src={`${portfolioData.personal.cvPdf}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Curriculum Vitae of Yasirah Sabreen F"
                className="w-full h-full border-0"
              />
              {/* Fallback banner */}
              <div className="p-2 bg-white/95 border-t border-slate-200/80 text-xs text-slate-500 flex items-center justify-between px-4">
                <span>Official PDF: {portfolioData.personal.fullName}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveView('summary')}
                    className="text-[#2d564c] hover:underline font-medium"
                  >
                    Switch to Structured Text View
                  </button>
                  <a
                    href={portfolioData.personal.cvPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2d564c] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full overflow-y-auto p-5 sm:p-7 bg-white space-y-6 max-w-4xl mx-auto">
              {/* Resume Header */}
              <div className="border-b border-slate-200/80 pb-5 text-center space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  {portfolioData.personal.fullName}
                </h2>
                <div className="text-xs sm:text-sm text-[#284f46] font-semibold">
                  {portfolioData.personal.credentials}
                </div>
                <div className="text-xs text-slate-500 flex flex-wrap items-center justify-center gap-3 pt-0.5">
                  <span>📍 {portfolioData.personal.location}</span>
                  <span>·</span>
                  <span>📧 {portfolioData.personal.email}</span>
                  <span>·</span>
                  <span>🌐 {portfolioData.personal.languages.join(', ')}</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1">
                  Professional Summary
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {portfolioData.personal.summary}
                </p>
              </div>

              {/* Research Interests */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1">
                  Research Interests
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {portfolioData.personal.researchInterests.join(' | ')}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1">
                  Education
                </h3>
                <div className="space-y-2.5">
                  {portfolioData.education.map((edu) => (
                    <div key={edu.id} className="text-xs sm:text-sm space-y-0.5">
                      <div className="flex justify-between items-baseline font-semibold text-slate-900">
                        <span>{edu.degree} {edu.status && `(${edu.status})`}</span>
                        <span className="text-[#284f46]">{edu.grade}</span>
                      </div>
                      <div className="text-slate-600 text-xs">
                        {edu.institution}, {edu.location} | {edu.period}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industrial & Analytical Experience */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1">
                  Industrial & Analytical Experience
                </h3>
                <div className="space-y-3">
                  {portfolioData.experience.map((exp) => (
                    <div key={exp.id} className="text-xs sm:text-sm space-y-1">
                      <div className="flex justify-between items-baseline font-semibold text-slate-900">
                        <span>{exp.company}</span>
                        <span className="text-slate-500 text-xs">{exp.period}</span>
                      </div>
                      <div className="text-[#284f46] text-xs font-medium">
                        {exp.role} · {exp.location}
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-xs pt-0.5">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Manuscripts */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1">
                  Academic Research Projects (Manuscripts Under Review)
                </h3>
                <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {portfolioData.researchProjects.map((p) => (
                    <li key={p.id} className="leading-relaxed">
                      <strong>{p.title}</strong>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Publications */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1">
                  Publications & Book Chapters
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  {portfolioData.publications.map((pub) => (
                    <div key={pub.id} className="space-y-0.5 text-slate-700">
                      <div className="font-semibold text-slate-900">{pub.title}</div>
                      <div className="text-slate-500 text-xs">
                        {pub.journalOrBook} {pub.publisher && `(${pub.publisher})`} · {pub.year}
                      </div>
                      {pub.doi && (
                        <div className="text-xs text-[#284f46]">DOI: {pub.doi}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
