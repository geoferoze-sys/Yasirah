import React, { useState } from 'react';
import { 
  ExternalLink, 
  Copy, 
  Check
} from 'lucide-react';
import { portfolioData, Publication } from '../data/portfolioData';

export const PublicationsSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<'APA' | 'BibTeX'>('APA');

  const copyCitation = (pub: Publication) => {
    let text = '';
    if (selectedFormat === 'APA') {
      if (pub.type === 'Book Chapter') {
        text = `${pub.authors} (${pub.year}). ${pub.title}. In Methods and Protocols in Food Science: Food Colorants (${pub.pages}). ${pub.publisher}. https://doi.org/${pub.doi}`;
      } else {
        text = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journalOrBook}, ${pub.volumeIssue || ''}, ${pub.pages}. ${pub.doiUrl ? pub.doiUrl : ''}`;
      }
    } else {
      const citeKey = pub.id.replace('pub-', '');
      text = `@article{sabreen${pub.year}${citeKey},
  author = {${pub.authors}},
  title = {${pub.title}},
  journal = {${pub.journalOrBook}},
  year = {${pub.year}},
  pages = {${pub.pages}},
  doi = {${pub.doi || ''}}
}`;
    }

    navigator.clipboard.writeText(text);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <section id="publications" className="py-10 md:py-14 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
          <div className="max-w-2xl space-y-1.5">
            <div className="text-xs font-semibold text-[#284f46] tracking-wider uppercase">
              Peer-Reviewed Scholarly Contributions
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Publications & Scientific Chapters
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Authored contributions across Springer book series and international peer-reviewed journals,
              bridging chromatographic food analysis, green chemistry, and healthcare technologies.
            </p>
          </div>

          {/* Citation Format Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-medium">Citation Style:</span>
            <div className="p-0.5 bg-[#ebeeed] rounded-md border border-slate-200/80 flex items-center">
              <button
                onClick={() => setSelectedFormat('APA')}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                  selectedFormat === 'APA' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                APA
              </button>
              <button
                onClick={() => setSelectedFormat('BibTeX')}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                  selectedFormat === 'BibTeX' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                BibTeX
              </button>
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-3.5">
          {portfolioData.publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-[#f8faf9] rounded-xl border border-slate-200/80 p-4 sm:p-5 hover:border-slate-300 transition-all space-y-2.5"
            >
              {/* Metadata Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-[#284f46]">{pub.type}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="font-medium text-slate-700">{pub.journalOrBook}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{pub.year}</span>
                  {pub.pages && (
                    <>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span>{pub.pages}</span>
                    </>
                  )}
                </div>

                {pub.publisher && (
                  <span className="text-slate-600 font-medium text-[11px]">{pub.publisher}</span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug">
                {pub.title}
              </h3>

              {/* Authors */}
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Authors:</span> {pub.authors}
              </div>

              {/* Abstract */}
              <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
                {pub.abstract}
              </p>

              {/* Tags line */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 pt-0.5">
                <span className="font-medium text-slate-400">Keywords:</span>
                {pub.tags.map((tag, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="text-slate-700 font-medium">{tag}</span>
                    {tIdx < pub.tags.length - 1 && <span className="text-slate-300">·</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2.5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {pub.doiUrl && (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-[#244b41] hover:text-white bg-[#edf4f1] hover:bg-[#2d564c] rounded-md transition-all border border-[#d4e4de]"
                    >
                      <span>Read Publication (DOI)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <button
                    onClick={() => copyCitation(pub)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-md transition-all cursor-pointer"
                    title={`Copy in ${selectedFormat} format`}
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3 h-3 text-[#3c6c5e]" />
                        <span className="text-[#284f46] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy {selectedFormat}</span>
                      </>
                    )}
                  </button>
                </div>

                {pub.doi && (
                  <span className="text-[10px] text-slate-400 font-mono">
                    DOI: {pub.doi}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
