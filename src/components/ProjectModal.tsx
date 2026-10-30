import React from 'react';
import { X, ExternalLink, Github, Layers, CheckCircle, Cpu, Terminal, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#060814]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0b0f1f] border border-cyan-400/40 shadow-[0_24px_64px_rgba(0,0,0,0.9),0_0_40px_rgba(0,245,255,0.2)] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#060814] border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-400/40 text-cyan-300">
            {project.categoryLabel}
          </span>
          {project.highlightMetric && (
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-purple-500/15 border border-purple-400/40 text-purple-300">
              {project.highlightMetric}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.detailedDescription || project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2">
            Technology Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-[#060814] border border-cyan-500/30 text-cyan-300 font-mono text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Core Highlights */}
        {project.highlights && (
          <div className="mb-6 space-y-2.5 bg-[#060814]/70 p-4 sm:p-5 rounded-xl border border-slate-800">
            <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Key Architectural Capabilities:
            </span>
            <ul className="space-y-2 mt-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture Specs */}
        {project.architecture && (
          <div className="mb-8 space-y-2 bg-[#060814]/70 p-4 sm:p-5 rounded-xl border border-slate-800">
            <span className="font-mono text-xs text-purple-300 uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400" />
              System Architecture & Implementation:
            </span>
            <ul className="space-y-1.5 mt-2">
              {project.architecture.map((arch, i) => (
                <li key={i} className="font-mono text-xs text-slate-400 flex items-start gap-2">
                  <span className="text-cyan-400">&gt;</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-600 text-[#060814] shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] flex items-center gap-2 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg font-mono text-xs text-slate-200 bg-[#060814] border border-slate-700 hover:border-purple-400 hover:text-white flex items-center gap-2 transition-all"
          >
            <Github className="w-4 h-4 text-purple-400" />
            <span>Inspect Source Code</span>
          </a>
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
          >
            [Close ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
