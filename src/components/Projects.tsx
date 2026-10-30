import React, { useState } from 'react';
import {
  Code2,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Info,
  Activity,
  Ticket,
  UtensilsCrossed,
  BookOpen,
  Film,
  Wallet,
  Satellite,
  Flame,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filterTabs: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects (8)', value: 'all' },
    { label: 'Full-Stack & Web', value: 'web' },
    { label: 'AI & Satellite ML', value: 'aiml' },
    { label: 'IoT & Hardware', value: 'iot' },
    { label: 'Developer Tools', value: 'tools' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  // Helper to render distinct project placeholder graphics
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'blood-bank':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#120a1c] via-[#0b0f1f] to-[#060814] flex flex-col items-center justify-center p-4 overflow-hidden border-b border-purple-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)] mb-2 group-hover:scale-110 transition-transform">
              <Activity className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-rose-300 font-semibold tracking-wider relative z-10">
              [BLOOD BANK TELEMETRY]
            </span>
            <span className="font-mono text-[10px] text-slate-400 relative z-10">
              Supabase RLS // Donor Registry // Real-time Stock
            </span>
          </div>
        );

      case 'ipl-ticket-booking':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#081528] via-[#0b0f1f] to-[#060814] flex flex-col items-center justify-center p-4 overflow-hidden border-b border-blue-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(0,245,255,0.3)] mb-2 group-hover:scale-110 transition-transform">
              <Ticket className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider relative z-10">
              [IPL CRICKET ARENA]
            </span>
            <span className="font-mono text-[10px] text-slate-400 relative z-10">
              Vite + React // Stadium Stands // Live Bookings
            </span>
          </div>
        );

      case 'tasty-bites':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#1a140a] via-[#0b0f1f] to-[#060814] flex flex-col items-center justify-center p-4 overflow-hidden border-b border-amber-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] mb-2 group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-amber-300 font-semibold tracking-wider relative z-10">
              [TASTY BITES CATERING]
            </span>
            <span className="font-mono text-[10px] text-slate-400 relative z-10">
              Interactive Menu // Cart Persistence // Supabase
            </span>
          </div>
        );

      case 'code-atlas':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#0c1822] via-[#0b0f1f] to-[#060814] flex flex-col items-center justify-center p-4 overflow-hidden border-b border-sky-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] mb-2 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-sky-300 font-semibold tracking-wider relative z-10">
              [CODEATLAS SYNTAX HUB]
            </span>
            <span className="font-mono text-[10px] text-slate-400 relative z-10">
              Cheat Sheets // C, C++, Python, JavaScript
            </span>
          </div>
        );

      case 'reva-movie-house':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#1b0b1c] via-[#0b0f1f] to-[#060814] flex flex-col items-center justify-center p-4 overflow-hidden border-b border-purple-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-2 group-hover:scale-110 transition-transform">
              <Film className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-purple-300 font-semibold tracking-wider relative z-10">
              [REVA MOVIE HOUSE]
            </span>
            <span className="font-mono text-[10px] text-slate-400 relative z-10">
              Cinema Previews // Interactive Screening Cards
            </span>
          </div>
        );

      case 'digital-wallet':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#0b1c18] via-[#0b0f1f] to-[#060814] flex flex-col items-center justify-center p-4 overflow-hidden border-b border-emerald-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-2 group-hover:scale-110 transition-transform">
              <Wallet className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-emerald-300 font-semibold tracking-wider relative z-10">
              [DIGITAL WALLET LEDGER]
            </span>
            <span className="font-mono text-[10px] text-slate-400 relative z-10">
              SQL Balances // Transaction Logs // Audit Trails
            </span>
          </div>
        );

      case 'satquery-ai':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#0a1824] via-[#0f172a] to-[#060814] flex flex-col items-center justify-center p-4 overflow-hidden border-b border-cyan-500/40 group-hover:border-cyan-400 transition-colors">
            <div className="absolute inset-0 cyber-grid-bg opacity-40" />
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-400/50 text-[10px] font-mono text-cyan-300 animate-pulse">
              AI / ML
            </div>
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_25px_rgba(0,245,255,0.4)] mb-2 group-hover:scale-110 transition-transform">
              <Satellite className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-cyan-300 font-bold tracking-wider relative z-10">
              [SATQUERY AI DISASTER RADAR]
            </span>
            <span className="font-mono text-[10px] text-slate-300 relative z-10">
              Satellite Multispectral Bands // Disaster Forecasting
            </span>
          </div>
        );

      case 'arduino-fire-detection':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-[#1c0d0a] via-[#0b0f1f] to-[#060814] flex flex-col items-center justify-center p-4 overflow-hidden border-b border-orange-500/20 group-hover:border-cyan-500/40 transition-colors">
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/40 flex items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)] mb-2 group-hover:scale-110 transition-transform">
              <Flame className="w-7 h-7" />
            </div>
            <span className="font-mono text-xs text-orange-300 font-semibold tracking-wider relative z-10">
              [ARDUINO FLAME & SPRINKLER]
            </span>
            <span className="font-mono text-[10px] text-slate-400 relative z-10">
              Hardware Microcontroller // Flame Sensor // Water Pump
            </span>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // FEATURED BUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Projects & Prototypes
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Eight production systems and prototypes spanning healthcare management, sports ticketing, disaster forecasting, and automated hardware safety.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 ${
                activeFilter === tab.value
                  ? 'bg-cyan-400 text-[#060814] font-bold shadow-[0_0_20px_rgba(0,245,255,0.4)]'
                  : 'bg-[#0b0f1f] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="gradient-border-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Project Visual / Image Placeholder */}
              {renderProjectVisual(project)}

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] text-purple-400 uppercase tracking-widest">
                    {project.categoryLabel}
                  </span>
                  {project.highlightMetric && (
                    <span className="font-mono text-[10px] text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {project.highlightMetric}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#060814] border border-cyan-500/20 text-cyan-300 font-mono text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#060814] border border-slate-700 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 hover:text-white text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
                        title="Open Live Application"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 text-xs font-mono text-purple-300 hover:text-cyan-300 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
