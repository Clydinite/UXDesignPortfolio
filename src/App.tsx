import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Database, 
  Presentation, 
  FileJson, 
  User, 
  School, 
  Sparkles,
  MapPin,
  GitCommit,
  Terminal,
  Map,
  ArrowRight,
  BrainCircuit,
  MessageSquare,
  Cpu,
  Layers,
  Layout,
  ShieldCheck,
  Users,
  Search,
  MousePointer2,
  Zap,
  Quote,
  History,
  Palette,
  Lightbulb,
  Telescope
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, SectionHeader, MermaidDiagram } from './components/components';

const Introduction = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Personal Profile & Contributions */}
      <div className="lg:col-span-4 space-y-8">
        <FadeIn>
          <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <div className="aspect-[3/4] bg-zinc-800 relative group">
               {/* Vertical Image Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center text-zinc-600 bg-zinc-950 flex-col gap-2 transition-colors group-hover:bg-zinc-900">
                 <User size={64} className="opacity-50" />
                 <span className="text-xs font-mono uppercase tracking-widest opacity-50">Portrait Placeholder</span>
               </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl text-white">Clydinite</CardTitle>
                  <CardDescription className="text-zinc-400">19 y.o. • NCKU Chemistry</CardDescription>
                </div>
                <a href="https://github.com/Clydinite" target="_blank" rel="noreferrer">
                  <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white">
                    <Github size={20} />
                  </Button>
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-blue-500/30 text-blue-400">React</Badge>
                <Badge variant="outline" className="border-orange-500/30 text-orange-400">Svelte</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">Python</Badge>
              </div>
              
              <div className="pt-4 border-t border-zinc-800">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="text-yellow-500" /> Key Contributions
                </h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-3 items-start">
                    <Presentation size={16} className="mt-0.5 text-zinc-500 shrink-0" />
                    <span>Made the slides and delivered the presentation</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Code2 size={16} className="mt-0.5 text-zinc-500 shrink-0" />
                    <span>Made the website</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Database size={16} className="mt-0.5 text-zinc-500 shrink-0" />
                    <span>Digitalized the data from Miro</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <FileJson size={16} className="mt-0.5 text-zinc-500 shrink-0" />
                    <span>Did the data analysis and visualization</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Right Column: Project Context */}
      <div className="lg:col-span-8 space-y-10">
        <FadeIn delay={0.2}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono mb-6">
              <School size={12} />
              <span>UX Design Capstone • Team #2</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Third Space</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl border-l-2 border-emerald-500/50 pl-6">
              "TainanPark Activity Platform (台南公園輕社交平台) is a school project that explores how a digital platform could help teenagers socialize in a way that feels low-pressure, comfortable, and true to their personalities."
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-base">Project Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The goal of the course is to <b>digitalize an existing experience</b> that is already happening in Tainan. We chose <b>Tainan Park</b> as the place to start the project to explore the possibilities of a third space for shy teenagers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-base">Value Proposition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  "與其再推廣一個通用或大型、吵雜或高度社交的活動，我們的設計更專注於<b>解決深層的社交焦慮</b>。幫助害羞或慢熟的使用者，在他們自己的步調下，安全地邁出社交的第一步。"
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full h-12 px-6">
              <a href="https://clydinite.github.io/TainanPark/" target="_blank" rel="noreferrer">
                <ExternalLink size={18} className="mr-2" /> Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-full h-12 px-6">
              <a href="https://clydinite.github.io/UXDesignPresentation/" target="_blank" rel="noreferrer">
                <Presentation size={18} className="mr-2" /> Slides
              </a>
            </Button>
            <Button asChild variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-full h-12 px-6">
              <a href="https://github.com/Clydinite/UXDesignPresentation/tree/main/data" target="_blank" rel="noreferrer">
                <Database size={18} className="mr-2" /> Raw Data
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-zinc-500 hover:text-white rounded-full h-12 px-6">
              <a href="https://github.com/Clydinite/TainanPark" target="_blank" rel="noreferrer">
                <Github size={18} className="mr-2" /> Source Code
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const SiteSelection = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      phase="Phase 01: Discovery" 
      title="Field Work & Site Selection" 
      subtitle="From divergent site scanning to convergent field observation. We didn't just 'look' at the park; I digitized 12 user groups into 9 behavioral dimensions for analysis."
    />
    
    <div className="space-y-24">
      {/* 1. Site Selection Narrative */}
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <FadeIn className="md:col-span-5">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="text-emerald-500" /> Initial Scanning
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We conducted an initial scan of three sites. In this phase, <b>I personally scouted the 銀同社區 (Yin-tong Community)</b>, seeing potential in its "historic memory" and "community autonomy."
            </p>
            <div className="p-4 border-l-2 border-red-500 bg-red-500/5 rounded-r-lg">
              <p className="text-zinc-300 text-xs italic">
                However, the team consensus leaned towards <strong className="text-white">Tainan Park</strong>. I accepted this pivot as the park offered a more "De-individualized" environment suitable for observing pure social anxiety, whereas the community was too focused on social design.
              </p>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We proceeded with Tainan Park to challenge the "Digital Island" phenomenon—where people are physically present but digitally isolated.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn className="md:col-span-7" delay={0.2}>
           <Card className="bg-zinc-900 border-zinc-800">
             <CardHeader>
               <CardTitle className="text-white text-sm font-mono uppercase tracking-widest">Site Decision Matrix</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 opacity-60">
                   <div className="text-orange-400 font-bold mb-2 text-xs">大東夜市</div>
                   <div className="text-zinc-500 text-[10px]">"解決『便利與效率』"</div>
                 </div>
                 <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 opacity-60">
                   <div className="text-blue-400 font-bold mb-2 text-xs">銀同社區</div>
                   <div className="text-zinc-500 text-[10px]">"解決『紀錄與傳承』"<br/>(My Proposal)</div>
                 </div>
                 <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/50 scale-105 shadow-xl shadow-emerald-900/20">
                   <div className="text-emerald-400 font-bold mb-2 text-xs">台南公園</div>
                   <div className="text-emerald-200/70 text-[10px]">"解決『行為與心理斷層』"<br/>(Selected)</div>
                 </div>
               </div>
               <div className="mt-6 pt-6 border-t border-zinc-800">
                  <MermaidDiagram chart={`graph LR
    A[Initial Scan] --> B{Team Consensus}
    B -- Rejected --> C[Yin-tong Community]
    B -- Selected --> D[Tainan Park]
    D --> E[Deep Field Study]
    
    style D fill:#064e3b,stroke:#10b981,color:#fff
    style C fill:#3f3f46,stroke:#52525b,color:#a1a1aa`} />
               </div>
             </CardContent>
           </Card>
        </FadeIn>
      </div>

      {/* 2. Observation & Data Digitization */}
      <div className="grid md:grid-cols-12 gap-12 items-start">
         <FadeIn className="md:col-span-7 relative group">
            {/* Placeholder for Pavilion Observation Image */}
            <div className="aspect-video bg-zinc-800 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-700 flex-col gap-2">
                  <Map size={48} />
                  <span className="text-xs font-mono uppercase tracking-widest opacity-50">Pavilion Observation Photo</span>
               </div>
               {/* Use real image if available, else placeholder */}
               <img src="/images/tainan_park.png" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm" alt="Tainan Park" />
               
               <div className="relative z-10 text-center p-8 bg-black/60 rounded-xl backdrop-blur-md border border-white/10">
                  <User size={32} className="mx-auto text-zinc-400 mb-2" />
                  <p className="text-white font-bold text-sm">My Observation Spot</p>
                  <p className="text-zinc-400 text-xs mt-1">The Pavilion (涼亭)</p>
               </div>
            </div>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
               {[4, 5, 6].map(id => (
                 <Badge key={id} variant="outline" className="border-zinc-700 text-zinc-400 whitespace-nowrap">
                   Contributed to User U{id} (Elderly)
                 </Badge>
               ))}
            </div>
         </FadeIn>

         <FadeIn className="md:col-span-5" delay={0.2}>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <Database className="text-emerald-500" /> From Miro to Code
            </h3>
            <div className="space-y-4">
               <p className="text-zinc-400 text-sm leading-relaxed">
                 During the field study, I was specifically in charge of observing <b>Users U4, U5, and U6</b> (the elderly groups). I sat in the pavilion, documenting their "territorial" behaviors like playing cards and organizing tea sets.
               </p>
               <p className="text-zinc-400 text-sm leading-relaxed">
                 We utilized a <b>Double Diamond</b> method. We didn't assume the solution immediately. Instead, we collected raw data first.
               </p>
               <div className="p-4 bg-zinc-900 rounded-xl border-l-4 border-blue-500">
                 <h4 className="text-white text-xs font-bold mb-2 flex items-center gap-2"><GitCommit size={12}/> My Contribution</h4>
                 <p className="text-zinc-300 text-xs leading-relaxed">
                   I realized that sticky notes on Miro were insufficient for deep analysis. I took the initiative to <b>digitize our qualitative observations</b> into a structured CSV dataset, quantifying 12 user groups across 9 behavioral dimensions.
                 </p>
               </div>
            </div>
         </FadeIn>
      </div>

      {/* 3. Analysis Code */}
      <FadeIn>
        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 border-r border-zinc-800">
               <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Terminal size={16} className="text-emerald-500"/> The Python Analysis</h3>
               <p className="text-zinc-400 text-sm mb-6">
                 With the data digitized, I reasoned that <b>clustering algorithms</b> would yield a clearer picture of the "Social Vacuum". I wrote a Python script using <b>DBSCAN</b> to cluster the users.
               </p>
               <Code2 className="text-zinc-600 mb-2" size={24} />
               <pre className="text-[10px] leading-relaxed font-mono text-emerald-300 bg-black p-4 rounded-lg overflow-x-auto border border-white/10">
{`# My Logic for Clustering (user_behavior_dimension_analysis.ipynb)
data = pd.read_csv('field_study.csv')
X_scaled = StandardScaler().fit_transform(data)

# eps=3.0 determined experimentally to define "Social Safety Radius"
dbscan = DBSCAN(eps=3.0, min_samples=2)
clusters = dbscan.fit_predict(X_scaled)

# Output: 4 Distinct Behavioral Groups`}
               </pre>
            </div>
            <div className="md:w-1/2 p-8 bg-white flex flex-col items-center justify-center">
               <img 
                 src="/images/behavioral_analysis_dimensions.png" 
                 alt="Cluster Analysis Result" 
                 className="w-full h-auto object-contain shadow-lg rounded-lg"
               />
               <p className="text-black/50 text-[10px] mt-4 text-center max-w-xs font-mono">
                 Fig 1.1: The 9-axis behavioral dimensional analysis generated from my script.
               </p>
            </div>
          </div>
        </Card>
      </FadeIn>
    </div>
  </section>
);

