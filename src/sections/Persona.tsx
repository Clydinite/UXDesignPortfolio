import { BrainCircuit, Settings, Layout, UserCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn, SectionHeader, MermaidDiagram, DataLink } from "../components/components";

const IMAGES = {
  personaProfile: "/images/persona/persona_profile.png",
  persona1: "/images/persona/persona1.png",
  persona2: "/images/persona/persona2.png",
  persona3: "/images/persona/persona3.png",
  persona4: "/images/persona/persona4.png",
  persona5: "/images/persona/persona5.png",
  persona6: "/images/persona/persona6.png",
  persona7: "/images/persona/persona7.png",
  persona8: "/images/persona/persona8.png",
  
  // Website Screenshots
  webWelcome: "/images/website/Screenshot_20251214_022316.jpg",
  webActivities: "/images/website/Screenshot_20251214_022322.jpg",
  webScroll: "/images/website/Screenshot_20251214_022335.jpg",
  webDetailBad: "/images/website/Screenshot_20251214_022350.jpg",
  webFilter: "/images/website/Screenshot_20251214_022417.jpg",
  webDetailGood: "/images/website/Screenshot_20251214_022433.jpg", // The "friendly" one
  webComments: "/images/website/Screenshot_20251214_022447.jpg",
  webProfileEmpty: "/images/website/Screenshot_20251214_022533.jpg",
  webProfileFilled: "/images/website/Screenshot_20251214_022548.jpg", // Corrected
  webMyActivities: "/images/website/Screenshot_20251214_022612.jpg", // Corrected
  
  // AI Suggestions
  webNotifications: "/images/website/Screenshot_20260101_220643.jpg",
  webFriends: "/images/website/Screenshot_20260101_220653.jpg",
  webSafety: "/images/website/Screenshot_20260101_220657.jpg",
  webNewProfile: "/images/website/Screenshot_20260102_002522.jpg"
};

const StorySlideVisual = ({ images, color = "emerald" }: { images: string[], color?: string }) => {
  // Color mapping for the glow effect
  const glowColors: Record<string, string> = {
    emerald: "bg-emerald-500/10",
    red: "bg-red-500/10",
    orange: "bg-orange-500/10",
    yellow: "bg-yellow-500/10",
    green: "bg-green-500/10",
    teal: "bg-teal-500/10",
    blue: "bg-blue-500/10",
    indigo: "bg-indigo-500/10",
    purple: "bg-purple-500/10",
    pink: "bg-pink-500/10",
  };
  const glowClass = glowColors[color] || "bg-white/10";

  if (images.length === 1) {
    return (
      <div className="relative h-full w-full flex items-center justify-center p-8 group">
        <div className={`absolute inset-10 rounded-full blur-3xl ${glowClass} opacity-50`} />
        <img 
          src={images[0]} 
          className="relative max-h-full max-w-full rounded-2xl shadow-2xl border border-white/10 transform rotate-1 transition-transform duration-700 group-hover:rotate-0 object-contain" 
          alt="Scene Visual"
        />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="relative h-full w-full flex items-center justify-center p-8 group">
        <div className={`absolute inset-10 rounded-full blur-3xl ${glowClass} opacity-50`} />
        {/* Back Image */}
        <img 
          src={images[0]} 
          className="absolute h-[80%] w-auto max-w-[60%] rounded-2xl shadow-xl border border-white/10 transform -rotate-3 -translate-x-12 opacity-80 transition-all duration-700 group-hover:rotate-0 group-hover:translate-x-[-3rem] group-hover:opacity-100 object-contain"
          alt="Scene Visual Back"
        />
        {/* Front Image */}
        <img 
          src={images[1]} 
          className="absolute h-[85%] w-auto max-w-[60%] rounded-2xl shadow-2xl border border-white/20 transform rotate-3 translate-x-4 z-10 transition-all duration-700 group-hover:rotate-0 group-hover:translate-x-[1rem] object-contain" 
          alt="Scene Visual Front"
        />
      </div>
    );
  }

  if (images.length >= 3) {
    return (
      <div className="relative h-full w-full flex items-center justify-center p-8 group">
        <div className={`absolute inset-10 rounded-full blur-3xl ${glowClass} opacity-50`} />
        {/* Left */}
        <img 
          src={images[0]} 
          className="absolute h-[75%] w-auto max-w-[50%] rounded-2xl shadow-xl border border-white/10 transform -rotate-6 -translate-x-20 opacity-70 transition-all duration-700 group-hover:-rotate-3 group-hover:translate-x-[-4rem] group-hover:opacity-100 object-contain"
          alt="Scene Visual Left"
        />
        {/* Right */}
        <img 
          src={images[2]} 
          className="absolute h-[75%] w-auto max-w-[50%] rounded-2xl shadow-xl border border-white/10 transform rotate-6 translate-x-20 opacity-70 transition-all duration-700 group-hover:rotate-3 group-hover:translate-x-[4rem] group-hover:opacity-100 object-contain"
          alt="Scene Visual Right"
        />
        {/* Center */}
        <img 
          src={images[1]} 
          className="absolute h-[85%] w-auto max-w-[60%] rounded-2xl shadow-2xl border border-white/20 transform z-20 transition-all duration-700 group-hover:scale-105 object-contain" 
          alt="Scene Visual Center"
        />
      </div>
    );
  }

  return null;
};

