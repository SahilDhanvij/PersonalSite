import React, { useEffect, useState } from 'react';
import { ScrollReveal, WordReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      {/* Subtitle at top */}
      <div
        className="absolute top-28 md:top-32 left-6 md:left-12 lg:left-24"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
            Full Stack &middot; Backend &amp; ML Infra
          </span>
        </div>
      </div>

      {/* Main heading */}
      <div className="relative z-10 max-w-5xl">
        <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-800 leading-[0.95] tracking-tight mb-12">
          <span
            className="block"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
          >
            Learning to build the
          </span>
          <span
            className="block font-serif italic"
            style={{
              color: 'var(--accent)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.30s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.30s',
            }}
          >
            infrastructure
          </span>
          <span
            className="block"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
            }}
          >
            behind intelligence
          </span>
        </h1>

        <div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.9s ease 0.7s, transform 0.9s ease 0.7s',
          }}
        >
          <p className="max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-mid)' }}>
            Full stack developer with ~2 years of experience, now diving deep into backend engineering, DevOps, and ML infrastructure. Building the bridge from product to platform.
          </p>
          <div className="flex items-center gap-5 flex-shrink-0">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono text-sm tracking-wide text-white hover-lift"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
            >
              Selected work
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#skills"
              className="font-mono text-sm transition-colors duration-300 relative group"
              style={{ color: 'var(--accent2)' }}
            >
              Stack &amp; experience
              <span className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ backgroundColor: 'var(--accent2)' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-6 md:right-12 lg:right-24 flex flex-col items-center gap-3"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: 'var(--text-light)' }}>Scroll</span>
        <div className="w-px h-10 relative overflow-hidden" style={{ backgroundColor: 'var(--border)' }}>
          <div className="absolute inset-x-0 h-4 scroll-pulse" style={{ backgroundColor: 'var(--accent)' }} />
        </div>
      </div>
    </div>
  );
};