const Persona = () => (
  <section className="py-32 px-6 bg-zinc-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto">
       <SectionHeader 
        phase="Phase 02: Definition" 
        title="Persona & Design Scenario" 
        subtitle="Moving from raw data to a human narrative. This phase defined 'Yang Zi-Xuan', the embodiment of our findings, and the 'Social Vacuum' problem."
      />

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: Persona Card */}
        <div className="lg:col-span-5 space-y-6">
          <FadeIn>
            <div className="relative rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 group">
              <img 
                src="/images/persona/persona1.png" 
                alt="Yang Zi-Xuan looking at corridor" 
                className="w-full aspect-[4/3] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="flex gap-2 mb-4">
                   <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">Shy</Badge>
                   <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">Observant</Badge>
                   <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">Tech-Reliant</Badge>
                 </div>
                 <h3 className="text-4xl font-bold text-white mb-1">Yang Zi-Xuan</h3>
                 <p className="text-emerald-400 font-mono text-sm">16 y.o. High School Freshman</p>
                 <p className="text-zinc-400 text-sm mt-4 leading-relaxed italic">
                   "I want to find a small circle that doesn't feel forced. I need a reason to stay in the park that isn't just surviving the heat."
                 </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
             <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
               <h4 className="text-white text-xs font-bold mb-3 flex items-center gap-2"><BrainCircuit size={14} className="text-purple-400"/> My Contribution: GenAI Creation</h4>
               <p className="text-zinc-400 text-xs leading-relaxed mb-2">
                 I wrote and visualized the first draft of the persona using <b>Gemini</b> to ensure the narrative aligned with our cluster data.
               </p>
               <p className="text-zinc-400 text-xs leading-relaxed">
                 I facilitated the creation of the entire story and prompted the AI to generate the specific image assets (persona1-8) used in our slides.
               </p>
             </div>
          </FadeIn>
        </div>

        {/* Right: Frameworks & Diagrams */}
        <div className="lg:col-span-7 space-y-10 pt-4">
          <FadeIn delay={0.2}>
             <h3 className="text-xl font-bold text-white mb-4">Stakeholder Map</h3>
             <p className="text-zinc-400 text-sm mb-6">
               To understand her pressure points, we mapped the complex web of school, family, and digital escape mechanisms.
             </p>
             <MermaidDiagram chart={`graph TD
    Main((Yang Zi-Xuan))
    Main --- |Pressure| CramTeacher[Cram School]
    Main --- |Anxiety| Peers[Established Groups]
    Main -.-> |Escape| Algorithms[Instagram/Threads]
    Main -.-> |Conflict| Elders[Park Territory Owners]
    Algorithms --- TechCorp
    Elders --- Manager[Park Management]
    
    style Main fill:#10b981,stroke:#fff,color:#000`} />
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid sm:grid-cols-2 gap-6">
               <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500/30 transition-colors">
                 <CardHeader>
                   <CardTitle className="text-emerald-400 text-sm font-mono uppercase tracking-widest">Jobs To Be Done (JTBD)</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <ul className="space-y-3 text-sm text-zinc-300">
                     <li className="flex gap-2"><ArrowRight size={14} className="mt-1 text-emerald-500"/> "I want to know the 'vibe' before I join."</li>
                     <li className="flex gap-2"><ArrowRight size={14} className="mt-1 text-emerald-500"/> "I want to filter out loud events."</li>
                     <li className="flex gap-2"><ArrowRight size={14} className="mt-1 text-emerald-500"/> "I need an 'Exit Strategy' if I feel awkward."</li>
                   </ul>
                 </CardContent>
               </Card>
               <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-500/30 transition-colors">
                 <CardHeader>
                   <CardTitle className="text-blue-400 text-sm font-mono uppercase tracking-widest">How Might We (HMW)</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-lg text-white font-medium leading-snug">
                     How might we provide companionship without the burden of active social performance?
                   </p>
                   <div className="mt-4 p-3 bg-zinc-950 border border-white/5 rounded-lg">
                     <p className="text-xs text-zinc-500 italic">
                        Note: We iterated through multiple HMWs. We didn't give up when initial ideas failed; we refined them into this core insight.
                     </p>
                   </div>
                 </CardContent>
               </Card>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* The 12-Step Story Visualization */}
      <div className="mt-24 space-y-8">
        <FadeIn>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">The Design Scenario: A 12-Step Journey</h3>
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">Visualized by Clydinite</Badge>
          </div>
          <p className="text-zinc-400 text-sm max-w-2xl mt-2">
            I summarized the persona's journey into a 12-step narrative and created a mockup website using <b>React, Vite, Tailwind, and Framer Motion</b> to give this story a concrete visual form.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { img: "/images/persona/persona2.png", title: "Isolation", desc: "Feeling left out on social media." },
             { img: "/images/persona/persona3.png", title: "Confusion", desc: "Overwhelmed by school clubs." },
             { img: "/images/persona/persona4.png", title: "Discovery", desc: "Finding the poster." },
             { img: "/images/persona/persona5.png", title: "Hesitation", desc: "Receiving the first notification." },
             { img: "/images/persona/persona6.png", title: "Welcome", desc: "Warmly greeted by the group." },
             { img: "/images/persona/persona7.png", title: "Connection", desc: "Walking together in silence." },
             { img: "/images/persona/persona8.png", title: "Belonging", desc: "A low-pressure picnic." },
             { img: "/images/website/Screenshot_20251214_022316.jpg", title: "The Mockup", desc: "The React app I built." }
           ].map((step, idx) => (
             <FadeIn delay={idx * 0.1} key={idx}>
               <div className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                 <img src={step.img} alt={step.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4">
                   <span className="text-emerald-400 font-bold text-sm">{step.title}</span>
                   <span className="text-zinc-400 text-xs truncate">{step.desc}</span>
                 </div>
               </div>
             </FadeIn>
           ))}
        </div>
      </div>
    </div>
  </section>
);

