import React from 'react';

export const Footer: React.FC = () => {
  const socials = [
    { label: 'GitHub', href: 'https://github.com/SahilDhanvij', handle: '@SahilDhanvij' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-dhanvij/', handle: 'sahil-dhanvij' },
    { label: 'Twitter / X', href: 'https://x.com/sahild_07', handle: '@sahild_07' },
  ];

  return (
    <footer className="relative z-10 py-20" style={{ backgroundColor: 'var(--bg-footer)' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="h-px mb-16" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-soft))' }} />

        {/* CTA */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl md:text-5xl mb-6" style={{ color: 'var(--text)' }}>
            Let's build something <span className="italic" style={{ color: 'var(--accent)' }}>remarkable</span>
          </h3>
          <p className="text-base mb-6 max-w-lg" style={{ color: 'var(--text-mid)' }}>
            Open to backend, DevOps, and ML infra roles. Always happy to chat about distributed systems and infrastructure.
          </p>
          <a
            href="mailto:sahildhanvij.cse@gmail.com"
            className="inline-flex items-center gap-3 font-mono text-sm tracking-wider transition-all duration-300 pb-2"
            style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent-border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = 'var(--accent)'; e.currentTarget.style.gap = '16px'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'var(--accent-border)'; e.currentTarget.style.gap = '12px'; }}
          >
            sahildhanvij.cse@gmail.com
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Socials */}
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-5" style={{ color: 'var(--text-light)' }}>Connect</span>
            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b transition-colors duration-200"
                  style={{ borderColor: 'var(--border-light)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-border)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                >
                  <span className="text-sm font-medium transition-colors duration-200" style={{ color: 'var(--text-mid)' }}
                    ref={(el) => {
                      if (!el) return;
                      el.parentElement!.onmouseenter = () => { el.style.color = 'var(--accent)'; };
                      el.parentElement!.onmouseleave = () => { el.style.color = 'var(--text-mid)'; };
                    }}
                  >{s.label}</span>
                  <span className="font-mono text-[11px]" style={{ color: 'var(--text-light)' }}>{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-5" style={{ color: 'var(--text-light)' }}>Status</span>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent2)' }} />
              <span className="text-sm" style={{ color: 'var(--text-mid)' }}>Open to opportunities</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm" style={{ color: 'var(--text-light)' }}>Based in India</span>
              <span className="text-sm" style={{ color: 'var(--text-light)' }}>Full stack → Backend & ML Infra</span>
            </div>
          </div>

          {/* Quick links / interests */}
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-5" style={{ color: 'var(--text-light)' }}>Interested in</span>
            <div className="flex flex-wrap gap-2">
              {['Backend Systems', 'DevOps', 'ML Infra', 'Distributed Systems', 'Kubernetes', 'Go'].map((tag) => (
                <span key={tag} className="font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--accent-ghost)', color: 'var(--text-mid)', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8" style={{ borderTop: '1px solid var(--border-light)' }}>
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-light)' }}>
            © {new Date().getFullYear()} — Sahil Dhanvij
          </span>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--text-light)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-light)'; }}
              >{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
