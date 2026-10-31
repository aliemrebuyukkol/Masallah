# Strict TypeScript Domain Schema & Discriminated Union Validator

- **Category:** Architecture
- **Source:** [TypeScript / Google Style Guide](https://www.typescriptlang.org)
- **Target Model:** Claude 3.7 Sonnet / Gemini 2.5 Pro
- **License:** Apache-2.0 / MIT
- **Tags:** Architecture, Frontend, TypeScript, Testing, Prompt

## Description

Models the entire multi-entity catalog (Sources, Prompts, Repos, Workflows, Examples) using strict TypeScript discriminated unions, `readonly` tuples, and runtime schema guards.

## Original Prompt

```text
Create TypeScript interfaces and validation functions for a content catalog.
```

## Masallah Optimized Prompt

```text
Following the Google TypeScript Style Guide (`google.github.io/styleguide/tsguide.html`) and official TypeScript handbook best practices (`typescriptlang.org`):
1. Define literal union types for all 28 `ContentType` classifications and 6 `SourceCoverageStatus` states (`'Indexed' | 'Partially Indexed' | 'Link Only' | 'License Restricted' | 'Access Restricted' | 'Unavailable'`).
2. Model catalog items using discriminated unions so items with `hasLiveDemo: true` strictly require a typed `demoConfig` payload.
3. Enable `strict: true`, `noUncheckedIndexedAccess: true`, and `exactOptionalPropertyTypes: true`-compatible type guards that validate JSON files at build time and test time.
```

## Example Input

JSON data files (`sources.json`, `prompts.json`, `repos.json`, `catalog.json`) requiring compile-time and runtime schema guarantees.

## Example Output

Complete `types/catalog.ts` + runtime validator module with zero `any` types.
