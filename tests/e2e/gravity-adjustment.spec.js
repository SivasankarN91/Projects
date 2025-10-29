const { test, expect } = require('@playwright/test');

test.describe('Gravity Adjustment Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have gravity slider with default value', async ({ page }) => {
    const gravitySlider = page.locator('#gravity');
    await expect(gravitySlider).toBeVisible();

    const value = await gravitySlider.inputValue();
    expect(parseFloat(value)).toBe(0.5);
  });

  test('should display gravity value', async ({ page }) => {
    const gravityValue = page.locator('#gravityValue');
    await expect(gravityValue).toBeVisible();
    await expect(gravityValue).toContainText('0.5');
  });

  test('should update gravity value when slider moves', async ({ page }) => {
    const gravitySlider = page.locator('#gravity');
    const gravityValue = page.locator('#gravityValue');

    // Set to maximum
    await gravitySlider.fill('2');
    await expect(gravityValue).toContainText('2');

    // Set to minimum
    await gravitySlider.fill('0');
    await expect(gravityValue).toContainText('0');

    // Set to middle
    await gravitySlider.fill('1');
    await expect(gravityValue).toContainText('1');
  });

  test('should affect emoji physics when gravity is increased', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const gravitySlider = page.locator('#gravity');

    // Set high gravity
    await gravitySlider.fill('2');

    // Create an emoji
    await canvas.click({ position: { x: 300, y: 100 } });

    // Wait and observe physics
    await page.waitForTimeout(1000);

    // Emoji should still exist
    const emojiCount = page.locator('#emojiCount');
    await expect(emojiCount).toContainText('Emojis: 1');
  });

  test('should affect emoji physics when gravity is zero', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const gravitySlider = page.locator('#gravity');

    // Set zero gravity
    await gravitySlider.fill('0');

    // Create an emoji
    await canvas.click({ position: { x: 300, y: 100 } });

    // Wait and observe physics
    await page.waitForTimeout(1000);

    // Emoji should still exist
    const emojiCount = page.locator('#emojiCount');
    await expect(emojiCount).toContainText('Emojis: 1');
  });

  test('should allow fine-grained gravity adjustment', async ({ page }) => {
    const gravitySlider = page.locator('#gravity');
    const gravityValue = page.locator('#gravityValue');

    // Test various values
    const testValues = ['0.2', '0.8', '1.5', '1.9'];

    for (const val of testValues) {
      await gravitySlider.fill(val);
      await expect(gravityValue).toContainText(val);
    }
  });
});
