
import React, { useRef, useEffect } from 'react';

interface SnowfallProps {
  mouseX?: number;
}

export const Snowfall: React.FC<SnowfallProps> = ({ mouseX = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; r: number; d: number; s: number }[] = [];
    const mp = 150; 

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < mp; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5, 
          d: Math.random() * mp, 
          s: Math.random() * 0.4 + 0.1 
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.beginPath();
      for (let i = 0; i < mp; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    };

    let angle = 0;
    const update = () => {
      angle += 0.01;
      
      // Calculate wind based on mouse position relative to center
      const wind = (mouseX / window.innerWidth - 0.5) * 5;

      for (let i = 0; i < mp; i++) {
        const p = particles[i];
        p.y += p.s + Math.cos(angle + p.d) + 1;
        p.x += Math.sin(angle) * 2 + wind; // Add interactive wind

        if (p.x > canvas.width + 5 || p.x < -5 || p.y > canvas.height) {
          if (i % 3 > 0) {
            particles[i] = { x: Math.random() * canvas.width, y: -10, r: p.r, d: p.d, s: p.s };
          } else {
            if (wind > 0) {
              particles[i] = { x: -5, y: Math.random() * canvas.height, r: p.r, d: p.d, s: p.s };
            } else {
              particles[i] = { x: canvas.width + 5, y: Math.random() * canvas.height, r: p.r, d: p.d, s: p.s };
            }
          }
        }
      }
    };

    const render = () => {
      draw();
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX]); // Re-init on mouse change to allow closure to see updated wind

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[1] pointer-events-none opacity-40"
    />
  );
};
