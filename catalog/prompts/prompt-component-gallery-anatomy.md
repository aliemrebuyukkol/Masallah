# Cross-Design-System Component Anatomy & API Specification

- **Category:** Design System
- **Source:** [Component Gallery](https://component.gallery)
- **Target Model:** Gemini 2.5 Pro / Claude 3.7 Sonnet
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Design System, Component, UI, Accessibility, Prompt

## Description

Synthesizes a canonical component specification (slots, states, ARIA roles, keyboard map, and token contract) informed by 60+ design systems.

## Original Prompt

```text
Specify a reusable Combobox / Command Palette component with props and accessibility rules.
```

## Masallah Optimized Prompt

```text
Using the cross-system analysis methodology of The Component Gallery (`component.gallery`), produce a complete Component Anatomy & API Specification for the requested UI component:
1. Canonical Naming & Aliases across major systems (e.g., Polaris, Carbon, Radix, Primer, Material).
2. Structural Anatomy Diagram (Root, Trigger, Input, Listbox, Group, Item, Empty, Separator, Badge).
3. Prop & State Matrix (controlled vs. uncontrolled, async loading, disabled, readOnly, invalid).
4. WAI-ARIA 1.2 Contract (`role`, `aria-expanded`, `aria-activedescendant`, `aria-controls`) and complete Keyboard Map (`ArrowDown`, `ArrowUp`, `Home`, `End`, `Enter`, `Escape`).
5. Semantic Design Token Contract (surface, border, focus-ring, active-item).
```

## Example Input

Component: Global Search & Filter Command Palette (`<CommandFilter />`).

## Example Output

Comprehensive Markdown + TypeScript interface specification and accessible React implementation.
