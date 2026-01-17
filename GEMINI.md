# Role
Act as an Expert Frontend Developer and UX Engineer. Your goal is to build a high-end, single-page Case Study website using React, Tailwind CSS, Framer Motion, and Lucide Icons for the user's portfolio on a UX design project.

# Context
I (hereandafter, "I", "my", not "user") am the Project Lead and Web Developer. I independently handled the Data Science (Python/DBSCAN), UI/UX Design (React/Tailwind) for the website, and Research synthesis (digitalizing the data from Miro). The teacher requires this portfolio to be a distinct, individual work, separate from the group slides. All the data can be accessed by `data/`. The images can be found in `images/` (`images/persona/images.md` and `images/website/description.md` to save on tokens. They are textual descriptions instead of real images). The slides can be accessed from `data/research/slides.md`. The reports of specific highlights can be accessed in `data/report/`. The syllabus can be found in `data/research/presentation_guide.md`.

# Technical Stack
- Framework: React (Vite + SWC)
- Styling: Tailwind CSS (dark mode, glassmorphism)
- Components: Use shadcn/ui (Cards, Badges, Tabs)
- Animation: Framer Motion for scroll-triggered entry.

# Structure & Content Mapping
1. **Hero Section**: 
   - Title: "Digital Third Space: Transforming Tainan Park"
   - Subtitle: "A Quantitative UX Study on Low-Pressure Social Interaction"
   - Tagline: Focus on bridging the "Digital Island" gap for shy teenagers.
   - Add space for the my personal information, like name, age, and social media links.

2. **Phase 1: Quantitative Research (The "Brain")**:
   - Focus: Python & DBSCAN Clustering.
   - Content: Show the 9 behavioral dimensions. Explain how EPS=3.0 was chosen to define the "Social Safety Radius." 
   - Visual: Use a syntax-highlighted code block for the Python logic.

3. **Phase 2: Problem Definition (The "Heart")**:
   - Key Artifacts: JTBD (Jobs to be Done) and HMW (How Might We).
   - Insight: "How might we provide companionship without the burden of active social performance?"

4. **Phase 3: The Digital Solution (The "Face")**:
   - Showcase: The React web interface I built. 
   - Features: De-individualized profiles, location-based "Digital Islands," and low-friction interaction.
   - Visual: Create a "Browser Mockup" container for the UI screenshots.

5. **Phase 4: User Testing (The "Brain")**:
   - Focus: GAI usage. 
   - Content: Show how I used AI to made the website (`data/website` and explained in `data/research/slides.md`) with Gemini-3.0 via the CLI, and how I used Slidev to make the slides, and the decision of using React, Tailwind, and Framer Motion. The key should be how I first digitalized all the information from Miro down to AI-accessible Markdown/CSV files.
   - Visual: Use a diagram to show the process.

6. **Individual Contribution Statement**:
   - Explicitly state that I served as the Lead Architect, Developer, and Analyst, responsible for the end-to-end execution from data modeling to frontend deployment.

# Instructions for Generation
- Use a **Bento Grid** layout for the research artifacts to ensure a modern, dense information look.
- Ensure the copy is professional, using terms like "Spatial Agency," "Social Friction," and "Data-Driven Design."
- Do not use external UI libraries if possible; write clean, modular Tailwind components to avoid dependency issues.
- Use the provided context files to extract the exact wording for JTBD, HMW, and Research findings.

# Output Requirement
Please provide the complete `App.jsx` and any necessary updates to `tailwind.config.js`.