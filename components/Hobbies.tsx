
import React from 'react';
import { Hobby } from '../types';

const HOBBIES: Hobby[] = [
  { name: 'Mountain Trekking', description: 'Exploring the heights and finding peace in the solitude of peaks.', emoji: '🏔️' },
  { name: 'Generative Art', description: 'Coding algorithms that paint abstract landscapes of digital light.', emoji: '🎨' },
  { name: 'Analog Photography', description: 'Capturing moments in slow motion through 35mm film.', emoji: '📷' },
  { name: 'Astrophotography', description: 'Gazing at the stars and stitching together cosmic puzzles.', emoji: '🌌' },
];

export const Hobbies: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">Summit Lifestyle</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold">Basecamp Interests</h2>
        <p className="text-slate-400 mt-4 max-w-lg">What fuel keeps the fire burning at high altitudes.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {HOBBIES.map((hobby) => (
          <div 
            key={hobby.name}
            className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:bg-slate-900 hover:border-cyan-400/30 transition-all flex items-start gap-6 group"
          >
            <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                {hobby.emoji}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2 text-white">{hobby.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {hobby.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
