const { test, expect } = require('@playwright/test');

test.describe('Page Load Tests', () => {
  test('should load the emoji physics simulator page', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/Emoji Physics/i);

    // Check main heading
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/Emoji Physics/i);
  });

  test('should display the canvas element', async ({ page }) => {
    await page.goto('/');

    const canvas = page.locator('canvas#canvas');
    await expect(canvas).toBeVisible();

    // Check canvas dimensions
    const canvasBox = await canvas.boundingBox();
    expect(canvasBox.width).toBeGreaterThan(0);
    expect(canvasBox.height).toBeGreaterThan(0);
  });

  test('should display all control elements', async ({ page }) => {
    await page.goto('/');

    // Check emoji selector
    const emojiSelector = page.locator('.emoji-selector');
    await expect(emojiSelector).toBeVisible();

    // Check sliders
    await expect(page.locator('#gravity')).toBeVisible();
    await expect(page.locator('#bounciness')).toBeVisible();
    await expect(page.locator('#size')).toBeVisible();

    // Check clear button
    await expect(page.locator('#clearBtn')).toBeVisible();
  });

  test('should display all 12 emoji buttons', async ({ page }) => {
    await page.goto('/');

    const emojiButtons = page.locator('.emoji-btn');
    await expect(emojiButtons).toHaveCount(12);

    // Check first emoji is selected by default
    const firstEmoji = emojiButtons.first();
    await expect(firstEmoji).toHaveClass(/selected/);
  });

  test('should display FPS counter', async ({ page }) => {
    await page.goto('/');

    const fpsCounter = page.locator('#fps');
    await expect(fpsCounter).toBeVisible();
    await expect(fpsCounter).toContainText(/FPS/i);
  });

  test('should display emoji count', async ({ page }) => {
    await page.goto('/');

    const emojiCount = page.locator('#emojiCount');
    await expect(emojiCount).toBeVisible();
    await expect(emojiCount).toContainText(/Emojis: 0/);
  });

  test('should have responsive layout', async ({ page }) => {
    await page.goto('/');

    // Test different viewport sizes
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('.container')).toBeVisible();

    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('.container')).toBeVisible();
  });
});
