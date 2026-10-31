# Nielsen Norman Group Interface & System Architecture

- **Source:** [Nielsen Norman Group](https://www.nngroup.com)
- **Category:** UX
- **Technologies:** Usability Testing, Heuristic Evaluation, Information Architecture, WCAG

## Visual Analysis

- **Layout:** Structured modular grid optimized for UX scannability and progressive disclosure.
- **Typography:** High-legibility system pairing clear hierarchical headings with monospace code/token identifiers.
- **Color System:** High-contrast accessible surface tokens meeting WCAG AA/AAA contrast ratios.
- **Spacing:** Consistent 4px/8px spatial cadence with generous section separation.
- **Motion:** Purposeful, low-latency transitions honoring prefers-reduced-motion.
- **Components:** UX Module, Usability Module, Heuristics Module, Information Architecture Module

## Masallah Generation Prompt

```text
Act as a Principal UX Researcher trained in Nielsen Norman Group (NN/g) methodology. Evaluate the provided UI code or user flow against all 10 Usability Heuristics:
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
- Concrete code remediation.
```
