import React from 'react';

interface InteractiveBackgroundProps {
  mousePos: { x: number; y: number };
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ mousePos }) => {
  const shiftX = (mousePos.x / window.innerWidth - 0.5) * 30;
  const shiftY = (mousePos.y / window.innerHeight - 0.5) * 30;

  return (
    <div className="fixed inset-0 z-0 bg-[#020617] overflow-hidden">
      {/* Aesthetic High-Res Mountain Background */}
      <div 
        className="absolute inset-[-5%] bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out opacity-40 grayscale-[0.5] contrast-[1.2]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000')`,
          transform: `translate3d(${shiftX}px, ${shiftY}px, 0) scale(1.05)`
        }}
      />

      {/* Professional Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]/50"></div>

      {/* Interactive Accent Glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vh] bg-cyan-500/10 blur-[150px] rounded-full transition-transform duration-700"
        style={{ transform: `translate(${shiftX * 1.2}px, ${shiftY * 1.2}px)` }}
      ></div>

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </div>
  );
};