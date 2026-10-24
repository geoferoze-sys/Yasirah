/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResearchProjectsSection } from './components/ResearchProjectsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsMatrixSection } from './components/SkillsMatrixSection';
import { EducationSection } from './components/EducationSection';
import { CertificatesAwardsSection } from './components/CertificatesAwardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvViewerModal } from './components/CvViewerModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-slate-800 font-sans selection:bg-[#dbebe6] selection:text-[#1a3933]">
      {/* Fixed Navigation Header */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        <HeroSection onOpenCvModal={() => setIsCvModalOpen(true)} />
        <AboutSection />
        <ResearchProjectsSection />
        <PublicationsSection />
        <ExperienceSection />
        <SkillsMatrixSection />
        <EducationSection />
        <CertificatesAwardsSection />
        <ContactSection onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Official CV PDF & Structured Modal Viewer */}
      <CvViewerModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
