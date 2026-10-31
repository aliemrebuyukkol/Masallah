# Playwright E2E Subpath (`/masallahpub`), Deep-Link & Screenshot Suite

- **Category:** Testing
- **Source:** [Playwright](https://playwright.dev)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** Apache-2.0 / MIT
- **Tags:** Testing, Tool, Workflow, Accessibility, Prompt

## Description

Creates an automated Playwright test and preview-generation suite verifying `/masallahpub` basePath routing, URL query filter sharing, zero console errors, and mobile/desktop viewports.

## Original Prompt

```text
Write Playwright E2E tests for navigation, search, filters, mobile responsiveness, and screenshots.
```

## Masallah Optimized Prompt

```text
Create a Playwright E2E verification suite (`playwright.dev`) specifically engineered for a subpath-deployed web archive (`/masallahpub`):
1. Zero Console/Page Error Gate: Attach `page.on('pageerror')` and `page.on('console')` listeners to fail on any unhandled runtime exception or broken asset 404.
2. Subpath & Deep-Link Integrity: Verify navigation across `/masallahpub`, `/masallahpub/sources`, `/masallahpub/prompts`, `/masallahpub/workflows`, and deep-linked query URLs (`/masallahpub?category=3D&q=Three.js`).
3. Interactive Feature Verification: Test global search filtering, prompt clipboard copy, live demo controls, and keyboard Escape handling.
4. Automated Viewport Preview Capture: Capture deterministic 1440x900 desktop and 390x844 mobile screenshots while respecting `robots.txt` and public-only routes.
```

## Example Input

Next.js static export served under `/masallahpub` subpath.

## Example Output

Executable Playwright E2E specification (`e2e/masallah.spec.ts`) and preview generator script.
