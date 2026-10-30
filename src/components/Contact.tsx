import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, Github, Linkedin, Terminal, Sparkles, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }

    setStatus('sending');
    // Simulated transmission telemetry
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,245,255,0.08)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // TRANSMISSION TERMINAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Initiate{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Contact & Collaboration
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Have a hackathon project, internship opportunity, or technical inquiry? Dispatch a direct transmission below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Coordinates & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="gradient-border-card p-6 sm:p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
                  DIRECT CHANNELS & TELEMETRY
                </span>
              </div>

              {/* Direct Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-[#060814] border border-cyan-500/30 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white font-medium hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#0b0f1f] border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#060814] border border-purple-500/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Geographic Base</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="text-[11px] text-purple-300 block">
                    REVA University Campus, Yelahanka
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  Network Nodes:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-[#060814] border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 text-slate-300 flex items-center gap-2.5 transition-all text-xs font-mono"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-[#060814] border border-slate-800 hover:border-purple-400/50 hover:text-purple-300 text-slate-300 flex items-center gap-2.5 transition-all text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn Node</span>
                  </a>
                </div>
              </div>

              {/* Hackathon Availability Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-purple-950/30 border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Currently open to collaborating on competitive AI hackathons, research internships, and open-source contributions.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b0f1f]/90 border border-purple-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block animate-pulse" />
                  <span className="font-mono text-xs text-white font-semibold">
                    DISPATCH_MESSAGE.EXE
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  PROTOCOL: SECURE SSL
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-slate-400 block mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#060814] border border-slate-700/80 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.25)] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-slate-400 block mb-1.5 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#060814] border border-slate-700/80 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.25)] text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-400 block mb-1.5 uppercase">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hackathon Team Collaboration / Project Inquiry"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#060814] border border-slate-700/80 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.25)] text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-400 block mb-1.5 uppercase">
                    Message Packet *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#060814] border border-slate-700/80 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.25)] text-sm transition-all resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>STATUS 200: TRANSMISSION DELIVERED TO MOUNIKA CHOWDHARY K</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 text-[#060814] shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#060814] border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Packet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
