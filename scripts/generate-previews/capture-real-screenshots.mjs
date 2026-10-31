#!/usr/bin/env node
/**
 * Masallah — Real Website & Live Demo Screenshot Collector
 * Uses Playwright + Google Chrome to capture real 1280x800 viewport screenshots
 * of the 46 master sources (official site, live demo URL, or GitHub page).
 */

import { chromium } from '../../apps/web/node_modules/@playwright/test/index.mjs';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/buyukkol/projects/Masallah';
const sources = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/sources.json'), 'utf8'));
const outDir = path.join(ROOT, 'apps/web/public/screenshots');
const assetsDir = path.join(ROOT, 'assets/previews/screenshots');

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(assetsDir, { recursive: true });

// Choose the most visual, publicly reachable URL for each source
const TARGET_URLS = {
  'inspora': 'https://inspora.design',
  'recent-design': 'https://recent.design',
  'lapa-ninja': 'https://lapa.ninja',
  'minimal-gallery': 'https://minimal.gallery',
  'uiguana': 'https://component.gallery', // fallback since uiguana DNS is offline
  'nngroup': 'https://www.nngroup.com',
  'laws-of-ux': 'https://lawsofux.com',
  'design-spells': 'https://designspells.com',
  'tympanus-codrops': 'https://tympanus.net/Demos/LookbookHoverEffects/',
  'motion-dev': 'https://motion.dev',
  'react-bits': 'https://reactbits.dev',
  'motion-sites': 'https://motionsites.ai',
  'component-gallery': 'https://component.gallery',
  'design-systems-one': 'https://designsystems.one',
  'shadcn-ui': 'https://ui.shadcn.com',
  'radix-ui': 'https://www.radix-ui.com',
  'mdn-web-docs': 'https://developer.mozilla.org',
  'ishadeed': 'https://ishadeed.com',
  'patterns-dev': 'https://www.patterns.dev',
  'google-github-io': 'https://google.github.io/styleguide/',
  'typescript': 'https://www.typescriptlang.org',
  'testing-library': 'https://testing-library.com',
  'playwright': 'https://playwright.dev',
  'storybook': 'https://storybook.js.org',
  'owasp-cheatsheets': 'https://cheatsheetseries.owasp.org',
  'pixelfx': 'https://patch-gg.github.io/pixelfx/',
  'remotion': 'https://www.remotion.dev',
  'remotion-skills': 'https://www.remotion.dev/docs/ai/skills',
  'animejs': 'https://animejs.com',
  'motion-repo': 'https://github.com/motiondivision/motion',
  'manim': 'https://docs.manim.community/en/stable/examples.html',
  'lottie-web': 'https://airbnb.io/lottie/',
  'mcp-for-blender': 'https://github.com/ahujasid/mcp-for-blender',
  'threejs': 'https://threejs.org',
  'three-gpu-pathtracer': 'https://gkjohnson.github.io/three-gpu-pathtracer/',
  'jolt-physics': 'https://jrouwe.github.io/JoltPhysics.js/',
  'postprocessing': 'https://pmndrs.github.io/postprocessing/public/demo/',
  'three-quarks': 'https://quarks.art',
  'tweakpane': 'https://tweakpane.github.io/docs/',
  'comfyui': 'https://comfyanonymous.github.io/ComfyUI_examples/',
  'cosyvoice': 'https://funaudiollm.github.io/cosyvoice2/',
  'librosa': 'https://librosa.org/doc/latest/auto_examples/index.html',
  'whisperx': 'https://github.com/m-bain/whisperX',
  'obs-studio': 'https://obsproject.com',
  'lossless-cut': 'https://mifi.no/losslesscut/',
  'ffmpeg': 'https://ffmpeg.org',
};

async function run() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
  });

  const manifest = {};
  const CONCURRENCY = 4;
  let index = 0;

  async function worker() {
    while (index < sources.length) {
      const src = sources[index++];
      const pngPath = path.join(outDir, `${src.id}.png`);
      const targetUrl = TARGET_URLS[src.id] || src.demoUrl || src.url;
      const page = await context.newPage();

      try {
        process.stdout.write(`[${String(src.num).padStart(2, '0')}/46] Capturing ${src.name} (${targetUrl}) ... `);
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 12000 });
        await page.waitForTimeout(1400);

        const title = await page.title();
        const isChallenge = /just a moment|attention required|security checkpoint/i.test(title);

        if (isChallenge && src.repositoryUrl) {
          await page.goto(src.repositoryUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
          await page.waitForTimeout(1000);
        }

        await page.screenshot({ path: pngPath, type: 'png' });
        fs.copyFileSync(pngPath, path.join(assetsDir, `${src.id}.png`));
        manifest[src.id] = `/masallahpub/screenshots/${src.id}.png`;
        console.log('OK');
      } catch (err) {
        console.log(`FALLBACK (${err.message.slice(0, 40)})`);
        manifest[src.id] = `/masallahpub/previews/${src.id}.svg`;
      } finally {
        await page.close();
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  await browser.close();

  fs.writeFileSync(path.join(ROOT, 'data/screenshots-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Captured ${Object.keys(manifest).length} previews.`);
}

run();
