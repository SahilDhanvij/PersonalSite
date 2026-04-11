import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div' as any,
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
};

export const StaggerReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`stagger-children ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const WordReveal: React.FC<{
  text: string;
  className?: string;
  baseDelay?: number;
  stagger?: number;
}> = ({ text, className = '', baseDelay = 0, stagger = 0.07 }) => {
  const { ref, isVisible } = useScrollReveal();
  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="word-clip" style={{ transitionDelay: `${baseDelay + i * stagger}s` }}>
          <span
            style={{
              transitionDelay: `${baseDelay + i * stagger}s`,
              transform: isVisible ? 'translateY(0)' : 'translateY(110%)',
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
};
