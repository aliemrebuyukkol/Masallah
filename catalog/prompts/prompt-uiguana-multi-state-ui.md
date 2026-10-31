# Multi-State Product Interface (Empty, Loading, Error, Populated)

- **Category:** UI
- **Source:** [UI Guana](https://uiguana.com)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** UI, UX, Component, Frontend, Prompt

## Description

Generates production-complete application screens that explicitly implement all 5 operational states: skeleton loading, first-time empty state, validation error, partial degradation, and populated data.

## Original Prompt

```text
Create a dashboard UI component with loading and empty states.
```

## Masallah Optimized Prompt

```text
Design and implement a production SaaS workspace view that explicitly models all 5 UI states (inspired by UI Guana interface state completeness):
1. Loading State: Layout-matched shimmer skeleton that preserves exact bounding boxes (zero CLS).
2. Empty State: Actionable onboarding card explaining *why* the view is empty, offering a 1-click "Load Sample Dataset" button and a primary creation CTA.
3. Error / Degraded State: Non-destructive inline banner with diagnostic code, timestamp, and an idempotent "Retry Request" button with exponential backoff indicator.
4. Filtered-Zero State: Distinct from initial empty state; displays active filter pills and a "Reset All Filters" action.
5. Populated State: High-density keyboard-navigable table/grid with optimistic row actions and a live state switcher toolbar so reviewers can inspect all 5 states interactively.
```

## Example Input

Feature: API Webhook Delivery Inspector for a developer dashboard.

## Example Output

TypeScript React component with discriminated union state machine (`status: "loading" | "empty" | "filtered-empty" | "error" | "ready"`) and zero layout shift.
