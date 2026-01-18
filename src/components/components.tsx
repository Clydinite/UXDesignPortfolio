import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mermaid from 'mermaid';

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({ phase, title, subtitle }: { phase: string, title: string, subtitle: string }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-widest uppercase">
        {phase}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent" />
    </motion.div>
    <FadeIn>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{title}</h2>
      <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">{subtitle}</p>
    </FadeIn>
  </div>
);

export const MermaidDiagram = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState('');

  useEffect(() => {
    mermaid.initialize({ 
      startOnLoad: true, 
      theme: 'dark',
      themeVariables: {
        darkMode: true,
        background: '#18181b',
        primaryColor: '#10b981',
        secondaryColor: '#3b82f6',
        tertiaryColor: '#1f2937',
        primaryTextColor: '#fff',
        secondaryTextColor: '#ddd',
        tertiaryTextColor: '#ddd',
        lineColor: '#52525b'
      }
    });
    mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart).then(({ svg }) => {
      setSvg(svg);
    });
  }, [chart]);

  return (
    <div className="p-4 bg-zinc-950/50 rounded-xl border border-white/10 overflow-x-auto flex justify-center" dangerouslySetInnerHTML={{ __html: svg }} />
  );
};