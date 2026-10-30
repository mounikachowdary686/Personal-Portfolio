/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectGuideModal } from './components/ProjectGuideModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#060814] text-[#e1e1f3] selection:bg-[#00f5ff]/30 selection:text-[#00f5ff] overflow-x-hidden font-sans">
      {/* Dynamic Background Radial Ambient Glow Orbs */}
      <div className="fixed top-0 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,245,255,0.09)_0%,transparent_65%)] blur-[130px] pointer-events-none -z-10" />

      {/* Subtle Matrix Cyber Grid */}
      <div className="fixed inset-0 cyber-grid-bg opacity-30 pointer-events-none -z-20" />

      {/* Main Navigation */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Page Content */}
      <main className="relative z-10">
        <Hero onOpenGuide={() => setIsGuideOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Project Architectural Specs Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* VS Code & Deployment Documentation Modal */}
      <ProjectGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
