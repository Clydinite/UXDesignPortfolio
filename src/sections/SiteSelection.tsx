import { MapPin, User, Calculator, Terminal, Shield, Eye, Users, Activity } from 'lucide-react';
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from 'react-katex';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, SectionHeader, MermaidDiagram, DataLink } from "../components/components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const IMAGES = {
  nightMarket: "/images/night_market.png",
  yingTong: "/images/ying_tong_community.png",
  tainanPark: "/images/tainan_park.png",
  miroBoard: "/images/behavioral_analysis_dimensions.png",
};

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-zinc-800 overflow-hidden font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        </div>
        <DataLink path="research/user_behavior_dimension_analysis.ipynb" label="analysis.ipynb" />
      </div>
      <div className="p-2">
        <SyntaxHighlighter
          language="python"
          style={vscDarkPlus}
          customStyle={{ background: 'transparent', padding: '1rem' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const pythonCode = `
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

data = {
    'Scale': [
        'Negative vs Positive Emotion', 'No Tech vs Using Tech', 'Alone vs Group',
        'Stationary vs Fast Moving', 'Distracted vs Focused', 'Uncomfortable vs Comfortable',
        'Short vs Long Stay', 'Aimless vs Purposeful', 'No vs Yes Facility Interaction'
    ],
    '1': [5.0, 4.1, 2.5, 9.1, 4.8, 5.4, 2.0, 0.7, 7.7],
    '2': [8.8, 8.9, 9.5, 4.1, 3.7, 9.2, 2.5, 3.5, 3.1],
    '3': [10.0, 9.6, 8.4, 4.9, 4.3, 10.0, 9.8, 8.5, 3.7],
    '4': [5.8, 1.1, 10.0, 1.7, 10.0, 7.6, 9.6, 7.5, 9.8],
    '5': [6.2, 1.4, 9.8, 0.1, 9.7, 9.8, 10.0, 7.9, 10.0],
    '6': [3.5, 0.5, 4.6, 9.6, 7.0, 6.0, 1.5, 5.7, 10.0],
    '7': [9.2, 1.7, 9.1, 6.1, 1.8, 8.2, 5.9, 3.1, 2.3],
    '8': [8.3, 3.6, 0.6, 7.9, 9.0, 4.7, 7.8, 5.2, 0.8],
    '9': [1.5, 5.8, 5.7, 2.3, 0.8, 0.0, 6.8, 2.7, 1.5],
    '10': [9.6, 0.0, 7.1, 9.8, 9.5, 9.6, 9.3, 9.7, 9.5],
    '11': [7.4, 7.9, 6.9, 3.4, 3.0, 8.5, 8.8, 9.2, 4.3],
    '12': [6.7, 2.3, 0.0, 10.0, 9.9, 6.8, 4.3, 10.0, 7.0]
}

from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler

df_orig = pd.DataFrame(data)
df_transposed = df_orig.set_index('Scale').transpose()
df_transposed.index.name = 'Point'

# Standardize the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df_transposed)

# Apply DBSCAN
dbscan = DBSCAN(eps=3.0, min_samples=2)
dbscan_labels = dbscan.fit_predict(X_scaled)

# Let's see how DBSCAN behaved with a few eps values
eps_test = [1.5, 2.0, 2.5, 3.0, 3.5]
for e in eps_test:
    l = DBSCAN(eps=e, min_samples=2).fit_predict(X_scaled)
    print(f"eps={e}: {l}")
`

export const SiteSelection = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-800">
    <SectionHeader
      phase="Phase 01: Discovery"
      title="Field Work & Site Selection"
      subtitle="From divergent site scanning to convergent field observation. I led the data digitization effort to ensure our design was grounded in reality, not just intuition."
    />

    <div className="space-y-32">
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
            We evaluated three potential sites. I personally gathered information on the Ying-tong Community (銀同社區), finding fascination in its potential for a "Sound Narrative" system to capture historic memory.
            However, the group consensus leaned towards <strong className="text-white">Tainan Park</strong>. I accepted this pivot to focus on a deeper psychological problem: <b>Social Anxiety in Public Spaces</b>, with the following rationale:
          </p>
          <p className="text-zinc-400 max-w-3xl leading-relaxed mb-8">
            For us, the most critical factor was its De-identified nature. At a night market, you are a customer; in a residential community, you are a neighbor; but in a park, you are simply yourself. Because the burden of social roles is lifted, we can observe people in their most authentic states—whether that manifests as anxiety, relaxation, or solitude.
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
      </div>

      <FadeIn delay={0.4}>
        <div className="mt-8bg-zinc-900 rounded-xl overflow-x-auto">
          <MermaidDiagram chart={`
graph LR
    %% The Three Proposals
    P1[Night Market <br/>Commercial Context]
    P2[Ying-tong Community <br/>Historic Sound Narrative]
    P3[Tainan Park <br/>State of Being]

    %% The Decision Point
    DECISION{Team <br/>Consensus}

    %% The Selected Path
    RESULT[Focus: De-identification <br/>& Social Anxiety]

    %% Connections
    P1 --> DECISION
    P2 --> DECISION
    P3 --> DECISION

    DECISION ===>|Selected| RESULT

    %% Styling
    style P1 stroke:#fb923c,stroke-width:2px
    style P2 stroke:#3b82f6,stroke-width:2px
    style P3 stroke:#10b981,stroke-width:2px
    style DECISION fill:#18181b,stroke:#52525b,color:#fff
    style RESULT fill:#064e3b,stroke:#10b981,color:#fff`} />
        </div>
      </FadeIn>

      {/* 2. My Observation Data (U4-U6) */}
      <div className="space-y-8">
        <FadeIn>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <User className="text-emerald-500" /> My Field Observations
            </h3>
            <DataLink path="research/field_study.csv" label="field_study.csv" />
          </div>
          <p className="text-zinc-400 max-w-3xl leading-relaxed mt-4">
            I stationed myself in a pavilion high in the middle of the park for hours, and collected observations from the "Territory Owners" - the elders who define the park's unwritten rules.
            We did not focus on a specific problem initially, so I documented all users I could observe. Here are three users (U4, U5, U6) that I personally observed and recorded:
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:bg-zinc-900/80 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-zinc-400 border-zinc-700">User U4</Badge>
                  <User size={20} className="text-zinc-600" />
                </div>
                <CardTitle className="text-white text-lg mt-2">The Pavilion Guard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-400 text-sm italic">"60s male. Smoking, drinking water, observing."</p>
                <ul className="space-y-2 text-xs text-zinc-500 list-disc pl-4">
                  <li>Places belongings to claim territory.</li>
                  <li>Body language: Squatting on chair (Occupying space).</li>
                  <li>Social: Waves to others but remains stationary.</li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:bg-zinc-900/80 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-zinc-400 border-zinc-700">User U5</Badge>
                  <User size={20} className="text-zinc-600" />
                </div>
                <CardTitle className="text-white text-lg mt-2">The Card Player</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-400 text-sm italic">"60s male. Focused on cards, strategic."</p>
                <ul className="space-y-2 text-xs text-zinc-500 list-disc pl-4">
                  <li>Ritualistic behavior: Sorting, tapping cards.</li>
                  <li>Intense focus (Eye contact on game).</li>
                  <li>Guarded: Looks at observers (me) with suspicion.</li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Card className="bg-zinc-900 border-zinc-800 h-full hover:bg-zinc-900/80 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-zinc-400 border-zinc-700">User U6</Badge>
                  <User size={20} className="text-zinc-600" />
                </div>
                <CardTitle className="text-white text-lg mt-2">The Exerciser</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-400 text-sm italic">"70s female. With husband, chatty."</p>
                <ul className="space-y-2 text-xs text-zinc-500 list-disc pl-4">
                  <li>High spatial awareness (Noticed fireworks/neighbors).</li>
                  <li>Direct Interaction: Approached me to ask "Why are you studying here?"</li>
                  <li>Territorial: Questioning "outsiders" (students).</li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* 3. The Result: Analysis & Clusters */}
      <div className="gap-16 items-start">
        <div className="space-y-8">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="text-orange-400" />
              <h3 className="text-2xl font-bold text-white">Mathematical Analysis</h3>
            </div>

            <div className="space-y-6">
              <p className="text-zinc-400 text-sm leading-relaxed">
                We then quantified our observations by placing users on a 9-dimensional scale to find clusters of similar behaviors.
                Instead of letting intuitive observations guide us, I digitized the user behavioral observations into a CSV dataset, then used <b>DBSCAN</b> to cluster them based on 9 behavioral dimensions (Movement, Interaction, Focus, etc.) to identify natural groupings.
              </p>

              <MermaidDiagram chart={`
                  graph LR
                      %% Step 1: Input
                      A[Miro Board<br/>Qualitative Notes] -- "9D Dimensional<br/>Scoring" --> B[Spatial Behavioral Diagram]
                      B -- "Digitization<br/>to CSV" --> C[(field_study.csv)]

                      %% Step 2: Processing
                      C -- "StandardScaler<br/>Normalization" --> D[Feature Matrix]

                      %% Step 3: Algorithm
                      D -- "DBSCAN<br/>eps=3.0" --> E{Python Analysis}

                      %% Step 4: Output
                      E --> F1[4 Clusters]
                      E --> F2[2 Outliers]

                      %% Step 5: Interpretation
                      F1 --> G[Interpretation of Clusters]

                      %% Styling
                      style A fill:#fff,stroke:#000,color:#000
                      style B fill:#27272a,stroke:#52525b,color:#fff
                      style D fill:#064e3b,stroke:#10b981,color:#fff
                      style G fill:#1e3a8a,stroke:#3b82f6,color:#fff`} />

              <div className="mt-6 p-4 bg-white rounded-xl border border-zinc-200">
                <img src={IMAGES.miroBoard} alt="Miro board" className="w-full h-full object-contain" />
                <p className="text-center text-xs text-zinc-400 mt-2 font-mono">The initial Miro board of the user behavior dimensional analysis</p>
              </div>

              <CodeBlock code={pythonCode} />

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                <div className="flex justify-center mb-6 text-white text-lg overflow-x-auto py-2">
                  <BlockMath math="D(P_1, P_2) = \sqrt{\sum_{i=1}^{9} (x_{1_i} - x_{2_i})^2}" />
                </div>
                <p className="text-zinc-500 text-xs font-mono">
                  <span className="text-emerald-400">Optimization:</span> I found that <InlineMath math="\epsilon=3.0" /> was the perfect threshold to define a "Social Safety Radius".
                </p>
              </div>

            </div>
          </FadeIn>
        </div>

        <div className="space-y-8 mt-12">
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Output: 4 Behavioral Clusters</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 items-stretch w-full">
              {/* Group A: High-Freq Flow */}
              <FadeIn delay={0.1} className="w-full h-full">
                <Card className="group relative bg-zinc-950 border-zinc-800 w-full h-full overflow-hidden hover:border-red-500/50 transition-all duration-500 flex flex-col">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500" />
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Activity size={20} className="text-red-500" />
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">CLUSTER_0</span>
                    </div>
                    <CardTitle className="text-white text-base font-bold">High-Freq Flow</CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex-grow space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {['U1', 'U6', 'U8', 'U12'].map(u => (
                        <span key={u} className="text-[10px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">{u}</span>
                      ))}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      High movement, low stationary interaction. They use the park as a <span className="text-zinc-200">route</span>, not a destination.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Group B: Closed Social */}
              <FadeIn delay={0.2} className="w-full h-full">
                <Card className="group relative bg-zinc-950 border-zinc-800 w-full h-full overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Users size={20} className="text-blue-500" />
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">CLUSTER_1</span>
                    </div>
                    <CardTitle className="text-white text-base font-bold">Closed Social</CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex-grow space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {['U2', 'U7'].map(u => (
                        <span key={u} className="text-[10px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">{u}</span>
                      ))}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Couples or close friends. High interaction <span className="text-zinc-200">within</span> the group, zero permeability for outsiders.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Group C: Static Observers */}
              <FadeIn delay={0.3} className="w-full h-full">
                <Card className="group relative bg-zinc-950 border-zinc-800 w-full h-full overflow-hidden hover:border-yellow-500/50 transition-all duration-500 flex flex-col">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500" />
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Eye size={20} className="text-yellow-500" />
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-yellow-500 bg-yellow-500/10 px-1.5 py-0.5 rounded border border-yellow-500/20">CLUSTER_2</span>
                    </div>
                    <CardTitle className="text-white text-base font-bold">Static Observers</CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex-grow space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {['U3', 'U11'].map(u => (
                        <span key={u} className="text-[10px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">{u}</span>
                      ))}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Stationary, low movement. They observe others but rarely initiate. <span className="text-yellow-500/80 font-bold">Target Audience.</span>
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Group D: Territory Owners */}
              <FadeIn delay={0.4} className="w-full h-full">
                <Card className="group relative bg-zinc-950 border-zinc-800 w-full h-full overflow-hidden hover:border-purple-500/50 transition-all duration-500 flex flex-col">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500" />
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Shield size={20} className="text-purple-500" />
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-purple-500 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">CLUSTER_3</span>
                    </div>
                    <CardTitle className="text-white text-base font-bold">Territory Owners</CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex-grow space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {['U4', 'U5'].map(u => (
                        <span key={u} className="text-[10px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">{u}</span>
                      ))}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      The Elders. They occupy space for long periods, creating <span className="text-zinc-200">invisible barriers</span> for younger users.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);