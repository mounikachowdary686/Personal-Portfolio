import React, { useState } from 'react';
import { X, FolderTree, Image, Terminal, Rocket, Copy, Check, ExternalLink } from 'lucide-react';

interface ProjectGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectGuideModal: React.FC<ProjectGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'structure' | 'profile' | 'vscode' | 'deploy'>('structure');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const folderStructureTree = `mounika-portfolio/
├── public/
│   ├── profile.png            <-- Place your circular profile picture here!
│   └── avatar-placeholder.svg <-- Automatic high-tech fallback avatar
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         <-- Responsive fixed header & mobile menu
│   │   ├── Hero.tsx           <-- Glowing floating profile, typing animation, CTAs
│   │   ├── About.tsx          <-- 3 core pillars & interactive terminal bio
│   │   ├── Education.tsx      <-- REVA Univ B.Tech AI & ML (2025-2029) & 4-yr roadmap
│   │   ├── Skills.tsx         <-- Categorized skills, progress meters & architecture
│   │   ├── Projects.tsx       <-- 8 project cards with filters & live links
│   │   ├── ProjectModal.tsx   <-- Deep architecture & technical breakdown modal
│   │   ├── Certifications.tsx <-- SIH 2026 Qualified, NPTEL, IBM & Wadhwani
│   │   ├── Contact.tsx        <-- Terminal contact form & 1-click email copy
│   │   ├── Footer.tsx         <-- System telemetry & copyright
│   │   └── ProjectGuideModal.tsx
│   ├── data/
│   │   └── portfolioData.ts   <-- All personal details, projects, skills & certs
│   ├── types.ts               <-- TypeScript interfaces
│   ├── App.tsx                <-- Main layout integrating all 9 sections
│   ├── index.css              <-- Tailwind CSS v4, glassmorphism & cyber animations
│   └── main.tsx               <-- React 19 entry point
├── index.html                 <-- Plus Jakarta Sans & JetBrains Mono fonts + SEO
├── package.json               <-- Standard dependencies (React, Vite, Lucide, Motion)
├── tsconfig.json              <-- TypeScript config
└── vite.config.ts             <-- Vite build setup`;

  const vsCodeCommands = `# 1. Clone or extract the project folder
git clone https://github.com/mounikachowdaryk012/portfolio.git
cd portfolio

# 2. Open in VS Code
code .

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev`;

  const vercelCommands = `# Deploying to Vercel via CLI
npm install -g vercel
vercel

# Or via GitHub integration:
# 1. Push your repository to GitHub
# 2. Go to vercel.com/new -> Import your repository
# 3. Framework Preset: Vite
# 4. Click "Deploy"`;

  const gitHubPagesCommands = `# Deploying to GitHub Pages
# 1. Install gh-pages
npm install -D gh-pages

# 2. Add base in vite.config.ts:
# base: '/<repository-name>/'

# 3. Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# 4. Run deploy:
npm run deploy`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#060814]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0b0f1f] border border-cyan-400/40 shadow-[0_24px_64px_rgba(0,0,0,0.9),0_0_40px_rgba(0,245,255,0.25)] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#060814] border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span className="font-mono text-xs text-cyan-300 font-bold uppercase tracking-wider">
              DEVELOPER DOCUMENTATION & SETUP
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            VS Code & Production Deployment Guide
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Standard React.js + Vite project structure with zero proprietary locking. Ready to run locally or ship to cloud hosting.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-slate-800">
          <button
            onClick={() => setActiveTab('structure')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
              activeTab === 'structure'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                : 'bg-[#060814] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>1. Folder Structure</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
              activeTab === 'profile'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold'
                : 'bg-[#060814] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>2. Where to Place profile.png</span>
          </button>

          <button
            onClick={() => setActiveTab('vscode')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
              activeTab === 'vscode'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold'
                : 'bg-[#060814] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>3. How to Run in VS Code</span>
          </button>

          <button
            onClick={() => setActiveTab('deploy')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
              activeTab === 'deploy'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                : 'bg-[#060814] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>4. Deploy to Vercel / GitHub</span>
          </button>
        </div>

        {/* Tab 1: Folder Structure */}
        {activeTab === 'structure' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-300">
                Organized, modular React + TypeScript architecture:
              </span>
              <button
                onClick={() => copyToClipboard(folderStructureTree, 'tree')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#060814] border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
              >
                {copiedCode === 'tree' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy Tree</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-[#060814] border border-slate-800 text-cyan-300/90 font-mono text-xs overflow-x-auto leading-relaxed">
              {folderStructureTree}
            </pre>
          </div>
        )}

        {/* Tab 2: Where to Place profile.png */}
        {activeTab === 'profile' && (
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-[#060814] border border-purple-500/30 space-y-3">
              <h4 className="font-bold text-white text-base flex items-center gap-2">
                <Image className="w-4 h-4 text-purple-400" />
                <span>Exact Location for Your Photo:</span>
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Save your headshot or portrait as <code className="text-cyan-300 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">profile.png</code> and drop it directly into the root <code className="text-purple-300 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">public/</code> directory:
              </p>
              <div className="p-3 rounded-lg bg-[#0a0d1c] border border-slate-800 font-mono text-xs text-emerald-300">
                /public/profile.png
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#060814] border border-slate-800 space-y-2">
                <span className="font-mono text-cyan-400 font-bold block">RECOMMENDED SPECS:</span>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>Square aspect ratio (1:1), e.g., 800x800px or 1000x1000px</li>
                  <li>Clean background or dark/cyber backdrop</li>
                  <li>Clear face portrait centered within the crop</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#060814] border border-slate-800 space-y-2">
                <span className="font-mono text-purple-400 font-bold block">INTELLIGENT FALLBACK:</span>
                <p className="text-slate-300">
                  If <code className="text-cyan-300 font-mono">profile.png</code> is not yet added, the hero automatically displays the custom SVG monogram avatar (<code className="text-purple-300 font-mono">avatar-placeholder.svg</code>) with your initials and cyber circuits without throwing 404 errors!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Running in VS Code */}
        {activeTab === 'vscode' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-300">
                Run locally with standard Node.js & npm:
              </span>
              <button
                onClick={() => copyToClipboard(vsCodeCommands, 'vscode')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#060814] border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
              >
                {copiedCode === 'vscode' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy Commands</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-[#060814] border border-slate-800 text-sky-300 font-mono text-xs overflow-x-auto leading-relaxed">
              {vsCodeCommands}
            </pre>

            <div className="p-4 rounded-xl bg-[#060814] border border-slate-800 text-xs text-slate-300 space-y-2">
              <span className="font-mono text-cyan-400 font-bold block">REQUIREMENTS:</span>
              <p>
                Node.js version 18.x or 20.x installed. Once <code className="text-cyan-300 font-mono">npm run dev</code> starts, open <code className="text-purple-300 font-mono">http://localhost:3000</code> in your browser!
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Deploying to Vercel or GitHub Pages */}
        {activeTab === 'deploy' && (
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase">
                  Option A: Deploy to Vercel (Recommended)
                </span>
                <button
                  onClick={() => copyToClipboard(vercelCommands, 'vercel')}
                  className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#060814] border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
                >
                  {copiedCode === 'vercel' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy</span>
                </button>
              </div>
              <pre className="p-3.5 rounded-xl bg-[#060814] border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto">
                {vercelCommands}
              </pre>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-purple-400 font-bold uppercase">
                  Option B: Deploy to GitHub Pages
                </span>
                <button
                  onClick={() => copyToClipboard(gitHubPagesCommands, 'ghpages')}
                  className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#060814] border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
                >
                  {copiedCode === 'ghpages' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy</span>
                </button>
              </div>
              <pre className="p-3.5 rounded-xl bg-[#060814] border border-slate-800 text-purple-300 font-mono text-xs overflow-x-auto">
                {gitHubPagesCommands}
              </pre>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="font-mono text-xs text-slate-400">
            Mounika Chowdhary K Portfolio // Open Source Ready
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-mono text-xs hover:bg-cyan-500/20 transition-colors"
          >
            Close Guide [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
