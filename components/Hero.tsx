import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="absolute top-32 left-6 md:left-12 lg:left-24">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Full Stack &middot; Transitioning to Backend &amp; ML Infra</span>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1] tracking-tight mb-10" style={{ color: 'var(--text)' }}>
          Learning to build the <br />
          <span className="italic" style={{ color: 'var(--accent)' }}>infrastructure</span> <br />
          behind intelligence
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="max-w-lg text-lg leading-relaxed" style={{ color: 'var(--text-mid)' }}>
            Full stack developer with ~2 years of experience, now diving deep into backend engineering, DevOps, and ML infrastructure. Building the bridge from product to platform.
          </p>
          <div className="flex items-center gap-6">
            <a href="#projects" className="group inline-flex items-center gap-3 px-6 py-3 rounded-full font-mono text-sm tracking-wide transition-all duration-300 hover:gap-5 text-white" style={{ backgroundColor: 'var(--accent)' }}>
              Selected work
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#skills" className="font-mono text-sm underline decoration-dotted underline-offset-4 transition-colors hover:decoration-solid" style={{ color: 'var(--accent2)' }}>
              Stack &amp; experience
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-light)' }}>Scroll</span>
        <div className="w-px h-12 relative overflow-hidden">
          <div className="absolute inset-x-0 h-full animate-pulse" style={{ background: 'linear-gradient(180deg, var(--accent), transparent)' }} />
        </div>
      </div>
    </div>
  );
};
