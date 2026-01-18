import { School, Code2, Zap, Layout, Database, Terminal, GitCommit, FileJson, ExternalLink, Presentation, Github, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { FadeIn, DataLink } from "../components/components";

export const Introduction = () => (
  <section className="min-h-screen flex flex-col justify-center py-24 px-6 max-w-7xl mx-auto relative">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="grid lg:grid-cols-12 gap-16 items-center z-10">
      
      {/* Left: Intro Content */}
      <div className="lg:col-span-7 space-y-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-sm font-mono mb-4">
            <School size={14} />
            <span>NCKU Chemistry • 19 y.o.</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Third Space
            </span>
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mt-6 border-l-4 border-emerald-500/50 pl-6">
            "TainanPark Activity Platform is a school project that explores how a digital platform could help teenagers socialize in a way that feels <span className="bg-emerald-900/30 text-emerald-300 px-1 rounded">low-pressure, comfortable, and true to their personalities</span>."
          </p>
          <div className="mt-4">
            <DataLink path="research/intro.md" label="View Introduction Source" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 gap-4 max-w-lg mb-8">
             <div className="space-y-2">
               <h4 className="text-white text-sm font-bold flex items-center gap-2"><Code2 size={16} className="text-blue-400"/> Tech Stack</h4>
               <div className="flex flex-wrap gap-2">
                 <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 gap-1"><Code2 size={10}/> React</Badge>
                 <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 gap-1"><Zap size={10}/> Svelte</Badge>
                 <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 gap-1"><Layout size={10}/> Tailwind</Badge>
               </div>
             </div>
             <div className="space-y-2">
               <h4 className="text-white text-sm font-bold flex items-center gap-2"><Database size={16} className="text-emerald-400"/> Data Science</h4>
               <div className="flex flex-wrap gap-2">
                 <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 gap-1"><Terminal size={10}/> Python</Badge>
                 <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 gap-1"><GitCommit size={10}/> DBSCAN</Badge>
                 <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 gap-1"><FileJson size={10}/> Pandas</Badge>
               </div>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold h-14 px-8 rounded-full text-lg">
              <a href="https://clydinite.github.io/TainanPark/" target="_blank" rel="noreferrer">
                <ExternalLink size={20} className="mr-2" /> Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-14 px-8 rounded-full text-lg">
              <a href="https://clydinite.github.io/UXDesignPresentation/" target="_blank" rel="noreferrer">
                <Presentation size={20} className="mr-2" /> Slides
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 mt-8 text-sm text-zinc-500 font-mono">
             <a href="https://github.com/Clydinite/TainanPark" className="hover:text-emerald-400 flex items-center gap-2 transition-colors">
               <Github size={14} /> Source Code
             </a>
             <a href="" className="hover:text-emerald-400 flex items-center gap-2 transition-colors">
               <Database size={14} /> Raw Data Repo
             </a>
          </div>
        </FadeIn>
      </div>

      {/* Right: Key Contributions & Photo Placeholder */}
      <div className="lg:col-span-5 space-y-6">
        <FadeIn delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col items-center justify-end p-6 group">
                <img src="/images/clyde.jpg" alt="Clydinite" className="w-full rounded-lg object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-xl">Team Leader</h3>
                <p className="text-zinc-400 text-sm">Full Stack & Data Analysis</p>
            </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Card className="bg-zinc-900/80 border-zinc-800 backdrop-blur-xl relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg text-white">Project Roles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
                  <Presentation size={18} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Presentation</h4>
                  <p className="text-zinc-400 text-xs">Slides & Delivery</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                  <Code2 size={18} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Development</h4>
                  <p className="text-zinc-400 text-xs">React/Vite Website</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                  <Database size={18} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Data Analysis</h4>
                  <p className="text-zinc-400 text-xs">Miro Digitization & DBSCAN</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  </section>
);