const AIValidation = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      phase="Phase 03: Validation" 
      title="AI Assisted Validation & Iteration" 
      subtitle="We didn't just 'guess'. I engineered a verification loop using Gemini-3.0 to pressure-test the website prototype against the persona's deepest anxieties."
    />

    <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
      <div className="lg:col-span-5 space-y-8">
        <FadeIn>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Cpu className="text-emerald-500" /> My Verification Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm mb-6">
                I fed the Persona story and the website code directly into Gemini to act as the user. I developed an <b>"OOC (Out of Character)"</b> protocol to filter out technical hallucinations.
              </p>
              <MermaidDiagram chart={`graph TD
    A[Persona Story] --> C((Gemini AI))
    B[Website Code] --> C
    C --> D{Response Eval}
    D -- Tech Hallucination --> E[My OOC Command]
    D -- Genuine Insight --> F[Design Iteration]
    E --> C`} />
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20">
            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
              <Lightbulb size={18} /> My Key Contribution
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              I summarized the group's abstract thoughts into concrete prompts for the AI, and then translated the AI's feedback into specific code changes for the frontend.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-7 space-y-8">
        <FadeIn delay={0.3}>
          <h3 className="text-2xl font-bold text-white mb-6">Before & After: The Profile Page</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-red-500/30 group">
                <div className="absolute top-2 left-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded font-bold z-10">BEFORE</div>
                <img src="/images/website/Screenshot_20251214_022533.jpg" alt="Profile Before" className="w-full opacity-80 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <p className="text-zinc-500 text-xs italic">
                  <span className="text-red-400 font-bold block mb-1">AI Feedback (Persona):</span>
                  "I feel exposed. Why do I have to write a bio? I don't know what to say about myself."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 group">
                <div className="absolute top-2 left-2 bg-emerald-500/90 text-white text-xs px-2 py-1 rounded font-bold z-10">AFTER</div>
                <img src="/images/website/Screenshot_20260102_002522.jpg" alt="Profile After" className="w-full opacity-80 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <p className="text-zinc-300 text-xs italic">
                  <span className="text-emerald-400 font-bold block mb-1">My Solution:</span>
                  I replaced text bios with <b>Visual Tags</b> and a <b>"Social Battery"</b> slider. This aligned with the AI's suggestion to lower the pressure of self-presentation.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const ReflectionOutlook = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800">
    <SectionHeader 
      phase="Reflection" 
      title="Future Outlook" 
      subtitle="From the teacher's feedback: Moving beyond static cards."
    />
    <FadeIn>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Quote className="text-zinc-600 mb-4" size={40} />
          <p className="text-xl text-zinc-300 font-light italic leading-relaxed">
            "The website is good, but the concept of the park is seemingly diluted. A dynamic illustration of the park with all the activities would be more interesting, compared to static cards."
          </p>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <School size={16} />
            <span>Teacher's Review</span>
          </div>
        </div>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <Telescope className="text-purple-400" /> Next Step: The "Park Map" View
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Taking this feedback, the next version of the platform will feature an interactive, real-time map of Tainan Park.
            </p>
            <div className="aspect-video rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center">
              <span className="text-zinc-600 text-xs font-mono uppercase tracking-widest">[Interactive Map Placeholder]</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
  </section>
);

