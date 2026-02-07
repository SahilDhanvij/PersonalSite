
import React from 'react';

interface JourneyPathProps {
  progress: number;
}

export const JourneyPath: React.FC<JourneyPathProps> = ({ progress }) => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full opacity-30"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="5%" stopColor="#22d3ee" />
            <stop offset="95%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path
          d="M 50,0 
             C 70,100 30,150 50,250 
             S 80,350 50,450 
             S 20,550 50,650 
             S 80,750 50,850 
             S 30,950 50,1000"
          stroke="url(#roadGradient)"
          strokeWidth="0.2"
          strokeDasharray="2,2"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />
      </svg>
      
      {/* Physical trekker following the "winding path" scroll */}
      <div 
        className="fixed top-1/2 left-0 w-full z-20 transition-all duration-700 ease-out"
        style={{ 
          transform: `translateX(${Math.sin(progress * Math.PI * 4) * 12}vw)`,
        }}
      >
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="relative group">
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-xl whitespace-nowrap transition-transform scale-100 group-hover:scale-110">
                    Altitude: {Math.floor((1 - progress) * 8848)}m
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-400/10 blur-2xl rounded-full"></div>
                
                <div className="relative w-8 h-8 flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] w-full h-full animate-bounce">
                      <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
                   </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
