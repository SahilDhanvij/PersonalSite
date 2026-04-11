import React from 'react';
import { Skill, TimelineEntry } from '../types';
import { ScrollReveal, StaggerReveal } from './ScrollReveal';

const SKILLS: Skill[] = [
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
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-36 relative z-10">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>Background</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <h2 className="font-display text-3xl md:text-5xl font-700 mb-20" style={{ color: 'var(--text)' }}>
          Stack & <span className="font-serif italic" style={{ color: 'var(--accent)' }}>trajectory</span>
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-[1fr,1px,1fr] gap-12 lg:gap-0">
        {/* Left: Technical stack */}
        <div className="lg:pr-16">
          <ScrollReveal delay={0.1}>
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase mb-10" style={{ color: 'var(--text-light)' }}>Technical stack</h3>
          </ScrollReveal>
          <div className="space-y-10">
            {CATEGORIES.map((cat, catIdx) => (
              <ScrollReveal key={cat.key} delay={0.15 + catIdx * 0.1}>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-4" style={{ color: 'var(--accent2)' }}>{cat.label}</span>
                <StaggerReveal className="flex flex-wrap gap-2.5">
                  {SKILLS.filter(s => s.category === cat.key).map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300"
                      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.backgroundColor = 'var(--accent-faint)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span className="text-base">{skill.icon}</span>
                      <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{skill.name}</span>
                    </div>
                  ))}
                </StaggerReveal>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block" style={{ backgroundColor: 'var(--border-light)' }} />

        {/* Right: Career path */}
        <div className="lg:pl-16">
          <ScrollReveal delay={0.1}>
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase mb-10" style={{ color: 'var(--text-light)' }}>Career path</h3>
          </ScrollReveal>
          <div className="space-y-14">
            {TIMELINE.map((entry, idx) => (
              <ScrollReveal key={idx} delay={0.15 + idx * 0.12}>
                <div className="group relative pl-8">
                  <div
                    className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full transition-all duration-500 group-hover:scale-[1.6] group-hover:shadow-lg"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                  {idx < TIMELINE.length - 1 && (
                    <div className="absolute left-[4px] top-6 w-px h-[calc(100%+28px)]" style={{ backgroundColor: 'var(--border-light)' }} />
                  )}
                  <span className="font-mono text-xs block mb-2" style={{ color: 'var(--text-light)' }}>{entry.year}</span>
                  <h4 className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'var(--text)' }}>{entry.role}</h4>
                  <span className="text-sm font-serif italic block mb-3" style={{ color: 'var(--accent2)' }}>{entry.company}</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>{entry.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 p-7 rounded-2xl border transition-all duration-500 hover:shadow-lg" style={{ borderColor: 'var(--accent-border)', backgroundColor: 'var(--accent-ghost)' }}>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-3" style={{ color: 'var(--accent)' }}>Where I'm headed</span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                Backend engineering, DevOps, and ML infrastructure. I want to build the systems that power AI — distributed training pipelines, model serving platforms, GPU orchestration, and production-grade infra that scales.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
