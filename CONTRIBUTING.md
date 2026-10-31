# Contributing to Masallah

Thank you for contributing to **Masallah** — a curated archive of designs, prompts, experiments, repositories, motion patterns, creative coding references, and cross-tool workflows.

## Core Principles

1. **Respect Licenses & Attribution:** Never copy proprietary source code, commercial model checkpoints, or restricted design assets directly into the repository. For restricted sources, index metadata, visual analysis, canonical URLs, and abstracted educational prompts.
2. **Zero Secrets:** Never commit `.env` files, API keys, tokens, cookies, session data, or private repository material. Run `npm run security:scan` before opening a Pull Request.
3. **Deduplication:** Check `data/sources.json` and `data/catalog.json` before adding new entries. Link dual sources (such as `motion.dev` and `github.com/motiondivision/motion`) via `relatedSourceIds`.
4. **Original & Masallah-Optimized Prompts:** Preserve any official/original prompt verbatim in `originalPrompt` and provide a structured, brand-abstracted `optimizedPrompt` alongside it.

## Adding a New Source

1. Add the source definition to `data/sources.json` conforming to the Source Registry schema.
2. Run `node scripts/normalize/validate-catalog.mjs` to verify schema integrity and duplicate checks.
3. Update `SOURCE_INDEX.md` and `THIRD_PARTY_NOTICES.md`.

## Adding a New Prompt or Catalog Entry

1. Add the prompt to `data/prompts.json` and/or `data/catalog.json`.
2. Add the corresponding Markdown documentation in `catalog/prompts/` or `catalog/<category>/`.
3. Run `npm run test` and `npm run build` inside `apps/web` to verify static generation.
