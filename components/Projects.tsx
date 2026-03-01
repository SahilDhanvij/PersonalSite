import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { useTheme } from '../ThemeContext';

const PROJECTS: Project[] = [
  // Featured 8 (carousel)
  { title: "Tensor Serve", description: "Model serving platform with auto-scaling GPU inference, A/B rollouts, and sub-50ms latency at 10k req/s.", tags: ["Go", "CUDA", "K8s", "gRPC"], link: "#", image: "ML" },
  { title: "Pipeforge", description: "Distributed ML training pipeline orchestrator with fault-tolerant checkpointing and multi-node GPU scheduling.", tags: ["Python", "Ray", "Redis", "Docker"], link: "#", image: "PIPE" },
  { title: "Kube Sentinel", description: "Kubernetes operator for auto-remediating cluster issues with custom CRDs, health probes, and Slack alerting.", tags: ["Go", "K8s", "Prometheus"], link: "#", image: "K8S" },
  { title: "Vault Gateway", description: "High-throughput API gateway handling 80k req/s with rate limiting, JWT auth, and circuit breaking.", tags: ["Go", "gRPC", "Redis", "Docker"], link: "#", image: "API" },
  { title: "Drift Stream", description: "Real-time event streaming platform with exactly-once semantics, dead letter queues, and backpressure handling.", tags: ["Kafka", "Go", "PostgreSQL"], link: "#", image: "STREAM" },
  { title: "Infra Graph", description: "Terraform state visualizer and drift detector with dependency graphs and automated plan previews.", tags: ["Terraform", "Go", "React"], link: "#", image: "INFRA" },
  { title: "Vector Index", description: "Custom vector similarity search engine for embeddings with HNSW indexing and batch upsert APIs.", tags: ["Rust", "CUDA", "Python"], link: "#", image: "VEC" },
  { title: "Observe Stack", description: "Full observability platform with distributed tracing, log aggregation, and anomaly detection on metrics.", tags: ["Go", "ClickHouse", "Grafana"], link: "#", image: "OBS" },
  // Remaining 22
  { title: "Deploy Flow", description: "GitOps CI/CD engine with canary deployments, rollback automation, and multi-cloud target support.", tags: ["GitHub Actions", "ArgoCD", "K8s"], link: "#", image: "CICD" },
  { title: "Feature Store", description: "Centralized ML feature registry with point-in-time correctness, versioning, and real-time serving.", tags: ["Python", "Redis", "PostgreSQL"], link: "#", image: "FEAT" },
  { title: "Batch Engine", description: "Distributed batch processing framework handling 100M+ records/day with retry logic and SLA guarantees.", tags: ["Go", "Kafka", "S3"], link: "#", image: "BATCH" },
  { title: "Auth Forge", description: "Identity platform with SSO, RBAC, passkey support, and session management for microservices.", tags: ["Go", "OAuth2", "PostgreSQL"], link: "#", image: "AUTH" },
  { title: "Schema Sync", description: "Database migration tool with zero-downtime schema changes, rollback plans, and diff previews.", tags: ["Go", "PostgreSQL", "MySQL"], link: "#", image: "DB" },
  { title: "GPU Scheduler", description: "Multi-tenant GPU cluster manager with fair-share scheduling, preemption, and cost tracking.", tags: ["Python", "CUDA", "K8s", "Ray"], link: "#", image: "GPU" },
  { title: "Log Ingest", description: "High-throughput log ingestion pipeline processing 500k events/s with structured parsing and retention policies.", tags: ["Go", "ClickHouse", "Kafka"], link: "#", image: "LOG" },
  { title: "Config Vault", description: "Secrets and configuration management service with encryption at rest, audit logs, and namespace isolation.", tags: ["Go", "Vault", "etcd"], link: "#", image: "CFG" },
  { title: "Proxy Mesh", description: "Service mesh sidecar proxy with mTLS, traffic splitting, retry budgets, and circuit breaker patterns.", tags: ["Go", "Envoy", "K8s"], link: "#", image: "MESH" },
  { title: "Notebook Hub", description: "Managed Jupyter environment with persistent storage, GPU allocation, and team collaboration features.", tags: ["Python", "K8s", "Docker"], link: "#", image: "NB" },
  { title: "Queue Boss", description: "Distributed task queue with priority scheduling, dead letter handling, and at-least-once delivery.", tags: ["Go", "Redis", "PostgreSQL"], link: "#", image: "QUEUE" },
  { title: "Trace Lens", description: "Distributed tracing backend with flame graph visualization, latency histograms, and service dependency mapping.", tags: ["Go", "Jaeger", "ClickHouse"], link: "#", image: "TRACE" },
  { title: "Data Lake CLI", description: "Command-line tool for querying partitioned Parquet data in S3 with SQL syntax and local caching.", tags: ["Rust", "Arrow", "S3"], link: "#", image: "LAKE" },
  { title: "Edge Cache", description: "CDN-layer caching proxy with cache invalidation webhooks, origin shielding, and geo-routing.", tags: ["Go", "Redis", "Nginx"], link: "#", image: "CACHE" },
  { title: "Alert Engine", description: "Flexible alerting service with composite conditions, escalation policies, and PagerDuty/Slack integrations.", tags: ["Go", "Prometheus", "PostgreSQL"], link: "#", image: "ALERT" },
  { title: "Model Registry", description: "ML model versioning and lineage tracker with artifact storage, metadata tagging, and deployment triggers.", tags: ["Python", "MLflow", "S3"], link: "#", image: "REG" },
  { title: "Load Gen", description: "Distributed load testing framework with scenario scripting, real-time metrics, and percentile reporting.", tags: ["Go", "Grafana", "K8s"], link: "#", image: "LOAD" },
  { title: "IAM Service", description: "Fine-grained permission engine with policy-as-code, resource-level ACLs, and cross-service token exchange.", tags: ["Go", "OPA", "PostgreSQL"], link: "#", image: "IAM" },
  { title: "Webhook Relay", description: "Reliable webhook delivery service with retry backoff, signature verification, and delivery audit logs.", tags: ["Go", "Redis", "PostgreSQL"], link: "#", image: "HOOK" },
  { title: "Embed Pipeline", description: "Text and image embedding generation service with batching, model hot-swap, and vector output to downstream stores.", tags: ["Python", "PyTorch", "FastAPI"], link: "#", image: "EMB" },
  { title: "Cert Manager", description: "Automated TLS certificate provisioning and rotation for internal services with ACME and self-signed CA support.", tags: ["Go", "K8s", "Vault"], link: "#", image: "TLS" },
  { title: "Cost Tracker", description: "Cloud spend analyzer with per-team attribution, budget alerts, and right-sizing recommendations.", tags: ["Python", "AWS", "React"], link: "#", image: "COST" },
];

