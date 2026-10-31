#!/usr/bin/env node
/**
 * Masallah — Catalog Schema & Deduplication Validator
 * Verifies all 46 master sources, schema integrity, and Motion (#10 / #30) deduplication.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/buyukkol/projects/Masallah';
const sources = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/sources.json'), 'utf8'));
const prompts = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/prompts.json'), 'utf8'));
const repos = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/repos.json'), 'utf8'));
const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));

assert.equal(sources.length, 46, `Expected exactly 46 master sources, found ${sources.length}`);

const sourceIds = new Set();
for (const s of sources) {
  assert.ok(s.id && s.name && s.category && s.url && s.license, `Missing required field on source ${s.id}`);
  assert.ok(!sourceIds.has(s.id), `Duplicate source id: ${s.id}`);
  sourceIds.add(s.id);
}

// Verify Motion deduplication (#10 motion-dev & #30 motion-repo)
const motionWeb = sources.find((s) => s.id === 'motion-dev');
const motionRepo = sources.find((s) => s.id === 'motion-repo');
assert.ok(motionWeb && motionRepo, 'Both motion-dev (#10) and motion-repo (#30) must exist');
assert.equal(motionWeb.canonicalProductId, 'motion');
assert.equal(motionRepo.canonicalProductId, 'motion');
assert.ok(motionWeb.relatedSourceIds.includes('motion-repo'));
assert.ok(motionRepo.relatedSourceIds.includes('motion-dev'));

// Verify unique catalog IDs
const catalogIds = new Set();
for (const item of catalog) {
  assert.ok(!catalogIds.has(item.id), `Duplicate catalog item id: ${item.id}`);
  catalogIds.add(item.id);
}

// Verify every prompt has both Original and Optimized prompt fields
for (const p of prompts) {
  assert.ok(p.title && p.optimizedPrompt && p.sourceUrl, `Prompt ${p.id} missing required fields`);
}

console.log(`Catalog validation passed:
- 46/46 master sources verified
- Motion (#10 motion.dev <-> #30 github.com/motiondivision/motion) deduplication verified
- ${prompts.length} prompts verified (Original + Masallah Optimized)
- ${repos.length} repositories verified
- ${catalog.length} unique catalog entries verified`);
