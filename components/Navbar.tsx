import React, { useState } from 'react';

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const isScrolled = scrollY > 50;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Interests', href: '#interests' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: isScrolled ? '12px 0' : '20px 0',
          backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px) saturate(1.2)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <a href="#hero" className="font-display text-sm font-700 tracking-wider uppercase transition-colors duration-200" style={{ color: 'var(--accent)' }}>
            Sahil Dhanvij
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link font-mono text-xs tracking-wider transition-colors duration-200"
                style={{ color: 'var(--text-mid)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-mid)'; }}
              >
                {item.label}
              </a>
            ))}

            <a
              href="mailto:sahildhanvij.cse@gmail.com"
              className="font-mono text-xs tracking-wider px-5 py-2.5 rounded-full text-white transition-all duration-300 hover-lift"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
            >
              Say hello
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: 'var(--text)' }}
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h12" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500"
        style={{
          backgroundColor: 'var(--bg)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transform: mobileOpen ? 'scale(1)' : 'scale(0.96)',
        }}
      >
        {navLinks.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className="font-display text-3xl font-700 tracking-wide transition-all duration-300"
            style={{
              color: 'var(--text)',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: mobileOpen ? `${0.1 + idx * 0.07}s` : '0s',
            }}
            onClick={() => setMobileOpen(false)}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="mailto:sahildhanvij.cse@gmail.com"
          className="font-mono text-sm tracking-wider px-6 py-3 rounded-full text-white mt-4"
          style={{
            backgroundColor: 'var(--accent)',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s',
          }}
          onClick={() => setMobileOpen(false)}
        >
          Say hello
        </a>
      </div>
    </>
  );
};
