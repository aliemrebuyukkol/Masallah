# Masallah — System & Frontend Architecture

## Overview

Masallah is structured as a data-driven monorepo combining a normalized JSON knowledge base (`data/`), Markdown reference archives (`catalog/` and `examples/`), deterministic collection/validation scripts (`scripts/`), and a Next.js static-export web application (`apps/web/`) deployed at `https://nazartesi.com/masallahpub`.

## Key Architectural Decisions

1. **Static Subpath Isolation (`basePath: '/masallahpub'`):**
   `nazartesi.com` serves production content from Firebase Hosting (`webtanitim/`). By compiling `apps/web` with `output: 'export'` and `basePath: '/masallahpub'`, all Masallah routes, scripts, and SVG previews live cleanly inside `/masallahpub` without modifying any root `nazartesi.com` files.
2. **Single Source of Truth Data Pipeline:**
   `scripts/collect/discover-sources.mjs` probes HTTP endpoints and the GitHub REST API, and `scripts/normalize/build-catalog.mjs` normalizes all 46 sources into `data/sources.json`, `data/prompts.json`, `data/repos.json`, `data/examples.json`, `data/catalog.json`, and `data/tags.json`.
3. **Deduplication Graph:**
   Related entities (such as `motion.dev` #10 and `github.com/motiondivision/motion` #30) share `canonicalProductId: "motion"` and explicit `relatedSourceIds` links.
4. **Interactive Live Demo Studio:**
   Rather than embedding heavy third-party iframes that fail X-Frame-Options or CSP rules, Masallah implements self-contained, 60fps interactive sandboxes (Motion spring solver, Anime.js 2D radial stagger grid, PixelFX dual-buffer canvas, Three.js/WebGL post-processing & particle studio, Manim Fourier epicycles, Remotion caption timeline, Radix roving focus, Laws of UX ergonomics lab, and OWASP URL sanitizer).
