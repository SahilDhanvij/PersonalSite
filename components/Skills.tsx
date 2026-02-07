import React from 'react';
import { Skill, TimelineEntry } from '../types';

const SKILLS: Skill[] = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'TypeScript', icon: 'TS', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Backend' },
  { name: 'GraphQL', icon: '◈', category: 'Backend' },
  { name: 'Docker', icon: '🐋', category: 'Tools' },
  { name: 'Three.js', icon: '🌐', category: 'Tools' },
];

const TIMELINE: TimelineEntry[] = [
  {
    year: '2023 - Present',
    role: 'Senior Digital Architect',
    company: 'Summit Labs',
    description: 'Leading the development of high-performance data visualization tools for environmental researchers.'
  },
  {
    year: '2021 - 2023',
    role: 'Full Stack Engineer',
    company: 'Peak Software',
    description: 'Engineered scalable cloud solutions and optimized frontend performance by 40%.'
  },
  {
    year: '2019 - 2021',
    role: 'Frontend Developer',
    company: 'Ridge Dynamics',
    description: 'Built immersive user interfaces using React and refined the company design system.'
  }
];

export const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center text-center mb-24">
        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">Preparation & Ascent</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold">Capabilities & History</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-8"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Simplified Skills Design */}
        <div className="space-y-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Technical Gear</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name}
                className="group relative p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md flex flex-col items-center text-center"
              >
                <div className="mb-3 text-3xl group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.name}</h4>
                <span className="text-[9px] text-slate-500 uppercase font-black tracking-tighter mt-1">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="space-y-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">The Ascent</h3>
          </div>

          <div className="relative border-l border-white/10 ml-4 space-y-12 pb-8">
            {TIMELINE.map((entry, idx) => (
              <div key={idx} className="relative pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                
                <div className="space-y-2">
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">{entry.year}</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{entry.role}</h4>
                  <div className="text-sm font-medium text-slate-400">{entry.company}</div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};