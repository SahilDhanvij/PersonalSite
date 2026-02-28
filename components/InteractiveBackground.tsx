import React from 'react';

interface InteractiveBackgroundProps {
  mousePos: { x: number; y: number };
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ mousePos }) => {
  const nx = mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1);
  const ny = mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div
        className="absolute w-[50vw] h-[50vh] rounded-full blur-[120px] animate-blob-1"
        style={{
          top: '5%', left: '10%',
          background: 'radial-gradient(circle, var(--blob1) 0%, transparent 70%)',
          transform: `translate(${(nx - 0.5) * 30}px, ${(ny - 0.5) * 20}px)`,
        }}
      />
      <div
        className="absolute w-[45vw] h-[45vh] rounded-full blur-[100px] animate-blob-2"
        style={{
          top: '45%', right: '5%',
          background: 'radial-gradient(circle, var(--blob2) 0%, transparent 70%)',
          transform: `translate(${(nx - 0.5) * -25}px, ${(ny - 0.5) * 20}px)`,
        }}
      />
      <div
        className="absolute w-[35vw] h-[35vh] rounded-full blur-[90px] animate-blob-3"
        style={{
          bottom: '15%', left: '35%',
          background: 'radial-gradient(circle, var(--blob3) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
