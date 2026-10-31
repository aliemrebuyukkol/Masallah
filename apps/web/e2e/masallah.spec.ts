import { test, expect } from '@playwright/test';
import path from 'node:path';

const PREVIEW_OUT_DIR = path.resolve(__dirname, '../../../assets/previews');

test.describe('Masallah Archive E2E Verification (/masallahpub)', () => {
  test('renders decluttered home page in TR, switches TR/EN, opens PreviewModal with real screenshot, filters & captures screenshots', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/masallahpub');

    await expect(page.locator('h1')).toContainText('Masallah');
    await expect(page.getByText('46', { exact: true }).first()).toBeVisible();

    // Verify real screenshot images are rendered on the cards
    const firstCardImg = page.locator('article.ms-card .ms-card-preview img').first();
    await expect(firstCardImg).toBeVisible();
    const imgSrc = await firstCardImg.getAttribute('src');
    expect(imgSrc).toContain('/masallahpub/screenshots/');

    // Capture desktop preview screenshot (in Turkish default)
    await page.screenshot({ path: path.join(PREVIEW_OUT_DIR, 'masallah-desktop-home.png'), fullPage: false });

    // Test Quick Preview Modal (Lightbox)
    await page.locator('article.ms-card .ms-card-preview').first().click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();

    // Test Language Switcher (TR -> EN -> TR)
    const enBtn = page.getByRole('button', { name: 'EN', exact: true });
    await enBtn.click();
    await expect(page.getByText(/46 Sources Visual Showcase/i)).toBeVisible();

    const trBtn = page.getByRole('button', { name: 'TR', exact: true });
    await trBtn.click();
    await expect(page.getByText(/46 Kaynak Vitrini/i)).toBeVisible();

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

  test('navigates to /sources and verifies all 46 master sources with real screenshots and coverage table', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/masallahpub/sources');
    await expect(page.locator('h1')).toContainText(/Kaynak|Source/);
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
