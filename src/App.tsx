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
  Cpu
} from 'lucide-react';

// --- Shared Components (Abstracted within App.tsx for now) ---

const SectionHeader = ({ title, subtitle, number }: { title: string, subtitle: string, number: string }) => (
  <div className="mb-12">
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-emerald-400 font-mono text-sm tracking-widest uppercase"
    >
      Phase {number}
    </motion.span>
    <h2 className="text-4xl font-bold text-white mt-2">{title}</h2>
    <p className="text-zinc-400 mt-4 max-w-2xl text-lg">{subtitle}</p>
  </div>
);

const BentoCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all ${className}`}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
    {/* Background Glows */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
    
    <div className="max-w-6xl mx-auto w-full z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
          Digital Third Space: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Transforming Tainan Park
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed">
          A Quantitative UX Study on Low-Pressure Social Interaction. 
          Bridging the <span className="text-white font-medium">"Digital Island"</span> gap for shy teenagers through data-driven spatial agency.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex flex-wrap gap-8 items-center"
      >
        <div className="flex flex-col">
          <span className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Lead Designer & dev</span>
          <span className="text-white text-lg font-medium">Your Name</span>
        </div>
        <div className="h-10 w-[1px] bg-zinc-800" />
        <div className="flex flex-col">
          <span className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Status</span>
          <span className="text-white text-lg font-medium">16, High School Freshman</span>
        </div>
        <div className="flex gap-4 ml-auto">
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white"><Github size={20} /></a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10 text-white"><ExternalLink size={20} /></a>
        </div>
      </motion.div>
    </div>
  </section>
);

const PhaseOneResearch = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      number="01" 
      title="Quantitative Research (The Brain)" 
      subtitle="Quantifying human behavior using DBSCAN clustering to define social safety radiuses within public spaces."
    />
    
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <BentoCard className="md:col-span-8 overflow-hidden">
        <h3 className="text-emerald-400 font-mono mb-4 flex items-center gap-2">
          <Code2 size={18} /> clustering_logic.py
        </h3>
        <pre className="bg-black/40 p-6 rounded-2xl font-mono text-sm text-zinc-300 overflow-x-auto border border-white/5">
{`from sklearn.cluster import DBSCAN
import pandas as pd

# Standardizing 9 behavior dimensions
# (Focus, Tech usage, Group size, Movement, etc.)
dbscan = DBSCAN(eps=3.0, min_samples=2)
labels = dbscan.fit_predict(X_scaled)

# Insight: EPS=3.0 defined the "Social Safety Radius" 
# identifying 4 core behavioral archetypes.`}
        </pre>
      </BentoCard>

      <BentoCard className="md:col-span-4 flex flex-col justify-center">
        <Zap className="text-yellow-400 mb-4" />
        <h4 className="text-xl font-bold text-white mb-2">9 Dimensions of Interaction</h4>
        <p className="text-zinc-400 text-sm">
          We analyzed movement speed, technology reliance, and gaze patterns to map the "Digital Island" phenomenon in Tainan Park.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Spatial Agency', 'Gaze', 'Mobility', 'Tech Battery', 'Vibe', 'Proximity'].map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-zinc-300 uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
      </BentoCard>

      <BentoCard className="md:col-span-4">
        <div className="text-4xl font-bold text-white mb-2">EPS = 3.0</div>
        <p className="text-zinc-400 text-sm uppercase tracking-widest">Optimal Cluster Radius</p>
        <div className="mt-4 h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 w-3/4" />
        </div>
      </BentoCard>

      <BentoCard className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'High-Freq Flow', val: 'Group A' },
          { label: 'Closed Social', val: 'Group B' },
          { label: 'Static Observers', val: 'Group C' },
          { label: 'Territory Owners', val: 'Group D' }
        ].map(group => (
          <div key={group.val} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-emerald-400 font-bold text-lg">{group.val}</div>
            <div className="text-zinc-500 text-[10px] mt-1">{group.label}</div>
          </div>
        ))}
      </BentoCard>
    </div>
  </section>
);

