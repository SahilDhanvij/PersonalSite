import React from 'react';

interface CustomCursorProps {
  mousePos: { x: number; y: number };
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ mousePos }) => {
  const x = mousePos.x;
  const y = mousePos.y;

  return (
    <>
      {/* Crosshair lines */}
      <div
        className="fixed top-0 left-0 w-5 h-px z-[100] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #d4a054)',
          transform: `translate3d(${x + 6}px, ${y}px, 0)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-5 h-px z-[100] pointer-events-none"
        style={{
          background: 'linear-gradient(270deg, transparent, #d4a054)',
          transform: `translate3d(${x - 25}px, ${y}px, 0)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-px h-5 z-[100] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent, #d4a054)',
          transform: `translate3d(${x}px, ${y + 6}px, 0)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-px h-5 z-[100] pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, transparent, #d4a054)',
          transform: `translate3d(${x}px, ${y - 25}px, 0)`,
        }}
      />
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 w-1 h-1 rounded-full z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundColor: '#d4a054',
          transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Ambient glow */}
      <div
        className="fixed top-0 left-0 w-40 h-40 rounded-full z-[0] pointer-events-none blur-[60px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,84,0.25) 0%, transparent 70%)',
          transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};
