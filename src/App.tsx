import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Users, 
  ShieldCheck, 
  Map, 
  MessageSquare, 
  Sparkles, 
  ExternalLink, 
  Github, 
  Layers,
  Search,
  Zap,
  Layout,
  MousePointer2,
  Cpu,
  ArrowRight,
  Terminal,
  Quote
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// --- Shared Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({ phase, title, subtitle }: { phase: string, title: string, subtitle: string }) => (
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
      <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">{subtitle}</p>
    </FadeIn>
  </div>
);

// --- Sections ---

const Hero = () => (
  <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden px-6 pt-20">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
    
    <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          UX Research Case Study
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
          Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Third Space
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-xl font-light leading-relaxed mb-10">
          Transforming Tainan Park into a low-pressure social interface for shy teenagers using quantitative behavioral analysis.
        </p>
        
        <div className="flex flex-wrap gap-4">
           <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold h-12 px-8 rounded-full">
             View Prototype
           </Button>
           <Button variant="outline" className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 h-12 px-8 rounded-full">
             Read Report
           </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
           <div>
             <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Role</div>
             <div className="text-white font-medium">Lead Architect & Developer</div>
             <div className="text-zinc-500 text-xs mt-1">Full Stack • Data Analysis</div>
           </div>
           <div>
             <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Tech Stack</div>
             <div className="flex gap-2 text-zinc-300">
                <Code2 size={16} /> React
                <Cpu size={16} /> Python
                <Zap size={16} /> Tailwind
             </div>
           </div>
        </div>
      </motion.div>

      {/* Personal Photo Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm"
      >
        {/* TODO: Place your personal photo here */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-zinc-600 gap-4">
           <div className="w-32 h-32 border-2 border-dashed border-zinc-700 rounded-full flex items-center justify-center">
             <Users size={32} />
           </div>
           <p className="font-mono text-sm uppercase tracking-widest">TODO: Personal Photo</p>
           <p className="text-xs text-zinc-700 max-w-xs text-center">
             Replace this container with your actual photo from the `images/` directory or a placeholder asset.
           </p>
        </div>
        
        {/* Decorative Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
           <div className="font-mono text-emerald-400 text-xs mb-1">Project Lead</div>
           <div className="text-white text-xl font-bold">Your Name</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const PhaseOne = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      phase="Phase 01: Discovery" 
      title="Quantifying The Invisible" 
      subtitle="Why Tainan Park? Moving beyond 'function' to 'state of being'. Using DBSCAN to identify the 'Digital Island' phenomenon."
    />
    
    <div className="grid md:grid-cols-2 gap-12 mb-20">
      <FadeIn>
        <Card className="bg-zinc-900 border-zinc-800 h-full">
          <CardHeader>
            <CardTitle className="text-white">Site Selection Logic</CardTitle>
            <CardDescription>Why we chose the park over the night market.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-orange-400 font-bold">Night Market</span>
                 <Badge variant="outline" className="text-zinc-500 border-zinc-700">Functional</Badge>
               </div>
               <p className="text-zinc-400 text-sm">Users have clear roles (Buyer/Seller). Interaction is transactional.</p>
             </div>
             <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-emerald-400 font-bold">Tainan Park</span>
                 <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30">De-individualized</Badge>
               </div>
               <p className="text-zinc-300 text-sm">Users have no fixed role. Pure "State of Being". Perfect for observing social anxiety.</p>
             </div>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.2}>
         <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video group">
           <img 
             src="/images/tainan_park.png" 
             alt="Tainan Park" 
             className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-8">
             <div>
               <p className="text-emerald-300 font-mono text-xs mb-2">Field Site</p>
               <h3 className="text-white font-bold text-2xl">The "Non-Purposed" Space</h3>
             </div>
           </div>
         </div>
      </FadeIn>
    </div>

    <div className="space-y-8">
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-2xl font-bold text-white">Data Science: The 12 Behavioral Archetypes</h3>
           <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 px-4 py-1">Python + DBSCAN</Badge>
        </div>
      </FadeIn>

      <div className="grid lg:grid-cols-3 gap-8">
        <FadeIn className="lg:col-span-1 space-y-4">
           <Card className="bg-zinc-900 border-zinc-800">
             <CardHeader className="pb-4">
               <CardTitle className="text-lg text-white flex items-center gap-2">
                 <Terminal size={18} className="text-emerald-500" />
                 Clustering Logic
               </CardTitle>
             </CardHeader>
             <CardContent>
               <pre className="text-[10px] leading-relaxed font-mono text-zinc-400 bg-black/50 p-4 rounded-lg overflow-x-auto">
{`from sklearn.cluster import DBSCAN
import pandas as pd

# 9 Dimensions:
# Mood, Tech Usage, Mobility...
X = scaler.fit_transform(data)

# EPS=3.0: The "Social Safety Radius"
# Min_Samples=2
db = DBSCAN(eps=3.0).fit(X)
# Result: 4 Core Groups`}
               </pre>
               <p className="mt-4 text-xs text-zinc-500">
                 We quantified 12 users (U1-U12) across 9 dimensions. The algorithm identified a clear "Social Vacuum" between groups.
               </p>
             </CardContent>
           </Card>
        </FadeIn>

        <FadeIn delay={0.2} className="lg:col-span-2">
           <div className="bg-white p-4 rounded-3xl h-full min-h-[300px] flex items-center justify-center">
             <img 
               src="/images/behavioral_analysis_dimensions.png" 
               alt="Behavioral Analysis Radar Charts" 
               className="w-full h-full object-contain rounded-xl"
             />
           </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const PhaseTwo = () => (
  <section className="py-32 px-6 bg-zinc-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto">
       <SectionHeader 
        phase="Phase 02: Definition" 
        title="Meet Yang Zi-Xuan" 
        subtitle="The personification of our data. A 16-year-old girl who wants to connect, but feels safe only in the shadows."
      />

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Persona Image Card */}
        <div className="lg:col-span-5 relative">
          <FadeIn>
            <div className="relative rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/persona/persona1.png" 
                alt="Yang Zi-Xuan looking at corridor" 
                className="w-full object-cover aspect-[3/4]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="flex gap-2 mb-4">
                   <Badge className="bg-white/10 backdrop-blur-md text-white border-none">Shy</Badge>
                   <Badge className="bg-white/10 backdrop-blur-md text-white border-none">Observant</Badge>
                   <Badge className="bg-white/10 backdrop-blur-md text-white border-none">Tech-Reliant</Badge>
                 </div>
                 <h3 className="text-3xl font-bold text-white">Yang Zi-Xuan</h3>
                 <p className="text-zinc-300 mt-2">16 y.o. High School Freshman</p>
              </div>
            </div>
            
            {/* Context Images */}
            <div className="absolute -bottom-10 -right-10 w-48 rounded-2xl overflow-hidden border-4 border-zinc-900 shadow-xl hidden md:block">
               <img src="/images/persona/persona2.png" alt="Using phone in room" className="w-full" />
            </div>
          </FadeIn>
        </div>

        {/* Narrative & Insights */}
        <div className="lg:col-span-7 space-y-10">
          <FadeIn delay={0.2}>
            <div className="flex gap-4">
              <Quote className="text-emerald-500 flex-shrink-0" size={32} />
              <blockquote className="text-2xl text-zinc-300 font-light italic leading-relaxed">
                "I want to find a small circle that doesn't feel forced. I need a reason to stay in the park that isn't just surviving the heat."
              </blockquote>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid sm:grid-cols-2 gap-6">
               <Card className="bg-zinc-900 border-zinc-800">
                 <CardHeader>
                   <CardTitle className="text-emerald-400 text-lg">Jobs To Be Done</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <ul className="space-y-3 text-sm text-zinc-400 list-disc pl-4">
                     <li>I want to know the "vibe" before I join.</li>
                     <li>I want to filter out loud, high-energy events.</li>
                     <li>I need an "Exit Strategy" if I feel awkward.</li>
                   </ul>
                 </CardContent>
               </Card>
               <Card className="bg-zinc-900 border-zinc-800">
                 <CardHeader>
                   <CardTitle className="text-blue-400 text-lg">How Might We?</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-zinc-400 leading-relaxed">
                     How might we provide companionship without the burden of active social performance?
                   </p>
                   <p className="text-sm text-zinc-500 mt-4 font-mono">
                     {'>'} Shift from "Meeting" to "Co-existing".
                   </p>
                 </CardContent>
               </Card>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
             <h4 className="text-white font-bold mb-4 flex items-center gap-2">
               <Map className="text-zinc-500" size={20} />
               Stakeholder Pressure Map
             </h4>
             <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-400 font-mono leading-relaxed">
                [Main: Yang Zi-Xuan] <br />
                &nbsp;&nbsp;├── [Pressure] Cram School Teachers <br />
                &nbsp;&nbsp;├── [Anxiety] Established Peer Groups <br />
                &nbsp;&nbsp;├── [Escape] Instagram/Threads Algorithms <br />
                &nbsp;&nbsp;└── [Conflict] Territory Owners (Elderly in Park)
             </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

const PhaseThree = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
     <SectionHeader 
        phase="Phase 03: Solution" 
        title="The Digital Interface" 
        subtitle="A React-based platform designed to lower the friction of entering a physical space. Focused on 'Vibe First, Meeting Second'."
      />

      {/* Feature 1: The Filter */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <FadeIn className="order-2 lg:order-1">
             <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
               <img 
                 src="/images/website/Screenshot_20251214_022417.jpg" 
                 alt="Activity Filter UI" 
                 className="relative rounded-xl border border-white/10 shadow-2xl w-full"
               />
               <img 
                 src="/images/website/Screenshot_20251214_022433.jpg"
                 alt="Activity Detail UI"
                 className="absolute -right-12 -bottom-12 w-1/2 rounded-xl border border-white/10 shadow-2xl"
               />
             </div>
           </FadeIn>
           <FadeIn className="order-1 lg:order-2 space-y-6">
             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
               <Layout size={24} />
             </div>
             <h3 className="text-3xl font-bold text-white">Social Intensity Slider</h3>
             <p className="text-zinc-400 text-lg leading-relaxed">
               The core innovation. Unlike standard event apps that sort by time or category, we sort by <span className="text-white">Social Energy</span>.
             </p>
             <ul className="space-y-4">
               {[
                 "Level 1: No talking required (Just co-presence)",
                 "Level 2: Casual, low-pressure small talk",
                 "Level 3: Active participation"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-zinc-300">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   {item}
                 </li>
               ))}
             </ul>
           </FadeIn>
        </div>
      </div>

      {/* Feature 2: Profile & Safety */}
      <div className="grid lg:grid-cols-3 gap-8">
         <FadeIn>
           <Card className="bg-zinc-900 border-zinc-800 h-full">
             <CardHeader>
               <CardTitle className="text-white flex items-center gap-2">
                 <Users className="text-purple-400" /> De-individualized Profile
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-zinc-400 text-sm mb-6">
                 Replacing anxiety-inducing "Bio" sections with visual tags and "Social Battery" indicators.
               </p>
               <div className="rounded-lg overflow-hidden border border-white/10">
                 <img src="/images/website/Screenshot_20260102_002522.jpg" alt="Profile UI" className="w-full" />
               </div>
             </CardContent>
           </Card>
         </FadeIn>
         
         <FadeIn delay={0.2}>
           <Card className="bg-zinc-900 border-zinc-800 h-full">
             <CardHeader>
               <CardTitle className="text-white flex items-center gap-2">
                 <ShieldCheck className="text-orange-400" /> Safety & Exit Guides
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-zinc-400 text-sm mb-6">
                 Giving users the "right to leave". Pre-written excuses and safe lighting maps.
               </p>
               <div className="rounded-lg overflow-hidden border border-white/10">
                 <img src="/images/website/Screenshot_20260101_220657.jpg" alt="Safety UI" className="w-full" />
               </div>
             </CardContent>
           </Card>
         </FadeIn>

         <FadeIn delay={0.4}>
            <Card className="bg-zinc-900 border-zinc-800 h-full flex flex-col justify-center items-center text-center p-8">
               <Sparkles className="text-yellow-400 mb-6" size={48} />
               <h4 className="text-xl font-bold text-white mb-4">From "Stranger" to "Familiar"</h4>
               <p className="text-zinc-400">
                 The goal isn't to force friendship, but to enable comfortable silence.
               </p>
               <Button variant="link" className="text-emerald-400 mt-6">
                 Read the verification report <ArrowRight size={16} className="ml-2" />
               </Button>
            </Card>
         </FadeIn>
      </div>
  </section>
);

const PhaseFour = () => (
  <section className="py-32 px-6 bg-zinc-900/30 border-y border-white/5">
     <div className="max-w-7xl mx-auto">
      <SectionHeader 
        phase="Phase 04: Verification" 
        title="AI-Driven Roleplay" 
        subtitle="We didn't just guess. We simulated. Using Gemini to pressure-test the prototype against our Persona's deepest anxieties."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn className="space-y-6">
          <div className="flex gap-4 mb-8">
            <Badge variant="outline" className="border-blue-500/30 text-blue-400">Gemini 3.0</Badge>
            <Badge variant="outline" className="border-purple-500/30 text-purple-400">OOC Mode</Badge>
          </div>
          
          <h3 className="text-2xl font-bold text-white">The "Out of Character" Technique</h3>
          <p className="text-zinc-400 leading-relaxed">
            During testing, AI would often hallucinate technical details (e.g., "I like the React state management"). 
            We implemented an <b>OOC Protocol</b> to force the model to stay strictly within the persona of a 16-year-old student, revealing genuine emotional friction points.
          </p>
          
          <div className="p-6 bg-black/40 rounded-xl border-l-4 border-red-500">
             <div className="text-xs text-red-400 font-bold uppercase mb-2">Before Iteration</div>
             <p className="text-zinc-500 italic">"The profile page looks functional but exposing my school name makes me nervous."</p>
          </div>
          <div className="p-6 bg-black/40 rounded-xl border-l-4 border-emerald-500">
             <div className="text-xs text-emerald-400 font-bold uppercase mb-2">After Iteration</div>
             <p className="text-zinc-300 italic">"Added 'Visibility Controls' for personal data. Now I feel safe enough to fill it out."</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="relative">
           {/* Diagram representation */}
           <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
           <div className="relative bg-zinc-950 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex justify-between items-center text-sm font-mono text-zinc-500 mb-8">
                <span>INPUT: Persona.md</span>
                <ArrowRight size={16} />
                <span>PROCESS: Roleplay</span>
                <ArrowRight size={16} />
                <span>OUTPUT: UX Insight</span>
              </div>
              
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">AI</div>
                    <div className="bg-blue-500/10 p-3 rounded-r-xl rounded-bl-xl text-blue-200 text-sm">
                       "I'm afraid if I go to the 'Sunset Walk', I won't know anyone and will just stand there awkwardly."
                    </div>
                 </div>
                 <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">Dev</div>
                    <div className="bg-emerald-500/10 p-3 rounded-l-xl rounded-br-xl text-emerald-200 text-sm">
                       *Action:* Added "Friends Note" feature and "Pre-event Chat" to build familiarity.
                    </div>
                 </div>
              </div>
           </div>
        </FadeIn>
      </div>
     </div>
  </section>
);

const Conclusion = () => (
  <section className="py-24 px-6 max-w-4xl mx-auto text-center">
    <FadeIn>
      <Sparkles className="mx-auto text-emerald-400 mb-8" size={48} />
      <h2 className="text-4xl font-bold text-white mb-8">Redefining "Connection"</h2>
      <p className="text-xl text-zinc-400 leading-relaxed mb-12">
        This project proves that for the "Digital Island" generation, connection doesn't always mean conversation. 
        Sometimes, it just means <b>feeling safe enough to be alone, together.</b>
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 text-left">
         {[
           { title: "For Users", desc: "A 'Social Novice Village' where silence is permitted." },
           { title: "For the Park", desc: "Reclaiming the space as a 'Third Place' for youth." },
           { title: "For Society", desc: "A blueprint for combating modern loneliness." }
         ].map((item, i) => (
           <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5">
             <h4 className="text-emerald-400 font-bold mb-2">{item.title}</h4>
             <p className="text-zinc-500 text-sm">{item.desc}</p>
           </div>
         ))}
      </div>
    </FadeIn>
  </section>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen text-zinc-200 selection:bg-emerald-500/30">
      <Hero />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <PhaseFour />
      <Conclusion />
      
      <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-xs font-mono uppercase tracking-widest">
        © 2026 Tainan Park Digital Third Space • Team #2
      </footer>
    </div>
  );
}
