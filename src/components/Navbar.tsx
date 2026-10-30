import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060814]/85 backdrop-blur-md border-b border-purple-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Profile Photo Icon next to Name */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_15px_rgba(0,245,255,0.35)] shrink-0 group-hover:border-cyan-300 transition-colors">
            <img
              src="/profile.png"
              alt="Mounika Chowdhary K"
              onError={(e) => {
                e.currentTarget.src = '/public/assets/aistudio/WhatsApp_Image_2026-10-22_at_3.30.13_PM_2911561f.jpeg';
              }}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[11px] text-cyan-400/80 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
              B.Tech CSE (AI & ML)
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-all duration-200 relative ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-400/10 shadow-[0_0_12px_rgba(0,245,255,0.15)] border border-cyan-400/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Guide Trigger */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-purple-500/10 border border-purple-400/40 text-purple-300 hover:text-white hover:bg-purple-500/20 hover:border-purple-300 transition-all text-xs font-mono tracking-wide"
            title="Setup & Deployment Guide"
          >
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>Setup & Deploy Guide</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="relative px-4 py-2 rounded-md font-bold text-xs tracking-wide uppercase transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-600 text-[#060814] shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] hover:scale-[1.02] flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenGuide}
            className="p-2 rounded-md bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-mono"
            aria-label="Setup Guide"
          >
            <BookOpen className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0b0f1f] border border-cyan-500/30 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060814]/95 backdrop-blur-xl border-b border-purple-500/30 px-6 py-6 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-3">
            <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                NAVIGATION SYSTEM
              </span>
              <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
                SIH 2026 Qualified
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`py-2 text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-cyan-300 font-semibold pl-2 border-l-2 border-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-slate-500">→</span>
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>VS Code & Deployment Guide</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-[#060814] font-bold text-center text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(0,245,255,0.4)]"
              >
                Initiate Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
