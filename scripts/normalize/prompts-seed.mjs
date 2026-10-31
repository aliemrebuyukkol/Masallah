/**
 * Masallah — Comprehensive Prompt Library (Original + Masallah Optimized Prompts)
 * Covers all 24 requested prompt engineering domains across the 46 master sources.
 */

export const PROMPTS_SEED = [
  // 1. Editorial Web Design (Inspora)
  {
    id: 'prompt-inspora-editorial-monolith',
    sourceId: 'inspora',
    title: 'Editorial Monolith & Asymmetric Bento Showcase',
    description: 'Generates an art-directed dark editorial web experience with 12-column grid hairlines, display serif typography, and modular bento showcase cards inspired by Inspora references.',
    originalPrompt: 'Create a modern editorial portfolio and design archive landing page with dark theme, serif typography, and grid borders.',
    optimizedPrompt: `Act as a Principal Art Director and Creative Frontend Architect. Design and implement an editorial design archive landing page adhering to these abstracted visual systems (inspired by Inspora editorial patterns, without copying any third-party brand assets):

1. GRID & SPATIAL RHYTHM:
- 12-column CSS Grid (max-width: 1440px, 24px gap) with exposed 1px solid hairline borders (rgba(244, 243, 239, 0.08)).
- Asymmetric 7:5 hero split: left column features oversized editorial headline (clamp(2.75rem, 5.5vw, 5.25rem), line-height 0.96, tracking -0.035em); right column houses an interactive live preview stage.
- Maintain 96px–128px vertical section cadence and 8pt baseline alignment.

2. TYPOGRAPHY & CHROMATIC SYSTEM:
- Primary Surface: Obsidian (#0A0A0C); Elevated Card Surface: #111115; Primary Ink: Warm Alabaster (#F4F3EF); Muted Ink: #9A9890; Chromatic Signal Accent: Vermilion (#E85D3F).
- Pair a high-contrast editorial serif for section titles with a geometric sans for UI controls and tabular-nums monospace for index numbers (01 // 46).

3. INTERACTION & ACCESSIBILITY:
- Cards reveal subtle radial spotlight border glow on pointer move and scale media by 1.02x using cubic-bezier(0.22, 1, 0.36, 1).
- Honor @media (prefers-reduced-motion: reduce) by disabling parallax and transform scale.`,
    prompt: `Act as a Principal Art Director and Creative Frontend Architect. Design and implement an editorial design archive landing page with a 12-column exposed hairline grid, asymmetric 7:5 hero, high-contrast serif + monospace index typography, warm obsidian (#0A0A0C) palette, and reduced-motion-safe hover choreography.`,
    category: 'Design',
    tags: ['Design', 'Website', 'UI', 'Art Direction', 'Prompt'],
    source: 'Inspora',
    sourceUrl: 'https://inspora.design',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro / GPT-4o',
    exampleInput: 'Product: "Chronicle Studio" — an independent industrial & digital design practice showcasing 18 flagship hardware-software artifacts.',
    exampleOutput: 'Full Next.js + CSS Grid component featuring numbered index rail (01–18), asymmetric hero with interactive spec sheet toggle, and filterable bento archive grid.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 2. Contemporary Product Launch Landing Page (Recent Design)
  {
    id: 'prompt-recent-design-launch-page',
    sourceId: 'recent-design',
    title: 'Contemporary Developer Tool Product Launch Page',
    description: 'Blueprints a high-craft product launch page featuring interactive command-line preview, real-time telemetry bento cards, and zero-clutter visual hierarchy.',
    originalPrompt: 'Build a clean landing page for a new developer tool launch with dark mode and feature cards.',
    optimizedPrompt: `Design a contemporary product launch landing page inspired by Recent Design's modern launch showcases:
- Hero Stage: Centered badge ("v2.4 Live"), 64px tight grotesk headline, dual CTAs (Primary high-contrast + interactive CLI copy pill \`npx create-workspace@latest\`), and a 16:10 interactive browser/terminal split frame below.
- Bento Telemetry Grid: 3-column asymmetric bento layout where each card demonstrates a real interactive state (live latency graph, keyboard-navigable command list, diff viewer) rather than static decorative illustrations.
- Visual Restraint: Monochrome slate surface (#090A0F) with 1px inner border highlights (inset 0 1px 0 rgba(255,255,255,0.1)) and semantic status indicators (#10B981 emerald for live metrics).`,
    prompt: `Design a contemporary developer-tool launch page with an interactive CLI copy pill, 16:10 live workspace preview stage, and a 3-column interactive bento telemetry grid on a monochrome #090A0F surface.`,
    category: 'Design',
    tags: ['Design', 'Website', 'Landing Page', 'UI', 'Prompt'],
    source: 'Recent Design',
    sourceUrl: 'https://recent.design',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Tool: "PulseTrace" — zero-overhead edge observability & distributed request replay CLI.',
    exampleOutput: 'Responsive React landing page with interactive trace waterfall preview, copyable CLI installer with toast feedback, and 3-tier transparent pricing table.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 3. Conversion-Engineered Landing Page Architecture (Lapa Ninja)
  {
    id: 'prompt-lapa-ninja-conversion-architecture',
    sourceId: 'lapa-ninja',
    title: 'High-Conversion 8-Section Landing Page Blueprint',
    description: 'Structures a conversion-optimized SaaS landing page sequence with cognitive friction reduction, social proof placement, and objection-handling comparisons.',
    originalPrompt: 'Create a high-converting SaaS landing page with hero, features, pricing, and FAQ sections.',
    optimizedPrompt: `Architect an 8-section conversion-engineered landing page following Lapa Ninja structural patterns:
1. Above-the-Fold Hero: Specific outcome-driven headline + quantifiable subheadline + primary action CTA + instant interactive sandbox (no signup wall).
2. Trust Bar: Quantified engineering metrics (e.g. "99.99% uptime", "<12ms p99") rather than generic unverified logos.
3. Problem → Mechanism Shift: Side-by-side "Legacy Workflow vs. Automated Pipeline" visual comparison.
4. Interactive Feature Triad: 3 tabbed deep-dives linked to live UI state previews.
5. Technical Integration Proof: 12-line copyable SDK snippet with language tabs (TypeScript, Python, Go, cURL).
6. Transparent Pricing Matrix: Monthly/Annual toggle with clear usage unit calculator.
7. Objection-Handling FAQ: Accessible WAI-ARIA accordion addressing security, self-hosting, and migration.
8. Final Conversion Terminal: High-contrast bottom CTA with keyboard shortcut hint.`,
    prompt: `Architect an 8-section conversion-focused SaaS landing page featuring a "Legacy vs. Automated" comparison block, multi-language SDK preview, interactive usage pricing calculator, and accessible FAQ accordion.`,
    category: 'Design',
    tags: ['Design', 'Website', 'UX', 'Landing Page', 'Prompt'],
    source: 'Lapa Ninja',
    sourceUrl: 'https://lapa.ninja',
    model: 'Gemini 2.5 Pro / Claude 3.7 Sonnet',
    exampleInput: 'SaaS Product: Automated visual regression & accessibility gate for GitHub Pull Requests.',
    exampleOutput: 'Complete 8-section semantic HTML/React architecture with interactive PR diff simulator and ROI slider.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 4. Swiss Minimalist Editorial Grid (Minimal Gallery)
  {
    id: 'prompt-minimal-gallery-swiss-grid',
    sourceId: 'minimal-gallery',
    title: 'Swiss Architectural Grid & Bichromatic Editorial Layout',
    description: 'Creates an ultra-restraint Swiss modernist web layout relying solely on mathematical grid proportions, typographic scale, and exposed 1px rules.',
    originalPrompt: 'Design a minimalist website using Swiss grid layout and clean typography.',
    optimizedPrompt: `Build a Swiss-grid minimalist web interface inspired by Minimal Gallery editorial principles:
- Strictly prohibit decorative gradients, drop shadows, blurred glassmorphism, or stock icons.
- Construct the layout using an exposed 8-column CSS Grid where every cell is separated by a 1px solid rule.
- Use a strict bichromatic palette: Warm Paper (#F6F5F0) and Carbon Ink (#121212) in light mode, inverting to #0C0C0D and #ECEBE6 in dark mode.
- Establish hierarchy purely through typographic scale (64px / 28px / 16px / 12px uppercase tracked labels) and 50%+ negative whitespace.
- Include an interactive tabular index view that toggles seamlessly between "Grid View" and "Specification Index Table".`,
    prompt: `Build a strict Swiss-grid minimalist web interface with exposed 1px grid rules, bichromatic palette (#0C0C0D / #ECEBE6), zero decorative shadows, and a toggleable Grid vs. Specification Table index.`,
    category: 'Design',
    tags: ['Design', 'Minimalism', 'Website', 'UI', 'Prompt'],
    source: 'Minimal Gallery',
    sourceUrl: 'https://minimal.gallery',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Archive: "Typographica Monograph" — catalog of 40 open-source variable typefaces.',
    exampleOutput: 'Bichromatic Swiss grid interface with live variable font weight/width axes sliders and tabular specification index.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 5. Multi-State SaaS Application UI (UI Guana)
  {
    id: 'prompt-uiguana-multi-state-ui',
    sourceId: 'uiguana',
    title: 'Multi-State Product Interface (Empty, Loading, Error, Populated)',
    description: 'Generates production-complete application screens that explicitly implement all 5 operational states: skeleton loading, first-time empty state, validation error, partial degradation, and populated data.',
    originalPrompt: 'Create a dashboard UI component with loading and empty states.',
    optimizedPrompt: `Design and implement a production SaaS workspace view that explicitly models all 5 UI states (inspired by UI Guana interface state completeness):
1. Loading State: Layout-matched shimmer skeleton that preserves exact bounding boxes (zero CLS).
2. Empty State: Actionable onboarding card explaining *why* the view is empty, offering a 1-click "Load Sample Dataset" button and a primary creation CTA.
3. Error / Degraded State: Non-destructive inline banner with diagnostic code, timestamp, and an idempotent "Retry Request" button with exponential backoff indicator.
4. Filtered-Zero State: Distinct from initial empty state; displays active filter pills and a "Reset All Filters" action.
5. Populated State: High-density keyboard-navigable table/grid with optimistic row actions and a live state switcher toolbar so reviewers can inspect all 5 states interactively.`,
    prompt: `Implement a production SaaS workspace component modeling all 5 operational UI states (Skeleton Loading, First-Time Empty, Filtered-Zero, Error with Retry, and Populated Data) with an interactive state switcher.`,
    category: 'UI',
    tags: ['UI', 'UX', 'Component', 'Frontend', 'Prompt'],
    source: 'UI Guana',
    sourceUrl: 'https://uiguana.com',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Feature: API Webhook Delivery Inspector for a developer dashboard.',
    exampleOutput: 'TypeScript React component with discriminated union state machine (`status: "loading" | "empty" | "filtered-empty" | "error" | "ready"`) and zero layout shift.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 6. NN/g 10 Usability Heuristics Audit (Nielsen Norman Group)
  {
    id: 'prompt-nngroup-heuristic-audit',
    sourceId: 'nngroup',
    title: 'Jakob Nielsen 10 Usability Heuristics & Cognitive Load Audit',
    description: 'Performs a rigorous, evidence-based UX audit of any component or user flow against Jakob Nielsen’s 10 Usability Heuristics with severity ratings (0–4) and concrete code remediations.',
    originalPrompt: 'Review this UI for usability issues using Nielsen Norman Group heuristics.',
    optimizedPrompt: `Act as a Principal UX Researcher trained in Nielsen Norman Group (NN/g) methodology. Evaluate the provided UI code or user flow against all 10 Usability Heuristics:
1. Visibility of System Status (immediate feedback within 100ms–400ms)
2. Match Between System and the Real World (user mental models vs. internal jargon)
3. User Control and Freedom (explicit Undo, Cancel, Escape key exit)
4. Consistency and Standards (platform conventions & internal token parity)
5. Error Prevention (constraints, confirmation on destructive actions, smart defaults)
6. Recognition Rather Than Recall (visible filters, recent searches, contextual hints)
7. Flexibility and Efficiency of Use (keyboard shortcuts, bulk actions)
8. Aesthetic and Minimalist Design (signal-to-noise ratio)
9. Help Users Recognize, Diagnose, and Recover from Errors (human-readable cause + fix)
10. Help and Documentation (inline contextual micro-copy).

For each finding, output:
- Heuristic # & Name
- NN/g Severity Rating (0 = Not a problem, 1 = Cosmetic, 2 = Minor, 3 = Major, 4 = Usability Catastrophe)
- Exact DOM/Component location
- Concrete code remediation.`,
    prompt: `Audit the target UI flow against Jakob Nielsen’s 10 Usability Heuristics, assigning NN/g 0–4 severity scores and providing concrete DOM/React code remediations for every severity 2–4 issue.`,
    category: 'UX',
    tags: ['UX', 'Testing', 'Accessibility', 'Prompt', 'Workflow'],
    source: 'Nielsen Norman Group',
    sourceUrl: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
    model: 'Gemini 2.5 Pro / Claude 3.7 Sonnet',
    exampleInput: 'Multi-step checkout modal that clears form inputs on validation failure and lacks Escape key dismissal.',
    exampleOutput: 'Structured heuristic audit identifying Severity 4 Error Recovery failure and Severity 3 User Control violation, plus patched React Hook Form + Radix Dialog implementation.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 7. Laws of UX Psychological Optimization (Laws of UX)
  {
    id: 'prompt-laws-of-ux-optimization',
    sourceId: 'laws-of-ux',
    title: 'Laws of UX Quantitative Interface Refactor (Fitts, Hick, Doherty)',
    description: 'Refactors navigation bars, forms, and toolbars using quantitative thresholds from Fitts’s Law, Hick’s Law, Miller’s Law, and the Doherty Threshold (<400ms).',
    originalPrompt: 'Improve this interface using Fitts Law and Hick Law from lawsofux.com.',
    optimizedPrompt: `Refactor the target interface component by applying 5 quantitative laws from Laws of UX (lawsofux.com):
1. Fitts’s Law ($T = a + b \\log_2(2D/W)$): Enforce minimum 44x44px touch targets (48x48px on mobile), eliminate dead gaps between adjacent clickable filter pills, and place primary actions along natural thumb/cursor vectors.
2. Hick’s Law ($RT = a + b \\log_2(n)$): Reduce top-level simultaneous choices to $\\le 7$ grouped categories; move secondary parameters into progressive disclosure drawers.
3. Doherty Threshold (<400ms): Ensure every filter, search, or copy action yields visual feedback in <100ms via optimistic UI or instant local state transitions.
4. Jakob’s Law: Preserve standard keyboard conventions (\`/\` or \`Cmd+K\` for search, \`Escape\` to close, URL query sync for filters).
5. Von Restorff Effect: Visually isolate at most ONE primary CTA per viewport region.`,
    prompt: `Refactor the interface using quantitative Laws of UX constraints: >=44x44px Fitts targets, progressive disclosure reducing Hick choice overload to <=7 top-level items, and <100ms Doherty response feedback.`,
    category: 'UX',
    tags: ['UX', 'UI', 'Interaction', 'Accessibility', 'Prompt'],
    source: 'Laws of UX',
    sourceUrl: 'https://lawsofux.com',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'A 22-button ungrouped filter toolbar with 24px height tags and 800ms unbuffered filter lag.',
    exampleOutput: 'Refactored 6-category segmented toolbar with 44px hit areas, instant client-side memoized filtering (<16ms), and progressive "More Filters" popover.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 8. Tactile Micro-Interaction Spell (Design Spells)
  {
    id: 'prompt-design-spells-micro-interaction',
    sourceId: 'design-spells',
    title: 'Tactile Micro-Interaction & Spring Feedback Button',
    description: 'Crafts a tactile "Copy Prompt / Bookmark" micro-interaction with spring compression, morphing checkmark SVG path, and subtle particle burst.',
    originalPrompt: 'Create a button with a nice copy confirmation micro-interaction.',
    optimizedPrompt: `Create a tactile micro-interaction component inspired by Design Spells:
- Idle → Hover: Subtle magnetic pull toward cursor within a 12px radius (clamped to max 4px translation) and border luminance shift.
- Active Press: Instant scale(0.96) compression with 80ms spring response.
- Success State (e.g., "Prompt Copied"): Smoothly morph the clipboard icon into a stroke-animated checkmark (\`stroke-dashoffset\` transition over 220ms), crossfade label width without layout jump, and emit 6 lightweight CSS-variable particles that fade in 450ms.
- Accessibility: Announce status change via an \`aria-live="polite"\` region and skip particle motion when \`prefers-reduced-motion: reduce\` is active.`,
    prompt: `Build a tactile Copy Prompt button with spring press compression, SVG stroke-dashoffset checkmark morph, zero-layout-shift label swap, and aria-live screen reader announcement.`,
    category: 'Motion',
    tags: ['Motion', 'Interaction', 'UI', 'Component', 'Prompt'],
    source: 'Design Spells',
    sourceUrl: 'https://designspells.com',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Copy Prompt button inside a code & prompt inspection drawer.',
    exampleOutput: 'Self-contained React + CSS spring micro-interaction component with keyboard Enter/Space support and reduced-motion fallback.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 9. Codrops WebGL Displacement & Grid Hover (Tympanus / Codrops)
  {
    id: 'prompt-codrops-webgl-grid-hover',
    sourceId: 'tympanus-codrops',
    title: 'Codrops-Style WebGL Shader Grid Hover & Directional Wipe',
    description: 'Builds an experimental interactive grid where pointer velocity drives a custom GLSL chromatic displacement and directional edge reveal.',
    originalPrompt: 'Create a Codrops style image grid hover effect using WebGL and shaders.',
    optimizedPrompt: `Implement an experimental interactive showcase grid inspired by Tympanus / Codrops (specifically LookbookHoverEffects and ImageGridMotionEffect):
- Track normalized pointer position \`(uMouse)\` and damped pointer velocity \`(uVelocity)\` using linear interpolation (\`lerp = 0.12\`).
- Detecting entry vector: Compute which edge (top, right, bottom, left) the pointer crossed using \`atan2(dy, dx)\` so the card overlay sweeps in along the exact entry vector.
- Fragment Shader: Apply subtle barrel distortion and RGB channel split proportional to \`length(uVelocity)\` while keeping text crisp in a DOM overlay layer above the canvas.
- Graceful Degradation: Fall back to hardware-accelerated CSS 3D perspective tilt if WebGL context creation is unavailable or \`prefers-reduced-motion\` is enabled.`,
    prompt: `Implement a Codrops-inspired interactive card grid featuring directional edge-detection hover wipes, damped pointer-velocity GLSL RGB shift, and a CSS 3D fallback.`,
    category: 'Creative Coding',
    tags: ['Creative Coding', 'WebGL', 'Shader', 'Motion', 'Interaction', 'Prompt'],
    source: 'Tympanus / Codrops',
    sourceUrl: 'https://tympanus.net/codrops/',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Interactive showcase grid of 6 experimental shader & motion studies.',
    exampleOutput: 'React component with quadrant entry-angle detection, smooth damped velocity uniforms, and reduced-motion toggle.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 10. Motion FLIP Layout & Shared Element Transition (Motion.dev / Motion Repo)
  {
    id: 'prompt-motion-shared-layout-transition',
    sourceId: 'motion-dev',
    title: 'Shared Layout Projection (`layoutId`) Filterable Gallery & Modal',
    description: 'Uses Motion’s FLIP layout projection engine and spring physics to animate cards smoothly across filter changes and expand into a detail view.',
    originalPrompt: 'Animate a filterable card grid and detail modal using Motion layoutId and AnimatePresence.',
    optimizedPrompt: `Using the current \`motion/react\` SDK (from \`motion.dev\` / \`motiondivision/motion\`), implement a filterable archive grid with shared layout projection:
1. Wrap the card collection in \`<LayoutGroup>\` and \`<AnimatePresence mode="popLayout">\`.
2. Assign deterministic \`layoutId={\`card-container-\${item.id}\`}\` and \`layoutId={\`card-title-\${item.id}\`}\` between the grid card and the expanded detail drawer/modal.
3. Configure physically tuned spring physics: \`transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.8 }}\`.
4. Respect accessibility by checking \`useReducedMotion()\`; when true, set \`layout={false}\` and use a 120ms opacity crossfade.`,
    prompt: `Build a filterable card grid and detail modal using motion/react with LayoutGroup, AnimatePresence mode="popLayout", shared layoutId projection, tuned spring physics (stiffness 380, damping 32), and useReducedMotion() support.`,
    category: 'Motion',
    tags: ['Motion', 'Interaction', 'Component', 'Frontend', 'Prompt'],
    source: 'Motion (motion.dev)',
    sourceUrl: 'https://motion.dev/docs/react-layout-animations',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Catalog grid filtering 46 sources across 16 categories with expandable quick-inspect modal.',
    exampleOutput: 'TypeScript React implementation using `motion/react` with FLIP layout projection and keyboard Escape dismissal.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 11. React Bits Kinetic Split-Text & Spotlight Card (React Bits)
  {
    id: 'prompt-react-bits-spotlight-kinetic',
    sourceId: 'react-bits',
    title: 'Spotlight Radial Border Card & Kinetic Split-Text Reveal',
    description: 'Creates a reusable React component combining cursor-tracked radial border illumination with staggered character-by-character kinetic text entry.',
    originalPrompt: 'Create a SpotlightCard and SplitText animation component like React Bits.',
    optimizedPrompt: `Create two composable, zero-bloat React components inspired by React Bits (\`reactbits.dev\`):
1. \`<SpotlightCard>\`: Tracks relative pointer coordinates \`(x, y)\` via a single \`onPointerMove\` handler and updates CSS custom properties \`--spot-x\` and \`--spot-y\` directly on the DOM ref (zero React re-renders on mouse move). Renders a \`radial-gradient(420px circle at var(--spot-x) var(--spot-y), rgba(232,93,63,0.18), transparent 70%)\` overlay.
2. \`<KineticHeading>\`: Splits text by word and character while keeping a full \`aria-label\` on the parent heading for screen readers (\`aria-hidden="true"\` on split spans), staggering each character upward with \`cubic-bezier(0.16, 1, 0.3, 1)\`.`,
    prompt: `Create a zero-rerender CSS-variable <SpotlightCard> and an ARIA-accessible <KineticHeading> split-text animation component in React + TypeScript.`,
    category: 'Component',
    tags: ['Component', 'Motion', 'Creative Coding', 'UI', 'Prompt'],
    source: 'React Bits',
    sourceUrl: 'https://reactbits.dev',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Hero title and feature showcase cards for Masallah archive.',
    exampleOutput: 'Two modular TypeScript React components (`SpotlightCard.tsx` and `KineticHeading.tsx`) with 60fps pointer tracking.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 12. Motion-First Hero Stage Choreography (Motion Sites)
  {
    id: 'prompt-motion-sites-hero-choreography',
    sourceId: 'motion-sites',
    title: 'Motion-First Website Hero Choreography & Timeline Blueprint',
    description: 'Defines a frame-by-frame opening choreography sequence (0ms to 1200ms) balancing atmospheric canvas motion with instant interactive readiness.',
    originalPrompt: 'Create a motion-rich hero section with animated text, glowing background, and smooth scroll.',
    optimizedPrompt: `Design a motion-first hero section following Motion Sites (\`motionsites.ai\`) choreography principles without blocking time-to-interactive:
- 0ms–150ms: Canvas background shader initializes at 0.5x DPR and fades in opacity (0 → 1) so first contentful paint (FCP) is never blocked.
- 100ms–450ms: Category eyebrow badge and headline words reveal with a 35ms stagger (\`translateY(18px) -> 0\`, \`opacity: 0 -> 1\`).
- 300ms–650ms: Search bar and live counter pills scale from 0.98 → 1.0 with spring damping.
- Scroll Choreography: As the user scrolls the first 300px, interpolate hero canvas opacity from 1 → 0.25 and scale to 0.97 while pinning the sticky filter bar.`,
    prompt: `Choreograph a 0ms–650ms non-blocking hero entrance timeline with staggered typography, live counter pills, and scroll-linked canvas attenuation.`,
    category: 'Motion',
    tags: ['Motion', 'Website', 'Design', 'Interaction', 'Prompt'],
    source: 'Motion Sites',
    sourceUrl: 'https://motionsites.ai',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Opening hero stage for a creative coding and design archive.',
    exampleOutput: 'Complete React hero section with timed CSS/Motion orchestration and live FPS-friendly background canvas.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 13. Cross-System Component Anatomy Matrix (Component Gallery)
  {
    id: 'prompt-component-gallery-anatomy',
    sourceId: 'component-gallery',
    title: 'Cross-Design-System Component Anatomy & API Specification',
    description: 'Synthesizes a canonical component specification (slots, states, ARIA roles, keyboard map, and token contract) informed by 60+ design systems.',
    originalPrompt: 'Specify a reusable Combobox / Command Palette component with props and accessibility rules.',
    optimizedPrompt: `Using the cross-system analysis methodology of The Component Gallery (\`component.gallery\`), produce a complete Component Anatomy & API Specification for the requested UI component:
1. Canonical Naming & Aliases across major systems (e.g., Polaris, Carbon, Radix, Primer, Material).
2. Structural Anatomy Diagram (Root, Trigger, Input, Listbox, Group, Item, Empty, Separator, Badge).
3. Prop & State Matrix (controlled vs. uncontrolled, async loading, disabled, readOnly, invalid).
4. WAI-ARIA 1.2 Contract (\`role\`, \`aria-expanded\`, \`aria-activedescendant\`, \`aria-controls\`) and complete Keyboard Map (\`ArrowDown\`, \`ArrowUp\`, \`Home\`, \`End\`, \`Enter\`, \`Escape\`).
5. Semantic Design Token Contract (surface, border, focus-ring, active-item).`,
    prompt: `Produce a complete Component Anatomy & API Specification (Slots, Controlled/Uncontrolled Props, WAI-ARIA 1.2 attributes, Keyboard Map, and Token Contract) modeled on Component Gallery standards.`,
    category: 'Design System',
    tags: ['Design System', 'Component', 'UI', 'Accessibility', 'Prompt'],
    source: 'Component Gallery',
    sourceUrl: 'https://component.gallery',
    model: 'Gemini 2.5 Pro / Claude 3.7 Sonnet',
    exampleInput: 'Component: Global Search & Filter Command Palette (`<CommandFilter />`).',
    exampleOutput: 'Comprehensive Markdown + TypeScript interface specification and accessible React implementation.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 14. Three-Tier Design Token Architecture (Design Systems One)
  {
    id: 'prompt-design-systems-one-tokens',
    sourceId: 'design-systems-one',
    title: 'W3C Three-Tier Semantic Design Token Architecture',
    description: 'Generates a scalable 3-tier token hierarchy (Primitive → Semantic → Component) in W3C DTCG JSON and CSS Custom Properties with dark/high-contrast themes.',
    originalPrompt: 'Create a design token system with colors, spacing, and typography in CSS variables.',
    optimizedPrompt: `Architect a 3-tier Design Token system following DesignSystems.one and W3C Design Tokens Community Group (DTCG) best practices:
- Tier 1 (Primitive / Option Tokens): Raw palette values (\`--primitive-obsidian-950: #09090B\`, \`--primitive-vermilion-500: #E85D3F\`), modular spacing scale (4px base), and fluid \`clamp()\` type steps. Never referenced directly by components.
- Tier 2 (Semantic / Alias Tokens): Intent-driven aliases (\`--surface-canvas\`, \`--surface-elevated\`, \`--surface-interactive-hover\`, \`--ink-primary\`, \`--ink-muted\`, \`--border-subtle\`, \`--focus-ring\`) that automatically adapt across \`[data-theme="dark"]\`, \`[data-theme="light"]\`, and \`@media (prefers-contrast: more)\`.
- Tier 3 (Component Tokens): Scoped overrides (\`--card-radius\`, \`--card-padding\`, \`--badge-bg\`).`,
    prompt: `Generate a 3-tier W3C DTCG Design Token architecture (Primitive -> Semantic -> Component) exported as both DTCG JSON and responsive CSS Custom Properties with dark and high-contrast modes.`,
    category: 'Design System',
    tags: ['Design System', 'Architecture', 'Frontend', 'UI', 'Prompt'],
    source: 'Design Systems One',
    sourceUrl: 'https://designsystems.one',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Token system for Masallah editorial archive supporting dark obsidian default and high-contrast accessibility mode.',
    exampleOutput: 'Complete `tokens.json` (DTCG format) + `tokens.css` with fluid typography and semantic surface tokens.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 15. Composable Open-Code Component (shadcn/ui)
  {
    id: 'prompt-shadcn-composable-primitive',
    sourceId: 'shadcn-ui',
    title: 'shadcn/ui Open-Code Compound Component Pattern',
    description: 'Builds a copy-pasteable, composable compound component in TypeScript using `cva` variants, forwarded refs, and slot composition.',
    originalPrompt: 'Build a reusable Tabs and Dialog component in the style of shadcn/ui.',
    optimizedPrompt: `Write a production-grade, open-code React compound component following shadcn/ui architectural conventions:
- Export granular subcomponents (\`Root\`, \`Trigger\`, \`Content\`, \`Header\`, \`Footer\`) with clean \`data-slot\` attributes for predictable styling.
- Define deterministic visual variants (\`variant\`, \`size\`) with type-safe variant inference.
- Support controlled (\`value\` / \`onValueChange\`) and uncontrolled (\`defaultValue\`) usage patterns seamlessly.
- Ensure 100% keyboard navigability (roving tabindex for tabs, focus restoration on dialog close) without external bloated dependencies.`,
    prompt: `Create an open-code compound React component in TypeScript following shadcn/ui conventions with data-slot attributes, controlled/uncontrolled state, and roving-tabindex keyboard support.`,
    category: 'Component',
    tags: ['Component', 'Design System', 'Frontend', 'Accessibility', 'Prompt'],
    source: 'shadcn/ui',
    sourceUrl: 'https://ui.shadcn.com/docs',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Compound `<PromptInspector>` tabs component switching between Original Prompt, Masallah Optimized Prompt, Visual Analysis, and Code Snippet.',
    exampleOutput: 'TypeScript compound component with keyboard arrow navigation and one-click clipboard copy integration.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 16. Accessible Headless Primitive & Roving Focus (Radix UI)
  {
    id: 'prompt-radix-roving-focus-primitive',
    sourceId: 'radix-ui',
    title: 'WAI-ARIA Headless Primitive with Focus Trap & Roving Tabindex',
    description: 'Implements unstyled accessible primitives handling focus trapping, Escape dismissal, outside-pointer detection, and roving tabindex navigation.',
    originalPrompt: 'Create an accessible modal dialog and toolbar with keyboard navigation like Radix UI.',
    optimizedPrompt: `Implement a headless, WAI-ARIA compliant UI primitive inspired by Radix UI (\`radix-ui/primitives\`):
1. Roving Tabindex Toolbar: Maintain a single tab stop (\`tabIndex={0}\` on active item, \`tabIndex={-1}\` on peers). ArrowLeft/ArrowRight (or ArrowUp/ArrowDown) moves focus cyclically with \`Home\` and \`End\` support.
2. Modal Dialog Focus Management: Record \`document.activeElement\` on open, trap \`Tab\` / \`Shift+Tab\` inside the dialog boundary, lock background document scroll, dismiss on \`Escape\`, and restore focus to the trigger element on unmount.
3. Expose data attributes (\`data-state="open" | "closed"\`, \`data-highlighted\`, \`data-disabled\`) for zero-JS-overhead CSS styling.`,
    prompt: `Implement a WAI-ARIA compliant headless Dialog & Roving Tabindex Toolbar primitive in React + TypeScript with focus trapping, trigger focus restoration, and data-state styling hooks.`,
    category: 'Component',
    tags: ['Component', 'Accessibility', 'UI', 'Frontend', 'Prompt'],
    source: 'Radix UI',
    sourceUrl: 'https://www.radix-ui.com/primitives',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Interactive category filter pill rail and detail inspection modal.',
    exampleOutput: 'Zero-dependency accessible React hooks (`useRovingFocus`, `useDialogFocusTrap`) + unit test suite.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 17. Modern Web API & View Transitions (MDN Web Docs)
  {
    id: 'prompt-mdn-view-transitions-web-api',
    sourceId: 'mdn-web-docs',
    title: 'Standards-Based View Transitions & IntersectionObserver Pipeline',
    description: 'Applies modern browser-native Web APIs (View Transitions API, URLSearchParams history sync, Clipboard API, IntersectionObserver) with progressive enhancement.',
    originalPrompt: 'Use the View Transitions API and URLSearchParams to filter a list smoothly.',
    optimizedPrompt: `Implement a standards-compliant, progressively enhanced frontend interaction using native Web APIs documented on MDN Web Docs:
1. View Transitions API: Wrap filter and route state updates in \`document.startViewTransition(() => updateState())\` with a safe fallback when \`!('startViewTransition' in document)\` or when \`window.matchMedia('(prefers-reduced-motion: reduce)').matches\` is true.
2. Shareable URL State: Synchronize active filter parameters (\`?category=Motion&q=shader&type=Prompt\`) bidirectionally with \`URLSearchParams\` and \`window.history.replaceState\` so deep links and browser refreshes restore exact UI state.
3. Resilient Clipboard API: Use \`navigator.clipboard.writeText()\` with permission error handling and visual confirmation.`,
    prompt: `Build a progressively enhanced filter and deep-link manager using the native View Transitions API, bidirectional URLSearchParams sync, and resilient Clipboard API handling.`,
    category: 'Frontend',
    tags: ['Frontend', 'Documentation', 'Architecture', 'Interaction', 'Prompt'],
    source: 'MDN Web Docs',
    sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Client-side search & multi-facet filter controller for static Next.js export.',
    exampleOutput: 'TypeScript hook synchronizing URL query params, history state, and View Transitions.',
    license: 'CC0 / MIT'
  },

  // 18. Defensive CSS & Container Query Layout (Ahmad Shadeed)
  {
    id: 'prompt-ishadeed-defensive-css-container',
    sourceId: 'ishadeed',
    title: 'Defensive CSS & Container-Query Adaptive Card System',
    description: 'Engineers a bulletproof CSS layout using `@container` queries, `:has()` parent selectors, fluid `clamp()`, and defensive overflow guards against long text or missing media.',
    originalPrompt: 'Write responsive CSS using container queries and defensive CSS techniques from Ahmad Shadeed.',
    optimizedPrompt: `Engineer a resilient, container-aware component layout applying Ahmad Shadeed’s Defensive CSS (\`ishadeed.com\`) principles:
1. Container Queries over Viewport Media Queries: Declare \`container-type: inline-size; container-name: catalog-card;\` on the card wrapper so the card automatically switches from stacked vertical (<420px) to horizontal split (>=420px) regardless of where it is placed.
2. Relational \`:has()\` Adaptation: Use \`.card:has(.card__live-demo)\` to expand grid span automatically when an interactive canvas is present.
3. Defensive Guards: Add \`min-width: 0\` on flex/grid children, \`overflow-wrap: anywhere\` on URLs/code identifiers, \`aspect-ratio: 16 / 10\` with \`object-fit: cover\` and fallback gradient on preview frames, and \`scrollbar-gutter: stable\` to prevent layout shift.`,
    prompt: `Write a defensive, container-query-driven CSS architecture (@container, :has(), min-width: 0, aspect-ratio fallbacks, clamp() fluid type) that never breaks under extreme content lengths.`,
    category: 'Frontend',
    tags: ['Frontend', 'UI', 'Design', 'Component', 'Prompt'],
    source: 'Ahmad Shadeed',
    sourceUrl: 'https://ishadeed.com',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Catalog card that must display 80-character repository URLs, variable tag counts (1 to 12), and optional live demo embeds.',
    exampleOutput: 'Production CSS module with `@container`, `:has()`, and defensive text/flex guards.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 19. Hybrid Static/Islands Rendering Architecture (Patterns.dev)
  {
    id: 'prompt-patterns-dev-rendering-architecture',
    sourceId: 'patterns-dev',
    title: 'Static-First Selective Hydration & Search Indexing Pattern',
    description: 'Designs a high-performance Next.js static export architecture combining build-time SSG pre-rendering with lightweight client islands for search and interactive WebGL demos.',
    originalPrompt: 'Design a performant Next.js architecture using patterns from patterns.dev.',
    optimizedPrompt: `Architect a high-performance web application applying rendering and bundle patterns from Patterns.dev:
1. Build-Time Static Generation (SSG): Pre-render all catalog routes, source pages, and metadata at build time (\`output: 'export'\`) for instant TTFB from CDN edge.
2. Selective Client Islands: Keep documentation, tables, and cards as lightweight zero-state markup; hydrate interactive sandboxes (Three.js, Anime.js, Tweakpane) lazily on viewport entry or user tab activation.
3. Inverted Index Search Memoization: Pre-normalize search tokens at module load and filter with \`useDeferredValue\` so typing in the global search input remains locked at 60fps even across hundreds of catalog entries.`,
    prompt: `Architect a static-first Next.js application using Selective Hydration Islands, useDeferredValue search indexing, and lazy viewport loading for heavy 3D/WebGL demos.`,
    category: 'Architecture',
    tags: ['Architecture', 'Frontend', 'Performance', 'Prompt'],
    source: 'Patterns.dev',
    sourceUrl: 'https://www.patterns.dev',
    model: 'Gemini 2.5 Pro / Claude 3.7 Sonnet',
    exampleInput: 'Web archive hosting 46 sources, 38 prompts, 32 repo guides, and 12 interactive live demos under a static `/masallahpub` subpath.',
    exampleOutput: 'Architectural blueprint and React island loader with `useDeferredValue` full-text search.',
    license: 'MIT (Masallah Abstracted Prompt)'
  },

  // 20. Google TypeScript Style & Strict Domain Modeling (TypeScript & Google Styleguide)
  {
    id: 'prompt-typescript-strict-catalog-schema',
    sourceId: 'typescript',
    title: 'Strict TypeScript Domain Schema & Discriminated Union Validator',
    description: 'Models the entire multi-entity catalog (Sources, Prompts, Repos, Workflows, Examples) using strict TypeScript discriminated unions, `readonly` tuples, and runtime schema guards.',
    originalPrompt: 'Create TypeScript interfaces and validation functions for a content catalog.',
    optimizedPrompt: `Following the Google TypeScript Style Guide (\`google.github.io/styleguide/tsguide.html\`) and official TypeScript handbook best practices (\`typescriptlang.org\`):
1. Define literal union types for all 28 \`ContentType\` classifications and 6 \`SourceCoverageStatus\` states (\`'Indexed' | 'Partially Indexed' | 'Link Only' | 'License Restricted' | 'Access Restricted' | 'Unavailable'\`).
2. Model catalog items using discriminated unions so items with \`hasLiveDemo: true\` strictly require a typed \`demoConfig\` payload.
3. Enable \`strict: true\`, \`noUncheckedIndexedAccess: true\`, and \`exactOptionalPropertyTypes: true\`-compatible type guards that validate JSON files at build time and test time.`,
    prompt: `Write strict TypeScript domain models and runtime type-predicate validators for Sources, Prompts, Repositories, Workflows, and Catalog items following Google TypeScript Style Guide rules.`,
    category: 'Architecture',
    tags: ['Architecture', 'Frontend', 'TypeScript', 'Testing', 'Prompt'],
    source: 'TypeScript / Google Style Guide',
    sourceUrl: 'https://www.typescriptlang.org',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'JSON data files (`sources.json`, `prompts.json`, `repos.json`, `catalog.json`) requiring compile-time and runtime schema guarantees.',
    exampleOutput: 'Complete `types/catalog.ts` + runtime validator module with zero `any` types.',
    license: 'Apache-2.0 / MIT'
  },

  // 21. User-Centric Component Behavior Test Suite (Testing Library)
  {
    id: 'prompt-testing-library-behavior-suite',
    sourceId: 'testing-library',
    title: 'Accessible Role-First Component Test Suite (Testing Library)',
    description: 'Generates user-behavior tests querying exclusively by accessible roles (`getByRole`, `getByLabelText`) to verify search, filtering, and prompt copying.',
    originalPrompt: 'Write React Testing Library tests for search, filter buttons, and copy prompt.',
    optimizedPrompt: `Write a comprehensive component test suite following Testing Library (\`testing-library.com\`) guiding principles:
- Strictly query elements the way an assistive technology user perceives them: \`screen.getByRole('searchbox')\`, \`screen.getByRole('button', { name: /copy optimized prompt/i })\`, \`screen.getByRole('tab', { name: /original prompt/i })\`.
- Avoid querying internal CSS class names or component state.
- Verify real user flows: typing a query filters displayed cards, clicking category pills updates active pressed state (\`aria-pressed="true"\`), and clicking "Copy Prompt" invokes \`navigator.clipboard.writeText\` with the exact prompt text and announces "Copied to clipboard".`,
    prompt: `Write a Testing Library behavior test suite querying strictly by accessible ARIA roles to verify global search, multi-facet filtering, prompt tab switching, and clipboard copy feedback.`,
    category: 'Testing',
    tags: ['Testing', 'Accessibility', 'Component', 'Frontend', 'Prompt'],
    source: 'Testing Library',
    sourceUrl: 'https://testing-library.com/docs/guiding-principles',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Masallah Catalog Explorer & Prompt Card components.',
    exampleOutput: 'Complete Vitest / Testing Library test file (`catalog-behavior.test.tsx`) with 100% accessible role queries.',
    license: 'MIT'
  },

  // 22. Cross-Viewport E2E & Subpath Verification (Playwright)
  {
    id: 'prompt-playwright-e2e-subpath-suite',
    sourceId: 'playwright',
    title: 'Playwright E2E Subpath (`/masallahpub`), Deep-Link & Screenshot Suite',
    description: 'Creates an automated Playwright test and preview-generation suite verifying `/masallahpub` basePath routing, URL query filter sharing, zero console errors, and mobile/desktop viewports.',
    originalPrompt: 'Write Playwright E2E tests for navigation, search, filters, mobile responsiveness, and screenshots.',
    optimizedPrompt: `Create a Playwright E2E verification suite (\`playwright.dev\`) specifically engineered for a subpath-deployed web archive (\`/masallahpub\`):
1. Zero Console/Page Error Gate: Attach \`page.on('pageerror')\` and \`page.on('console')\` listeners to fail on any unhandled runtime exception or broken asset 404.
2. Subpath & Deep-Link Integrity: Verify navigation across \`/masallahpub\`, \`/masallahpub/sources\`, \`/masallahpub/prompts\`, \`/masallahpub/workflows\`, and deep-linked query URLs (\`/masallahpub?category=3D&q=Three.js\`).
3. Interactive Feature Verification: Test global search filtering, prompt clipboard copy, live demo controls, and keyboard Escape handling.
4. Automated Viewport Preview Capture: Capture deterministic 1440x900 desktop and 390x844 mobile screenshots while respecting \`robots.txt\` and public-only routes.`,
    prompt: `Write a Playwright E2E test suite verifying /masallahpub basePath routing, shareable URL query filters, prompt clipboard copying, zero console/network errors, and desktop/mobile responsiveness.`,
    category: 'Testing',
    tags: ['Testing', 'Tool', 'Workflow', 'Accessibility', 'Prompt'],
    source: 'Playwright',
    sourceUrl: 'https://playwright.dev',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Next.js static export served under `/masallahpub` subpath.',
    exampleOutput: 'Executable Playwright E2E specification (`e2e/masallah.spec.ts`) and preview generator script.',
    license: 'Apache-2.0 / MIT'
  },

  // 23. Isolated Component Workshop & CSF3 Stories (Storybook)
  {
    id: 'prompt-storybook-csf3-component-matrix',
    sourceId: 'storybook',
    title: 'Storybook CSF3 Component State & Accessibility Matrix',
    description: 'Authors Component Story Format 3 (CSF3) stories with interactive `args` controls, `play` interaction functions, and automated a11y contrast assertions.',
    originalPrompt: 'Write Storybook CSF3 stories for a CatalogCard component with different variants.',
    optimizedPrompt: `Write a Storybook Component Story Format 3 (CSF3) specification (\`storybook.js.org\`) for the Masallah \`CatalogCard\` and \`LiveDemoStage\` components:
- Define typed \`Meta<typeof CatalogCard>\` with interactive \`argTypes\` for category, contentTypes, hasPrompt, hasDemo, and status.
- Export stories covering edge cases: \`DefaultIndexed\`, \`WithOriginalAndOptimizedPrompt\`, \`WithInteractiveLiveDemo\`, \`ExtremeLongTitleAndTags\`, and \`AccessRestrictedLinkOnly\`.
- Include a \`play\` function using \`@storybook/test\` (\`within\`, \`userEvent\`, \`expect\`) that exercises tab switching and prompt copy inside the story canvas.`,
    prompt: `Write a Storybook CSF3 story suite with interactive argTypes, edge-case variants, and an automated play() interaction test for the CatalogCard component.`,
    category: 'Testing',
    tags: ['Testing', 'Component', 'Design System', 'Documentation', 'Prompt'],
    source: 'Storybook',
    sourceUrl: 'https://storybook.js.org/docs/writing-stories',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Masallah `<CatalogCard />` component with prompt drawer and live demo badge.',
    exampleOutput: 'Complete `CatalogCard.stories.tsx` in CSF3 format with `play()` test function.',
    license: 'MIT'
  },

  // 24. OWASP Security Review & Secret Audit Gate (OWASP Cheat Sheet Series)
  {
    id: 'prompt-owasp-security-audit-gate',
    sourceId: 'owasp-cheatsheets',
    title: 'OWASP Frontend Security, XSS Sanitization & Pre-Commit Secret Audit',
    description: 'Audits web applications and repositories against OWASP Cheat Sheets for DOM XSS, unsafe external links, Content Security Policy (CSP), and credential leakage.',
    originalPrompt: 'Audit this web application for security vulnerabilities using OWASP Cheat Sheets.',
    optimizedPrompt: `Conduct a comprehensive security audit and remediation pass modeled on the OWASP Cheat Sheet Series (\`cheatsheetseries.owasp.org\`):
1. DOM-Based XSS Prevention: Verify zero unvalidated usage of \`dangerouslySetInnerHTML\`, \`eval()\`, or \`javascript:\` URLs. Enforce strict URL protocol allowlisting (\`https:\` / \`http:\` only) on all external source/demo/repo links.
2. Safe External Navigation: Ensure every external \`<a target="_blank">\` includes \`rel="noopener noreferrer"\`.
3. HTTP Security Headers & CSP: Configure \`X-Content-Type-Options: nosniff\`, \`Referrer-Policy: strict-origin-when-cross-origin\`, \`Permissions-Policy: camera=(), microphone=(), geolocation=()\`, and \`X-Frame-Options: SAMEORIGIN\`.
4. Pre-Commit Secret Scanning: Scan all tracked files against high-entropy patterns (API keys, \`ghp_\`, \`gho_\`, \`sk-\`, \`AIza\`, private keys, \`.env\` files) and block commit if any match is found.`,
    prompt: `Audit the codebase against OWASP Cheat Sheet standards (DOM XSS prevention, protocol allowlisting, rel="noopener noreferrer", HTTP security headers, and automated secret scanning).`,
    category: 'Security',
    tags: ['Security', 'Architecture', 'Frontend', 'Testing', 'Prompt', 'Workflow'],
    source: 'OWASP Cheat Sheet Series',
    sourceUrl: 'https://cheatsheetseries.owasp.org',
    model: 'Gemini 2.5 Pro / Claude 3.7 Sonnet',
    exampleInput: 'Masallah repository and static web application prior to GitHub push and production deploy.',
    exampleOutput: 'Executable secret/XSS scanner (`scripts/collect/security-scan.mjs`) + OWASP compliance report.',
    license: 'CC-BY-SA-4.0 / MIT'
  },

  // 25. PixelFX Procedural Dual-Buffer VFX & Agent Skill (PixelFX)
  {
    id: 'prompt-pixelfx-procedural-vfx-skill',
    sourceId: 'pixelfx',
    title: 'PixelFX Procedural Dual-Buffer Pixel Art Effect ("Draft, Render, Look, Refine")',
    description: 'Uses the official PixelFX agent skill methodology to author zero-dependency procedural pixel art VFX with dual color + additive light buffers and acted-out frame choreography.',
    originalPrompt: `Make pixel art effects and sprite animations in code with the pixelfx library, which has 244 ready-made ones, acted out by a character who winds up, freezes on contact and recovers... The method is Hugo Duprez's: code is clay, trust your eyes, feed your references. One-shot prompts make mediocre effects. Drafts you render, look at and refine make good ones.`,
    optimizedPrompt: `Act as a Procedural Pixel Art VFX Technical Artist using the PixelFX (\`github.com/patch-gg/pixelfx\`) dual-buffer architecture and "draft, render, look, refine" loop:
1. Dual-Buffer Rendering: Draw every frame at low native pixel resolution (e.g., 160x90 or 320x180 with \`image-rendering: pixelated\`) into two buffers:
   - \`color\` buffer: indexed palette ramp (darkest shadow to brightest highlight, with 2x2 Bayer dither for transitions).
   - \`light\` buffer: additive radial glow composited on top of background and characters.
2. Acted-Out Timing Curve: Structure the effect across 4 distinct phases:
   - Wind-up / Anticipation (frames 0–4: inward particle gather & palette warm-up)
   - Impact / Contact Freeze (frames 5–7: 2-frame hit-stop flash + radial shockwave ring)
   - Dissipation / Secondary Debris (frames 8–18: rising dithered embers & gravity-affected sparks)
   - Recovery (frames 19–24: clean fade to transparent).
3. Expose deterministic runtime knobs: \`palette\` (5-stop hex ramp), \`seed\` (PRNG), \`light\` (0.0–1.5 glow multiplier), and \`flip\`.`,
    prompt: `Author a procedural pixel-art VFX module using PixelFX's dual-buffer (color ramp + additive light glow) architecture with a 4-phase wind-up, hit-stop contact flash, Bayer-dithered dissipation, and deterministic seed/palette controls.`,
    category: 'VFX',
    tags: ['VFX', 'Creative Coding', 'Agent Skill', 'Prompt', 'Example'],
    source: 'PixelFX',
    sourceUrl: 'https://github.com/patch-gg/pixelfx',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Effect request: "Arcane Frost Nova" — a crystalline ground burst with 8 radial ice spikes, hit-stop flash, and drifting dithered snow particles.',
    exampleOutput: 'Zero-dependency HTML5 Canvas dual-buffer pixel VFX simulator with live palette switcher (Frost, Fire, Arcane, Cyber, Holy) and frame scrubber.',
    license: 'MIT'
  },

  // 26. Remotion Programmatic React Video Composition (Remotion)
  {
    id: 'prompt-remotion-programmatic-video',
    sourceId: 'remotion',
    title: 'Frame-Deterministic Remotion Video Composition (`useCurrentFrame` + `spring`)',
    description: 'Authors a deterministic 60fps React video composition in Remotion using `<Sequence>`, `spring()`, `interpolate()`, and parameterized Zod schema props.',
    originalPrompt: 'Create a Remotion video composition with animated text and spring transitions.',
    optimizedPrompt: `Create a deterministic 60fps programmatic video composition using Remotion (\`github.com/remotion-dev/remotion\`):
1. Strict Frame Determinism: Drive EVERY animation exclusively from \`const frame = useCurrentFrame()\` and \`const { fps, width, height } = useVideoConfig()\`. Never use CSS \`transition\` or \`requestAnimationFrame\`, which cause non-deterministic frame flicker during headless rendering.
2. Choreography via \`<Series>\` and \`<Sequence>\`:
   - Frames 0–45: Kinetic brand intro using \`spring({ frame, fps, config: { damping: 14, stiffness: 160 } })\`.
   - Frames 35–120: 3-card feature showcase staggered by 12 frames each (` + '`frame - index * 12`' + `).
   - Frames 110–180: Audio-synced waveform + call-to-action outro using \`interpolate(frame, [110, 140], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })\`.
3. Define a Zod schema for \`defaultProps\` so titles, theme colors, and metrics can be customized live in Remotion Studio or rendered via CLI.`,
    prompt: `Write a frame-deterministic 60fps Remotion React composition using useCurrentFrame(), useVideoConfig(), spring(), clamp-extrapolated interpolate(), and <Sequence> staging with zero CSS transition flicker.`,
    category: 'Video',
    tags: ['Video', 'Motion', 'React', 'Prompt', 'Example'],
    source: 'Remotion',
    sourceUrl: 'https://github.com/remotion-dev/remotion',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: '6-second (360 frames @ 60fps) product release reel for Masallah v1.0.',
    exampleOutput: 'Complete Remotion `<Composition>` + interactive web timeline player preview.',
    license: 'MIT'
  },

  // 27. Remotion Agent Skills Router & Caption/Map Workflow (Remotion Skills)
  {
    id: 'prompt-remotion-agent-skills-workflow',
    sourceId: 'remotion-skills',
    title: 'Remotion Agent Skills Orchestration (`/remotion-create`, `/remotion-markup`, `/remotion-captions`)',
    description: 'Applies the official `remotion-dev/skills` instruction hierarchy to scaffold, style, caption, and preview programmatic videos with an AI coding agent.',
    originalPrompt: `/remotion-create Make a promo video for a record store
/remotion-markup Create an animated title card using Inter.
/remotion-maps Animate a route from Los Angeles to New York and make the camera follow it.`,
    optimizedPrompt: `Execute a multi-stage programmatic video build following the official Remotion Agent Skills (\`github.com/remotion-dev/skills\`) protocol:
1. Skill Routing (\`/remotion-best-practices\`): Preserve existing user composition edits; launch Remotion Studio preview early so visual feedback guides iteration before full MP4 rendering.
2. Markup & Layout (\`/remotion-markup\`): Use \`<AbsoluteFill>\` layers, preload fonts deterministically via \`@remotion/google-fonts\`, and structure inline controls so parameters remain editable in Studio.
3. Word-Level Captions (\`/remotion-captions\`): Ingest millisecond-aligned word timestamps (from WhisperX or \`@remotion/captions\`), group into TikTok/Reel-style 4-word pages with \`createTikTokStyleCaptions()\`, and highlight the active spoken word at \`currentTimeMs = (frame / fps) * 1000\`.
4. Geospatial Flyover (\`/remotion-maps\`): Interpolate camera bearing, pitch, and GeoJSON polyline progress deterministically per frame.`,
    prompt: `Orchestrate a programmatic video build using Remotion Agent Skills (/remotion-best-practices, /remotion-markup, /remotion-captions) with deterministic font loading, AbsoluteFill layering, and word-level active caption highlighting.`,
    category: 'Agent Skill',
    tags: ['Agent Skill', 'Prompt', 'Video', 'Workflow'],
    source: 'Remotion Skills',
    sourceUrl: 'https://github.com/remotion-dev/skills',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro / Cursor Agent',
    exampleInput: 'Create a 15-second vertical (1080x1920) developer release explainer with synchronized word-by-word captions and code highlight zoom.',
    exampleOutput: 'Multi-sequence Remotion composition with `@remotion/captions` active-word highlighter and Studio schema.',
    license: 'MIT'
  },

  // 28. Anime.js Timeline & 2D Stagger Choreography (Anime.js)
  {
    id: 'prompt-animejs-grid-stagger-timeline',
    sourceId: 'animejs',
    title: 'Anime.js Multi-Track Timeline & Radial 2D Grid Stagger',
    description: 'Choreographs complex multi-element DOM and SVG animations using Anime.js timelines, radial grid staggering (`stagger(value, { grid: [cols, rows], from: "center" })`), and spring easings.',
    originalPrompt: 'Create a staggered grid wave animation and SVG line drawing using Anime.js.',
    optimizedPrompt: `Build an interactive motion study using Anime.js (\`github.com/juliangarnier/anime\`):
1. 2D Spatial Stagger: Arrange a 12x6 matrix of kinetic cells and compute radial propagation delays from the clicked cell index:
   \`delay: anime.stagger(45, { grid: [12, 6], from: activeIndex })\`
   \`scale: [1, 1.35, 1]\`, \`rotateZ: anime.stagger([-15, 15], { grid: [12, 6], from: activeIndex, axis: 'x' })\`.
2. Multi-Track Timeline: Synchronize an SVG circuit path stroke reveal (\`strokeDashoffset: [anime.setDashoffset, 0]\`) with numeric counter keyframes and elastic spring easing (\`spring(1, 80, 12, 0)\`).
3. Expose interactive Play, Pause, Reverse, Seek scrubber, and Stagger Origin controls.`,
    prompt: `Choreograph an interactive 12x6 spatial grid wave and synchronized SVG path reveal using Anime.js timelines, 2D radial stagger from any clicked cell, and interactive timeline scrubbing.`,
    category: 'Motion',
    tags: ['Motion', 'Creative Coding', 'Interaction', 'Prompt', 'Example'],
    source: 'Anime.js',
    sourceUrl: 'https://github.com/juliangarnier/anime',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Interactive motion playground demonstrating 2D radial stagger propagation and timeline scrubbing.',
    exampleOutput: 'Live interactive Anime.js 2D grid visualizer with clickable wave origin and timeline controls.',
    license: 'MIT'
  },

  // 29. Manim Mathematical & Algorithmic Explainer (Manim Community)
  {
    id: 'prompt-manim-mathematical-explainer',
    sourceId: 'manim',
    title: 'Manim Mathematical Proof, Animated Diagram & Algorithmic Explainer',
    description: 'Generates a complete Python `Scene` for Manim Community animating LaTeX equation morphs (`TransformMatchingTex`), live `ValueTracker` derivatives, and architectural flow diagrams.',
    originalPrompt: 'Write a Manim Python script that animates a Fourier series or calculus derivative graph with LaTeX equations.',
    optimizedPrompt: `Write a production-ready Manim Community (\`github.com/ManimCommunity/manim\`) Python script covering four educational explainer patterns:
1. Equation Morphing: Use \`MathTex\` with explicit double-brace token isolation and \`TransformMatchingTex\` to smoothly morph the Fourier series / Euler identity step by step without jarring alpha fades.
2. Dynamic ValueTracker Graph: Construct \`Axes\`, plot $f(x) = \\sin(x) \\cdot e^{-0.2x}$, attach a \`ValueTracker(t)\`, and use \`always_redraw\` to render the moving secant/tangent line and area Riemann rectangles in real time.
3. System Architecture Diagram: Animate directed data flow packets along \`CurvedArrow\` edges between labeled rounded nodes.
4. Output both the executable \`manim -pqh explainer.py ExplainerScene\` Python code and a synchronized browser Canvas preview of the exact mathematical curve and tangent animation.`,
    prompt: `Write a Manim Community Scene in Python combining TransformMatchingTex equation morphing, an always_redraw ValueTracker tangent/Riemann plot on Axes, and animated diagram arrows.`,
    category: 'Video',
    tags: ['Video', 'Motion', 'Creative Coding', 'Prompt', 'Example'],
    source: 'Manim Community',
    sourceUrl: 'https://github.com/ManimCommunity/manim',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Explain how a Fourier epicycle sum approximates a square wave alongside its LaTeX series expansion.',
    exampleOutput: 'Complete Manim `Scene` Python script + interactive browser Fourier epicycle & tangent visualizer.',
    license: 'MIT'
  },

  // 30. Lottie Web Scroll-Scrubbed Vector Animation (Lottie Web)
  {
    id: 'prompt-lottie-web-scroll-scrubber',
    sourceId: 'lottie-web',
    title: 'High-Performance Scroll-Scrubbed Lottie Vector Controller',
    description: 'Integrates `lottie-web` with IntersectionObserver auto-pausing, Canvas vs. SVG renderer switching, and frame-accurate `goToAndStop(frame, true)` scroll scrubbing.',
    originalPrompt: 'Load a Lottie JSON animation in React and scrub frames on scroll.',
    optimizedPrompt: `Implement a performance-hardened \`lottie-web\` (\`github.com/airbnb/lottie-web\`) React controller:
1. Lifecycle & Memory Safety: Instantiate via \`lottie.loadAnimation({ container, renderer: 'svg' | 'canvas', loop: false, autoplay: false, animationData })\` and guarantee \`anim.destroy()\` on unmount.
2. Viewport Gating: Attach an \`IntersectionObserver\` so offscreen Lottie instances never consume CPU/GPU frame budget.
3. Frame-Accurate Scrubbing: Map normalized scroll or slider progress \`p in [0, 1]\` to \`anim.goToAndStop(p * anim.totalFrames, true)\` inside a single \`requestAnimationFrame\` tick.
4. Reduced Motion: Jump directly to the key illustrative poster frame (\`totalFrames * 0.65\`) when \`prefers-reduced-motion: reduce\` is active.`,
    prompt: `Build a memory-safe lottie-web React controller with IntersectionObserver offscreen pausing, SVG/Canvas renderer toggle, rAF frame scrubbing, and reduced-motion poster frame fallback.`,
    category: 'Motion',
    tags: ['Motion', 'Performance', 'Frontend', 'Prompt', 'Example'],
    source: 'Lottie Web',
    sourceUrl: 'https://github.com/airbnb/lottie-web',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Interactive vector architecture diagram that scrubs through 120 frames as the user drags a timeline slider or scrolls.',
    exampleOutput: 'TypeScript `<LottieScrubber />` component with live frame counter and renderer benchmark toggle.',
    license: 'MIT'
  },

  // 31. MCP for Blender 3D Agent Scene Construction (MCP for Blender)
  {
    id: 'prompt-mcp-blender-procedural-studio',
    sourceId: 'mcp-for-blender',
    title: 'Blender MCP Agent Prompt: Procedural 3D Studio & Isometric Scene',
    description: 'Directs an AI agent connected via `mcp-for-blender` to construct a complete Blender scene with three-point area lighting, PBR shader nodes, geometry modifiers, and an orthographic turntable camera.',
    originalPrompt: 'Create a 3D isometric room in Blender with warm lighting and materials using Blender MCP.',
    optimizedPrompt: `Using the Model Context Protocol tools provided by \`mcp-for-blender\` (\`github.com/ahujasid/mcp-for-blender\`), execute a structured 5-step 3D scene construction pipeline in Blender:
1. Scene Hygiene & Camera: Inspect current scene via \`get_scene_info\`, clear default cube, and create an Orthographic Camera (\`ortho_scale = 8.5\`) at \`location=(7.5, -7.5, 6.2)\`, \`rotation=(58deg, 0, 45deg)\` parented to an Empty turntable rig at the origin.
2. Procedural Geometry (\`execute_blender_code\`): Generate a modular architectural diorama with Bevel modifiers (\`width=0.02, segments=3\`) so edges catch specular highlights realistically.
3. Principled BSDF Node Graph: Construct brushed anodized aluminum (\`Metallic=0.92, Roughness=0.24\`), warm alabaster ceramic (\`Subsurface Weight=0.15\`), and emissive neon accents (\`Emission Strength=8.0\`).
4. Three-Point Studio Lighting: Key Area Light (\`500W, 3800K warm\`), Rim Area Light (\`350W, 7500K cool cyan\`), and Fill Top Softbox (\`150W\`).
5. Verification: Configure Cycles GPU rendering (\`samples=128\`, AgX color management, High Contrast look) and capture viewport preview to verify silhouette readability.`,
    prompt: `Use mcp-for-blender tools (get_scene_info, execute_blender_code) to build a beveled isometric diorama with Principled BSDF metallic/ceramic shaders, 3-point warm/cool studio area lights, and an AgX Cycles turntable camera.`,
    category: '3D',
    tags: ['3D', 'Agent Skill', 'Workflow', 'Prompt', 'Example'],
    source: 'MCP for Blender',
    sourceUrl: 'https://github.com/ahujasid/mcp-for-blender',
    model: 'Claude 3.7 Sonnet / Cursor + Blender MCP Server',
    exampleInput: 'Build a stylized hardware synthesizer diorama on an isometric plinth with glowing OLED screen and rotary encoders.',
    exampleOutput: 'Complete `bpy` Python execution script + MCP tool call sequence producing a Cycles-ready `.blend` scene.',
    license: 'MIT'
  },

  // 32. Three.js Interactive PBR & Custom Shader Scene (Three.js + Three GPU Pathtracer)
  {
    id: 'prompt-threejs-pbr-pathtraced-scene',
    sourceId: 'threejs',
    title: 'Three.js Instanced PBR Geometry & GPU Path Tracing Integration',
    description: 'Constructs a responsive 3D WebGL scene with `InstancedMesh`, custom Fresnel GLSL shaders, damped camera orbit, and progressive `three-gpu-pathtracer` global illumination.',
    originalPrompt: 'Create an interactive 3D scene in Three.js with instanced meshes, lights, and custom shaders.',
    optimizedPrompt: `Build a high-performance 3D scene combining \`three\` (\`mrdoob/three.js\`) and \`three-gpu-pathtracer\` (\`gkjohnson/three-gpu-pathtracer\`):
1. Scene & Camera: Initialize \`WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })\` with \`ACESFilmicToneMapping\` and clamped \`devicePixelRatio (<= 2)\`.
2. Instanced Geometry: Render 120 kinetic crystalline forms via a single \`THREE.InstancedMesh\` draw call, updating each instance matrix along a curl-noise orbital path in the animation loop.
3. Realistic Lighting & Path Tracer Mode: Provide a toggle between real-time 60fps PBR (\`MeshPhysicalMaterial\` with \`transmission: 0.92, ior: 1.52, roughness: 0.08, thickness: 1.5\`) and progressive BVH GPU Path Tracing (\`WebGLPathTracer\`) that accumulates global illumination and caustics when the camera is stationary.
4. Resource Cleanup: Dispose geometries, materials, textures, and renderer context on component unmount.`,
    prompt: `Build a Three.js scene with a 120-instance MeshPhysicalMaterial dielectric crystal array, ACESFilmic tone mapping, damped pointer camera orbit, and a progressive three-gpu-pathtracer GI mode.`,
    category: '3D',
    tags: ['3D', 'WebGL', 'Shader', 'Creative Coding', 'Prompt', 'Example'],
    source: 'Three.js / Three GPU Pathtracer',
    sourceUrl: 'https://github.com/mrdoob/three.js',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Interactive 3D hero sculpture with real-time dielectric refraction and camera orbit.',
    exampleOutput: 'Complete Three.js / WebGL module + interactive 3D viewport in the Masallah live demo studio.',
    license: 'MIT'
  },

  // 33. Jolt Physics + postprocessing + Three.quarks + Tweakpane (Interactive 3D VFX Stack)
  {
    id: 'prompt-webgl-postprocessing-quarks-tweakpane',
    sourceId: 'postprocessing',
    title: 'WebGL Post-Processing (Bloom/DoF), Three.quarks Particles & Tweakpane HUD',
    description: 'Unifies Jolt rigid-body collisions, `three.quarks` batched particle trails, `pmndrs/postprocessing` merged shader passes, and a live `Tweakpane` parameter tuner.',
    originalPrompt: 'Add bloom post-processing, particle trails, physics collision, and a Tweakpane debug panel to a Three.js scene.',
    optimizedPrompt: `Integrate the complete creative 3D WebGL toolchain (\`jolt-physics\`, \`three.quarks\`, \`pmndrs/postprocessing\`, and \`tweakpane\`):
1. Physics Simulation (\`JoltPhysics.js\`): Step rigid-body spheres with restitution and attract them toward a central magnetic singularity; detect impulse thresholds on collision contacts.
2. Batched VFX (\`three.quarks\`): Attach a single \`BatchedRenderer\` to the scene; spawn GPU ribbon trails on moving bodies and trigger a radial spark burst emitter whenever collision impulse exceeds threshold.
3. Consolidated Shader Pipeline (\`pmndrs/postprocessing\`): Merge \`SelectiveBloomEffect({ intensity: 1.8, luminanceThreshold: 0.75, mipmapBlur: true })\`, \`DepthOfFieldEffect\`, and \`VignetteEffect\` into a single consolidated \`EffectPass\` inside \`EffectComposer\`.
4. Live Parameter Tuning (\`Tweakpane\`): Bind real-time controls for Bloom Intensity, Chromatic Aberration, Particle Emission Rate, Gravity Vector, and Time Scale, plus an exportable JSON preset button.`,
    prompt: `Integrate JoltPhysics collision events, Three.quarks BatchedRenderer particle trails, pmndrs/postprocessing merged Bloom + DoF EffectPass, and a live Tweakpane parameter HUD with JSON preset export.`,
    category: 'WebGL',
    tags: ['WebGL', '3D', 'VFX', 'Shader', 'Tool', 'Prompt', 'Example'],
    source: 'postprocessing / Three.quarks / Tweakpane / Jolt Physics',
    sourceUrl: 'https://github.com/pmndrs/postprocessing',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Interactive WebGL VFX & shader parameter laboratory with real-time Tweakpane controls.',
    exampleOutput: 'Unified WebGL + Tweakpane interactive sandbox with live bloom, particle trail, and physics controls.',
    license: 'MIT / Zlib'
  },

  // 34. ComfyUI Headless API & Reproducible Node Graph (ComfyUI)
  {
    id: 'prompt-comfyui-reproducible-workflow-api',
    sourceId: 'comfyui',
    title: 'ComfyUI Reproducible DAG Workflow JSON & Headless WebSocket Pipeline',
    description: 'Designs a deterministic ComfyUI node graph (Depth ControlNet + IPAdapter style transfer + latent upscaler) with a Python/TypeScript WebSocket runner—without bundling restricted model weights.',
    originalPrompt: 'Create a ComfyUI workflow JSON and Python script to generate consistent style frames for a video.',
    optimizedPrompt: `Design a reproducible, license-compliant ComfyUI (\`github.com/Comfy-Org/ComfyUI\`) automation pipeline:
1. DAG Node Graph Architecture (\`workflow_api.json\`):
   - Node 1 (\`CheckpointLoaderSimple\`): Parameterized model filename input (never hardcode or commit proprietary checkpoint binaries into git).
   - Node 2 (\`ControlNetLoader\` + \`ControlNetApplyAdvanced\`): Lock structural layout using a Blender/Three.js depth pass (\`strength: 0.78, start_percent: 0.0, end_percent: 0.85\`).
   - Node 3 (\`KSampler\`): Fixed seed + Euler Ancestral / Karras scheduler for deterministic keyframe reproducibility.
   - Node 4 (\`LatentUpscaleBy\` + secondary \`KSampler\` denoise \`0.35\`) → \`VAEDecode\` → \`SaveImage\`.
2. Headless WebSocket Client: Write a clean Python/Node script that connects to \`ws://127.0.0.1:8188/ws?clientId=...\`, injects dynamic prompt/seed overrides into the API JSON graph, monitors node-by-node execution progress, and retrieves the output PNG frames.`,
    prompt: `Construct a deterministic ComfyUI API DAG workflow (Depth ControlNet + fixed-seed KSampler + 0.35-denoise latent upscale) and a WebSocket client runner that executes the graph without committing model binaries.`,
    category: 'Generative AI',
    tags: ['Generative AI', 'Workflow', 'Video', 'Tool', 'Prompt'],
    source: 'ComfyUI',
    sourceUrl: 'https://github.com/Comfy-Org/ComfyUI',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Batch-generate 8 consistent art-directed storyboard keyframes from Three.js depth maps.',
    exampleOutput: 'Parameterized `comfyui-depth-keyframe-workflow.json` + headless WebSocket execution script.',
    license: 'GPL-3.0 (Workflow & Script Only — No Model Weights)'
  },

  // 35. CosyVoice Multilingual Narration + WhisperX Forced Alignment (CosyVoice & WhisperX)
  {
    id: 'prompt-cosyvoice-whisperx-narration-pipeline',
    sourceId: 'cosyvoice',
    title: 'CosyVoice Multilingual Narration & WhisperX Word-Level Subtitle Pipeline',
    description: 'Chains zero-shot multilingual voice synthesis (`CosyVoice`) with phoneme-level forced alignment (`WhisperX`) to output 24kHz WAV narration and millisecond-accurate JSON captions for Remotion.',
    originalPrompt: 'Generate voiceover audio with CosyVoice and extract word-level timestamps using WhisperX.',
    optimizedPrompt: `Build an automated narration and word-level subtitle synchronization pipeline chaining \`CosyVoice\` (\`FunAudioLLM/CosyVoice\`) and \`WhisperX\` (\`m-bain/whisperX\`):
1. Multilingual Narration Synthesis (\`CosyVoice2\`):
   - Segment script by sentence boundaries and apply explicit prosody/breath markers.
   - Synthesize 24kHz mono WAV segments using \`cosyvoice.inference_instruct2()\` or zero-shot speaker reference (keeping pretrained model weights in local cache outside git).
2. Phoneme Forced Alignment (\`WhisperX\`):
   - Transcribe synthesized audio with \`whisperx.load_model("large-v3", compute_type="float16")\`.
   - Run wav2vec2 phoneme alignment via \`whisperx.load_align_model()\` and \`whisperx.align()\` to produce exact \`{ word, start, end, score }\` millisecond timestamps.
3. Remotion Export: Convert aligned word timestamps into both \`.srt\`/\`.vtt\` and a typed Remotion \`captions.json\` array.`,
    prompt: `Write a Python pipeline chaining CosyVoice multilingual speech synthesis with WhisperX wav2vec2 phoneme forced alignment to output 24kHz WAV narration and millisecond-accurate Remotion word captions.`,
    category: 'Audio',
    tags: ['Audio', 'Video', 'Workflow', 'Generative AI', 'Prompt'],
    source: 'CosyVoice / WhisperX',
    sourceUrl: 'https://github.com/QwenAudio/CosyVoice',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Turkish & English bilingual technical explainer script (90 seconds) requiring frame-accurate word highlighting in Remotion.',
    exampleOutput: 'End-to-end Python pipeline (`narrate_and_align.py`) outputting `narration.wav`, `subtitles.srt`, and `remotion-captions.json`.',
    license: 'Apache-2.0 / BSD-2-Clause'
  },

  // 36. librosa Beat & Onset Detection for Audio-Reactive Motion (librosa)
  {
    id: 'prompt-librosa-audio-reactive-sync',
    sourceId: 'librosa',
    title: 'librosa Beat Tracking, Onset Envelope & Frame-Sync JSON Exporter',
    description: 'Extracts BPM tempo, beat frames, percussive transients, and 4-band spectral energy using `librosa` and exports a 60fps frame-indexed JSON timeline for Remotion and Three.js.',
    originalPrompt: 'Analyze an audio file with librosa to detect beats and export a JSON file for video animation.',
    optimizedPrompt: `Write a Python audio-analysis script using \`librosa\` (\`github.com/librosa/librosa\`) that bridges music signals directly into 60fps web/video animations:
1. Harmonic-Percussive Source Separation: Split audio via \`y_harm, y_perc = librosa.effects.hpss(y)\` so beat detection locks onto crisp percussive transients.
2. Beat & Onset Extraction: Compute \`onset_env = librosa.onset.onset_strength(y=y_perc, sr=sr)\`, \`tempo, beat_frames = librosa.beat.beat_track(onset_envelope=onset_env, sr=sr)\`, and convert frames to exact timestamps (\`librosa.frames_to_time\`).
3. 60fps Frame Resampling: Interpolate sub-bass (20–120Hz), mid (120–2000Hz), and high-hat (2000–12000Hz) RMS energy onto a deterministic 60fps video frame grid (\`frame_0 ... frame_N\`) so Remotion or Three.js shaders can read \`audioData.frames[currentFrame].bass\` in $O(1)$ time.`,
    prompt: `Write a librosa Python script performing HPSS separation, beat tracking, and 3-band spectral energy extraction resampled onto a deterministic 60fps JSON frame array for Remotion and Three.js.`,
    category: 'Audio',
    tags: ['Audio', 'Motion', 'Video', 'Creative Coding', 'Prompt', 'Workflow'],
    source: 'librosa',
    sourceUrl: 'https://github.com/librosa/librosa',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: '124 BPM electronic soundtrack (`track.wav`) driving a 60fps audio-reactive particle shader.',
    exampleOutput: 'Python analyzer (`extract_audio_sync.py`) + 60fps `audio-frames.json` schema and live visualizer demo.',
    license: 'ISC / MIT'
  },

  // 37. OBS Studio + LosslessCut + FFmpeg Production Mastering Pipeline (FFmpeg, LosslessCut, OBS)
  {
    id: 'prompt-ffmpeg-lossless-mastering-pipeline',
    sourceId: 'ffmpeg',
    title: 'OBS Capture, LosslessCut Keyframe Trimming & FFmpeg Web/Social Mastering',
    description: 'Provides safe, copy-pasteable FFmpeg & LosslessCut commands for lossless segment cutting, EBU R128 loudness normalization, high-efficiency MP4/WebM/AV1 web delivery, and sprite sheet generation.',
    originalPrompt: 'Give me FFmpeg commands to compress video for the web, normalize audio, and extract clips.',
    optimizedPrompt: `Provide a defensive, production-tested media engineering toolkit combining OBS Studio (\`obs-studio\`), LosslessCut (\`lossless-cut\`), and FFmpeg (\`FFmpeg/FFmpeg\`):
1. OBS Capture Configuration: Record MKV container (crash-resilient) at 60fps using hardware CQP/CRF 16 (Color Space: Rec.709, Range: Partial) before remuxing to MP4.
2. Zero-Reencode Segment Extraction (LosslessCut / FFmpeg Stream Copy):
   \`ffmpeg -ss 00:00:12.500 -to 00:00:42.000 -i input.mkv -c copy -avoid_negative_ts make_zero cut_lossless.mp4\`
3. Dual-Pass EBU R128 Audio Loudness Normalization (-14 LUFS for Web/YouTube, -1.0 dBTP true peak):
   \`ffmpeg -i input.mp4 -af loudnorm=I=-14:TP=-1.0:LRA=11 -c:v copy normalized.mp4\`
4. High-Craft Web Hero Loop Delivery (Muted H.264 MP4 + VP9 WebM + First-Frame WebP Poster):
   - Fast-start H.264: \`ffmpeg -i normalized.mp4 -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart -an hero-loop.mp4\`
   - VP9 WebM: \`ffmpeg -i normalized.mp4 -c:v libvpx-vp9 -b:v 0 -crf 28 -row-mt 1 -an hero-loop.webm\``,
    prompt: `Generate a production media mastering guide with safe FFmpeg and LosslessCut CLI recipes for keyframe-accurate stream copy, EBU R128 (-14 LUFS) audio normalization, faststart H.264/VP9 web loops, and contact sheet generation.`,
    category: 'Video',
    tags: ['Video', 'Audio', 'Tool', 'Workflow', 'Prompt', 'Example'],
    source: 'FFmpeg / LosslessCut / OBS Studio',
    sourceUrl: 'https://github.com/FFmpeg/FFmpeg',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Raw 4K 60fps OBS screen capture (`demo-raw.mkv`) needing lossless trimming, loudness normalization, and <2.5MB web hero loop export.',
    exampleOutput: 'Annotated shell pipeline (`master-media.sh`) with input validation and bitrate verification.',
    license: 'MIT'
  },

  // 38. End-to-End Multi-Tool AI Video & Interactive 3D Master Orchestrator
  {
    id: 'prompt-master-creative-pipeline-orchestrator',
    sourceId: 'remotion',
    title: 'Masallah Master Toolchain Orchestrator (Remotion + Three.js + Audio + FFmpeg)',
    description: 'Master system prompt instructing an autonomous coding agent how to combine Remotion, Three.js, Anime.js, CosyVoice, librosa, WhisperX, and FFmpeg into a single automated studio pipeline.',
    originalPrompt: 'Combine Remotion, Three.js, CosyVoice, librosa, WhisperX, and FFmpeg to generate a complete video.',
    optimizedPrompt: `Act as a Principal Creative Technologist orchestrating the Masallah Generative Video & 3D Toolchain:
1. Audio & Timing Spine First: Synthesize narration via \`CosyVoice\`, extract millisecond word timestamps via \`WhisperX\`, and extract 60fps beat/spectral envelopes from the background score via \`librosa\`. Combine both into a single deterministic \`timeline-manifest.json\`.
2. 3D & VFX Layer: Render 3D scene elements in \`Three.js\` (\`@remotion/three\`) with \`three.quarks\` particle emitters and \`pmndrs/postprocessing\` bloom driven directly by \`timeline-manifest.json\` beat frames.
3. 2D Motion & Kinetic Typography: Choreograph UI cards, diagrams (\`Manim\` SVG exports), and word-by-word captions in \`Remotion\` using \`spring()\` and \`Anime.js\` timelines synced to \`useCurrentFrame()\`.
4. Final Mastering: Render frames via \`npx remotion render\`, normalize integrated loudness to -14 LUFS and mux multi-track subtitles via \`FFmpeg\`, and extract social preview segments via \`LosslessCut\`.`,
    prompt: `Orchestrate an end-to-end automated video pipeline combining CosyVoice narration, WhisperX word timestamps, librosa 60fps beat envelopes, Three.js + postprocessing 3D scenes inside Remotion, and FFmpeg -14 LUFS final mastering.`,
    category: 'Workflow',
    tags: ['Workflow', 'Video', '3D', 'Audio', 'Agent Skill', 'Prompt'],
    source: 'Masallah Master Toolchain',
    sourceUrl: 'https://github.com/remotion-dev/remotion',
    model: 'Claude 3.7 Sonnet / Gemini 2.5 Pro',
    exampleInput: 'Produce a 60-second 1080p60 technical launch trailer from a Markdown script and audio stem.',
    exampleOutput: 'Complete `timeline-manifest.json` schema, Remotion + Three.js composition, and FFmpeg mastering pipeline.',
    license: 'MIT'
  }
];
