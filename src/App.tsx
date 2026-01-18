import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RoughNotation } from 'react-rough-notation';
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
  Map as MapIcon,
  ArrowRight,
  BrainCircuit,
  MessageSquare,
  Cpu,
  ShieldCheck,
  Users,
  Search,
  Zap,
  Quote,
  Lightbulb,
  Telescope,
  Globe,
  ChevronRight,
  ChevronLeft,
  FileText,
  Layout
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn, SectionHeader, MermaidDiagram } from './components/components';

// --- Constants & Config ---
const GITHUB_DATA_URL = "https://github.com/Clydinite/UXDesignPresentation/tree/main/data";

const IMAGES = {
  nightMarket: "/images/night_market.png",
  yingTong: "/images/ying_tong_community.png",
  tainanPark: "/images/tainan_park.png",
  radar: "/images/behavioral_analysis_dimensions.png",
  personaProfile: "/images/persona/persona_profile.png",
  persona1: "/images/persona/persona1.png",
  persona2: "/images/persona/persona2.png",
  persona3: "/images/persona/persona3.png",
  persona4: "/images/persona/persona4.png",
  persona5: "/images/persona/persona5.png",
  persona6: "/images/persona/persona6.png",
  persona7: "/images/persona/persona7.png",
  persona8: "/images/persona/persona8.png",
  webWelcome: "/images/website/Screenshot_20251214_022316.jpg",
  webActivities: "/images/website/Screenshot_20251214_022322.jpg",
  webFilter: "/images/website/Screenshot_20251214_022417.jpg",
  webProfileEmpty: "/images/website/Screenshot_20251214_022533.jpg",
  webProfileFilled: "/images/website/Screenshot_20260102_002522.jpg",
  webSafety: "/images/website/Screenshot_20260101_220657.jpg",
  webFriends: "/images/website/Screenshot_20260101_220653.jpg",
  webDetailBad: "/images/website/Screenshot_20251214_022350.jpg",
  webDetailGood: "/images/website/Screenshot_20251214_022447.jpg"
};

// --- Helper Components ---

const DataLink = ({ path, label }: { path: string, label?: string }) => (
  <a 
    href={`${GITHUB_DATA_URL}/${path}`} 
    target="_blank" 
    rel="noreferrer"
    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors border-b border-zinc-800 hover:border-emerald-500 pb-0.5"
  >
    <FileText size={10} />
    {label || path}
  </a>
);

