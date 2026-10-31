# WAI-ARIA Headless Primitive with Focus Trap & Roving Tabindex

- **Category:** Component
- **Source:** [Radix UI](https://www.radix-ui.com/primitives)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT (Masallah Abstracted Prompt)
- **Tags:** Component, Accessibility, UI, Frontend, Prompt

## Description

Implements unstyled accessible primitives handling focus trapping, Escape dismissal, outside-pointer detection, and roving tabindex navigation.

## Original Prompt

```text
Create an accessible modal dialog and toolbar with keyboard navigation like Radix UI.
```

## Masallah Optimized Prompt

```text
Implement a headless, WAI-ARIA compliant UI primitive inspired by Radix UI (`radix-ui/primitives`):
1. Roving Tabindex Toolbar: Maintain a single tab stop (`tabIndex={0}` on active item, `tabIndex={-1}` on peers). ArrowLeft/ArrowRight (or ArrowUp/ArrowDown) moves focus cyclically with `Home` and `End` support.
2. Modal Dialog Focus Management: Record `document.activeElement` on open, trap `Tab` / `Shift+Tab` inside the dialog boundary, lock background document scroll, dismiss on `Escape`, and restore focus to the trigger element on unmount.
3. Expose data attributes (`data-state="open" | "closed"`, `data-highlighted`, `data-disabled`) for zero-JS-overhead CSS styling.
```

## Example Input

Interactive category filter pill rail and detail inspection modal.

## Example Output

Zero-dependency accessible React hooks (`useRovingFocus`, `useDialogFocusTrap`) + unit test suite.
