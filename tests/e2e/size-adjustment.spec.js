const { test, expect } = require('@playwright/test');

test.describe('Size Adjustment Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have size slider with default value', async ({ page }) => {
    const sizeSlider = page.locator('#size');
    await expect(sizeSlider).toBeVisible();

    const value = await sizeSlider.inputValue();
    expect(parseFloat(value)).toBe(50);
  });

  test('should display size value', async ({ page }) => {
    const sizeValue = page.locator('#sizeValue');
    await expect(sizeValue).toBeVisible();
    await expect(sizeValue).toContainText('50');
  });

  test('should update size value when slider moves', async ({ page }) => {
    const sizeSlider = page.locator('#size');
    const sizeValue = page.locator('#sizeValue');

    // Set to maximum
    await sizeSlider.fill('100');
    await expect(sizeValue).toContainText('100');

    // Set to minimum
    await sizeSlider.fill('20');
    await expect(sizeValue).toContainText('20');

    // Set to middle
    await sizeSlider.fill('60');
    await expect(sizeValue).toContainText('60');
  });

  test('should create emojis at different sizes', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const sizeSlider = page.locator('#size');
    const emojiCount = page.locator('#emojiCount');

    // Create small emoji
    await sizeSlider.fill('20');
    await canvas.click({ position: { x: 200, y: 200 } });
    await page.waitForTimeout(100);

    // Create large emoji
    await sizeSlider.fill('100');
    await canvas.click({ position: { x: 400, y: 200 } });
    await page.waitForTimeout(100);

    // Should have 2 emojis
    await expect(emojiCount).toContainText('Emojis: 2');
  });
});
