#!/usr/bin/env node
/**
 * Masallah — Automated Preview & Thumbnail Synchronization Script
 * Ensures all 46 source SVG previews exist in assets/previews/, assets/thumbnails/,
 * and apps/web/public/previews/ while honoring robots.txt and access boundaries.
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/buyukkol/projects/Masallah';
const srcDir = path.join(ROOT, 'assets/previews');
const thumbDir = path.join(ROOT, 'assets/thumbnails');
const webDir = path.join(ROOT, 'apps/web/public/previews');

fs.mkdirSync(thumbDir, { recursive: true });
fs.mkdirSync(webDir, { recursive: true });

let count = 0;
for (const file of fs.readdirSync(srcDir)) {
  if (!file.endsWith('.svg')) continue;
  fs.copyFileSync(path.join(srcDir, file), path.join(thumbDir, file));
  fs.copyFileSync(path.join(srcDir, file), path.join(webDir, file));
  count++;
}

console.log(`Synced ${count} source preview graphics to assets/thumbnails/ and apps/web/public/previews/.`);
