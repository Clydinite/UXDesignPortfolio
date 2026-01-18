import { Badge } from "@/components/ui/badge";
import { FadeIn, DataLink, SectionHeader, MermaidDiagram } from "@/components/components";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { IMAGES } from '@/components/constants';

export const Persona = () => (
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
          <Carousel className="w-full bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden">
            <CarouselContent>
              {[
                { 
                  img: IMAGES.persona1, 
                  title: "SCENE 01: Isolation", 
                  subtitle: "The Quiet Observer",
                  desc: "16-year-old Yang Zi-Xuan, a high school freshman, feels invisible. She stands in the corridor, watching established friend groups, wanting to connect but paralyzed by the fear of intrusion." 
                },
                { 
                  img: IMAGES.persona2, 
                  title: "SCENE 02: The Void", 
                  subtitle: "Digital Retreat",
                  desc: "Back in her room, she doom-scrolls through Instagram. Seeing her middle school friends moving on without her, she retreats further into the digital void." 
                },
                { 
                  img: IMAGES.persona3, 
                  title: "SCENE 03: Confusion", 
                  subtitle: "The Paradox of Choice",
                  desc: "She stands before the school bulletin board. The clubs look loud and demanding. 'What if I don't fit in?' The lack of information creates a wall of anxiety." 
                },
                { 
                  img: IMAGES.persona4, 
                  title: "SCENE 04: Discovery", 
                  subtitle: "A New Possibility",
                  desc: "She spots a poster: 'Tainan Park Light Social Platform'. It promises low-pressure interaction. No forced extroversion. Just being there. She scans the QR code." 
                },
                { 
                  img: IMAGES.webWelcome, 
                  title: "SCENE 05: Onboarding", 
                  subtitle: "The Digital Entry",
                  desc: "She opens the App I built. The UI is calm and welcoming. She clicks 'Explore Activities', greeted by a curated list of park events." 
                },
                { 
                  img: IMAGES.webDetailBad, 
                  title: "SCENE 06: Hesitation", 
                  subtitle: "The Wrong Vibe",
                  desc: "She clicks on a 'Scavenger Hunt'. The tag says 'High Interaction'. Her heart sinks. This is too much pressure. She almost closes the app." 
                },
                { 
                  img: IMAGES.webFilter, 
                  title: "SCENE 07: Control", 
                  subtitle: "The Filter Innovation",
                  desc: "Then she finds the 'Social Intensity Slider'. She drags it to 'Low'. A new event appears: 'Sunset Photography Walk'. Tags: #IntrovertFriendly #NoSelfIntro." 
                },
                { 
                  img: IMAGES.webDetailGood, 
                  title: "SCENE 08: Commitment", 
                  subtitle: "Safe Commitment",
                  desc: "She views the event details. It explicitly states: 'We just walk and take photos. Silence is okay.' Feeling understood, she creates a profile and clicks 'Join'." 
                },
                { 
                  img: IMAGES.persona5, 
                  title: "SCENE 09: Anxiety", 
                  subtitle: "The Threshold",
                  desc: "The day arrives. She stands at the park entrance, anxiety spiking. Her phone buzzes. It's a notification: 'Don't worry, we are at the pavilion!'." 
                },
                { 
                  img: IMAGES.persona6, 
                  title: "SCENE 10: Welcome", 
                  subtitle: "Soft Landing",
                  desc: "She approaches. The host smiles and waves. No loud cheering, no forced ice-breakers. Just a nod of acknowledgement. She feels her shoulders relax." 
                },
                { 
                  img: IMAGES.persona7, 
                  title: "SCENE 11: Connection", 
                  subtitle: "Co-presence",
                  desc: "Walking along the Tainan Park lake at dusk. They take photos of the sky. Conversation is sparse but comfortable. She realizes connection doesn't require constant talking." 
                },
                { 
                  img: IMAGES.persona8, 
                  title: "SCENE 12: Belonging", 
                  subtitle: "A Third Space",
                  desc: "The activity ends with a quiet picnic. She isn't the center of attention, but she is part of the circle. She has found her Third Space." 
                }
              ].map((step, index) => (
                <CarouselItem key={index}>
                  <div className="grid md:grid-cols-2 h-[600px]">
                    <div className="relative h-full bg-black group overflow-hidden">
                      <img 
                        src={step.img} 
                        alt={step.title} 
                        className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" 
                      />
                    </div>
                    <div className="p-12 flex flex-col justify-center space-y-6 bg-zinc-900 text-left">
                      <Badge variant="outline" className="w-fit border-emerald-500 text-emerald-400 font-mono tracking-widest">{step.title}</Badge>
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