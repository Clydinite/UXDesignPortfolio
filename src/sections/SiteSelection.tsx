import { Badge } from "@/components/ui/badge";
import { FadeIn, DataLink, SectionHeader, MermaidDiagram } from "@/components/components";
import { MapPin, User, GitCommit, Terminal, Calculator } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IMAGES } from '@/components/constants';

export const SiteSelection = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-800">
    <SectionHeader 
      phase="Phase 01: Discovery" 
      title="Field Work & Site Selection" 
      subtitle="From divergent site scanning to convergent field observation. I led the data digitization effort to ensure our design was grounded in reality, not just intuition."
    />
    
    <div className="space-y-24">
      {/* 1. Site Selection Narrative */}
      <div className="space-y-8">
        <FadeIn>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <MapPin className="text-emerald-500" /> Site Selection Process
            </h3>
            <DataLink path="research/research.md" label="research.md" />
          </div>
          <p className="text-zinc-400 max-w-3xl leading-relaxed mb-8">
            We evaluated three potential sites. I personally scouted the <b>Ying-tong Community (銀同社區)</b>, finding fascination in its potential for a "Sound Narrative" system to capture historic memory. 
            However, the group consensus leaned towards <strong className="text-white">Tainan Park</strong>. I accepted this pivot to focus on a deeper psychological problem: <b>Social Anxiety in Public Spaces</b>, which the park's "De-individualized" nature highlighted perfectly.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <div className="group relative rounded-2xl overflow-hidden aspect-video border border-zinc-800 hover:border-zinc-600 transition-all">
              <img src={IMAGES.nightMarket} alt="Night Market" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <span className="text-orange-400 font-bold mb-1">Night Market</span>
                <span className="text-zinc-400 text-xs">Rejected: Too functional/commercial.</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden aspect-video border-2 border-blue-500/30 hover:border-blue-500 transition-all">
              <div className="absolute top-3 right-3 z-10">
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">My Proposal</Badge>
              </div>
              <img src={IMAGES.yingTong} alt="Ying-tong Community" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <span className="text-blue-400 font-bold mb-1">Ying-tong Community</span>
                <span className="text-zinc-400 text-xs">Rejected: Focus on "Social Design" vs UX.</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="group relative rounded-2xl overflow-hidden aspect-video border-2 border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all">
              <div className="absolute top-3 right-3 z-10">
                <Badge className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold">Selected</Badge>
              </div>
              <img src={IMAGES.tainanPark} alt="Tainan Park" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <span className="text-emerald-400 font-bold mb-1">Tainan Park</span>
                <span className="text-zinc-400 text-xs">Selected: "State of Being" & "Digital Island".</span>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.4}>
           <div className="mt-8 p-4 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto">
              <MermaidDiagram chart={`graph LR
    A[Initial Scan] --> B{Team Consensus}
    B -- Rejected --> C[Yin-tong Community]
    B -- Selected --> D[Tainan Park]
    D --> E[Deep Field Study]
    
    style D fill:#064e3b,stroke:#10b981,color:#fff
    style C fill:#3f3f46,stroke:#52525b,color:#a1a1aa`} />
           </div>
        </FadeIn>
      </div>

      {/* 2. My Contribution: Field Study & Data Digitization */}
      <div className="grid md:grid-cols-12 gap-12 items-center bg-zinc-900/30 p-8 rounded-3xl border border-white/5">
         <FadeIn className="md:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src={IMAGES.tainanPark} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Pavilion View" />
               <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col p-6 text-center">
                  <User size={48} className="text-zinc-400 mb-4" />
                  <h4 className="text-white font-bold text-lg">My Observation Post</h4>
                  <p className="text-zinc-400 text-xs mt-2">
                    I spent hours in the <span className="text-white font-bold">Pavilion (涼亭)</span> observing Users U4, U5, & U6 (The Elderly).
                  </p>
               </div>
            </div>
         </FadeIn>

         <FadeIn className="md:col-span-7" delay={0.2}>
            <div className="space-y-6">
               <div className="flex items-center justify-between mb-2">
                 <div className="flex items-center gap-3">
                    <GitCommit className="text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">The Double Diamond: From Miro to Code</h3>
                 </div>
                 <DataLink path="research/field_study.csv" label="field_study.csv" />
               </div>
               <p className="text-zinc-400 text-sm leading-relaxed">
                 We started by mapping behaviors on Miro sticky notes. However, I realized we needed <span className="text-emerald-400">mathematical proof</span> of the "Social Vacuum." I took the initiative to <b>digitize 12 user groups into a structured CSV dataset</b>, quantifying qualitative behaviors into 9 dimensions (1-10 scale).
               </p>
               
               <Card className="bg-black border-zinc-800 font-mono text-xs shadow-2xl">
                 <CardHeader className="py-3 border-b border-zinc-800">
                   <div className="flex justify-between items-center">
                     <span className="text-emerald-400 flex items-center gap-2"><Terminal size={14}/> user_behavior_analysis.ipynb</span>
                     <div className="flex gap-2">
                        <DataLink path="research/user_behavior_dimension_analysis.ipynb" label="View Code" />
                     </div>
                   </div>
                 </CardHeader>
                 <CardContent className="p-4 overflow-x-auto">
                   <pre className="text-zinc-300">
