import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2, Terminal, Github, Linkedin, Mail, Sparkles, Cpu, Layers, BookOpen, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGuide }) => {
  // Typing animation for roles
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient Radial Energy Nodes per Synthetic Vanguard Spec */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(0,245,255,0.14)_0%,transparent_65%)] blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-[100px] pointer-events-none -z-10" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Live Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0b0f1f]/80 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,245,255,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                {PERSONAL_INFO.badge}
              </span>
            </div>

            {/* HEADER ROW: Profile Photo Icon Positioned Right Next to Name */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 w-full">
              
              {/* Circular Glowing Profile Photo Icon (Directly next to name, not down) */}
              <div className="relative shrink-0 group animate-float">
                {/* Glowing Concentric Halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-lg opacity-80 group-hover:opacity-100 transition-opacity animate-pulse-glow" />

                {/* Rotating Dashed Orbit Ring */}
                <div className="absolute -inset-2 rounded-full border border-cyan-400/50 border-dashed animate-spin-slow pointer-events-none" />
                <div className="absolute -inset-4 rounded-full border border-purple-500/30 border-dashed animate-spin-reverse-slow pointer-events-none" />

                {/* Profile Photo Circle */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-purple-500 to-cyan-300 shadow-[0_0_35px_rgba(0,245,255,0.5)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0b0f1f] border-2 border-[#060814] relative">
                    <img
                      src="/profile.png"
                      alt={PERSONAL_INFO.name}
                      onError={(e) => {
                        e.currentTarget.src = '/public/assets/aistudio/WhatsApp_Image_2026-10-22_at_3.30.13_PM_2911561f.jpeg';
                      }}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle cyber light catcher */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060814]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Mini Online Status Dot */}
                <div className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-[#060814] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(0,245,255,0.8)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>

              {/* Name & Sub-badge */}
              <div className="space-y-1.5 flex-1">
                <div className="font-mono text-xs sm:text-sm text-purple-400 tracking-widest uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>ENGINEERING INNOVATION // REVA UNIV</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-white leading-[1.08]">
                  Hi, I'm <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-[#00f5ff] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,245,255,0.35)]">
                    {PERSONAL_INFO.name}
                  </span>
                </h1>
                <div className="font-mono text-xs text-cyan-300/90 pt-0.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>REVA University, Bangalore (2025 - 2029)</span>
                </div>
              </div>
            </div>

            {/* Typing Effect Container */}
            <div className="h-10 sm:h-12 flex items-center font-mono text-xl sm:text-2xl lg:text-3xl text-slate-200">
              <span className="text-purple-400 mr-2.5">&gt;</span>
              <span className="font-bold text-white tracking-tight">
                {displayedText}
              </span>
              <span className="w-2.5 h-6 sm:h-7 bg-cyan-400 ml-1 inline-block animate-pulse" />
            </div>

            {/* Role Subtitle & Bio */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              B.Tech Computer Science Engineering student specializing in{' '}
              <span className="text-cyan-300 font-medium">Artificial Intelligence & Machine Learning</span> at REVA University (2025 - 2029). Bridging algorithmic research with production-grade full-stack web applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 bg-gradient-to-r from-[#00f5ff] to-[#2563eb] text-[#060814] shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:shadow-[0_0_35px_rgba(0,245,255,0.7)] hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center gap-2"
              >
                <Code2 className="w-4 h-4 text-[#060814]" />
                <span>Explore Projects (8)</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg font-medium text-sm text-slate-200 bg-white/[0.04] border border-purple-500/40 backdrop-blur-sm hover:bg-purple-500/15 hover:border-purple-400 hover:text-white transition-all text-center flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenGuide}
                className="w-full sm:w-auto px-4 py-3.5 rounded-lg font-mono text-xs text-sky-400 hover:text-cyan-300 bg-cyan-500/[0.06] hover:bg-cyan-500/[0.12] border border-cyan-500/30 transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>VS Code & Deploy Guide</span>
              </button>
            </div>

            {/* Social Links & Direct Channels */}
            <div className="flex items-center gap-4 pt-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                Direct Channels:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#0b0f1f] border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-[#0b0f1f] border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-[#0b0f1f] border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)] transition-all"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Telemetry & Academic Showcase Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="gradient-border-card p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-mono text-xs text-cyan-300 font-semibold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  DEVELOPER TELEMETRY
                </span>
                <span className="font-mono text-[11px] text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
                  Active '25-'29
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#060814]/80 border border-slate-800">
                  <div className="font-mono text-2xl font-extrabold text-cyan-300">8+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Projects Built</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#060814]/80 border border-slate-800">
                  <div className="font-mono text-2xl font-extrabold text-purple-300">4</div>
                  <div className="text-xs text-slate-400 mt-0.5">Certifications</div>
                </div>
              </div>

              {/* Key Competencies Highlights */}
              <div className="space-y-2.5 font-mono text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#060814]/60 border border-slate-800/80">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-slate-400">Specialization:</span>
                  <span className="text-white font-semibold ml-auto">AI & ML Track</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#060814]/60 border border-slate-800/80">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-slate-400">University:</span>
                  <span className="text-white font-semibold ml-auto">REVA, Bangalore</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#060814]/60 border border-slate-800/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-400">Hackathon:</span>
                  <span className="text-emerald-300 font-semibold ml-auto">SIH '26 Qualified</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#060814]/60 border border-slate-800/80">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span className="text-slate-400">Stack:</span>
                  <span className="text-sky-300 font-semibold ml-auto">React + Python</span>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Seeking high-impact hackathon teammates, research projects, and full-stack software development opportunities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 p-2 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce hidden md:block"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};
