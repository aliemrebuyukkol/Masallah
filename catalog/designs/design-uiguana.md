# SaaS Product Workspace & Multi-State UI Pattern

- **Source:** [UI Guana](https://uiguana.com)
- **Category:** UI
- **Technologies:** React, Design Systems, UI State Machines

## Visual Analysis

- **Layout:** 240px collapsible command sidebar + sticky 56px breadcrumb header + fluid data workspace with contextual inspector drawer.
- **Typography:** 14px dense UI body copy, 12px medium-weight form labels, and 11px monospace keyboard shortcut badges.
- **Color System:** Semantic surface tokens (bg-base, bg-elevated, bg-overlay) with dedicated status tokens for info, warning, danger, and success.
- **Spacing:** 4px/8px/12px/16px high-density application spacing scale.
- **Motion:** 180ms drawer slide-overs and optimistic skeleton shimmer loaders.
- **Components:** Command Palette (Cmd+K), Empty State Action Card, Inline Validation Form, Multi-Step Onboarding Checklist

## Masallah Generation Prompt

```text
Design and implement a production SaaS workspace view that explicitly models all 5 UI states (inspired by UI Guana interface state completeness):
1. Loading State: Layout-matched shimmer skeleton that preserves exact bounding boxes (zero CLS).
2. Empty State: Actionable onboarding card explaining *why* the view is empty, offering a 1-click "Load Sample Dataset" button and a primary creation CTA.
3. Error / Degraded State: Non-destructive inline banner with diagnostic code, timestamp, and an idempotent "Retry Request" button with exponential backoff indicator.
4. Filtered-Zero State: Distinct from initial empty state; displays active filter pills and a "Reset All Filters" action.
5. Populated State: High-density keyboard-navigable table/grid with optimistic row actions and a live state switcher toolbar so reviewers can inspect all 5 states interactively.
```
