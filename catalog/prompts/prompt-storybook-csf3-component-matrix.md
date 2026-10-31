# Storybook CSF3 Component State & Accessibility Matrix

- **Category:** Testing
- **Source:** [Storybook](https://storybook.js.org/docs/writing-stories)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** MIT
- **Tags:** Testing, Component, Design System, Documentation, Prompt

## Description

Authors Component Story Format 3 (CSF3) stories with interactive `args` controls, `play` interaction functions, and automated a11y contrast assertions.

## Original Prompt

```text
Write Storybook CSF3 stories for a CatalogCard component with different variants.
```

## Masallah Optimized Prompt

```text
Write a Storybook Component Story Format 3 (CSF3) specification (`storybook.js.org`) for the Masallah `CatalogCard` and `LiveDemoStage` components:
- Define typed `Meta<typeof CatalogCard>` with interactive `argTypes` for category, contentTypes, hasPrompt, hasDemo, and status.
- Export stories covering edge cases: `DefaultIndexed`, `WithOriginalAndOptimizedPrompt`, `WithInteractiveLiveDemo`, `ExtremeLongTitleAndTags`, and `AccessRestrictedLinkOnly`.
- Include a `play` function using `@storybook/test` (`within`, `userEvent`, `expect`) that exercises tab switching and prompt copy inside the story canvas.
```

## Example Input

Masallah `<CatalogCard />` component with prompt drawer and live demo badge.

## Example Output

Complete `CatalogCard.stories.tsx` in CSF3 format with `play()` test function.
