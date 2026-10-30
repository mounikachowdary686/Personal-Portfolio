import React from 'react';
import { ArrowUp, Terminal, Heart, BookOpen, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060d] border-t border-purple-500/20 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0b0f1f] border border-cyan-400/40 flex items-center justify-center font-mono font-bold text-cyan-300">
                MK<span className="text-purple-400">_</span>
              </div>
              <div>
                <span className="text-white font-bold text-base block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono text-xs text-cyan-400">
                  REVA University (2025 - 2029)
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              B.Tech Computer Science Engineering student specializing in AI & Machine Learning. Building scalable full-stack web platforms and intelligent software prototypes.
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs text-slate-400">
                STATUS: AVAILABLE FOR HACKATHONS
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-white font-bold tracking-wider uppercase block">
              Direct Matrix
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  &gt; 01_About Mounika
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-300 transition-colors">
                  &gt; 02_REVA Academic Track
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">
                  &gt; 03_Technical Arsenal
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  &gt; 04_Featured Projects (8)
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-cyan-300 transition-colors">
                  &gt; 05_SIH & Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  &gt; 06_Contact Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation & Connect */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-white font-bold tracking-wider uppercase font-mono text-xs block">
              Developer Resources
            </span>
            <p className="text-xs text-slate-400">
              Need to inspect project source, setup the code locally in VS Code, or deploy to Vercel/GitHub Pages?
            </p>
            <button
              onClick={onOpenGuide}
              className="px-4 py-2.5 rounded-lg bg-purple-500/10 border border-purple-400/40 text-purple-300 hover:text-white hover:bg-purple-500/20 transition-all font-mono text-xs flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>VS Code & Deployment Guide</span>
            </button>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0b0f1f] border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0b0f1f] border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-[#0b0f1f] border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            &copy; {new Date().getFullYear()} Mounika Chowdhary K. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with React.js, Tailwind CSS & Vite</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0b0f1f] border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-all"
            aria-label="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
