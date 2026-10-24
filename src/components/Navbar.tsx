import React, { useState, useEffect } from 'react';
import { FileText, Download, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProtectedImage } from './ProtectedImage';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Publications', href: '#publications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills & Labs', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Honors', href: '#honors' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f8faf9]/95 backdrop-blur-md shadow-xs border-b border-slate-200/70 py-2'
          : 'bg-[#f8faf9]/80 backdrop-blur-xs py-2.5 sm:py-3 border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-slate-300 group-hover:ring-[#3c6c5e] transition-all">
              <ProtectedImage
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.fullName}
                className="w-full h-full rounded-full"
                roundedClassName="rounded-full"
                showWatermark={false}
              />
            </div>
            <div>
              <div className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#2d564c] transition-colors tracking-tight">
                {portfolioData.personal.fullName}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                M. Pharm · Registered Pharmacist
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs sm:text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#284f46] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3c6c5e] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50/80 rounded-md transition-all cursor-pointer border border-slate-200/80 shadow-2xs"
              title="Preview Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5 text-[#3c6c5e]" />
              <span>Preview CV</span>
            </button>

            <a
              href={portfolioData.personal.cvPdf}
              download="Yasirah_Sabreen_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#2d564c] hover:bg-[#23453d] rounded-md transition-all shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="p-1.5 text-slate-700 hover:text-[#2d564c] rounded-md border border-slate-200 bg-white"
              aria-label="View CV"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-900 rounded-md border border-slate-200 bg-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f8faf9] border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg transition-all">
          <div className="space-y-1 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-white hover:text-[#2d564c] rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2.5 border-t border-slate-200/70 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-800 bg-white rounded-md border border-slate-200"
            >
              <FileText className="w-3.5 h-3.5 text-[#3c6c5e]" />
              <span>Preview Curriculum Vitae</span>
            </button>

            <a
              href={portfolioData.personal.cvPdf}
              download="Yasirah_Sabreen_CV.pdf"
              className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-[#2d564c] hover:bg-[#23453d] rounded-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