<span className="text-purple-400">from</span> sklearn.cluster <span className="text-purple-400">import</span> DBSCAN
<span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd

<span className="text-zinc-500"># 1. Load the digitized Miro data</span>
data = pd.read_csv(<span className="text-green-400">'field_study.csv'</span>)
X_scaled = StandardScaler().fit_transform(data)

<span className="text-zinc-500"># 2. My Analysis: Determining Social Safety Radius</span>
<span className="text-zinc-500"># eps=3.0 was found to be the tipping point</span>
dbscan = DBSCAN(eps=<span className="text-orange-400">3.0</span>, min_samples=<span className="text-orange-400">2</span>)
clusters = dbscan.fit_predict(X_scaled)

<span className="text-zinc-500"># Output: 4 Distinct Behavioral Groups identified</span></pre>
                 </CardContent>
               </Card>
            </div>
         </FadeIn>
      </div>

      {/* 3. The Result: Miro Input vs Code Output */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-8 items-start">
           <div className="space-y-6">
             <div className="flex items-center gap-2">
                <Calculator className="text-orange-400"/>
                <h3 className="text-xl font-bold text-white">Mathematical Logic</h3>
             </div>
             
             <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <p className="text-zinc-400 text-sm mb-4">
                  I used <b>Euclidean Distance</b> across 9 dimensions to calculate similarity between user groups. 
                </p>
                <div className="flex justify-center my-6 text-white text-lg overflow-x-auto">
                  <BlockMath math="D(P_1, P_2) = \sqrt{\sum_{i=1}^{9} (x_{1i} - x_{2i})^2}" />
                </div>
                <p className="text-zinc-400 text-sm">
                  <b>Eps Tweaking:</b> I tested <InlineMath math="\epsilon \in [1.5, 3.5]" />. <br/>
                  At <InlineMath math="\epsilon=2.5" />, clusters were too fragmented. <br/>
                  At <InlineMath math="\epsilon=3.0" />, we found the <b>4 optimal groups</b> covering 80% of users.
                </p>
             </div>

             <div className="space-y-2 text-sm text-zinc-500">
               <h4 className="text-white font-bold mb-2">Final Output (The 4 Groups)</h4>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"/> Group A: High-Freq Flow (U1, U6, U8, U12)</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"/> Group B: Closed Social (U2, U7)</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500 rounded-full"/> Group C: Static Observers (U3, U11)</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"/> Group D: Territory Owners (U4, U5)</li>
             </div>
           </div>
           
           <div className="space-y-4">
             <div className="bg-white p-4 rounded-2xl border border-zinc-200">
               <div className="text-black/50 text-[10px] font-mono mb-2 uppercase tracking-widest">Input: The Digitized Miro Board</div>
               <img src={IMAGES.radar} alt="Radar Charts" className="w-full h-full object-contain" />
             </div>
             <p className="text-zinc-500 text-xs italic text-center">
               Fig 1.1: Visualizing the 9-dimensional state of 12 user groups.
             </p>
           </div>
        </div>
      </FadeIn>
    </div>
  </section>
);