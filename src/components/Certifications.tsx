import React from 'react';
import { Award, Trophy, CheckCircle, ExternalLink, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(168,85,247,0.14)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>05 // CREDENTIALS & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Verified{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications & Honors
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Recognized by national hackathon platforms, academic consortiums, and technology leaders.
          </p>
        </div>

        {/* Featured Smart India Hackathon Card */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-purple-950/50 via-[#0b0f1f] to-cyan-950/30 border-2 border-purple-500/50 p-6 sm:p-8 shadow-[0_0_40px_rgba(168,85,247,0.25)] relative overflow-hidden group">
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

          {/* Accent glow corner */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Hackathon Qualified variant */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(139,92,246,0.18)] border border-[rgba(168,85,247,0.5)] text-[#c084fc] font-mono text-xs font-bold tracking-wider uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c084fc]" />
                  </span>
                  <span>Hackathon Qualified</span>
                </div>
                <span className="font-mono text-xs text-cyan-300 bg-cyan-950/70 border border-cyan-400/30 px-2.5 py-0.5 rounded">
                  SIH 2026
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Smart India Hackathon (SIH) 2026 Qualified
              </h3>

              <div className="font-mono text-xs sm:text-sm text-purple-300">
                Ministry of Education's Innovation Cell & AICTE, Government of India
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Qualified in the prestigious Smart India Hackathon 2026 nationwide engineering initiative. Demonstrated rapid technical architecture, agile full-stack problem solving, and software engineering execution.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Rapid Prototyping', 'Team Collaboration', 'Real-world Problem Solving', 'Full-Stack Delivery'].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-[#060814] border border-purple-400/40 text-purple-200 font-mono text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-[#060814]/80 border border-purple-500/30 text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400/50 flex items-center justify-center text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] mb-3">
                <Trophy className="w-8 h-8 text-amber-300" />
              </div>
              <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-wider">
                Credential Record
              </span>
              <span className="font-mono text-xs text-white font-semibold mt-1">
                SIH-2026-QUALIFIED
              </span>
              <span className="text-[11px] text-slate-400 mt-2">
                Representing REVA University AI & ML Team
              </span>
            </div>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.filter((c) => !c.isHackathon).map((cert) => (
            <div
              key={cert.id}
              className="gradient-border-card p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <div className="p-2 rounded-lg bg-[#060814] border border-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="font-mono text-xs text-purple-400 mb-3">
                  {cert.issuer}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-[#060814] border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>{cert.date}</span>
                <span className="text-cyan-400/80 text-[11px]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