const CAROUSEL_COUNT = 6;

const ProjectCard = React.forwardRef<HTMLDivElement, { project: Project; idx: number; highlighted?: boolean }>(
  ({ project, idx, highlighted }, ref) => {
  const [hover, setHover] = useState(false);
  const isActive = hover || highlighted;

  return (
    <div ref={ref} className="group relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div
        className="relative rounded-2xl overflow-hidden p-7 h-full transition-all duration-500"
        style={{
          backgroundColor: isActive ? 'var(--bg-card)' : 'var(--bg-surface)',
          border: `1px solid ${isActive ? 'var(--accent-border)' : 'var(--border-light)'}`,
          transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: highlighted
            ? '0 0 0 2px var(--accent), var(--card-shadow-hover)'
            : hover ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
        }}
      >
        <div className="flex items-start justify-between mb-4 relative z-10">
          <span className="font-serif text-3xl italic select-none transition-colors duration-500"
            style={{ color: isActive ? 'var(--accent-medium)' : 'var(--accent-soft)' }}>{project.image}</span>
          <svg className="w-4 h-4 transition-all duration-300"
            style={{ color: 'var(--accent)', opacity: isActive ? 0.8 : 0.3, transform: isActive ? 'translate(2px, -2px)' : 'none' }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
        <div className="relative z-10">
          <h3 className="font-serif text-xl mb-2 transition-colors duration-300"
            style={{ color: isActive ? 'var(--accent)' : 'var(--text)' }}>{project.title}</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-mid)' }}>{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                style={{ backgroundColor: 'var(--accent2-faint)', color: 'var(--accent2)', border: '1px solid var(--accent2-border)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

/* ── Orbital Carousel + Grid hybrid page ── */

export const AllProjectsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isDragging, setIsDragging] = useState(false);
  const [highlightedIdx, setHighlightedIdx] = useState(-1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gridCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rotationRef = useRef(0);
  const dragStartRef = useRef(0);
  const rotationStartRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const pausedRef = useRef(false);
  const activeIdxRef = useRef(-1);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const highlightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const featured = PROJECTS.slice(0, CAROUSEL_COUNT);
  const remaining = PROJECTS.slice(CAROUSEL_COUNT);
  const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 200 : 400;
  const step = (Math.PI * 2) / featured.length;

  useEffect(() => {
    let animId: number;
    const animate = (time: number) => {
      if (!isDraggingRef.current && !pausedRef.current) {
        const delta = time - lastTimeRef.current;
        rotationRef.current += delta * 0.00012;
      }
      lastTimeRef.current = time;

      const hasActive = activeIdxRef.current !== -1;
      for (let i = 0; i < featured.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const angle = rotationRef.current + i * step;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const normZ = (z + radius) / (2 * radius);
        let s = normZ * 0.35 + 0.65;
        let o = normZ * 0.55 + 0.45;
        if (hasActive) {
          if (i === activeIdxRef.current) {
            s *= 1.1;
            o = 1;
          } else {
            o = 0.25;
          }
        }
        el.style.transform = `translate3d(${x}px, 0px, ${z}px) scale(${s})`;
        el.style.opacity = String(o);
        el.style.zIndex = String(i === activeIdxRef.current ? 200 : Math.round(normZ * 100));
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [radius, step, featured.length]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleCardClick = (idx: number) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (highlightTimerRef.current) clearTimeout(highlightTimerRef.current);

    setActiveIdx(idx);
    activeIdxRef.current = idx;
    pausedRef.current = true;

    const gridEl = gridCardRefs.current[idx];
    if (gridEl) {
      setHighlightedIdx(idx);
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      highlightTimerRef.current = setTimeout(() => setHighlightedIdx(-1), 3000);
    }

    resumeTimerRef.current = setTimeout(() => {
      setActiveIdx(-1);
      activeIdxRef.current = -1;
      pausedRef.current = false;
    }, 5000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true); isDraggingRef.current = true;
    dragStartRef.current = e.clientX;
    rotationStartRef.current = rotationRef.current;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    rotationRef.current = rotationStartRef.current + (e.clientX - dragStartRef.current) * 0.004;
  };
  const handleMouseUp = () => { setIsDragging(false); isDraggingRef.current = false; };

  return (
    <div className="min-h-screen relative z-10" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Sticky header */}
      <div className="sticky top-0 z-50 px-6 md:px-12 lg:px-24 py-4"
        style={{ backgroundColor: 'var(--nav-bg)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
              All Projects <span style={{ color: 'var(--text-light)' }}>({PROJECTS.length})</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ backgroundColor: 'var(--accent-subtle)', color: 'var(--accent)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-soft)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-subtle)'; }}
              aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>
            <button onClick={onBack}
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border transition-all duration-200"
              style={{ borderColor: 'var(--accent-border)', color: 'var(--accent)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-subtle)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              Back
            </button>
          </div>
        </div>
      </div>

      {/* ── Carousel section ── */}
      <div className="relative" style={{ height: '70vh', minHeight: '500px' }}>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="text-center absolute top-8 left-0 right-0 z-20">
            <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-light)' }}>
              Featured &middot; Drag to rotate
            </span>
          </div>

          <div
            ref={carouselRef}
            className="w-full h-full flex items-center justify-center select-none"
            style={{ perspective: '1400px', cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div style={{ position: 'relative', width: 0, height: 0, transformStyle: 'preserve-3d' }}>
              {featured.map((project, idx) => (
                <div
                  key={idx}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  style={{
                    position: 'absolute',
                    top: '-150px',
                    left: '-130px',
                    width: '260px',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                  }}
                  onClick={() => handleCardClick(idx)}
                >
                  <div
                    className="rounded-2xl overflow-hidden p-5 transition-all duration-300"
                    style={{
                      backgroundColor: activeIdx === idx ? 'var(--accent-soft)' : 'var(--bg-card)',
                      border: `1px solid ${activeIdx === idx ? 'var(--accent)' : 'var(--border)'}`,
                      boxShadow: activeIdx === idx ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif text-2xl italic select-none" style={{ color: 'var(--accent-medium)' }}>{project.image}</span>
                      <svg className="w-3.5 h-3.5" style={{ color: 'var(--accent)', opacity: 0.4 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-lg mb-1.5" style={{ color: 'var(--text)' }}>{project.title}</h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-mid)' }}>{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map(tag => (
                        <span key={tag} className="font-mono text-[8px] tracking-wider uppercase px-1.5 py-0.5 rounded-full"
                          style={{ backgroundColor: 'var(--accent2-faint)', color: 'var(--accent2)', border: '1px solid var(--accent2-border)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="180" height="180" viewBox="0 0 200 200" className="opacity-[0.04]">
                <circle cx="100" cy="100" r="95" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="var(--accent2)" strokeWidth="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
      </div>

      {/* ── Full grid of ALL projects ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
            Complete catalog
          </span>
          <span className="font-mono text-[10px] ml-1" style={{ color: 'var(--text-light)' }}>
            ({PROJECTS.length} projects)
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={idx}
              ref={(el) => { gridCardRefs.current[idx] = el; }}
              project={project}
              idx={idx}
              highlighted={highlightedIdx === idx}
            />
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pb-20">
        <div className="h-px mb-12" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-soft))' }} />
        <button onClick={onBack}
          className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider transition-all duration-200"
          style={{ color: 'var(--accent)' }}>
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
          Back to home
        </button>
      </div>
    </div>
  );
};

/* ── Main projects section (home page, shows first 3) ── */

export const Projects: React.FC<{ onShowAll: () => void }> = ({ onShowAll }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-40 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Selected work</span>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl mb-20" style={{ color: 'var(--text)' }}>
        Things I've <span className="italic" style={{ color: 'var(--accent)' }}>built</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {PROJECTS.slice(0, 3).map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          onClick={onShowAll}
          className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full border transition-all duration-300"
          style={{ borderColor: 'var(--accent-border)', color: 'var(--accent)' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'var(--accent-faint)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--accent-border)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          <span className="font-mono text-sm tracking-wider uppercase">See all projects</span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-soft)' }}>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
