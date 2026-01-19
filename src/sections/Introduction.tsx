import React from 'react';
import { 
  School, 
  Code2, 
  Zap, 
  Layout, 
  Database, 
  Terminal, 
  GitCommit, 
  FileJson, 
  ExternalLink, 
  Presentation, 
  Github, 
  User,
  ArrowRight,
  Code
} from "lucide-react";
import { Button } from "../components/ui/button";
import { FadeIn, DataLink } from "../components/components";

// --- Data ---
const LINKS = {
  demo: "https://clydinite.github.io/TainanPark/",
  repoWeb: "https://github.com/Clydinite/TainanPark",
  slides: "https://clydinite.github.io/UXDesignPresentation/",
  repoSlides: "https://github.com/Clydinite/UXDesignPresentation",
  data: "https://github.com/Clydinite/UXDesignPresentation/tree/main/data",
  github: "https://github.com/Clydinite"
};

const ProjectHero = () => (
  <div className="mb-24 space-y-8">
    <FadeIn>
      <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-6">
        Digital <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Third Space
        </span>
      </h1>
      <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl border-l-4 border-emerald-500/50 pl-6">
        "TainanPark Activity Platform is a school project that explores how a digital platform could help teenagers socialize in a way that feels <span className="text-emerald-300 bg-emerald-950/30 px-1 rounded">low-pressure, comfortable, and true to their personalities</span>."
      </p>
    </FadeIn>

    <FadeIn delay={0.1}>
      <div className="flex flex-wrap gap-4 mt-8">
        <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold h-12 px-6 rounded-full">
          <a href={LINKS.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={18} className="mr-2" /> Live Demo
          </a>
        </Button>
        <Button asChild variant="outline" className="text-black h-12 px-6 rounded-full">
          <a href={LINKS.slides} target="_blank" rel="noreferrer">
            <Presentation size={18} className="mr-2" /> View Slides
          </a>
        </Button>
        <div className="flex items-center gap-4 px-4 border-l border-zinc-800 ml-2">
           <a href={LINKS.repoWeb} className="text-zinc-500 hover:text-white flex items-center gap-2 text-sm transition-colors">
             <Github size={16} /> Web Repo
           </a>
           <a href={LINKS.repoSlides} className="text-zinc-500 hover:text-white flex items-center gap-2 text-sm transition-colors">
             <Github size={16} /> Slides Repo
           </a>
           <a href={LINKS.data} className="text-zinc-500 hover:text-white flex items-center gap-2 text-sm transition-colors">
             <Database size={16} /> Raw Data
           </a>
        </div>
      </div>
    </FadeIn>
  </div>
);

const CreatorProfile = () => (
  <div className="border-t border-zinc-800 pt-16 pb-20">
    <div className="flex items-center gap-3 mb-10">
      <User className="text-emerald-500" size={32} />
      <h2 className="text-4xl font-bold text-white tracking-tight">About Myself</h2>
    </div>

    <div className="grid lg:grid-cols-12 gap-6">
      {/* Bio Card */}
      <FadeIn delay={0.2} className="lg:col-span-7">
        <div className="h-full bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col md:flex-row gap-8">
          <div className="w-48 h-64 shrink-0 bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
            <img 
              src="/images/clyde.jpg" 
              alt="Clydinite" 
              className="w-full h-full object-cover opacity-80" 
            />
          </div>
          
          <div className="flex flex-col justify-between py-2">
            <div>
              <h3 className="text-2xl font-bold text-white">Clyde Spring</h3>
              <div className="flex items-center gap-2 text-zinc-500 text-sm mt-2">
                <School size={16} className="text-emerald-500/70" />
                <span>NCKU Chemistry • 19 y.o.</span>
              </div>
              <p className="text-zinc-400 text-md leading-relaxed mt-6">
                I'm a chemistry undergraduate at National Cheng Kung University that enjoys web development, math, and linguistics in my free time.
              </p>
            </div>

            <Button asChild variant="link" className="p-0 text-emerald-400 h-auto self-start mt-6">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 group">
                <Github size={18} /> 
                <span>github.com/clydinite</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* Contributions Grid */}
      <div className="lg:col-span-5 grid grid-cols-1 gap-4">
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Presentation */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl flex flex-col gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 w-fit">
                <Presentation size={24} />
              </div>
              <div>
                <h4 className="text-zinc-200 font-medium text-sm">Full Presentation</h4>
                <p className="text-zinc-500 text-xs mt-1">Created slides (Slidev) & delivered the presentation.</p>
              </div>
            </div>

            {/* Web Prototype */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl flex flex-col gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 w-fit">
                <Layout size={24} />
              </div>
              <div>
                <h4 className="text-zinc-200 font-medium text-sm">Web Prototype</h4>
                <p className="text-zinc-500 text-xs mt-1">Built the React/Vite/Tailwind frontend mockup from scratch.</p>
              </div>
            </div>

            {/* Data Pipeline */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl flex flex-col gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 w-fit">
                <Database size={24} />
              </div>
              <div>
                <h4 className="text-zinc-200 font-medium text-sm">Data Pipeline</h4>
                <p className="text-zinc-500 text-xs mt-1">Digitized data scattered across Miro boards into AI-friendly formats (.csv, .md).</p>
              </div>
            </div>

            {/* Data Analysis */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl flex flex-col gap-3">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 w-fit">
                <Code size={24} />
              </div>
              <div>
                <h4 className="text-zinc-200 font-medium text-sm">Data Analysis</h4>
                <p className="text-zinc-500 text-xs mt-1">Utilized Python with Scikit-learn and DBSCAN to cluster raw observation data.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
);

export const Introduction = () => (
  <section className="min-h-screen flex flex-col justify-center py-24 px-6 max-w-7xl mx-auto relative">
    <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="z-10 w-full">
      <ProjectHero />
      <CreatorProfile />
    </div>
  </section>
);