export const Persona = () => (
  <section className="py-32 px-6 bg-zinc-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        phase="Phase 02: Definition"
        title="Persona & Design Scenario"
        subtitle="I facilitated the creation of the persona named Yang Zi-Xuan using GenAI to visualize our data-driven findings. We didn't just write a pitch for the platform; we wrote a story."
      />

      <FadeIn>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <BrainCircuit className="text-purple-400" /> My Contribution
          </h3>
        </div>
        <div className="text-zinc-400 max-w-3xl leading-relaxed mb-8 space-y-2">
          <p>1. Wrote the first persona draft and visualization. <DataLink path="research/persona_draft.html" label="persona_draft.html"/></p>
          <p>2. Prompted the AI to generate the specific "Design Scenario" images shown below.</p>
          <p>3. Iteratively refined the story based on group feedback.</p>
        </div>
      </FadeIn>

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
                <p className="text-emerald-400 font-mono text-sm">16 y.o. • High School Freshmen</p>
                <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                  Shy and introspective, Zi-Xuan often feels like an outsider in social settings. She yearns for connection but is held back by anxiety and the fear of being misunderstood.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right: Frameworks */}
        <div className="lg:col-span-7 space-y-8 pt-4">
          <FadeIn delay={0.2}>
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Stakeholder Map</h3>
                <DataLink path="research/stakeholder_map.md" label="stakeholder_map.md" />
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
                  <DataLink path="research/jobs_to_be_done.md" label="jobs_to_be_done.md" />
                </div>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-2"><ArrowRight size={14} className="mt-1 text-emerald-500" /> "I want to know the 'vibe' before I join."</li>
                  <li className="flex gap-2"><ArrowRight size={14} className="mt-1 text-emerald-500" /> "I need an 'Exit Strategy'."</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/30 transition-colors">
                <div className="flex justify-between mb-4">
                  <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest">How Might We</h4>
                  <DataLink path="research/how_might_we.csv" label="how_might_we.csv" />
                </div>
                <p className="text-sm text-white font-medium">
                  How might we provide companionship without the burden of active social performance?
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Website Creation Section */}
      <div className="mb-32 space-y-12">
        <FadeIn>
          <div className="flex items-end justify-between border-b border-zinc-800 pb-6 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">The UX Solution</h3>
              <p className="text-zinc-400 max-w-2xl">
                To solve Zi-Xuan's "Social Vacuum," I built a React front-end mockup with React.
                The core logic was to <span className="text-emerald-400">lower the threshold</span> of interaction, not force it.
              </p>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="border-blue-500 text-blue-400">React</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-400">Tailwind</Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-400">Framer Motion</Badge>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1}>
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-teal-500/50 transition-all group">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-3 group-hover:scale-110 transition-transform">
                  <Settings size={20} />
                </div>
                <CardTitle className="text-base text-white">Intensity Filter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Zi-Xuan's biggest fear is "Accidental High-Pressure." I implemented a slider to filter activities by <span className="text-teal-400">Social Energy</span> (1-5).
                </p>
                <div className="rounded-lg overflow-hidden border border-zinc-800 aspect-[9/16] relative bg-black/50">
                   <img src={IMAGES.webFilter} className="absolute inset-0 w-full h-full object-cover" alt="Filter UI" />
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-orange-500/50 transition-all group">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                  <Layout size={20} />
                </div>
                <CardTitle className="text-base text-white">Decentralized Host</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Anyone can be a host. The form encourages "Vibe-based" descriptions rather than rigid schedules.
                </p>
                <div className="rounded-lg overflow-hidden border border-zinc-800 aspect-[9/16] relative bg-black/50">
                   <img src={IMAGES.webProfileFilled} className="absolute inset-0 w-full h-full object-cover" alt="Host UI" />
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-purple-500/50 transition-all group">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                  <UserCircle size={20} />
                </div>
                <CardTitle className="text-base text-white">Visual Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Replaced "Bio Text" (high pressure) with <span className="text-purple-400">Visual Tags</span> & <span className="text-purple-400">Personality Sliders</span>.
                </p>
                <div className="rounded-lg overflow-hidden border border-zinc-800 aspect-[9/16] relative bg-black/50">
                   <img src={IMAGES.webNewProfile} className="absolute inset-0 w-full h-full object-cover" alt="Profile UI" />
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-blue-500/50 transition-all group">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                <CardTitle className="text-base text-white">Safety & Exit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Integrated "Exit Guides" and "Safety Maps" directly into the navigation to reassure anxious users.
                </p>
                <div className="rounded-lg overflow-hidden border border-zinc-800 aspect-[9/16] relative bg-black/50">
                   <img src={IMAGES.webSafety} className="absolute inset-0 w-full h-full object-cover" alt="Safety UI" />
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* The 12-Step Story Carousel */}
      <div className="space-y-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-zinc-800 pb-6">
            <div>
              <h3 className="text-3xl font-bold text-white">The Design Scenario: A 12-Step Journey</h3>
              <p className="text-zinc-400 text-sm mt-2">I visualized the persona's journey into a 12-step story, integrating the React Prototype to give the story a concrete form.</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="border-zinc-700 text-zinc-400">Storyboarding</Badge>
              <Badge variant="outline" className="border-zinc-700 text-zinc-400">Prototyping</Badge>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Carousel className="w-full bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden">
            <CarouselContent>
              {[
                { 
                  images: [IMAGES.persona1], 
                  color: "gray",
                  title: "SCENE 01: Isolation", 
                  subtitle: "The Quiet Observer",
                  desc: "16-year-old Yang Zi-Xuan, a high school freshman, feels invisible. She stands in the corridor, watching established friend groups, wanting to connect but paralyzed by the fear of intrusion." 
                },
                { 
                  images: [IMAGES.persona2], 
                  color: "red",
                  title: "SCENE 02: The Void", 
                  subtitle: "Digital Retreat",
                  desc: "Back in her room, she doom-scrolls through Instagram. Seeing her middle school friends moving on without her, she retreats further into the digital void." 
                },
                { 
                  images: [IMAGES.persona3], 
                  color: "orange",
                  title: "SCENE 03: Confusion", 
                  subtitle: "The Paradox of Choice",
                  desc: "She stands before the school bulletin board. The clubs look loud and demanding. 'What if I don't fit in?' The lack of information creates a wall of anxiety." 
                },
                { 
                  images: [IMAGES.persona4], 
                  color: "yellow",
                  title: "SCENE 04: Discovery", 
                  subtitle: "A New Possibility",
                  desc: "She spots a poster: 'Tainan Park Light Social Platform'. It promises low-pressure interaction. No forced extroversion. Just being there. She scans the QR code." 
                },
                { 
                  images: [IMAGES.webWelcome, IMAGES.webActivities], 
                  color: "green",
                  title: "SCENE 05: Onboarding", 
                  subtitle: "The Digital Entry",
                  desc: "She opens the App I built. The UI is calm and welcoming. She clicks 'Explore Activities', greeted by a curated list of park events." 
                },
                { 
                  images: [IMAGES.webScroll, IMAGES.webDetailBad], 
                  color: "red",
                  title: "SCENE 06: Hesitation", 
                  subtitle: "The Wrong Vibe",
                  desc: "She clicks on a 'Scavenger Hunt'. The tag says 'High Interaction'. Her heart sinks. This is too much pressure. She almost closes the app." 
                },
                { 
                  images: [IMAGES.webFilter, IMAGES.webDetailGood], 
                  color: "teal",
                  title: "SCENE 07: Control", 
                  subtitle: "The Filter Innovation",
                  desc: "Then she finds the 'Social Intensity Slider'. She drags it to 'Low'. A new event appears: 'Sunset Photography Walk'. Tags: #IntrovertFriendly #NoSelfIntro." 
                },
                { 
                  images: [IMAGES.webComments, IMAGES.webProfileFilled, IMAGES.webMyActivities], 
                  color: "indigo",
                  title: "SCENE 08: Commitment", 
                  subtitle: "Safe Commitment",
                  desc: "She views the event details. It explicitly states: 'We just walk and take photos. Silence is okay.' Feeling understood, she creates a profile and clicks 'Join'." 
                },
                { 
                  images: [IMAGES.persona5], 
                  color: "blue",
                  title: "SCENE 09: Anxiety", 
                  subtitle: "The Threshold",
                  desc: "The day arrives. She stands at the park entrance, anxiety spiking. Her phone buzzes. It's a notification: 'Don't worry, we are at the pavilion!'." 
                },
                { 
                  images: [IMAGES.persona6], 
                  color: "indigo",
                  title: "SCENE 10: Welcome", 
                  subtitle: "Soft Landing",
                  desc: "She approaches. The host smiles and waves. No loud cheering, no forced ice-breakers. Just a nod of acknowledgement. She feels her shoulders relax." 
                },
                { 
                  images: [IMAGES.persona7], 
                  color: "purple",
                  title: "SCENE 11: Connection", 
                  subtitle: "Co-presence",
                  desc: "Walking along the Tainan Park lake at dusk. They take photos of the sky. Conversation is sparse but comfortable. She realizes connection doesn't require constant talking." 
                },
                { 
                  images: [IMAGES.persona8], 
                  color: "pink",
                  title: "SCENE 12: Belonging", 
                  subtitle: "A Third Space",
                  desc: "The activity ends with a quiet picnic. She isn't the center of attention, but she is part of the circle. She has found her Third Space." 
                }
              ].map((step, index) => (
                <CarouselItem key={index}>
                  <div className="grid md:grid-cols-2 h-[1000px] aspect-auto border-r border-white/5 last:border-0">
                    <div className="bg-black/40">
                      <StorySlideVisual images={step.images} color={step.color} />
                    </div>
                    <div className="p-12 flex flex-col justify-center space-y-6 bg-zinc-900/50 text-left">
                      <Badge variant="outline" className={`w-fit border-${step.color}-500 text-${step.color}-400 font-mono tracking-widest`}>
                        {step.title}
                      </Badge>
                      <h3 className="text-4xl font-bold text-white">{step.subtitle}</h3>
                      <p className="text-lg text-zinc-400 leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-black/50 border-white/10 text-white hover:bg-emerald-500 hover:text-black" />
            <CarouselNext className="right-4 bg-black/50 border-white/10 text-white hover:bg-emerald-500 hover:text-black" />
          </Carousel>
        </FadeIn>
      </div>
    </div>
  </section>
);
