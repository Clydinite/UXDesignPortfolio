import { FadeIn, SectionHeader } from "@/components/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, School, Telescope, Map as MapIcon } from "lucide-react";

export const ReflectionOutlook = () => (
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