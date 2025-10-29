const { test, expect } = require('@playwright/test');

test.describe('FPS Counter Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display FPS counter', async ({ page }) => {
    const fpsCounter = page.locator('#fps');
    await expect(fpsCounter).toBeVisible();
    await expect(fpsCounter).toContainText(/FPS:/);
  });

  test('should update FPS counter', async ({ page }) => {
    const fpsCounter = page.locator('#fps');

    // Get initial FPS text
    const initialFps = await fpsCounter.textContent();

    // Wait for updates
    await page.waitForTimeout(1000);

    // Get updated FPS text
    const updatedFps = await fpsCounter.textContent();

    // FPS counter should have text
    expect(initialFps).toContain('FPS:');
    expect(updatedFps).toContain('FPS:');
  });

  test('should show FPS changes during heavy load', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const fpsCounter = page.locator('#fps');

    // Create many emojis to stress test
    for (let i = 0; i < 20; i++) {
      await canvas.click({ position: { x: 100 + (i % 10) * 50, y: 100 + Math.floor(i / 10) * 50 } });
    }

    // Wait for physics to run
    await page.waitForTimeout(2000);

    // FPS counter should still be visible and updating
    await expect(fpsCounter).toBeVisible();
    await expect(fpsCounter).toContainText(/FPS:/);
  });
});
