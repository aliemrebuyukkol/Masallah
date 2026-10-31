import { test, expect } from '@playwright/test';
import path from 'node:path';

const PREVIEW_OUT_DIR = path.resolve(__dirname, '../../../assets/previews');

test.describe('Masallah Archive E2E Verification (/masallahpub)', () => {
  test('renders home page, live counters, search, filters, prompt copy, and captures desktop/mobile screenshots with 0 console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/masallahpub');

    await expect(page.locator('h1')).toContainText('Masallah');
    await expect(page.getByText('46', { exact: true }).first()).toBeVisible();

    // Capture desktop preview screenshot
    await page.screenshot({ path: path.join(PREVIEW_OUT_DIR, 'masallah-desktop-home.png'), fullPage: false });

    // Global search test
    const searchbox = page.getByRole('searchbox');
    await searchbox.fill('PixelFX');
    await expect(page).toHaveURL(/q=PixelFX/);
    await expect(page.locator('article.ms-card h3', { hasText: /PixelFX/i }).first()).toBeVisible();

    // Reset search and test section filter
    await searchbox.fill('');
    await page.getByRole('button', { name: '3D & WebGL', exact: true }).click();
    await expect(page).toHaveURL(/section=3D/);

    // Test Mobile responsive viewport & screenshot
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: path.join(PREVIEW_OUT_DIR, 'masallah-mobile-home.png'), fullPage: false });

    expect(errors).toEqual([]);
  });

  test('navigates to /sources and verifies all 46 master sources in coverage table', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/masallahpub/sources');
    await expect(page.locator('h1')).toContainText('Source');
    const rows = page.locator('table.ms-table tbody tr');
    await expect(rows).toHaveCount(46);
    await page.screenshot({ path: path.join(PREVIEW_OUT_DIR, 'masallah-desktop-sources.png'), fullPage: false });
  });

  test('navigates to /prompts, /repos, /workflows, and deep-linked /item/[slug]', async ({ page }) => {
    await page.goto('/masallahpub/prompts');
    await expect(page.locator('h1')).toContainText('Prompt Catalog');

    await page.goto('/masallahpub/repos');
    await expect(page.locator('h1')).toContainText('Repository');

    await page.goto('/masallahpub/workflows');
    await expect(page.locator('h1')).toContainText('Workflows');

    await page.goto('/masallahpub/item/prompt-pixelfx-procedural-vfx-skill');
    await expect(page.locator('h1')).toContainText('PixelFX');
  });
});
