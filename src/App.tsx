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
  Terminal,
  Quote,
  Database,
  FileJson,
  Presentation,
  User,
  MapPin,
  GitCommit,
  ArrowRight,
  BrainCircuit,
  Search,
  Cpu
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, SectionHeader, MermaidDiagram } from './components/components';

// --- Sections ---

const Hero = () => (
  <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden px-6 pt-20 bg-black">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
    
    <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          UX Research Case Study • Team #2
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
          Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Third Space
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-xl font-light leading-relaxed mb-10">
          Transforming Tainan Park into a low-pressure social interface for shy teenagers. A quantitative approach to bridging the "Digital Island" gap.
        </p>
        
        {/* Individual Contribution Section */}
        <div className="mt-8 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
           <div className="text-emerald-400 text-xs uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
             <User size={14} /> My Role: Lead Architect & Developer
           </div>
           <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
             I independently handled the <strong className="text-white">Data Science (Python/DBSCAN)</strong>, <strong className="text-white">UI/UX Design (React/Tailwind)</strong>, and <strong className="text-white">Research Synthesis</strong>. I also served as the primary presenter, creating the slides with <strong className="text-white">Slidev</strong>.
           </p>
           <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
             <div className="space-y-1">
               <div className="text-white font-medium flex items-center gap-2">
                 <Database size={14} className="text-blue-400"/> Data Analysis
               </div>
               <p className="text-zinc-500 text-xs">Digitized Miro field notes to Python datasets.</p>
             </div>
             <div className="space-y-1">
               <div className="text-white font-medium flex items-center gap-2">
                 <Presentation size={14} className="text-orange-400"/> Presentation
               </div>
               <p className="text-zinc-500 text-xs">Designed & Presented with Slidev.</p>
             </div>
           </div>
        </div>
      </motion.div>

      {/* Personal Photo Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative h-[700px] w-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm group"
      >
        {/* TODO: Personal Photo Area */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-zinc-600 gap-4 bg-zinc-950">
           <div className="w-40 h-40 border-2 border-dashed border-zinc-700 rounded-full flex items-center justify-center">
             <User size={48} />
           </div>
           <p className="font-mono text-sm uppercase tracking-widest text-emerald-500/50">TODO: Insert Personal Photo Here</p>
        </div>
        
        {/* Decorative Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
           <div className="font-mono text-emerald-400 text-xs mb-2">Project Lead</div>
           <div className="text-white text-3xl font-bold">Your Name</div>
           <p className="text-zinc-400 text-sm mt-2">
             Responsible for end-to-end execution: Data Modeling → UX Design → Frontend Deployment.
           </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const PhaseOne = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      phase="Phase 01: Discovery" 
      title="Field Work & Site Selection" 
      subtitle="My journey from initial site scanning to deep data digitization. How I advocated for a harder, more psychological research topic."
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
              In the early stages, I personally scouted the <strong className="text-white">Ying-tong Community (銀同社區)</strong>. I was fascinated by its potential for "Sound Narrative" using NFC to tell the stories of old streets. 
            </p>
            <div className="p-4 border-l-2 border-red-500 bg-red-500/5 rounded-r-lg">
              <p className="text-zinc-300 text-xs italic">
                However, after discussing with the group, we realized it leaned too heavily towards "Social Design" rather than UX interaction. <b>I accepted the group consensus to pivot.</b>
              </p>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We ultimately chose <strong className="text-white">Tainan Park</strong> because of its "De-individualized" nature—it was the perfect lab to observe pure social anxiety without the noise of commercial transactions found in Night Markets.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn className="md:col-span-7" delay={0.2}>
           <Card className="bg-zinc-900 border-zinc-800">
             <CardHeader>
               <CardTitle className="text-white text-sm font-mono">Site Decision Matrix</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="grid grid-cols-3 gap-4 text-center">
                 <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 opacity-50">
                   <div className="text-orange-400 font-bold mb-2 text-xs">Night Market</div>
                   <div className="text-zinc-500 text-[10px]">Efficiency Focus</div>
                 </div>
                 <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 opacity-50">
                   <div className="text-blue-400 font-bold mb-2 text-xs">Ying-tong Community</div>
                   <div className="text-zinc-500 text-[10px]">My Proposal (Rejected)</div>
                 </div>
                 <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/50 scale-110 shadow-xl shadow-emerald-900/20">
                   <div className="text-emerald-400 font-bold mb-2 text-xs">Tainan Park</div>
                   <div className="text-emerald-200/70 text-[10px]">Selected: "State of Being"</div>
                 </div>
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
               <img src="/images/tainan_park.png" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm" />
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
                 Initially, our group used Miro sticky notes to map behaviors. However, I realized that to find a true "Social Vacuum," we needed mathematical precision, not just intuition.
               </p>
               <div className="p-4 bg-zinc-900 rounded-xl border-l-4 border-blue-500">
                 <h4 className="text-white text-xs font-bold mb-2 flex items-center gap-2"><GitCommit size={12}/> My Action</h4>
                 <p className="text-zinc-300 text-xs">
                   I took the initiative to <b>digitize all our Miro observations</b> into a structured CSV dataset (`field_study.csv`), quantifying qualitative behaviors into 9 dimensions (1-10 scale).
                 </p>
               </div>
               <p className="text-zinc-400 text-sm leading-relaxed">
                 Specifically, I spent hours sitting in the pavilion observing <b>Users U4, U5, and U6</b> (the elderly groups), documenting their "territorial" behaviors like playing cards and organizing tea sets, which became the baseline for "High Comfort" users.
               </p>
            </div>
         </FadeIn>
      </div>

      {/* 3. Analysis Code */}
      <FadeIn>
        <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 border-r border-zinc-800">
               <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Terminal size={16} className="text-emerald-500"/> The Python Analysis</h3>
               <p className="text-zinc-400 text-sm mb-6">
                 With the data digitized, I wrote a Python script using <b>DBSCAN (Density-Based Spatial Clustering)</b>. I experimented with different `eps` values and found that `eps=3.0` was the perfect parameter to define the "Social Safety Radius".
               </p>
               <Code2 className="text-zinc-600 mb-2" size={24} />
               <pre className="text-[10px] leading-relaxed font-mono text-emerald-300 bg-black p-4 rounded-lg overflow-x-auto border border-white/10">
{`# My Logic for Clustering
data = pd.read_csv('field_study.csv')
X_scaled = StandardScaler().fit_transform(data)

# eps=3.0 determined experimentally
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
               <p className="text-black/50 text-[10px] mt-4 text-center max-w-xs">
                 The output of my code: 12 users clustered into 4 groups, revealing the "Social Vacuum" in between.
               </p>
            </div>
          </div>
        </Card>
      </FadeIn>
    </div>
  </section>
);

const PhaseTwo = () => (
  <section className="py-32 px-6 bg-zinc-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto">
       <SectionHeader 
        phase="Phase 02: Definition" 
        title="Constructing the Persona" 
        subtitle="I synthesized the data-driven clusters into a human story. 'Yang Zi-Xuan' is not a creative writing exercise; she is the 'Isolated Observer' cluster personified."
      />

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <FadeIn>
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
               <img 
                 src="/images/persona/persona1.png" 
                 alt="Yang Zi-Xuan" 
                 className="w-full aspect-[4/3] object-cover"
               />
               <CardHeader>
                 <CardTitle className="text-white text-2xl">Yang Zi-Xuan</CardTitle>
                 <CardDescription>16 y.o. • Shy • Observant</CardDescription>
               </CardHeader>
               <CardContent>
                 <p className="text-zinc-400 text-sm italic">
                   "I want to find a small circle that doesn't feel forced. I need a reason to stay in the park that isn't just surviving the heat."
                 </p>
               </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn delay={0.2}>
             <div className="grid grid-cols-2 gap-4">
                <img src="/images/persona/persona2.png" className="rounded-xl border border-zinc-800 opacity-60 hover:opacity-100 transition-opacity" alt="Persona in room"/>
                <img src="/images/persona/persona3.png" className="rounded-xl border border-zinc-800 opacity-60 hover:opacity-100 transition-opacity" alt="Persona at board"/>
             </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 space-y-8">
           <FadeIn delay={0.3}>
             <h3 className="text-2xl font-bold text-white mb-6">Stakeholder Mapping</h3>
             <p className="text-zinc-400 text-sm mb-6">
               To understand her pressure points, I created this system map showing how academic pressure and digital algorithms trap her in a loop of isolation.
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

           <FadeIn delay={0.4}>
             <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                   <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-2">Job To Be Done</span>
                   <p className="text-white text-sm">"I want to know the vibe before I join so I don't feel awkward."</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                   <span className="text-blue-400 text-xs font-bold uppercase tracking-widest block mb-2">How Might We</span>
                   <p className="text-white text-sm">"How might we provide companionship without the burden of active social performance?"</p>
                </div>
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
        subtitle="I built the entire React application myself. The design focuses on lowering friction through 'De-individualization' and 'Vibe-based Sorting'."
      />

      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <FadeIn className="order-2 lg:order-1">
             <div className="relative group perspective-1000">
               <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
               <img 
                 src="/images/website/Screenshot_20251214_022417.jpg" 
                 alt="Activity Filter UI" 
                 className="relative rounded-xl border border-white/10 shadow-2xl w-full rotate-y-2 group-hover:rotate-y-0 transition-transform duration-700"
               />
             </div>
           </FadeIn>
           <FadeIn className="order-1 lg:order-2 space-y-8">
             <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
               <Code2 size={32} />
             </div>
             <div>
                <h3 className="text-3xl font-bold text-white mb-2">My Contribution: The "Social Slider"</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  I coded the filtering logic in `Activities.tsx`. Instead of standard categories, I created a <span className="text-white">Social Intensity Slider</span> that filters data based on the "Energy" required to participate.
                </p>
             </div>
             <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-400">
               <p className="text-emerald-400 mb-2">// Activities.tsx</p>
               <p>const levelMatch = (activity.socialLevel + 1) &gt;= socialLevel[0] && (activity.socialLevel + 1) &lt;= socialLevel[1];</p>
             </div>
           </FadeIn>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         <FadeIn>
           <Card className="bg-zinc-900 border-zinc-800 h-full group hover:bg-zinc-900/80 transition-all">
             <CardHeader>
               <CardTitle className="text-white flex items-center gap-2">
                 <Users className="text-purple-400" /> De-individualized Profile
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-zinc-400 text-sm mb-6 h-12">
                 I designed the profile page to use visual tags rather than text bios, reducing the pressure of self-introduction.
               </p>
               <div className="rounded-lg overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-500">
                 <img src="/images/website/Screenshot_20260102_002522.jpg" alt="Profile UI" className="w-full object-cover" />
               </div>
             </CardContent>
           </Card>
         </FadeIn>
         
         <FadeIn delay={0.2}>
           <Card className="bg-zinc-900 border-zinc-800 h-full group hover:bg-zinc-900/80 transition-all">
             <CardHeader>
               <CardTitle className="text-white flex items-center gap-2">
                 <ShieldCheck className="text-orange-400" /> Safety & Exit Guides
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-zinc-400 text-sm mb-6 h-12">
                 I implemented a safety map and "Exit Guides" (pre-written excuses) to give users the "right to leave".
               </p>
               <div className="rounded-lg overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-500">
                 <img src="/images/website/Screenshot_20260101_220657.jpg" alt="Safety UI" className="w-full object-cover" />
               </div>
             </CardContent>
           </Card>
         </FadeIn>

         <FadeIn delay={0.4}>
            <Card className="bg-zinc-900 border-zinc-800 h-full flex flex-col justify-center items-center text-center p-8 bg-[url('/images/website/Screenshot_20260101_220653.jpg')] bg-cover bg-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors" />
               <div className="relative z-10">
                 <Sparkles className="mx-auto text-yellow-400 mb-6" size={48} />
                 <h4 className="text-xl font-bold text-white mb-4">From "Stranger" to "Familiar"</h4>
                 <p className="text-zinc-300 mb-6">
                   Screenshot of the "Friends Note" feature I built to help her remember details about people.
                 </p>
               </div>
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
        subtitle="I engineered a verification loop using Gemini 3.0 CLI. I didn't just 'ask' AI; I created a protocol to filter out hallucinations."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn className="space-y-8">
          <div className="flex gap-4 mb-4">
            <Badge variant="outline" className="border-blue-500/30 text-blue-400 gap-2"><Cpu size={12}/> Gemini 3.0</Badge>
            <Badge variant="outline" className="border-purple-500/30 text-purple-400 gap-2"><BrainCircuit size={12}/> Prompt Engineering</Badge>
          </div>
          
          <h3 className="text-3xl font-bold text-white">My "OOC" (Out of Character) Protocol</h3>
          <p className="text-zinc-400 leading-relaxed">
            When I fed my code to the AI, it started "hallucinating"—the Persona started talking about React variables and `Profile.tsx`. 
            I realized this invalidated the test.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I implemented an <b>OOC Command</b>: <i>"OOC: Please do not mention any code. End users cannot see that. Speak strictly from the UI perspective."</i> This forced the AI to filter its own output, giving me valid UX feedback.
          </p>
          
          <div className="space-y-4">
            <div className="p-6 bg-black/40 rounded-xl border-l-4 border-red-500">
               <div className="text-xs text-red-400 font-bold uppercase mb-2 flex items-center gap-2"><FileJson size={12}/> AI Hallucination (Before Fix)</div>
               <p className="text-zinc-500 italic">"I think the <b>Profile.tsx</b> component is good, but maybe the <b>socialMedia variable</b> should be optional."</p>
            </div>
            <div className="p-6 bg-black/40 rounded-xl border-l-4 border-emerald-500">
               <div className="text-xs text-emerald-400 font-bold uppercase mb-2 flex items-center gap-2"><MessageSquare size={12}/> AI Output (After My OOC Prompt)</div>
               <p className="text-zinc-300 italic">"I don't want to give my Instagram to strangers right away. It makes me feel exposed. Can I hide it?"</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="relative">
           <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
           <div className="relative bg-zinc-950 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="mb-6 border-b border-white/5 pb-4">
                <h4 className="text-white font-bold mb-1">My Verification Pipeline</h4>
                <p className="text-zinc-500 text-xs">Visualizing the Dual-Track AI strategy I designed.</p>
              </div>
              
              <MermaidDiagram chart={`graph LR
    A[Persona Data] --> C((Gemini AI))
    B[Website Code] --> C
    C --> D{Human Eval}
    
    D -- Technical Leak --> E1[My OOC Protocol]
    D -- Good Insight --> F[Code Iteration]
    
    E1 --> C
    
    style C fill:#2563eb,color:#fff
    style D fill:#10b981,color:#fff`} />

              <div className="mt-8 space-y-4">
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">AI</div>
                    <div className="bg-blue-500/10 p-3 rounded-r-xl rounded-bl-xl text-blue-200 text-sm">
                       "I'm afraid if I go to the 'Sunset Walk', I won't know anyone and will just stand there awkwardly."
                    </div>
                 </div>
                 <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">Dev</div>
                    <div className="bg-emerald-500/10 p-3 rounded-l-xl rounded-br-xl text-emerald-200 text-sm">
                       *Action:* I added the "Pre-event Chat" feature to allow low-friction warm-ups.
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
           <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
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
    <div className="bg-black min-h-screen text-zinc-200 selection:bg-emerald-500/30 font-sans">
      <Hero />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <PhaseFour />
      <Conclusion />
      
      <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-xs font-mono uppercase tracking-widest">
        © 2026 Tainan Park Digital Third Space • Team #2 • Designed & Developed by Your Name
      </footer>
    </div>
  );
}
