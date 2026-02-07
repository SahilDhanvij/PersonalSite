
import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  mousePos: { x: number; y: number };
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ mousePos }) => {
  const [trailPos, setTrailPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleTrail = () => {
      setTrailPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
    };
    const interval = setInterval(handleTrail, 16);
    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <>
      {/* The main tiny dot cursor */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full z-[100] pointer-events-none mix-blend-difference"
        style={{ transform: `translate3d(${mousePos.x - 4}px, ${mousePos.y - 4}px, 0)` }}
      ></div>
      
      {/* The large trailing glow orb */}
      <div 
        className="fixed top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full z-[0] pointer-events-none blur-[100px] -translate-x-1/2 -translate-y-1/2"
        style={{ transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0)` }}
      ></div>

      {/* Secondary outline ring */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/30 rounded-full z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0)` }}
      ></div>
    </>
  );
};
