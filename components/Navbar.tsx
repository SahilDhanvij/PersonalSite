
import React from 'react';

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const isScrolled = scrollY > 50;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/70 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-serif font-bold tracking-tighter hover:text-cyan-400 transition-colors">
          SUMMIT<span className="text-cyan-400">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {['Skills', 'Projects', 'Hobbies'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white hover:underline decoration-cyan-400 decoration-2 underline-offset-8 transition-all"
            >
              {item}
            </a>
          ))}
          <a 
            href="mailto:hello@example.com" 
            className="px-5 py-2 bg-white text-slate-950 rounded-full hover:bg-cyan-400 hover:scale-105 transition-all font-bold"
          >
            Get in Touch
          </a>
        </div>
        
        {/* Mobile menu icon (placeholder) */}
        <div className="md:hidden">
            <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};
