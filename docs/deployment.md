# Deployment Guide (`https://nazartesi.com/masallahpub`)

## Subpath Architecture

- **Production URL:** `https://nazartesi.com/masallahpub`
- **Hosting Provider:** Firebase Hosting (`nazartesim` project, `webtanitim` public root)
- **Next.js Configuration:** `output: 'export'`, `basePath: '/masallahpub'`, `images: { unoptimized: true }`

## Non-Destructive Deployment Procedure

1. Run validation and security scan:
   ```bash
   node scripts/collect/security-scan.mjs
   node scripts/normalize/validate-catalog.mjs
   ```
2. Build static Next.js export in `apps/web`:
   ```bash
   cd apps/web && npm run build
   ```
3. Sync `apps/web/out/` strictly into `webtanitim/masallahpub/` (and `webtanitim/masallahpub.html` for cleanUrls root resolution) without modifying any existing files in `webtanitim/`.
4. Deploy hosting via Firebase CLI:
   ```bash
   npx firebase-tools deploy --only hosting
   ```
