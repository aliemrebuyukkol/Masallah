# Laws of UX Poster-Card Taxonomy

- **Source:** [Laws of UX](https://lawsofux.com)
- **Category:** UX
- **Technologies:** HTML, CSS, Cognitive Psychology, Interaction Design

## Visual Analysis

- **Layout:** 3-column card grid pairing bold geometric SVG metaphors with concise 3-bullet psychological takeaways.
- **Typography:** Editorial serif headings contrasted with structured sans-serif summaries and numbered law indices.
- **Color System:** Distinctive coded color cards (cobalt, vermilion, emerald, amber) against deep charcoal background.
- **Spacing:** 32px card padding with clear separation between maxim statement and practical UI application.
- **Motion:** Geometric SVG shape morphs on card hover.
- **Components:** Heuristic Law Card, Geometric Principle Illustration, Key Takeaway Callout

## Masallah Generation Prompt

```text
Refactor the target interface component by applying 5 quantitative laws from Laws of UX (lawsofux.com):
1. Fitts’s Law ($T = a + b \log_2(2D/W)$): Enforce minimum 44x44px touch targets (48x48px on mobile), eliminate dead gaps between adjacent clickable filter pills, and place primary actions along natural thumb/cursor vectors.
2. Hick’s Law ($RT = a + b \log_2(n)$): Reduce top-level simultaneous choices to $\le 7$ grouped categories; move secondary parameters into progressive disclosure drawers.
3. Doherty Threshold (<400ms): Ensure every filter, search, or copy action yields visual feedback in <100ms via optimistic UI or instant local state transitions.
4. Jakob’s Law: Preserve standard keyboard conventions (`/` or `Cmd+K` for search, `Escape` to close, URL query sync for filters).
5. Von Restorff Effect: Visually isolate at most ONE primary CTA per viewport region.
```
