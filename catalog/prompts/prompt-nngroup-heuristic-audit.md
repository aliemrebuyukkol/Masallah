# Jakob Nielsen 10 Usability Heuristics & Cognitive Load Audit

- **Category:** UX
- **Source:** [Nielsen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/)
- **Target Model:** Gemini 2.5 Pro / Claude 3.7 Sonnet
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** UX, Testing, Accessibility, Prompt, Workflow

## Description

Performs a rigorous, evidence-based UX audit of any component or user flow against Jakob Nielsen’s 10 Usability Heuristics with severity ratings (0–4) and concrete code remediations.

## Original Prompt

```text
Review this UI for usability issues using Nielsen Norman Group heuristics.
```

## Masallah Optimized Prompt

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

## Example Input

Multi-step checkout modal that clears form inputs on validation failure and lacks Escape key dismissal.

## Example Output

Structured heuristic audit identifying Severity 4 Error Recovery failure and Severity 3 User Control violation, plus patched React Hook Form + Radix Dialog implementation.
