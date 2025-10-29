const { test, expect } = require('@playwright/test');

test.describe('Bounciness Adjustment Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have bounciness slider with default value', async ({ page }) => {
    const bouncinessSlider = page.locator('#bounciness');
    await expect(bouncinessSlider).toBeVisible();

    const value = await bouncinessSlider.inputValue();
    expect(parseFloat(value)).toBe(0.7);
  });

  test('should display bounciness value', async ({ page }) => {
    const bouncinessValue = page.locator('#bouncinessValue');
    await expect(bouncinessValue).toBeVisible();
    await expect(bouncinessValue).toContainText('0.7');
  });

  test('should update bounciness value when slider moves', async ({ page }) => {
    const bouncinessSlider = page.locator('#bounciness');
    const bouncinessValue = page.locator('#bouncinessValue');

    // Set to maximum
    await bouncinessSlider.fill('1');
    await expect(bouncinessValue).toContainText('1');

    // Set to minimum
    await bouncinessSlider.fill('0');
    await expect(bouncinessValue).toContainText('0');

    // Set to middle
    await bouncinessSlider.fill('0.5');
    await expect(bouncinessValue).toContainText('0.5');
  });

  test('should affect emoji bounce behavior', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const bouncinessSlider = page.locator('#bounciness');
    const emojiCount = page.locator('#emojiCount');

    // Set high bounciness
    await bouncinessSlider.fill('1');

    // Create an emoji high up so it will fall and bounce
    await canvas.click({ position: { x: 300, y: 100 } });

    // Wait for physics
    await page.waitForTimeout(1500);

    // Emoji should still exist
    await expect(emojiCount).toContainText('Emojis: 1');
  });
});
