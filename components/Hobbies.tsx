import React from 'react';
import { Hobby } from '../types';
import { ScrollReveal } from './ScrollReveal';

const HOBBIES: Hobby[] = [
  { name: 'Open Source', description: 'Contributing to infra and ML tooling projects. Building tools that other engineers actually want to use.', emoji: '🛠️' },
  { name: 'System Design', description: 'Studying and diagramming large-scale distributed systems. Always thinking about failure modes.', emoji: '📐' },
  { name: 'Home Lab', description: 'Running a Proxmox cluster at home with K3s, monitoring, and self-hosted services.', emoji: '🖥️' },
  { name: 'Reading', description: 'Designing Data-Intensive Applications, papers on distributed consensus, and the occasional sci-fi.', emoji: '📚' },
];

export const Hobbies: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-36 relative z-10">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>Off the clock</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <h2 className="font-display text-3xl md:text-5xl font-700 mb-20" style={{ color: 'var(--text)' }}>
          When I'm not <span className="font-serif italic" style={{ color: 'var(--accent2)' }}>deploying</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border rounded-2xl overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        {HOBBIES.map((hobby, idx) => (
          <ScrollReveal key={hobby.name} delay={0.12 + idx * 0.08}>
            <div
              className="group relative p-10 md:p-12 transition-all duration-400"
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
                  <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'var(--text)' }}>{hobby.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>{hobby.description}</p>
                </div>
              </div>
              <div
                className="absolute bottom-3 right-3 w-5 h-5 border-b border-r transition-all duration-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-1 translate-y-1"
                style={{ borderColor: 'var(--accent)' }}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
