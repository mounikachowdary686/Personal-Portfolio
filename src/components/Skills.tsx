import React, { useState } from 'react';
import { Cpu, Code, Database, Wrench, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

type SkillCategory = 'All' | 'Programming' | 'Web' | 'Database' | 'Tools';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: { label: SkillCategory; icon: React.ElementType }[] = [
    { label: 'All', icon: Sparkles },
    { label: 'Programming', icon: Code },
    { label: 'Web', icon: Cpu },
    { label: 'Database', icon: Database },
    { label: 'Tools', icon: Wrench },
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,245,255,0.07)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>03 // CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Skills & Arsenal
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Proficiency across systems programming, modern web frameworks, cloud database architectures, and developer pipelines.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-[#060814] font-bold shadow-[0_0_20px_rgba(0,245,255,0.4)] scale-105'
                    : 'bg-[#0b0f1f] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-75">
                  (
                  {cat.label === 'All'
                    ? SKILLS_DATA.length
                    : SKILLS_DATA.filter((s) => s.category === cat.label).length}
                  )
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`gradient-border-card p-6 rounded-xl transition-all duration-300 ${
                  isHovered ? 'shadow-[0_0_30px_rgba(0,245,255,0.25)] -translate-y-1' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-[11px] text-purple-400 uppercase tracking-widest block mb-1">
                      {skill.category}
                    </span>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{skill.name}</span>
                      <span className="text-xs font-mono font-medium text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded">
                        {skill.level}%
                      </span>
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#060814] border border-cyan-500/20 text-cyan-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                </div>

                {/* Progress Bar with Cyan-to-Purple Glow */}
                <div className="w-full bg-[#060814] h-2 rounded-full overflow-hidden p-0.5 border border-slate-800 mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 transition-all duration-1000 shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.tagline}
                </p>

                {/* Projects Used Badge */}
                <div className="pt-3 border-t border-slate-800/80">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1.5">
                    Demonstrated In:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.projectsUsed.map((proj, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 rounded bg-[#060814] border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stack Integration Architecture Panel */}
        <div className="rounded-xl bg-[#0b0f1f]/80 border border-purple-500/30 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Full-Stack & AI Pipeline Architecture</h4>
                <p className="text-xs text-slate-400">How Mounika's core stack interfaces in production software</p>
              </div>
            </div>
            <span className="font-mono text-xs text-cyan-300 bg-cyan-950/70 border border-cyan-400/30 px-3 py-1 rounded-md self-start sm:self-auto">
              INTEGRATION: ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-lg bg-[#060814] border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold block">[01] CLIENT TIER</span>
              <p className="text-slate-300 font-sans">
                React.js + Tailwind CSS for responsive component trees, smooth motion, and instant user feedback.
              </p>
              <div className="text-slate-400 text-[11px]">React, HTML5, CSS3</div>
            </div>

            <div className="p-4 rounded-lg bg-[#060814] border border-slate-800 space-y-2">
              <span className="text-purple-400 font-bold block">[02] DATA & BACKEND</span>
              <p className="text-slate-300 font-sans">
                Supabase BaaS and MySQL/SQL schemas for real-time tables, user auth, and transactional integrity.
              </p>
              <div className="text-slate-400 text-[11px]">Supabase, SQL, MySQL</div>
            </div>

            <div className="p-4 rounded-lg bg-[#060814] border border-slate-800 space-y-2">
              <span className="text-sky-400 font-bold block">[03] COMPUTING & AI</span>
              <p className="text-slate-300 font-sans">
                Python algorithmic pipelines for satellite imagery classification, disaster prediction, and data structures.
              </p>
              <div className="text-slate-400 text-[11px]">Python, C++, AI/ML</div>
            </div>

            <div className="p-4 rounded-lg bg-[#060814] border border-slate-800 space-y-2">
              <span className="text-emerald-400 font-bold block">[04] TOOLING & DEPLOY</span>
              <p className="text-slate-300 font-sans">
                Git version control, GitHub repo management, VS Code workspace tuning, and Vercel edge deployment.
              </p>
              <div className="text-slate-400 text-[11px]">Git, GitHub, VS Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
