import React from 'react';

export const Footer: React.FC = () => {
  const socials = [
    { label: 'GitHub', href: 'https://github.com/SahilDhanvij', handle: '@SahilDhanvij', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
    )},
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-dhanvij/', handle: 'sahil-dhanvij', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    )},
    { label: 'Twitter', href: 'https://x.com/sahild_07', handle: '@sahild_07', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    )},
  ];

  return (
    <footer className="relative z-10" style={{ backgroundColor: 'var(--bg-footer)' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Big CTA section */}
        <div className="py-24 md:py-32">
          <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 items-end">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase block mb-6" style={{ color: 'var(--accent)' }}>Get in touch</span>
              <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-6" style={{ color: 'var(--text)' }}>
                Let's build something <br />
                <span className="italic" style={{ color: 'var(--accent)' }}>remarkable</span> together
              </h3>
              <p className="text-base leading-relaxed max-w-md" style={{ color: 'var(--text-mid)' }}>
                Open to backend, DevOps, and ML infra roles. Always happy to chat about distributed systems and infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <a
                href="mailto:sahildhanvij.cse@gmail.com"
                className="group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--accent-ghost)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }}
              >
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase block mb-1" style={{ color: 'var(--text-light)' }}>Email</span>
                  <span className="text-base font-medium" style={{ color: 'var(--text)' }}>sahildhanvij.cse@gmail.com</span>
                </div>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

              <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent2)' }} />
                <span className="text-sm" style={{ color: 'var(--text-mid)' }}>Currently based in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'linear-gradient(90deg, var(--accent-border), var(--border), transparent)' }} />

        {/* Bottom section */}
        <div className="py-10 flex flex-col items-center gap-4">
          <span className="font-mono text-sm tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Sahil Dhanvij</span>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300"
                style={{ borderColor: 'var(--border)', color: 'var(--text-light)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--accent-ghost)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-light)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="h-px" style={{ backgroundColor: 'var(--border-light)' }} />
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-light)' }}>
            © {new Date().getFullYear()} Sahil Dhanvij
          </span>
          <span className="font-mono text-[10px] tracking-wider" style={{ color: 'var(--text-light)' }}>
            Full Stack → Backend & ML Infra
          </span>
        </div>
      </div>
    </footer>
  );
};
