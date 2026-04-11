import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Projects, AllProjectsPage } from './components/Projects';
import { Hobbies } from './components/Hobbies';
import { Footer } from './components/Footer';
import { ParticleCanvas } from './components/ParticleCanvas';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showAllProjects) {
    return (
      <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <ParticleCanvas />
        <AllProjectsPage onBack={() => setShowAllProjects(false)} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <ParticleCanvas />
      <Navbar scrollY={scrollY} />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills" className="relative">
          <div className="section-divider mx-[10%]" />
          <Skills />
        </section>
        <section id="projects" className="relative">
          <div className="section-divider mx-[10%]" />
          <Projects onShowAll={() => setShowAllProjects(true)} />
        </section>
        <section id="interests" className="relative">
          <div className="section-divider mx-[10%]" />
          <Hobbies />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
