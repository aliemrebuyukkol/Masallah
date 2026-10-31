# Product UI Engineering Pipeline (10-Stage Quality Gate)

> From NN/g Heuristics & Laws of UX to Radix/shadcn Primitives, Motion Choreography, Testing Library, Playwright, Storybook & OWASP Security

Complete design-to-production engineering pipeline guaranteeing usability, psychological ergonomics, WAI-ARIA accessibility, 60fps motion restraint, automated behavior/E2E testing, isolated documentation, and OWASP security hardening.

## Connected Stages

### 1. Usability Research & Heuristic Model (Nielsen Norman Group)
- **Input:** User problem & task flow
- **Output:** Heuristic checklist & error-recovery spec
- **Architecture Note:** Ensure visibility of system status, error prevention, and user freedom.

### 2. Cognitive Load & Motor Ergonomics (Laws of UX)
- **Input:** Wireframe & action hierarchy
- **Output:** Fitts/Hick/Doherty validated layout
- **Architecture Note:** Enforce >=44px touch targets, progressive disclosure, and <100ms UI feedback.

### 3. Component Anatomy & Slot Contract (Component Gallery)
- **Input:** UI component requirements
- **Output:** Canonical slot & state specification
- **Architecture Note:** Benchmark component API against 60+ production design systems.

### 4. WAI-ARIA Headless Primitives (Radix UI)
- **Input:** Slot specification
- **Output:** Keyboard-navigable, focus-trapped primitives
- **Architecture Note:** Guarantee roving tabindex, ARIA attributes, and screen-reader announcements.

### 5. Composable Open-Code UI Layer (shadcn/ui)
- **Input:** Headless primitives + design tokens
- **Output:** Themed, copy-pasteable React components
- **Architecture Note:** Combine semantic CSS variables with clean variant composition.

### 6. Spring Choreography & Layout Motion (Motion)
- **Input:** Interactive UI components
- **Output:** Reduced-motion-safe FLIP & spring transitions
- **Architecture Note:** Use layoutId and AnimatePresence while honoring useReducedMotion().

### 7. Accessible Behavior Unit Tests (Testing Library)
- **Input:** Rendered React components
- **Output:** Role-driven behavior test suite
- **Architecture Note:** Query strictly by getByRole/getByLabelText to verify real user interactions.

### 8. Cross-Viewport E2E & Deep-Link QA (Playwright)
- **Input:** Built web application
- **Output:** Verified E2E traces & viewport screenshots
- **Architecture Note:** Test navigation, search, URL query filters, clipboard copy, and zero console errors.

### 9. Isolated Visual State Documentation (Storybook)
- **Input:** Component library
- **Output:** CSF3 interactive stories & play() tests
- **Architecture Note:** Document empty, loading, error, and edge-case states in isolation.

### 10. XSS, Header & Secret Security Gate (OWASP Cheat Sheets)
- **Input:** Source repository & HTTP config
- **Output:** Hardened production build & clean secret scan
- **Architecture Note:** Enforce safe URL protocols, CSP/security headers, and zero leaked credentials.

## End-to-End Orchestration Prompt

```text
Execute the 10-stage Masallah Product UI Pipeline for any new feature or interface module:
1. Usability Heuristic Definition (NNGroup): Map user journeys against Nielsen's 10 Heuristics (system status visibility, error prevention, Escape/Undo control).
2. Ergonomic Constraints (Laws of UX): Enforce >=44x44px Fitts hit targets, <=7 top-level Hick choices, and <100ms Doherty feedback.
3. Cross-System Anatomy Check (Component Gallery): Standardize slot naming, states, and ARIA contracts against industry design systems.
4. Accessible Headless Foundation (Radix UI): Implement WAI-ARIA roles, focus trapping, and roving tabindex keyboard navigation.
5. Open-Code Styling & Tokens (shadcn/ui): Apply semantic 3-tier design tokens and composable variant classes.
6. Purposeful Choreography (Motion): Add FLIP layout transitions and spring micro-feedback with mandatory prefers-reduced-motion support.
7. Role-Based Component Tests (Testing Library): Verify interactive behavior via getByRole and userEvent without testing implementation details.
8. Cross-Browser E2E & Subpath Tests (Playwright): Verify deep links, URL query filters, mobile/desktop viewports, and zero console errors.
9. Isolated State Workshop (Storybook): Document default, empty, loading, error, and long-content states in CSF3 stories.
10. Security Hardening Gate (OWASP): Sanitize inputs, enforce https/http protocol allowlists, add rel="noopener noreferrer", and run secret scanning.
```
