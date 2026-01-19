import { Introduction } from './sections/Introduction';
import { SiteSelection } from './sections/SiteSelection';
import { Persona } from './sections/Persona';
import { AIValidation } from './sections/AIValidation';
import { ReflectionOutlook } from './sections/ReflectionOutlook';
import { Conclusions } from './sections/Conclusions';

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
         2026 Tainan Park Activity Platform • Clydinite • Team #2
      </footer>
    </div>
  );
}