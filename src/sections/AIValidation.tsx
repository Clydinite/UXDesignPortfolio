import { Cpu, Lightbulb, ArrowRight, Shield, Bell, Users, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, SectionHeader, MermaidDiagram, DataLink } from "../components/components";

const IMAGES = {
  webProfileEmpty: "/images/website/Screenshot_20251214_022533.jpg",
  webProfileFilled: "/images/website/Screenshot_20260102_002522.jpg",
  // New features
  webFriends: "/images/website/Screenshot_20260101_220653.jpg",
  webSafety: "/images/website/Screenshot_20260101_220657.jpg",
  webNotif: "/images/website/Screenshot_20260101_220643.jpg",
  surveyPlot: "/images/survey_results_plot.png"
};

export const AIValidation = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader
      phase="Phase 03: Validation"
      title="AI Assisted Validation"
      subtitle="We didn't just guess. I engineered a verification loop using Gemini-3.0 to pressure-test the website prototype against the persona's deepest anxieties."
    />

    {/* 1. Verification Pipeline */}
    <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
      <div className="lg:col-span-5">
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Cpu className="text-orange-400" /> My Verification Pipeline
            </h3>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
            I fed the Persona story and the website code directly into Gemini.
            Since the AI was fed the website code (<DataLink path="data/website/" label="Website Code" />), the AI does not see the interface but the raw code (.tsx).
            Therefore, there's a need to filter out the out-of-character suggestions. I developed an <b>"OOC (Out of Character)"</b> protocol to filter out comment about code to get the raw emotional feedback.
          </p>

          <MermaidDiagram chart={
            `graph TD
              A[Persona Story] --> C((Gemini AI))
              B[(Website Code)] --> C
              C --> D{Response Eval}
              D -- Acted out of Character --> E[My OOC Command]
              D -- Acted in Character --> F[Design Iteration]
              E --> C
              
              style D fill:#1e3a8a,stroke:#3b82f6,color:#fff
              style E fill:#b91c1c,stroke:#fff,color:#fff
              style F fill:#10b981,stroke:#fff,color:#fff
          `} />
        </FadeIn>
      </div>

      {/* 2. Before/After Comparison */}
      <div className="lg:col-span-7 space-y-8">
        <FadeIn delay={0.2}>
          <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 mb-8">
            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
              <Lightbulb size={18} /> Key Insight: "Don't force me to write."
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              "The AI (acting as Zi-Xuan) felt the original profile page was too invasive. It asked: 'Why do I have to write a bio? I don't know what to say.'"
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden border-2 border-red-500/30 group">
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded z-10">BEFORE</div>
                  <img src={IMAGES.webProfileEmpty} className="w-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Before" />
                </div>
                <p className="text-red-400 text-xs font-mono text-center">Text Heavy = High Pressure</p>
              </div>
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)] group">
                  <div className="absolute top-3 left-3 bg-emerald-500 text-black text-[10px] font-mono px-2 py-1 rounded z-10">AFTER</div>
                  <img src={IMAGES.webProfileFilled} className="w-full transform group-hover:scale-105 transition-transform duration-500" alt="After" />
                </div>
                <p className="text-emerald-400 text-xs font-mono text-center">Sliders and Tags = Low Friction</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-2xl">
              <ArrowRight className="text-white" size={20} />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>

    {/* 3. AI Suggestions: Safety & Connection */}
    <div className="mb-24">
      <FadeIn>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Shield className="text-teal-400" /> AI Suggestions: Safety & Control
        </h3>

        <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
          I summarized the interaction with the AI and identified three core features to address Zi-Xuan's anxieties around safety, social connection, and event anxiety.
          Then, following the suggestions, I prototyped these features into the website.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-zinc-900 border-zinc-800 hover:border-teal-500/50 transition-colors group">
            <CardHeader className="pb-2">
              <CardTitle className="text-teal-400 text-sm font-bold flex items-center gap-2">
                <Users size={16} /> Friend Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/5">
                <img src={IMAGES.webFriends} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" alt="Friend Notes" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-teal-200/80 italic">"I'm afraid I'll forget who they are."</p>
                <p className="text-xs text-zinc-400">Private notes to record details about new friends, easing the anxiety of "forgetting names."</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500/50 transition-colors group">
            <CardHeader className="pb-2">
              <CardTitle className="text-red-400 text-sm font-bold flex items-center gap-2">
                <Shield size={16} /> Safety Map
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/5">
                <img src={IMAGES.webSafety} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" alt="Safety Map" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-red-300/80 italic">"I need an exit strategy."</p>
                <p className="text-xs text-zinc-400">Well-lit routes and polite "Exit Scripts" to ensure physical and psychological safety.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-500/50 transition-colors group">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-400 text-sm font-bold flex items-center gap-2">
                <Bell size={16} /> Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/5">
                <img src={IMAGES.webNotif} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" alt="Notifications" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-blue-300/80 italic">"Did I miss anything?"</p>
                <p className="text-xs text-zinc-400">Gentle reminders and feedback to counter pre-event anxiety and confirm belonging.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>
    </div>

    {/* 4. Real User Verification */}
    <FadeIn>
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="text-purple-400" />
          <h3 className="text-2xl font-bold text-white">Real User Verification</h3>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          We surveyed high school and college students to validate these features. The results showed a significant increase in "Action Willingness." I analysed the data and plotted the results.
        </p>
      </div>
    </FadeIn>

    <div className="grid md:grid-cols-2 gap-8 mt-12">
      <FadeIn delay={0.1}>
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 space-y-4">
          <h4 className="text-white font-bold text-sm">Top Rated Features</h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-xs text-zinc-400">
              <div className="mt-0.5 min-w-4 h-4 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">1</div>
              <span><b>Navigation:</b> Solved the fear of "wandering awkwardly."</span>
            </li>
            <li className="flex gap-3 text-xs text-zinc-400">
              <div className="mt-0.5 min-w-4 h-4 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">2</div>
              <span><b>Intensity Slider:</b> Users loved being able to filter out "High Energy" events.</span>
            </li>
            <li className="flex gap-3 text-xs text-zinc-400">
              <div className="mt-0.5 min-w-4 h-4 rounded bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">3</div>
              <span><b>Safety Map:</b> Practical value for night-time park usage.</span>
            </li>
          </ul>
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="bg-white p-6 rounded-2xl border border-zinc-200">
          <div className="text-black/50 text-[10px] font-mono mb-4 uppercase tracking-widest text-center">Survey Results: Willingness to Act</div>
          <img src={IMAGES.surveyPlot} alt="Survey Results" className="w-120 h-full object-contain mix-blend-multiply" />
        </div>
      </FadeIn>
    </div>
  </section>
);