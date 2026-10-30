import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle, ChevronRight } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const roadmapSteps = [
    {
      year: 'Year 1 (2025 - 2026)',
      title: 'Foundational Computing & Competitive Sprints',
      focus: 'C/C++, Python DSA, Git workflows, SIH 2026 Qualification, and Basic IoT prototypes.',
      status: 'Current Milestone',
      active: true,
    },
    {
      year: 'Year 2 (2026)',
      title: 'Full-Stack Web & Applied Intelligence',
      focus: 'React.js, Supabase, relational database modeling, Satellite Imagery Analysis (SatQuery AI).',
      status: 'In Progress',
      active: true,
    },
    {
      year: 'Year 3 (2027)',
      title: 'Deep Learning & Advanced Architectures',
      focus: 'Neural networks, computer vision, natural language processing, scalable backend microservices.',
      status: 'Upcoming',
      active: false,
    },
    {
      year: 'Year 4 (2028 - 2029)',
      title: 'Capstone Innovation & Industry Impact',
      focus: 'Production AI systems, research publications, enterprise hackathons, and software engineering leadership.',
      status: 'Upcoming',
      active: false,
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 // ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education &{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Cultivating rigorous engineering fundamentals and hands-on specialization in AI & Machine Learning at REVA University.
          </p>
        </div>

        {/* Primary Institution Card */}
        <div className="gradient-border-card p-6 sm:p-10 rounded-2xl mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Institution Header & Degree */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-purple-500/20 border border-purple-400/40 text-purple-300 font-mono text-xs font-semibold">
                  B.Tech Engineering
                </span>
                <span className="px-3 py-1 rounded-md bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Specialization: AI & ML
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {EDUCATION_DATA.institution}
              </h3>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{EDUCATION_DATA.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{EDUCATION_DATA.location}</span>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed pt-2">
                {EDUCATION_DATA.description}
              </p>

              {/* Highlights */}
              <div className="pt-4 space-y-2.5">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  Key Academic Highlights:
                </span>
                {EDUCATION_DATA.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework & Competency Grid */}
            <div className="lg:col-span-5 bg-[#060814]/75 rounded-xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-mono text-xs text-cyan-300 font-semibold flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  CORE CURRICULUM
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  AI & ML Track
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#0b0f1f] border border-slate-700/80 hover:border-cyan-400/50 hover:text-cyan-300 text-slate-300 font-mono text-xs transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-purple-950/40 to-cyan-950/30 border border-purple-500/20 flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Smart India Hackathon 2026 Qualified</div>
                  <div className="text-[11px] text-slate-400">
                    Proudly representing REVA University on the national competitive engineering stage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Year Academic Progression Roadmap */}
        <div className="space-y-4">
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>4-Year Academic Progression Matrix (2025 - 2029)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border transition-all ${
                  step.active
                    ? 'bg-[#0b0f1f]/90 border-cyan-400/40 shadow-[0_0_20px_rgba(0,245,255,0.1)]'
                    : 'bg-[#0b0f1f]/40 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-cyan-300">{step.year}</span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                      step.active
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {step.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{step.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
