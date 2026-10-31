#!/usr/bin/env node
/**
 * Masallah — Master Source Discovery & Live Metadata Collector
 * Probes all 46 master sources (HTTP + GitHub API via `gh api`)
 * and outputs verified raw discovery telemetry to `data/discovery-report.json`.
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const MASTER_SOURCES = [
  // A. GÖRSEL YÖN / DESIGN INSPIRATION
  { num: 1, id: 'inspora', name: 'Inspora', section: 'Design Inspiration', category: 'Design', url: 'https://inspora.design', repo: null },
  { num: 2, id: 'recent-design', name: 'Recent Design', section: 'Design Inspiration', category: 'Design', url: 'https://recent.design', repo: null },
  { num: 3, id: 'lapa-ninja', name: 'Lapa Ninja', section: 'Design Inspiration', category: 'Design', url: 'https://lapa.ninja', repo: null },
  { num: 4, id: 'minimal-gallery', name: 'Minimal Gallery', section: 'Design Inspiration', category: 'Design', url: 'https://minimal.gallery', repo: null },

  // B. UI / UX
  { num: 5, id: 'uiguana', name: 'UI Guana', section: 'UI / UX', category: 'UI', url: 'https://uiguana.com', repo: null },
  { num: 6, id: 'nngroup', name: 'Nielsen Norman Group', section: 'UI / UX', category: 'UX', url: 'https://www.nngroup.com', repo: null },
  { num: 7, id: 'laws-of-ux', name: 'Laws of UX', section: 'UI / UX', category: 'UX', url: 'https://lawsofux.com', repo: 'jonnyablonski/lawsofux.com' },

  // C. MOTION / INTERACTION
  { num: 8, id: 'design-spells', name: 'Design Spells', section: 'Motion / Interaction', category: 'Motion', url: 'https://designspells.com', repo: null },
  { num: 9, id: 'tympanus-codrops', name: 'Tympanus / Codrops', section: 'Motion / Interaction', category: 'Creative Coding', url: 'https://tympanus.net/codrops/', repo: 'codrops' },
  { num: 10, id: 'motion-dev', name: 'Motion (motion.dev)', section: 'Motion / Interaction', category: 'Motion', url: 'https://motion.dev', repo: 'motiondivision/motion', relatedSourceId: 'motion-repo' },
  { num: 11, id: 'react-bits', name: 'React Bits', section: 'Motion / Interaction', category: 'Component', url: 'https://reactbits.dev', repo: 'DavidHDev/react-bits' },
  { num: 12, id: 'motion-sites', name: 'Motion Sites', section: 'Motion / Interaction', category: 'Motion', url: 'https://motionsites.ai', repo: null },

  // D. COMPONENTS / DESIGN SYSTEM
  { num: 13, id: 'component-gallery', name: 'Component Gallery', section: 'Components / Design System', category: 'Design System', url: 'https://component.gallery', repo: null },
  { num: 14, id: 'design-systems-one', name: 'Design Systems One', section: 'Components / Design System', category: 'Design System', url: 'https://designsystems.one', repo: null },
  { num: 15, id: 'shadcn-ui', name: 'shadcn/ui', section: 'Components / Design System', category: 'Component', url: 'https://ui.shadcn.com', repo: 'shadcn-ui/ui' },
  { num: 16, id: 'radix-ui', name: 'Radix UI', section: 'Components / Design System', category: 'Component', url: 'https://www.radix-ui.com', repo: 'radix-ui/primitives' },

  // E. FRONTEND CRAFT
  { num: 17, id: 'mdn-web-docs', name: 'MDN Web Docs', section: 'Frontend Craft', category: 'Frontend', url: 'https://developer.mozilla.org', repo: 'mdn/content' },
  { num: 18, id: 'ishadeed', name: 'Ahmad Shadeed', section: 'Frontend Craft', category: 'Frontend', url: 'https://ishadeed.com', repo: null },

  // F. ARCHITECTURE / KOD KALİTESİ
  { num: 19, id: 'patterns-dev', name: 'Patterns.dev', section: 'Architecture / Code Quality', category: 'Architecture', url: 'https://www.patterns.dev', repo: 'BuilderIO/gpt-crawler' },
  { num: 20, id: 'google-github-io', name: 'Google GitHub Pages', section: 'Architecture / Code Quality', category: 'Architecture', url: 'https://google.github.io', repo: 'google/styleguide' },
  { num: 21, id: 'typescript', name: 'TypeScript', section: 'Architecture / Code Quality', category: 'Architecture', url: 'https://www.typescriptlang.org', repo: 'microsoft/TypeScript' },

  // G. TEST / QA
  { num: 22, id: 'testing-library', name: 'Testing Library', section: 'Test / QA', category: 'Testing', url: 'https://testing-library.com', repo: 'testing-library/react-testing-library' },
  { num: 23, id: 'playwright', name: 'Playwright', section: 'Test / QA', category: 'Testing', url: 'https://playwright.dev', repo: 'microsoft/playwright' },
  { num: 24, id: 'storybook', name: 'Storybook', section: 'Test / QA', category: 'Testing', url: 'https://storybook.js.org', repo: 'storybookjs/storybook' },

  // H. SECURITY
  { num: 25, id: 'owasp-cheatsheets', name: 'OWASP Cheat Sheet Series', section: 'Security', category: 'Security', url: 'https://cheatsheetseries.owasp.org', repo: 'OWASP/CheatSheetSeries' },

  // I. CREATIVE DEVELOPMENT / PIXEL EFFECTS
  { num: 26, id: 'pixelfx', name: 'PixelFX', section: 'Creative Development / Pixel Effects', category: 'VFX', url: 'https://github.com/patch-gg/pixelfx', repo: 'patch-gg/pixelfx' },

  // J. VIDEO / MOTION / GENERATIVE CREATIVE TOOLCHAIN
  { num: 27, id: 'remotion', name: 'Remotion', section: 'Video / Motion / Generative Toolchain', category: 'Video', url: 'https://github.com/remotion-dev/remotion', repo: 'remotion-dev/remotion' },
  { num: 28, id: 'remotion-skills', name: 'Remotion Skills', section: 'Video / Motion / Generative Toolchain', category: 'Agent Skill', url: 'https://github.com/remotion-dev/skills', repo: 'remotion-dev/skills' },
  { num: 29, id: 'animejs', name: 'Anime.js', section: 'Video / Motion / Generative Toolchain', category: 'Motion', url: 'https://github.com/juliangarnier/anime', repo: 'juliangarnier/anime' },
  { num: 30, id: 'motion-repo', name: 'Motion (GitHub)', section: 'Video / Motion / Generative Toolchain', category: 'Motion', url: 'https://github.com/motiondivision/motion', repo: 'motiondivision/motion', relatedSourceId: 'motion-dev' },
  { num: 31, id: 'manim', name: 'Manim Community', section: 'Video / Motion / Generative Toolchain', category: 'Video', url: 'https://github.com/ManimCommunity/manim', repo: 'ManimCommunity/manim' },
  { num: 32, id: 'lottie-web', name: 'Lottie Web', section: 'Video / Motion / Generative Toolchain', category: 'Motion', url: 'https://github.com/airbnb/lottie-web', repo: 'airbnb/lottie-web' },
  { num: 33, id: 'mcp-for-blender', name: 'MCP for Blender', section: 'Video / Motion / Generative Toolchain', category: '3D', url: 'https://github.com/ahujasid/mcp-for-blender', repo: 'ahujasid/mcp-for-blender' },
  { num: 34, id: 'threejs', name: 'Three.js', section: 'Video / Motion / Generative Toolchain', category: '3D', url: 'https://github.com/mrdoob/three.js', repo: 'mrdoob/three.js' },
  { num: 35, id: 'three-gpu-pathtracer', name: 'Three GPU Pathtracer', section: 'Video / Motion / Generative Toolchain', category: '3D', url: 'https://github.com/gkjohnson/three-gpu-pathtracer', repo: 'gkjohnson/three-gpu-pathtracer' },
  { num: 36, id: 'jolt-physics', name: 'Jolt Physics', section: 'Video / Motion / Generative Toolchain', category: '3D', url: 'https://github.com/jrouwe/JoltPhysics', repo: 'jrouwe/JoltPhysics' },
  { num: 37, id: 'postprocessing', name: 'postprocessing (pmndrs)', section: 'Video / Motion / Generative Toolchain', category: 'WebGL', url: 'https://github.com/pmndrs/postprocessing', repo: 'pmndrs/postprocessing' },
  { num: 38, id: 'three-quarks', name: 'Three.quarks', section: 'Video / Motion / Generative Toolchain', category: 'VFX', url: 'https://github.com/Alchemist0823/three.quarks', repo: 'Alchemist0823/three.quarks' },
  { num: 39, id: 'tweakpane', name: 'Tweakpane', section: 'Video / Motion / Generative Toolchain', category: 'Tool', url: 'https://github.com/cocopon/tweakpane', repo: 'cocopon/tweakpane' },
  { num: 40, id: 'comfyui', name: 'ComfyUI', section: 'Video / Motion / Generative Toolchain', category: 'Generative AI', url: 'https://github.com/Comfy-Org/ComfyUI', repo: 'Comfy-Org/ComfyUI' },
  { num: 41, id: 'cosyvoice', name: 'CosyVoice', section: 'Video / Motion / Generative Toolchain', category: 'Audio', url: 'https://github.com/QwenAudio/CosyVoice', repo: 'FunAudioLLM/CosyVoice' },
  { num: 42, id: 'librosa', name: 'librosa', section: 'Video / Motion / Generative Toolchain', category: 'Audio', url: 'https://github.com/librosa/librosa', repo: 'librosa/librosa' },
  { num: 43, id: 'whisperx', name: 'WhisperX', section: 'Video / Motion / Generative Toolchain', category: 'Audio', url: 'https://github.com/m-bain/whisperX', repo: 'm-bain/whisperX' },
  { num: 44, id: 'obs-studio', name: 'OBS Studio', section: 'Video / Motion / Generative Toolchain', category: 'Video', url: 'https://github.com/obsproject/obs-studio', repo: 'obsproject/obs-studio' },
  { num: 45, id: 'lossless-cut', name: 'LosslessCut', section: 'Video / Motion / Generative Toolchain', category: 'Video', url: 'https://github.com/mifi/lossless-cut', repo: 'mifi/lossless-cut' },
  { num: 46, id: 'ffmpeg', name: 'FFmpeg', section: 'Video / Motion / Generative Toolchain', category: 'Video', url: 'https://github.com/FFmpeg/FFmpeg', repo: 'FFmpeg/FFmpeg' },
];

function ghApi(endpoint) {
  try {
    const out = execFileSync('gh', ['api', endpoint], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    return JSON.parse(out);
  } catch (err) {
    return null;
  }
}

async function probeUrl(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      redirect: 'follow',
    });
    clearTimeout(timeout);
    const html = await res.text();
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descMatch =
      html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i) ||
      html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i);
    const ogImageMatch =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

    // Extract internal sublinks (up to 12)
    const linkMatches = [...html.matchAll(/href=["'](\/[a-zA-Z0-9_-][a-zA-Z0-9_/-]{1,60})["']/g)];
    const subpaths = [...new Set(linkMatches.map((m) => m[1]))].slice(0, 12);

    return {
      ok: res.ok,
      status: res.status,
      finalUrl: res.url,
      title: titleMatch ? titleMatch[1].trim() : null,
      metaDescription: descMatch ? descMatch[1].trim() : null,
      ogImage: ogImageMatch ? ogImageMatch[1].trim() : null,
      discoveredSubpaths: subpaths,
    };
  } catch (err) {
    clearTimeout(timeout);
    return {
      ok: false,
      status: 0,
      error: err.message,
      title: null,
      metaDescription: null,
      ogImage: null,
      discoveredSubpaths: [],
    };
  }
}

async function run() {
  console.log(`Discovering ${MASTER_SOURCES.length} master sources...`);
  const results = [];

  for (const src of MASTER_SOURCES) {
    process.stdout.write(`[${String(src.num).padStart(2, '0')}/46] ${src.name} ... `);
    const webProbe = await probeUrl(src.url);
    let ghData = null;

    if (src.repo && src.repo.includes('/')) {
      // Also try original repo path if QwenAudio/CosyVoice redirects
      const rawRepo = src.url.startsWith('https://github.com/')
        ? src.url.replace('https://github.com/', '')
        : src.repo;
      const repoInfo = ghApi(`repos/${rawRepo}`) || ghApi(`repos/${src.repo}`);
      if (repoInfo) {
        ghData = {
          fullName: repoInfo.full_name,
          description: repoInfo.description,
          homepage: repoInfo.homepage,
          stars: repoInfo.stargazers_count,
          forks: repoInfo.forks_count,
          language: repoInfo.language,
          license: repoInfo.license?.spdx_id || repoInfo.license?.name || 'Custom/See Repo',
          topics: repoInfo.topics || [],
          updatedAt: repoInfo.updated_at,
          defaultBranch: repoInfo.default_branch,
          htmlUrl: repoInfo.html_url,
        };
      }
    }

    console.log(
      `${webProbe.ok ? 'HTTP ' + webProbe.status : 'ERR(' + (webProbe.status || webProbe.error) + ')'}${
        ghData ? ` | GH ★${ghData.stars} (${ghData.license})` : ''
      }`
    );

    results.push({
      ...src,
      probedAt: new Date().toISOString(),
      webProbe,
      ghData,
    });
  }

  // Also inspect remotion-dev/skills and patch-gg/pixelfx contents via gh api
  const skillsTree = ghApi('repos/remotion-dev/skills/contents');
  const pixelfxTree = ghApi('repos/patch-gg/pixelfx/contents');

  const outPath = path.resolve('/Users/buyukkol/projects/Masallah/data/discovery-report.json');
  fs.writeFileSync(
    outPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        totalSources: results.length,
        sources: results,
        specialTrees: {
          remotionSkills: Array.isArray(skillsTree) ? skillsTree.map((i) => ({ name: i.name, path: i.path, type: i.type })) : null,
          pixelfx: Array.isArray(pixelfxTree) ? pixelfxTree.map((i) => ({ name: i.name, path: i.path, type: i.type })) : null,
        },
      },
      null,
      2
    )
  );
  console.log(`Saved discovery report to ${outPath}`);
}

run();
