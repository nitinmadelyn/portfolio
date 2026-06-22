import React, { useState, useEffect, useRef } from 'react';
import { FiCpu, FiShield, FiActivity, FiArrowUpRight } from 'react-icons/fi';
import { SiGithub, SiUpwork } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';

const socialLinks = [
  {
    icon: <SiGithub aria-hidden="true" role="presentation" focusable="false" />,
    label: 'GITHUB',
    url: 'https://github.com/nitinmadelyn',
    color: 'hover:text-white',
  },
  {
    icon: <FiLinkedin aria-hidden="true" role="presentation" focusable="false" />,
    label: 'LINKEDIN',
    url: 'https://www.linkedin.com/in/nitinmuchhadiya',
    color: 'hover:text-blue-500',
  },
  {
    icon: <SiUpwork aria-hidden="true" role="presentation" focusable="false" />,
    label: 'UPWORK',
    url: 'https://www.upwork.com/freelancers/~019197dea2650064ed?viewMode=1',
    color: 'hover:text-green-400',
  },
];

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Contact', href: '#contactme' },
];

const Footer = () => {
  const [systemTime, setSystemTime] = useState('');
  const footerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    // CSS-variable mouse tracking — zero layout reads, no framer spring physics
    const handleMouseMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (footerRef.current) {
          footerRef.current.style.setProperty('--gx', `${e.clientX}px`);
          footerRef.current.style.setProperty('--gy', `${e.clientY}px`);
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#050505] overflow-hidden pt-20 pb-10 font-sans selection:bg-red-500/30"
      style={{ '--gx': '50%', '--gy': '50%' }}
    >
      {/* Radial glow — CSS variable driven, no layout reads */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle at var(--gx) var(--gy), rgba(6, 182, 212, 0.15) 0%, transparent 40%)',
        }}
      />

      {/* Digital Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Pulsing Light Blobs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse delay-700 pointer-events-none" />

      {/* Top Divider — CSS animation, no framer */}
      <div className="relative w-full h-[1px] bg-white/5 mb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-beam" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                <FiCpu className="text-blue-500 text-xl group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">
                NITIN<span className="text-blue-600"> M.</span>
              </h3>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-light">
              Designing the future of digital architecture with precision engineering and creative intelligence.
            </p>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">System Status: Online</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <p className="text-[11px] font-mono font-bold text-blue-500/80 tracking-[0.4em] uppercase">Control_Center</p>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center text-xs text-gray-500 hover:text-white transition-all tracking-widest"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-blue-500 mr-0 group-hover:mr-3 transition-all duration-300" aria-hidden="true" />
                    {item.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <p className="text-[11px] font-mono font-bold text-blue-500/80 tracking-[0.4em] uppercase">Neural_Network</p>
            <div className="flex flex-wrap gap-2">
              {['Vite', 'React', 'GSAP', 'Framer', 'Three.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-gray-500 tracking-widest hover:border-blue-500/30 hover:text-blue-600 transition-colors cursor-default"
                >
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-[9px] text-gray-600 tracking-widest uppercase">
                <FiShield className="text-blue-500/40" aria-hidden="true" />
                <span>Encrypted Transaction</span>
              </div>
              <div className="flex items-center space-x-2 text-[9px] text-gray-600 tracking-widest uppercase">
                <FiActivity className="text-blue-500/40" aria-hidden="true" />
                <span>Uptime: 99.98%</span>
              </div>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="space-y-6">
            <p className="text-[11px] font-mono font-bold text-blue-500/80 tracking-[0.4em] uppercase">Broadcast_Link</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} profile`}
                  className={`relative w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-xl text-gray-400 ${social.color} transition-all duration-200 group hover:-translate-y-[5px] hover:scale-110`}
                >
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 blur-xl transition-all" aria-hidden="true" />
                  <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/40 rounded-xl opacity-0 group-hover:opacity-100 transition-all scale-110 group-hover:scale-100" aria-hidden="true" />
                  <span aria-hidden="true">{social.icon}</span>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest font-bold" aria-hidden="true">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
            <a
              href="#contactme"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black text-[10px] uppercase tracking-[0.5em] rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.2)] flex items-center justify-center gap-2 group overflow-hidden relative hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000" aria-hidden="true" />
              <span>Initiate Transmission</span>
              <FiArrowUpRight size={14} className="flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-6">
            <div className="text-[10px] text-gray-600 tracking-[0.3em] font-mono flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse" aria-hidden="true" />
              AVAILABLE FOR FREELANCE
            </div>
            <div className="hidden md:block w-[1px] h-3 bg-white/10" aria-hidden="true" />
            <div className="text-[10px] text-gray-600 tracking-[0.3em] font-mono uppercase">
              140+ Projects Delivered // Remote Worldwide
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="text-[10px] text-gray-500 tracking-[0.4em] font-mono uppercase mb-1">
              Local_Time: {systemTime}
            </div>
            <p className="text-[9px] text-gray-700 tracking-[0.2em] font-mono uppercase">
              &copy; NITIN MUCHHADIYA. ALL NEURAL LINKS RESERVED.
            </p>
          </div>
        </div>
      </div>

      {/* Scanline Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
        }}
      />
    </footer>
  );
};

export default Footer;
