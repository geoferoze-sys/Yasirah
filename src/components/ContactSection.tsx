import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  Download, 
  MessageSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Inquiry Composer State
  const [inquiryType, setInquiryType] = useState('Research Collaboration');
  const [senderName, setSenderName] = useState('');
  const [senderAffiliation, setSenderAffiliation] = useState('');
  const [message, setMessage] = useState('');
  const [messageCopied, setMessageCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`[${inquiryType}] Inquiring with Yasirah Sabreen F`);
    const body = encodeURIComponent(
      `Dear Yasirah Sabreen,\n\nMy name is ${senderName || '[Your Name]'} from ${
        senderAffiliation || '[Your Institution / Organization]'
      }.\n\n${message || 'I came across your research portfolio and would like to discuss potential opportunities or research collaboration.'}\n\nBest regards,\n${
        senderName || '[Your Name]'
      }`
    );
    return `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  const copyInquiryText = () => {
    const text = `To: ${portfolioData.personal.email}\nSubject: [${inquiryType}] Inquiring with Yasirah Sabreen F\n\nDear Yasirah Sabreen,\n\nMy name is ${senderName || '[Your Name]'} from ${senderAffiliation || '[Your Organization]'}.\n\n${message || 'I would like to discuss collaborative opportunities in pharmaceutical analysis.'}`;
    navigator.clipboard.writeText(text);
    setMessageCopied(true);
    setTimeout(() => setMessageCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-[#f8faf9] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 space-y-1.5">
          <div className="text-xs font-semibold text-[#284f46] tracking-wider uppercase">
            Communication & Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Connect for Research, Fellowship, or Industry Inquiries
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Actively open to doctoral research fellowships, international analytical laboratory opportunities,
            and collaborative publications in AQbD and green chromatography.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* Email Card */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 space-y-2 hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#edf4f1] text-[#2d564c] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-[#3c6c5e]" />
                      <span className="text-[#284f46]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Primary Email
                </div>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#2d564c] transition-colors break-all"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#edf4f1] text-[#2d564c] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900">
                    India (Chennai) & Qatar (Doha)
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Open to on-site analytical laboratory appointments and doctoral fellowships across India and the GCC region.
              </p>
            </div>

            {/* Quick CV Triggers */}
            <div className="p-4 bg-[#23453d] text-white rounded-xl space-y-2">
              <div className="text-xs font-semibold">
                Official Curriculum Vitae
              </div>
              <p className="text-[11px] text-[#d6e5e1] leading-snug">
                Signed 3-page CV with complete instrumentation training and institutional records.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <button
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-[#1a3832] bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-[#2d564c]" />
                  <span>Preview CV</span>
                </button>
                <a
                  href={portfolioData.personal.cvPdf}
                  download="Yasirah_Sabreen_CV.pdf"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-white bg-[#305e53] hover:bg-[#3a7063] rounded-md transition-colors border border-[#3c6f63]"
                >
                  <Download className="w-3 h-3" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Direct Inquiry Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 space-y-4">
              
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#3c6c5e]" />
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    Direct Inquiry Composer
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500">
                  Compose a structured message to connect directly via email.
                </p>
              </div>

              {/* Inquiry Type Selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider block">
                  Subject / Nature of Inquiry
                </label>
                <div className="flex flex-wrap gap-1">
                  {[
                    'Research Collaboration',
                    'Ph.D. / Fellowship',
                    'Industry QC/QA Role',
                    'Guest Talk / Conference',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInquiryType(type)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                        inquiryType === type
                          ? 'bg-[#2d564c] text-white shadow-2xs'
                          : 'bg-[#ebeeed] text-slate-700 hover:bg-[#dfe4e1]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="sender-name" className="text-[11px] font-semibold text-slate-700">
                    Your Name
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Dr. Rajesh Kumar / Hiring Lead"
                    className="w-full px-3 py-1.5 text-xs bg-[#f8faf9] border border-slate-200/90 rounded-md focus:outline-none focus:border-[#4e8172] focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="sender-affiliation" className="text-[11px] font-semibold text-slate-700">
                    Institution / Organization
                  </label>
                  <input
                    id="sender-affiliation"
                    type="text"
                    value={senderAffiliation}
                    onChange={(e) => setSenderAffiliation(e.target.value)}
                    placeholder="e.g. Crescent University / Pharma Lab"
                    className="w-full px-3 py-1.5 text-xs bg-[#f8faf9] border border-slate-200/90 rounded-md focus:outline-none focus:border-[#4e8172] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="inquiry-message" className="text-[11px] font-semibold text-slate-700">
                  Message Details
                </label>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail your inquiry regarding analytical method development, AQbD research, manuscript collaboration, or open positions..."
                  className="w-full px-3 py-2 text-xs bg-[#f8faf9] border border-slate-200/90 rounded-md focus:outline-none focus:border-[#4e8172] focus:bg-white transition-colors"
                />
              </div>

              {/* Actions */}
              <div className="pt-1.5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
                <a
                  href={generateMailtoUrl()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2d564c] hover:bg-[#23453d] rounded-md transition-all shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </a>

                <button
                  type="button"
                  onClick={copyInquiryText}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors cursor-pointer"
                >
                  {messageCopied ? (
                    <>
                      <Check className="w-3 h-3 text-[#3c6c5e]" />
                      <span className="text-[#284f46] font-semibold">Message Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
