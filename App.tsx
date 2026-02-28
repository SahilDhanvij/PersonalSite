import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Projects, AllProjectsPage } from './components/Projects';
import { Hobbies } from './components/Hobbies';
import { Footer } from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';
import { ThemeProvider } from './ThemeContext';

const AppContent: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showAllProjects, setShowAllProjects] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (showAllProjects) {
    return (
      <div ref={containerRef} className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <InteractiveBackground mousePos={mousePos} />
        <AllProjectsPage onBack={() => { setShowAllProjects(false); }} />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar scrollY={scrollY} />
      <InteractiveBackground mousePos={mousePos} />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills" className="relative">
          <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
          <Skills />
        </section>
        <section id="projects" className="relative">
          <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
          <Projects onShowAll={() => setShowAllProjects(true)} />
        </section>
        <section id="interests" className="relative">
          <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
          <Hobbies />
        </section>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
