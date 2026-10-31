# shadcn/ui Open-Code Compound Component Pattern

- **Category:** Component
- **Source:** [shadcn/ui](https://ui.shadcn.com/docs)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Component, Design System, Frontend, Accessibility, Prompt

## Description

Builds a copy-pasteable, composable compound component in TypeScript using `cva` variants, forwarded refs, and slot composition.

## Original Prompt

```text
Build a reusable Tabs and Dialog component in the style of shadcn/ui.
```

## Masallah Optimized Prompt

```text
Write a production-grade, open-code React compound component following shadcn/ui architectural conventions:
- Export granular subcomponents (`Root`, `Trigger`, `Content`, `Header`, `Footer`) with clean `data-slot` attributes for predictable styling.
- Define deterministic visual variants (`variant`, `size`) with type-safe variant inference.
- Support controlled (`value` / `onValueChange`) and uncontrolled (`defaultValue`) usage patterns seamlessly.
- Ensure 100% keyboard navigability (roving tabindex for tabs, focus restoration on dialog close) without external bloated dependencies.
```

## Example Input

Compound `<PromptInspector>` tabs component switching between Original Prompt, Masallah Optimized Prompt, Visual Analysis, and Code Snippet.

## Example Output

TypeScript compound component with keyboard arrow navigation and one-click clipboard copy integration.
