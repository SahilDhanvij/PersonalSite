import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    title: "Summit Path Mapper",
    description: "An interactive 3D terrain mapping tool using WebGL to visualize trekking routes in real-time.",
    tags: ["Three.js", "React", "WebGL"],
    link: "#",
    image: "MAP"
  },
  {
    title: "Peak Performance Tracker",
    description: "Real-time biometric dashboard for high-altitude athletes to monitor vitals and progress.",
    tags: ["TypeScript", "D3.js", "Node.js"],
    link: "#",
    image: "STATS"
  },
  {
    title: "Glacier Vision",
    description: "Satellite imagery analysis tool for monitoring ice melt patterns across the digital alps.",
    tags: ["React", "Python", "SVG"],
    link: "#",
    image: "SATELLITE"
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="flex flex-col items-center text-center mb-24">
        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">Milestones</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Reached Summits</h2>
        <p className="text-slate-400 mt-4 max-w-lg">Camps and rest points along the technical trail.</p>
      </div>

      <div className="space-y-32">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 group`}
          >
            {/* Aesthetic Schematic Graphic instead of random images */}
            <div className="w-full lg:w-1/2 aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/5 relative flex items-center justify-center group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Abstract Project Placeholder */}
                <div className="text-cyan-500/20 text-9xl font-black select-none group-hover:text-cyan-400 transition-colors">
                    {project.image}
                </div>
                
                {/* Schematic lines */}
                <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-white/10 group-hover:border-cyan-500/30 transition-colors"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-white/10 group-hover:border-cyan-500/30 transition-colors"></div>
                
                {/* Floating Tags */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md text-cyan-400 text-[9px] font-bold uppercase rounded border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <div className="text-cyan-500 font-mono text-sm tracking-tighter">0{idx + 1}. MARKER</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                    {project.description}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                    <a 
                        href={project.link} 
                        className="px-6 py-3 bg-white text-slate-950 text-sm font-bold rounded-full hover:bg-cyan-400 transition-all flex items-center"
                    >
                        EXPLORE REPO
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};