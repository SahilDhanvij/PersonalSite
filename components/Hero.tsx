import React from 'react';

interface HeroProps {
  scrollY: number;
  mousePos: { x: number; y: number };
}

export const Hero: React.FC<HeroProps> = ({ scrollY, mousePos }) => {
  const contentOffset = scrollY * 0.3;
  
  // Parallax factors
  const mtnX = (mousePos.x / window.innerWidth - 0.5) * 20;
  const mtnY = (mousePos.y / window.innerHeight - 0.5) * 10;

  return (
    <div className="relative h-screen w-full flex items-center justify-start pointer-events-none container mx-auto px-6 md:px-12 lg:px-24">
      <div 
        className="relative z-30 text-left transition-transform duration-75 pointer-events-auto max-w-4xl"
        style={{ transform: `translate3d(${mtnX * -0.5}px, ${-contentOffset + (mtnY * -0.5)}px, 0)` }}
      >
        <div className="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-md mb-6">
            <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs">
                Basecamp: Digital Architect
            </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-[1.1] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          Elevated <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-slate-300 font-medium leading-relaxed drop-shadow-xl bg-[#020617]/40 backdrop-blur-sm rounded-xl p-6 border border-white/5">
          Engineering scalable digital experiences with the precision of a mountaineer. <br />
          High-performance code, honed in the rarefied air of complex problem solving.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-start gap-6">
            <a href="#projects" className="group w-full sm:w-auto px-10 py-4 bg-cyan-500 text-slate-950 rounded-full text-center font-bold hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(34,211,238,0.3)] flex items-center justify-center">
                View Milestones
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
            <a href="#skills" className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full text-center font-bold hover:bg-white/10 transition-all">
                Technical Gear
            </a>
        </div>
      </div>
    </div>
  );
};