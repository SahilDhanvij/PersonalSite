import React from 'react';
import { Hobby } from '../types';

const HOBBIES: Hobby[] = [
  { name: 'Open Source', description: 'Contributing to infra and ML tooling projects. Building tools that other engineers actually want to use.', emoji: '🛠️' },
  { name: 'System Design', description: 'Studying and diagramming large-scale distributed systems. Always thinking about failure modes.', emoji: '📐' },
  { name: 'Home Lab', description: 'Running a Proxmox cluster at home with K3s, monitoring, and self-hosted services.', emoji: '🖥️' },
  { name: 'Reading', description: 'Designing Data-Intensive Applications, papers on distributed consensus, and the occasional sci-fi.', emoji: '📚' },
];

export const Hobbies: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-40 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Off the clock</span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl mb-20" style={{ color: 'var(--text)' }}>
        When I'm not <span className="italic" style={{ color: 'var(--accent2)' }}>deploying</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border rounded-2xl overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        {HOBBIES.map((hobby, idx) => (
          <div
            key={hobby.name}
            className="group relative p-10 md:p-12 transition-colors duration-300"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRight: idx % 2 === 0 ? '1px solid var(--border)' : 'none',
              borderBottom: idx < 2 ? '1px solid var(--border)' : 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-ghost)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }}
          >
            <div className="flex items-start gap-5">
              <div className="text-4xl flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                {hobby.emoji}
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 transition-colors duration-300" style={{ color: 'var(--text)' }}>{hobby.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>{hobby.description}</p>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ borderColor: 'var(--accent)' }} />
          </div>
        ))}
      </div>
    </div>
  );
};
