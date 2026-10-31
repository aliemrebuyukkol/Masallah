# Laws of UX Quantitative Interface Refactor (Fitts, Hick, Doherty)

- **Category:** UX
- **Source:** [Laws of UX](https://lawsofux.com)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** UX, UI, Interaction, Accessibility, Prompt

## Description

Refactors navigation bars, forms, and toolbars using quantitative thresholds from Fitts’s Law, Hick’s Law, Miller’s Law, and the Doherty Threshold (<400ms).

## Original Prompt

```text
Improve this interface using Fitts Law and Hick Law from lawsofux.com.
```

## Masallah Optimized Prompt

```text
Refactor the target interface component by applying 5 quantitative laws from Laws of UX (lawsofux.com):
1. Fitts’s Law ($T = a + b \log_2(2D/W)$): Enforce minimum 44x44px touch targets (48x48px on mobile), eliminate dead gaps between adjacent clickable filter pills, and place primary actions along natural thumb/cursor vectors.
2. Hick’s Law ($RT = a + b \log_2(n)$): Reduce top-level simultaneous choices to $\le 7$ grouped categories; move secondary parameters into progressive disclosure drawers.
3. Doherty Threshold (<400ms): Ensure every filter, search, or copy action yields visual feedback in <100ms via optimistic UI or instant local state transitions.
4. Jakob’s Law: Preserve standard keyboard conventions (`/` or `Cmd+K` for search, `Escape` to close, URL query sync for filters).
5. Von Restorff Effect: Visually isolate at most ONE primary CTA per viewport region.
```

## Example Input

A 22-button ungrouped filter toolbar with 24px height tags and 800ms unbuffered filter lag.

## Example Output

Refactored 6-category segmented toolbar with 44px hit areas, instant client-side memoized filtering (<16ms), and progressive "More Filters" popover.