const PhaseTwoProblem = () => (
  <section className="py-24 px-6 bg-zinc-950">
    <div className="max-w-7xl mx-auto">
      <SectionHeader 
        number="02" 
        title="Problem Definition (The Heart)" 
        subtitle="Moving from physical discomfort to deep psychological social needs."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10"><Users size={80} /></div>
            <h4 className="text-emerald-400 font-mono text-sm mb-4 tracking-widest uppercase">Persona: Yang Zi-Xuan</h4>
            <h3 className="text-3xl font-bold text-white mb-4">"The Quiet Observer"</h3>
            <p className="text-zinc-400 leading-relaxed italic mb-6">
              "I want to find a small circle that doesn't feel forced. I need a reason to stay in the park that isn't just surviving the heat."
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl">
                <span className="text-zinc-500 text-xs uppercase block mb-1">JTBD</span>
                <span className="text-white text-sm">Seek low-pressure participation.</span>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl">
                <span className="text-zinc-500 text-xs uppercase block mb-1">Need</span>
                <span className="text-white text-sm">Predictable social vibes.</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="p-6 border-l-4 border-emerald-500 bg-emerald-500/5 rounded-r-2xl">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <Layers size={20} className="text-emerald-500" /> How Might We?
            </h4>
            <p className="text-zinc-300">
              How might we provide companionship without the burden of active social performance?
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Reduce social friction through data transparency.",
              "Create 'Digital Islands' for low-friction meetups.",
              "Ensure psychological safety with 'Exit Guides'."
            ].map((insight, i) => (
              <div key={i} className="flex gap-4 items-center p-4 bg-zinc-900 rounded-2xl border border-white/5">
                <div className="text-emerald-400 font-mono">0{i+1}</div>
                <div className="text-zinc-400 text-sm">{insight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PhaseThreeSolution = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      number="03" 
      title="The Digital Solution (The Face)" 
      subtitle="A React-based interface focusing on de-individualized profiles and vibe-based discovery."
    />

    <div className="relative group">
      {/* Browser Mockup */}
      <div className="bg-zinc-900 rounded-t-2xl border-t border-x border-white/20 p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
        </div>
        <div className="bg-black/40 rounded-md px-4 py-1 text-[10px] text-zinc-500 font-mono mx-auto w-1/3 text-center border border-white/5">
          tainan-park-social.app
        </div>
      </div>
      
      <div className="bg-zinc-950 border border-white/20 rounded-b-2xl p-8 md:p-12 min-h-[500px] flex items-center justify-center relative overflow-hidden">
        {/* Abstract UI Elements representing the app */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl relative z-10">
          <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10 shadow-2xl">
            <Search className="text-emerald-400 mb-4" size={24} />
            <div className="h-4 w-2/3 bg-zinc-800 rounded mb-4" />
            <div className="space-y-3">
              <div className="h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center px-4 text-xs text-emerald-400">#IntrovertFriendly</div>
              <div className="h-10 bg-zinc-800 rounded-xl flex items-center px-4 text-xs text-zinc-500">#SunsetWalk</div>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10 shadow-2xl transform md:-translate-y-8">
            <Layout className="text-blue-400 mb-4" size={24} />
            <h5 className="text-white font-bold mb-2 text-sm">Social Intensity Slider</h5>
            <div className="h-1 bg-zinc-800 rounded-full w-full my-6 relative">
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-blue-500" />
            </div>
            <div className="text-center text-[10px] text-zinc-500 uppercase tracking-widest">Low Interaction</div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10 shadow-2xl">
            <MousePointer2 className="text-purple-400 mb-4" size={24} />
            <div className="flex gap-2 items-center mb-4">
               <div className="w-8 h-8 rounded-full bg-zinc-800" />
               <div className="h-3 w-1/2 bg-zinc-800 rounded" />
            </div>
            <div className="h-20 bg-black/20 rounded-2xl border border-white/5" />
          </div>
        </div>
        {/* Background Image Description Label */}
        <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-zinc-500">
           UI Visualization: De-individualized Profile System
        </div>
      </div>
    </div>
  </section>
);

const PhaseFourTesting = () => (
  <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionHeader 
        number="04" 
        title="User Testing (GAI Iteration)" 
        subtitle="Employing Gemini-3.0 to simulate persona logic and refine the product architecture through 'OOC' prompting."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="md:col-span-1">
          <MessageSquare className="text-emerald-400 mb-4" />
          <h4 className="text-white font-bold mb-2">Dual-Track Strategy</h4>
          <p className="text-zinc-400 text-sm leading-relaxed">
            AI as <b>Consultant</b> (Script Gen) and AI as <b>Subject</b> (Roleplay). Refined via Miro-to-Markdown data digitization.
          </p>
        </BentoCard>

        <BentoCard className="md:col-span-2">
          <Cpu className="text-blue-400 mb-4" />
          <h4 className="text-white font-bold mb-2">Fixing Hallucinations: OOC Mode</h4>
          <div className="mt-4 p-4 bg-black/40 rounded-xl border border-red-500/20">
             <span className="text-red-400 font-mono text-xs block mb-2">Problem: AI leaking code variable names into persona feedback.</span>
             <p className="text-zinc-300 text-sm">
               Implemented <b>"Out of Character" (OOC)</b> instructions: "Speak strictly from the 16yo perspective. Hide the underlying React state logic."
             </p>
          </div>
        </BentoCard>
      </div>
    </div>
  </section>
);

const Contribution = () => (
  <section className="py-24 px-6 border-t border-white/5">
    <div className="max-w-4xl mx-auto text-center">
      <Sparkles className="mx-auto text-emerald-400 mb-6" size={40} />
      <h2 className="text-3xl font-bold text-white mb-6">Individual Contribution Statement</h2>
      <p className="text-xl text-zinc-400 leading-relaxed font-light">
        I served as the <span className="text-white font-medium">Lead Architect, Developer, and Analyst</span>. 
        I was solely responsible for the end-to-end execution, from clustering behavioral data in Python 
        to building and deploying the final React/Tailwind application.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 text-center">
    <p className="text-zinc-600 text-sm font-mono tracking-widest uppercase">
      © 2026 Digital Third Space Portfolio | Tainan Park Case Study
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen text-zinc-200 selection:bg-emerald-500/30">
      <Hero />
      <PhaseOneResearch />
      <PhaseTwoProblem />
      <PhaseThreeSolution />
      <PhaseFourTesting />
      <Contribution />
      <Footer />
    </div>
  );
}