const Conclusions = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-800">
    <FadeIn>
      <div className="text-center mb-16">
        <Sparkles className="mx-auto text-emerald-400 mb-6" size={48} />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Redefining "Connection"</h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          This project proves that for the "Digital Island" generation, connection doesn't always mean conversation. 
          Sometimes, it just means <b>feeling safe enough to be alone, together.</b>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
         <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-900/80 transition-colors group">
           <CardHeader>
             <CardTitle className="text-emerald-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
               <Users size={20} /> For Users
             </CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-zinc-400 text-sm">
               A "Social Novice Village" where silence is permitted and mistakes are allowed. It gives users the "right" to co-exist without pressure.
             </p>
           </CardContent>
         </Card>

         <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-900/80 transition-colors group">
           <CardHeader>
             <CardTitle className="text-orange-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
               <MapPin size={20} /> For the Park
             </CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-zinc-400 text-sm">
               Reclaiming the space as a "Third Place" for youth, preventing it from becoming solely an elderly exercise ground.
             </p>
           </CardContent>
         </Card>

         <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-900/80 transition-colors group">
           <CardHeader>
             <CardTitle className="text-blue-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
               <Globe size={20} /> For Society
             </CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-zinc-400 text-sm">
               A blueprint for combating modern loneliness by creating digital bridges to physical "low-pressure" spaces.
             </p>
           </CardContent>
         </Card>
      </div>
    </FadeIn>
  </section>
);

// Lucide icon import fix for 'Globe' which wasn't imported in previous snippets if used
import { Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-zinc-200 font-sans selection:bg-emerald-500/30">
      <Introduction />
      <SiteSelection />
      <Persona />
      <AIValidation />
      <ReflectionOutlook />
      <Conclusions />
      
      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-xs font-mono uppercase tracking-widest">
        © 2026 Tainan Park Digital Third Space • Clydinite • Team #2
      </footer>
    </div>
  );
}