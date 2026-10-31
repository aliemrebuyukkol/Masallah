# Accessible Role-First Component Test Suite (Testing Library)

- **Category:** Testing
- **Source:** [Testing Library](https://testing-library.com/docs/guiding-principles)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** Testing, Accessibility, Component, Frontend, Prompt

## Description

Generates user-behavior tests querying exclusively by accessible roles (`getByRole`, `getByLabelText`) to verify search, filtering, and prompt copying.

## Original Prompt

```text
Write React Testing Library tests for search, filter buttons, and copy prompt.
```

## Masallah Optimized Prompt

```text
Write a comprehensive component test suite following Testing Library (`testing-library.com`) guiding principles:
- Strictly query elements the way an assistive technology user perceives them: `screen.getByRole('searchbox')`, `screen.getByRole('button', { name: /copy optimized prompt/i })`, `screen.getByRole('tab', { name: /original prompt/i })`.
- Avoid querying internal CSS class names or component state.
- Verify real user flows: typing a query filters displayed cards, clicking category pills updates active pressed state (`aria-pressed="true"`), and clicking "Copy Prompt" invokes `navigator.clipboard.writeText` with the exact prompt text and announces "Copied to clipboard".
```

## Example Input

Masallah Catalog Explorer & Prompt Card components.

## Example Output

Complete Vitest / Testing Library test file (`catalog-behavior.test.tsx`) with 100% accessible role queries.
