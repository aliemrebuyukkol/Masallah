# shadcn/ui Interface & System Architecture

- **Source:** [shadcn/ui](https://ui.shadcn.com)
- **Category:** Component
- **Technologies:** React, TypeScript, Tailwind CSS, Radix UI, class-variance-authority

## Visual Analysis

- **Layout:** Structured modular grid optimized for Component scannability and progressive disclosure.
- **Typography:** High-legibility system pairing clear hierarchical headings with monospace code/token identifiers.
- **Color System:** High-contrast accessible surface tokens meeting WCAG AA/AAA contrast ratios.
- **Spacing:** Consistent 4px/8px spatial cadence with generous section separation.
- **Motion:** Purposeful, low-latency transitions honoring prefers-reduced-motion.
- **Components:** Component Module, Design System Module, React Module, Tailwind CSS Module

## Masallah Generation Prompt

```text
Write a production-grade, open-code React compound component following shadcn/ui architectural conventions:
- Export granular subcomponents (`Root`, `Trigger`, `Content`, `Header`, `Footer`) with clean `data-slot` attributes for predictable styling.
- Define deterministic visual variants (`variant`, `size`) with type-safe variant inference.
- Support controlled (`value` / `onValueChange`) and uncontrolled (`defaultValue`) usage patterns seamlessly.
- Ensure 100% keyboard navigability (roving tabindex for tabs, focus restoration on dialog close) without external bloated dependencies.
```