const StoryCarousel = () => {
  const steps = [
    { 
      img: IMAGES.persona1, 
      title: "SCENE 01: Isolation", 
      subtitle: "孤單的觀察者",
      desc: "16 歲的楊子萱，升上高中後發現小圈圈已固化。性格害羞的她，常常獨自一人站在走廊，看著同學們三五成群，渴望連結卻不知如何開口。" 
    },
    { 
      img: IMAGES.persona2, 
      title: "SCENE 02: The Void", 
      subtitle: "渴望與退縮",
      desc: "回到房間滑著 IG，看到國中好友都有了新生活。「只有我被留下了嗎？」她想加入班上話題，但每次走近都覺得尷尬，只好選擇退縮。" 
    },
    { 
      img: IMAGES.persona3, 
      title: "SCENE 03: Confusion", 
      subtitle: "迷失在選擇中",
      desc: "想參加社團，但布告欄海報資訊不透明。「萬一裡面的人跟我不合怎麼辦？」對於內向者，資訊不對稱就是巨大的風險。" 
    },
    { 
      img: IMAGES.persona4, 
      title: "SCENE 04: Discovery", 
      subtitle: "發現新契機",
      desc: "轉角偶遇「台南公園輕社交」海報。主打「無壓力、不尷尬」。這不是強迫變外向的訓練，而是一個安心的入口。她掃描了 QR code。" 
    },
    { 
      img: IMAGES.webWelcome, 
      title: "SCENE 05: Onboarding", 
      subtitle: "初次接觸",
      desc: "打開 App，柔和的介面讓她鬆了一口氣。但點開「探索活動」，琳瑯滿目的卡片讓她猶豫：「這真的適合我嗎？」" 
    },
    { 
      img: IMAGES.webDetailBad, 
      title: "SCENE 06: Hesitation", 
      subtitle: "嘗試與卻步",
      desc: "點開一個「大地遊戲」，標籤寫著「高互動、適合外向者」。她立刻感到壓力：「這種場合我一定會搞砸。」她差點想關掉 App。" 
    },
    { 
      img: IMAGES.webFilter, 
      title: "SCENE 07: Control", 
      subtitle: "掌握主控權",
      desc: "發現「社交強度篩選器」！她將強度拉到最低。出現了「靜態攝影散步」。標籤：#新手友善 #不用自我介紹。這正是她要的。" 
    },
    { 
      img: IMAGES.webDetailGood, 
      title: "SCENE 08: Commitment", 
      subtitle: "建立自我與承諾",
      desc: "填寫了去個人化的檔案（不用寫自傳，只需選標籤）。看到留言區大家都很友善，她終於按下「參加」。" 
    },
    { 
      img: IMAGES.persona5, 
      title: "SCENE 09: Anxiety", 
      subtitle: "出發前的焦慮",
      desc: "活動當天，她在公園入口徘徊，想臨陣脫逃。此時手機跳出通知：「別緊張，我們在涼亭等你喔！」這則訊息給了她最後的勇氣。" 
    },
    { 
      img: IMAGES.persona6, 
      title: "SCENE 10: Welcome", 
      subtitle: "溫暖的迎接",
      desc: "抵達現場，沒有預期的大場面。主揪微笑揮手，大家只是自然地點頭。沒有強迫自我介紹的環節，她放下了心中的大石。" 
    },
    { 
      img: IMAGES.persona7, 
      title: "SCENE 11: Connection", 
      subtitle: "自然的連結",
      desc: "黃昏時分，大家沿著燕湖漫步。不需要刻意找話題，一起拍夕陽就是最好的交流。她發現，原來「連結」可以這麼安靜。" 
    },
    { 
      img: IMAGES.persona8, 
      title: "SCENE 12: Belonging", 
      subtitle: "收穫與歸屬",
      desc: "活動結束的小野餐。她不再是走廊上的透明人。她找到了一個可以「做自己」的小圈圈。她終於跨出了那一步。" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => setCurrentIndex((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative aspect-[16/9] md:aspect-[21/9] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* Image Side */}
            <div className="md:w-3/5 h-2/3 md:h-full relative overflow-hidden">
              <img 
                src={steps[currentIndex].img} 
                alt={steps[currentIndex].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/90 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent md:hidden" />
            </div>

            {/* Content Side */}
            <div className="md:w-2/5 h-1/3 md:h-full p-8 md:p-12 flex flex-col justify-center bg-zinc-900 text-left relative z-10">
              <div className="mb-2">
                <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">{steps[currentIndex].title}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{steps[currentIndex].subtitle}</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {steps[currentIndex].desc}
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex gap-1">
                  {steps.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-emerald-500" : "w-2 bg-zinc-700"}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button onClick={prevStep} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-emerald-500 hover:text-black transition-colors backdrop-blur-sm z-20">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextStep} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-emerald-500 hover:text-black transition-colors backdrop-blur-sm z-20">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// --- Sections ---

const Introduction = () => (
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
            "TainanPark Activity Platform is a school project that explores how a digital platform could help teenagers socialize in a way that feels <RoughNotation type="highlight" show={true} color="#065f46">low-pressure, comfortable, and true to their personalities</RoughNotation>."
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
             <a href={GITHUB_DATA_URL} className="hover:text-emerald-400 flex items-center gap-2 transition-colors">
               <Database size={14} /> Raw Data Repo
             </a>
          </div>
        </FadeIn>
      </div>

      {/* Right: Key Contributions Card */}
      <div className="lg:col-span-5">
        <FadeIn delay={0.4}>
          <Card className="bg-zinc-900/80 border-zinc-800 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={120} />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-white">My Contributions</CardTitle>
              <CardDescription>Lead Architect & Developer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                  <Presentation size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Presentation</h4>
                  <p className="text-zinc-400 text-sm">Created the slide deck using Slidev and delivered the final presentation.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Web Development</h4>
                  <p className="text-zinc-400 text-sm">Built the fully functional React/Vite prototype from scratch.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Data & Analysis</h4>
                  <p className="text-zinc-400 text-sm">Digitized observations from Miro and performed DBSCAN clustering analysis.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  </section>
);

const SiteSelection = () => (
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
            We evaluated three potential sites. <RoughNotation type="underline" show={true} color="#3b82f6" strokeWidth={2}>I personally scouted the <b>Ying-tong Community (銀同社區)</b></RoughNotation>, finding fascination in its potential for a "Sound Narrative" system to capture historic memory. 
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
           <div className="mt-8 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
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
                 We started by mapping behaviors on Miro sticky notes. However, I realized we needed <RoughNotation type="underline" show={true} color="#10b981">mathematical proof</RoughNotation> of the "Social Vacuum." I took the initiative to <b>digitize 12 user groups into a structured CSV dataset</b>, quantifying qualitative behaviors into 9 dimensions (1-10 scale).
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

<span className="text-zinc-500"># Result: 4 Distinct Behavioral Groups identified</span></pre>
                 </CardContent>
               </Card>
            </div>
         </FadeIn>
      </div>

      {/* 3. The Result */}
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="space-y-4">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">The Output: Behavioral Clusters</h3>
                <DataLink path="research/user_behavior_dimension_analysis_summary.md" label="Summary" />
             </div>
             <p className="text-zinc-400 text-sm leading-relaxed">
               My code successfully clustered the users, revealing a clear gap between the "High-Energy Groups" and "Isolated Individuals." This justified our design direction: we needed a <b>bridge</b>.
             </p>
             <ul className="space-y-2 text-sm text-zinc-500">
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"/> Group A: High-Freq Flow</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"/> Group B: Closed Social</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500 rounded-full"/> Group C: Static Observers</li>
               <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"/> Group D: Territory Owners</li>
             </ul>
           </div>
           <div className="bg-white p-4 rounded-2xl border border-zinc-200">
             <img src={IMAGES.radar} alt="Radar Charts" className="w-full h-full object-contain" />
           </div>
        </div>
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
        subtitle="I facilitated the creation of 'Yang Zi-Xuan' using GenAI to visualize our data-driven findings. We didn't just write a story; we built a life."
      />

      <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Left: Persona Card */}
        <div className="lg:col-span-5 space-y-6">
          <FadeIn>
            <div className="relative rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 group">
              <img 
                src={IMAGES.personaProfile} 
                alt="Yang Zi-Xuan" 
                className="w-full aspect-square object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="flex justify-between items-end">
                    <h3 className="text-4xl font-bold text-white mb-1">Yang Zi-Xuan</h3>
                    <DataLink path="research/user_persona.md" label="Persona.md" />
                 </div>
                 <p className="text-emerald-400 font-mono text-sm">16 y.o. • Shy • Tech-Reliant</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
             <Card className="bg-zinc-900 border-zinc-800">
               <CardHeader>
                 <CardTitle className="text-white text-sm font-bold flex items-center gap-2"><BrainCircuit size={16} className="text-purple-400"/> My Contribution: GenAI Creation</CardTitle>
               </CardHeader>
               <CardContent className="text-xs text-zinc-400 space-y-2">
                 <p>1. Wrote the first persona draft (`persona_draft.html`) using Gemini.</p>
                 <p>2. Prompted the AI to generate the specific "Design Scenario" images shown below.</p>
                 <p>3. Iteratively refined the story based on group feedback.</p>
               </CardContent>
             </Card>
          </FadeIn>
        </div>

        {/* Right: Frameworks */}
        <div className="lg:col-span-7 space-y-8 pt-4">
          <FadeIn delay={0.2}>
             <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">Stakeholder Map</h3>
                  <DataLink path="research/stakeholder_map.md" label="View Map" />
               </div>
               <MermaidDiagram chart={`graph TD
    Main((Yang Zi-Xuan))
    Main --- |Pressure| CramTeacher[Cram School]
    Main --- |Anxiety| Peers[Established Groups]
    Main -.-> |Escape| Algorithms[Instagram/Threads]
    Main -.-> |Conflict| Elders[Park Territory Owners]
    Algorithms --- TechCorp
    Elders --- Manager[Park Management]
    
    style Main fill:#10b981,stroke:#fff,color:#000`} />
             </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid sm:grid-cols-2 gap-6">
               <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                 <div className="flex justify-between mb-4">
                    <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Jobs To Be Done</h4>
                    <DataLink path="research/jobs_to_be_done.md" label="JTBD" />
                 </div>
                 <ul className="space-y-3 text-sm text-zinc-300">
                   <li className="flex gap-2"><ArrowRight size={14} className="mt-1 text-emerald-500"/> "I want to know the 'vibe' before I join."</li>
                   <li className="flex gap-2"><ArrowRight size={14} className="mt-1 text-emerald-500"/> "I need an 'Exit Strategy'."</li>
                 </ul>
               </div>
               <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/30 transition-colors">
                 <div className="flex justify-between mb-4">
                    <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest">How Might We</h4>
                    <DataLink path="research/how_might_we.csv" label="HMW" />
                 </div>
                 <p className="text-lg text-white font-medium leading-snug">
                   How might we provide companionship without the burden of active social performance?
                 </p>
               </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* The 12-Step Story Carousel */}
      <div className="mt-24 space-y-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-zinc-800 pb-6">
            <div>
              <h3 className="text-3xl font-bold text-white">The Design Scenario: A 12-Step Journey</h3>
              <p className="text-zinc-400 text-sm mt-2">I visualized the persona's journey into a narrative carousel, integrating the React Prototype to give the story a concrete form.</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="border-zinc-700 text-zinc-400">Storyboarding</Badge>
              <Badge variant="outline" className="border-zinc-700 text-zinc-400">Prototyping</Badge>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <StoryCarousel />
        </FadeIn>
      </div>
    </div>
  </section>
);

const AIValidation = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader 
      phase="Phase 03: Validation" 
      title="AI Assisted Validation" 
      subtitle="We didn't just guess. I engineered a verification loop using Gemini-3.0 to pressure-test the website prototype against the persona's deepest anxieties."
    />

    <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
      <div className="lg:col-span-5 space-y-8">
        <FadeIn>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Cpu className="text-emerald-500" /> My Verification Pipeline
                </CardTitle>
                <DataLink path="report/07_persona.md" label="Report" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm mb-6">
                I fed the Persona story and the website code directly into Gemini. I developed an <b>"OOC (Out of Character)"</b> protocol to filter out technical hallucinations and get raw emotional feedback.
              </p>
              <MermaidDiagram chart={`graph TD
    A[Persona Story] --> C((Gemini AI))
    B[Website Code] --> C
    C --> D{Response Eval}
    D -- Tech Hallucination --> E[My OOC Command]
    D -- Genuine Insight --> F[Design Iteration]
    E --> C
    
    style E fill:#b91c1c,stroke:#fff,color:#fff
    style F fill:#10b981,stroke:#fff,color:#fff`} />
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20">
            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
              <Lightbulb size={18} /> My Key Insight
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              "The AI (as Zi-Xuan) felt the original profile page was too invasive. It asked: 'Why do I have to write a bio? I don't know what to say.'"
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="lg:col-span-7">
        <FadeIn delay={0.3}>
          <div className="relative">
             {/* Comparison Slider Effect (Simulated) */}
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                   <div className="relative rounded-2xl overflow-hidden border-2 border-red-500/30">
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">BEFORE</div>
                      <img src={IMAGES.webProfileEmpty} className="w-full opacity-60" alt="Before" />
                   </div>
                   <p className="text-red-400 text-xs font-mono text-center">Text Heavy = High Pressure</p>
                </div>
                <div className="space-y-3">
                   <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                      <div className="absolute top-3 left-3 bg-emerald-500 text-black text-[10px] font-bold px-2 py-1 rounded">AFTER (My Fix)</div>
                      <img src={IMAGES.webProfileFilled} className="w-full" alt="After" />
                   </div>
                   <p className="text-emerald-400 text-xs font-mono text-center">Visual Tags = Low Friction</p>
                </div>
             </div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-4 rounded-full border border-white/10 shadow-2xl">
                <ArrowRight className="text-white" size={24} />
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
      subtitle="Moving beyond static interfaces."
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
              Taking this feedback, the next version of the platform will feature an interactive, real-time map of Tainan Park, integrating the spatial data I collected during the field study.
            </p>
            <div className="aspect-video rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
               <MapIcon className="text-zinc-700 absolute opacity-20" size={100} />
               <span className="text-emerald-500 text-xs font-mono uppercase tracking-widest bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">Coming Soon v2.0</span>
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
          Sometimes, it just means <RoughNotation type="highlight" show={true} color="#065f46">feeling safe enough to be alone, together.</RoughNotation>
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