import { FadeIn, DataLink, SectionHeader, MermaidDiagram } from "@/components/components";
import { Cpu, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IMAGES } from '@/components/constants';

export const AIValidation = () => (
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