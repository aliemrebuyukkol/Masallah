# Standards-Based View Transitions & IntersectionObserver Pipeline

- **Category:** Frontend
- **Source:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** CC0 / MIT
- **Tags:** Frontend, Documentation, Architecture, Interaction, Prompt

## Description

Applies modern browser-native Web APIs (View Transitions API, URLSearchParams history sync, Clipboard API, IntersectionObserver) with progressive enhancement.

## Original Prompt

```text
Use the View Transitions API and URLSearchParams to filter a list smoothly.
```

## Masallah Optimized Prompt

```text
Implement a standards-compliant, progressively enhanced frontend interaction using native Web APIs documented on MDN Web Docs:
1. View Transitions API: Wrap filter and route state updates in `document.startViewTransition(() => updateState())` with a safe fallback when `!('startViewTransition' in document)` or when `window.matchMedia('(prefers-reduced-motion: reduce)').matches` is true.
2. Shareable URL State: Synchronize active filter parameters (`?category=Motion&q=shader&type=Prompt`) bidirectionally with `URLSearchParams` and `window.history.replaceState` so deep links and browser refreshes restore exact UI state.
3. Resilient Clipboard API: Use `navigator.clipboard.writeText()` with permission error handling and visual confirmation.
```

## Example Input

Client-side search & multi-facet filter controller for static Next.js export.

## Example Output

TypeScript hook synchronizing URL query params, history state, and View Transitions.
