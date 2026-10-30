import React, { useState } from 'react';
import { User, Sparkles, Terminal, Code, Cpu, Database, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'philosophy' | 'system'>('narrative');

  const pillars = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      subtitle: 'Neural networks & geospatial data',
      description:
        'Focusing on applied computer vision, predictive algorithms, and spatial analytics such as satellite imagery disaster prediction.',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      bgColor: 'bg-cyan-500/10',
    },
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      subtitle: 'Component-driven reactive UIs',
      description:
        'Building dynamic, responsive web applications using React.js, modern JavaScript, Tailwind CSS, and cloud databases like Supabase & SQL.',
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Database,
      title: 'Data & Systems Integration',
      subtitle: 'Relational schemas & IoT prototypes',
      description:
        'Experienced in designing normalized database schemas, building real-time dashboards, and bridging physical sensors with Arduino microcontrollers.',
      color: 'text-sky-400',
      borderColor: 'border-sky-500/30',
      bgColor: 'bg-sky-500/10',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(0,245,255,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-purple-400" />
            <span>01 // PROFILE OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Mounika Chowdhary K
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Engineering the intersection of machine intelligence, intuitive user interfaces, and robust software systems.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="gradient-border-card p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <div className="font-mono text-xs text-slate-400 mb-3 tracking-wide">
                  {pillar.subtitle}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Terminal / Bio Container */}
        <div className="rounded-2xl bg-[#0b0f1f]/90 border border-purple-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden">
          {/* Terminal Window Header */}
          <div className="px-6 py-4 bg-[#080b18] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-slate-400">
                mounika@reva-univ: ~/about-me/spec.sh
              </span>
            </div>

            {/* Tab switchers */}
            <div className="flex items-center bg-[#060814] p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('narrative')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activeTab === 'narrative'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Story & Vision
              </button>
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activeTab === 'philosophy'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Philosophy
              </button>
              <button
                onClick={() => setActiveTab('system')}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activeTab === 'system'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Highlights
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8">
            {activeTab === 'narrative' && (
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-cyan-400 text-sm mt-1">&gt;</span>
                  <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                    {PERSONAL_INFO.about.map((paragraph, index) => (
                      <p key={index} className="text-slate-200">
                        {paragraph}
                      </p>
                    ))}
                    <p className="text-slate-300">
                      Whether developing full-stack donor platforms, satellite-driven disaster prediction algorithms, or low-latency Arduino safety prototypes, I focus on writing clean, scalable, and impact-driven code that solves practical real-world problems.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#060814]/60 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Institution</span>
                    <span className="text-white font-semibold">REVA University</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#060814]/60 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Specialization</span>
                    <span className="text-cyan-300 font-semibold">CSE (AI & ML)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#060814]/60 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Timeline</span>
                    <span className="text-purple-300 font-semibold">2025 - 2029</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#060814]/60 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Location</span>
                    <span className="text-emerald-300 font-semibold">Bangalore, IN</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-purple-400 text-sm mt-1">&gt;</span>
                  <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong className="text-white">1. User-Centric Engineering:</strong> Software should not just work technically; it must deliver seamless intuitive feedback and fluid micro-interactions.
                    </p>
                    <p>
                      <strong className="text-white">2. First-Principles Problem Solving:</strong> Every complex project—from multi-table relational databases to convolutional networks—is broken down into modular, testable components.
                    </p>
                    <p>
                      <strong className="text-white">3. Continuous Curiosity:</strong> Staying ahead by actively participating in competitive hackathons (SIH 2026 Qualified), experimenting with modern frameworks, and refining algorithms daily.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#060814]/70 border border-purple-500/20">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Smart India Hackathon 2026 Qualified</h4>
                    <p className="text-slate-400 text-xs mt-1">Qualified in Smart India Hackathon 2026, delivering rapid technical software solutions for civic and technical problems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#060814]/70 border border-purple-500/20">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Diverse Portfolio of 8+ Projects</h4>
                    <p className="text-slate-400 text-xs mt-1">Demonstrated breadth across Web (React, Supabase), AI/ML (Satellite imagery), and Hardware (Arduino Uno).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#060814]/70 border border-purple-500/20">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">4 Academic & Professional Certifications</h4>
                    <p className="text-slate-400 text-xs mt-1">NPTEL algorithms in Python, IBM SkillsBuild Python, Wadhwani Entrepreneurship, and SIH.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#060814]/70 border border-purple-500/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Bangalore Tech Hub Presence</h4>
                    <p className="text-slate-400 text-xs mt-1">Surrounded by India's premier tech ecosystem, enabling active participation in developer summits and hackathons.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
