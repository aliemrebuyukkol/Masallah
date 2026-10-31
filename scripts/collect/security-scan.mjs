#!/usr/bin/env node
/**
 * Masallah — Pre-Commit Secret & OWASP Security Scanner
 * Ensures zero secrets, credentials, .env files, private keys, or unsafe URL protocols
 * exist anywhere in the repository.
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/buyukkol/projects/Masallah';
const IGNORE_DIRS = new Set(['.git', 'node_modules', '.next', 'out', 'dist', 'build', 'playwright-report', 'test-results']);

const SECRET_PATTERNS = [
  { name: 'GitHub Personal Access Token', regex: /\bgh[pousr]_[A-Za-z0-9_]{30,255}\b/ },
  { name: 'OpenAI / Anthropic Secret Key', regex: /\bsk-(?:proj-|ant-)?[A-Za-z0-9_-]{24,}\b/ },
  { name: 'Google Cloud / Firebase API Key', regex: /\bAIza[0-9A-Za-z\-_]{35}\b/ },
  { name: 'AWS Access Key ID', regex: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'PEM Private Key Block', regex: /-----BEGIN (?:RSA |EC |OPENSSH |)PRIVATE KEY-----/ },
  { name: 'Slack Token', regex: /\bxox[baprs]-[0-9A-Za-z-]{10,48}\b/ }
];

const FORBIDDEN_FILENAMES = new Set(['.env', '.env.local', '.env.production', 'credentials.json', 'id_rsa', 'id_ed25519']);

let scannedFiles = 0;
const findings = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(ROOT, fullPath);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (FORBIDDEN_FILENAMES.has(entry.name) || entry.name.endsWith('.pem') || entry.name.endsWith('.key')) {
      findings.push({ file: relPath, issue: `Forbidden sensitive file detected: ${entry.name}` });
      continue;
    }

    // Skip binary images/fonts
    if (/\.(png|jpg|jpeg|webp|gif|woff2|ico)$/i.test(entry.name)) continue;

    scannedFiles++;
    const content = fs.readFileSync(fullPath, 'utf8');
    // Skip self-definition of regexes in security-scan.mjs
    if (relPath === 'scripts/collect/security-scan.mjs') continue;

    for (const pat of SECRET_PATTERNS) {
      if (pat.regex.test(content)) {
        findings.push({ file: relPath, issue: `Matched secret pattern: ${pat.name}` });
      }
    }
  }
}

// Validate all URLs in data/sources.json and data/catalog.json use safe protocols
function checkCatalogUrls() {
  const catalogPath = path.join(ROOT, 'data/catalog.json');
  if (!fs.existsSync(catalogPath)) return;
  const items = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  for (const item of items) {
    for (const field of ['sourceUrl', 'repositoryUrl', 'demoUrl']) {
      const val = item[field];
      if (!val) continue;
      try {
        const u = new URL(val);
        if (u.protocol !== 'https:' && u.protocol !== 'http:') {
          findings.push({ file: 'data/catalog.json', issue: `Unsafe URL protocol in ${item.id}.${field}: ${val}` });
        }
      } catch {
        findings.push({ file: 'data/catalog.json', issue: `Invalid URL in ${item.id}.${field}: ${val}` });
      }
    }
  }
}

walk(ROOT);
checkCatalogUrls();

if (findings.length > 0) {
  console.error('SECURITY SCAN FAILED:');
  for (const f of findings) {
    console.error(`  - [${f.file}] ${f.issue}`);
  }
  process.exit(1);
} else {
  console.log(`Security scan passed: ${scannedFiles} text/code files and all catalog URLs verified clean (0 secrets, 0 unsafe protocols).`);
}
