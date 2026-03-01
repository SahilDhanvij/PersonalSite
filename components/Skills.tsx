import React from 'react';
import { Skill, TimelineEntry } from '../types';

const SKILLS: Skill[] = [
  // Current stack (what you actually work with)
  { name: 'TypeScript', icon: 'TS', category: 'Frontend' },
  { name: 'Angular', icon: '🅰️', category: 'Frontend' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'NestJS', icon: '🐱', category: 'Backend' },
  { name: 'JavaScript', icon: 'JS', category: 'Backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Backend' },
  { name: 'MySQL', icon: '🐬', category: 'Backend' },
  { name: 'Redis', icon: '🔴', category: 'Backend' },
  { name: 'Kafka', icon: '📨', category: 'Backend' },
  // Learning / transitioning into
  { name: 'Go', icon: '🔷', category: 'Tools' },
  { name: 'Docker', icon: '🐋', category: 'Tools' },
  { name: 'Kubernetes', icon: '☸️', category: 'Tools' },
  { name: 'Python', icon: '🐍', category: 'Tools' },
  { name: 'Terraform', icon: '🏗️', category: 'Tools' },
  { name: 'PyTorch', icon: '🔥', category: 'Tools' },
];

const TIMELINE: TimelineEntry[] = [
  {
    year: '2025 — Present',
    role: 'Transitioning to Backend & ML Infra',
    company: 'Self-directed',
    description: 'Deep-diving into distributed systems, container orchestration, ML pipelines, and infrastructure-as-code. Building projects to bridge the gap from full stack to platform engineering.'
  },
  {
    year: '2023 — 2025',
    role: 'Full Stack Developer',
    company: '~2 years of experience',
    description: 'Built production applications with Angular, React, NestJS, and Next.js. Worked across the entire stack — REST APIs, database design, auth flows, and deployment pipelines.'
  },
];

const CATEGORIES = [
  { key: 'Frontend' as const, label: 'Frontend' },
  { key: 'Backend' as const, label: 'Backend & Data' },
  { key: 'Tools' as const, label: 'Learning & Exploring' },
];

export const Skills: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-40 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Background</span>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl mb-20" style={{ color: 'var(--text)' }}>
        Stack & <span className="italic" style={{ color: 'var(--accent)' }}>trajectory</span>
      </h2>

      <div className="grid lg:grid-cols-[1fr,1px,1fr] gap-12 lg:gap-0">
        <div className="lg:pr-16">
          <h3 className="font-mono text-xs tracking-widest uppercase mb-10" style={{ color: 'var(--text-light)' }}>Technical stack</h3>
          <div className="space-y-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.key}>
                <span className="font-mono text-[10px] tracking-widest uppercase block mb-3" style={{ color: 'var(--accent2)' }}>{cat.label}</span>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.filter(s => s.category === cat.key).map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300"
                      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--accent-faint)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }}
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-base font-medium" style={{ color: 'var(--text)' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block" style={{ backgroundColor: 'var(--border-light)' }} />

        <div className="lg:pl-16">
          <h3 className="font-mono text-xs tracking-widest uppercase mb-10" style={{ color: 'var(--text-light)' }}>Career path</h3>
          <div className="space-y-12">
            {TIMELINE.map((entry, idx) => (
              <div key={idx} className="group relative pl-8">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-150" style={{ backgroundColor: 'var(--accent)' }} />
                <div className="absolute left-[4px] top-5 w-px h-[calc(100%+20px)]" style={{ backgroundColor: 'var(--border-light)' }} />
                <span className="font-mono text-xs block mb-2" style={{ color: 'var(--text-light)' }}>{entry.year}</span>
                <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--text)' }}>{entry.role}</h4>
                <span className="text-base italic block mb-2" style={{ color: 'var(--accent2)' }}>{entry.company}</span>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-mid)' }}>{entry.description}</p>
              </div>
            ))}
          </div>

          {/* Where I'm headed */}
          <div className="mt-16 p-6 rounded-2xl border" style={{ borderColor: 'var(--accent-border)', backgroundColor: 'var(--accent-ghost)' }}>
            <span className="font-mono text-[10px] tracking-widest uppercase block mb-3" style={{ color: 'var(--accent)' }}>Where I'm headed</span>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-mid)' }}>
              Backend engineering, DevOps, and ML infrastructure. I want to build the systems that power AI — distributed training pipelines, model serving platforms, GPU orchestration, and production-grade infra that scales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
