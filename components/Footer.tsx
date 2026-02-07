
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
             <a href="#hero" className="text-3xl font-serif font-bold tracking-tighter mb-6 inline-block">
                SUMMIT<span className="text-cyan-400">.</span>
            </a>
            <p className="text-slate-400 max-w-md leading-relaxed">
                A digital architect and mountain explorer. Building robust web applications with the same rigor and dedication required for a high-altitude climb.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Social Elevation</h4>
            <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Direct Line</h4>
            <ul className="space-y-4 text-slate-400">
                <li><a href="mailto:hello@example.com" className="hover:text-cyan-400 transition-colors">hello@example.com</a></li>
                <li className="text-sm">+1 (555) 123-4567</li>
                <li className="text-sm">Based in the Digital Alps</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-slate-500 text-xs tracking-widest uppercase font-bold">
            <p>© 2024 SUMMIT PORTFOLIO. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};
