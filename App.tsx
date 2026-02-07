
import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hobbies } from './components/Hobbies';
import { Footer } from './components/Footer';
import { JourneyPath } from './components/JourneyPath';
import { Snowfall } from './components/Snowfall';
import { InteractiveBackground } from './components/InteractiveBackground';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setDocHeight(document.documentElement.scrollHeight - window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const progress = docHeight > 0 ? scrollY / docHeight : 0;

  return (
    <div ref={containerRef} className="relative bg-[#020617] text-slate-100 min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Noise Texture Overlay for Professional Finish */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <CustomCursor mousePos={mousePos} />
      <Navbar scrollY={scrollY} />
      
      {/* Dynamic Professional Background */}
      <InteractiveBackground mousePos={mousePos} />

      {/* Snow reacts to mouse movement */}
      <Snowfall mouseX={mousePos.x} />

      {/* The Winding Journey Path */}
      <JourneyPath progress={progress} />

      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <Hero scrollY={scrollY} mousePos={mousePos} />
        </section>

        <section id="skills" className="py-40 relative group">
           <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-sm -z-10 transition-colors group-hover:bg-[#020617]/20"></div>
           <Skills />
        </section>

        <section id="projects" className="py-40 relative">
          <div className="absolute inset-0 bg-[#050b18]/60 backdrop-blur-md -z-10"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
          <Projects />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        </section>

        <section id="hobbies" className="py-40 relative">
          <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-lg -z-10"></div>
          <Hobbies />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
