import { Sparkles, Users, MapPin, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "../components/components";

export const Conclusions = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-800">
    <FadeIn>
      <div className="text-center mb-16">
        <Sparkles className="mx-auto text-emerald-400 mb-6" size={48} />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Redefining "Connection"</h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          This project proves that for the "Digital Island" generation, connection doesn't always mean conversation. 
          Sometimes, it just means <span className="text-white bg-emerald-500/20 px-2 rounded">feeling safe enough to be alone, together.</span>
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
