# Static-First Selective Hydration & Search Indexing Pattern

- **Category:** Architecture
- **Source:** [Patterns.dev](https://www.patterns.dev)
- **Target Model:** Gemini 2.5 Pro / Claude 3.7 Sonnet
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Architecture, Frontend, Performance, Prompt

## Description

Designs a high-performance Next.js static export architecture combining build-time SSG pre-rendering with lightweight client islands for search and interactive WebGL demos.

## Original Prompt

```text
Design a performant Next.js architecture using patterns from patterns.dev.
```

## Masallah Optimized Prompt

```text
Architect a high-performance web application applying rendering and bundle patterns from Patterns.dev:
1. Build-Time Static Generation (SSG): Pre-render all catalog routes, source pages, and metadata at build time (`output: 'export'`) for instant TTFB from CDN edge.
2. Selective Client Islands: Keep documentation, tables, and cards as lightweight zero-state markup; hydrate interactive sandboxes (Three.js, Anime.js, Tweakpane) lazily on viewport entry or user tab activation.
3. Inverted Index Search Memoization: Pre-normalize search tokens at module load and filter with `useDeferredValue` so typing in the global search input remains locked at 60fps even across hundreds of catalog entries.
```

## Example Input

Web archive hosting 46 sources, 38 prompts, 32 repo guides, and 12 interactive live demos under a static `/masallahpub` subpath.

## Example Output

Architectural blueprint and React island loader with `useDeferredValue` full-text search.
