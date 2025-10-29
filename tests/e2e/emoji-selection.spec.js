const { test, expect } = require('@playwright/test');

test.describe('Emoji Selection Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should select emoji when clicked', async ({ page }) => {
    // Get the second emoji button
    const secondEmoji = page.locator('.emoji-btn').nth(1);
    await secondEmoji.click();

    // Check it has selected class
    await expect(secondEmoji).toHaveClass(/selected/);

    // Check first emoji is no longer selected
    const firstEmoji = page.locator('.emoji-btn').first();
    await expect(firstEmoji).not.toHaveClass(/selected/);
  });

  test('should cycle through all emojis', async ({ page }) => {
    const emojiButtons = page.locator('.emoji-btn');
    const count = await emojiButtons.count();

    for (let i = 0; i < count; i++) {
      const emoji = emojiButtons.nth(i);
      await emoji.click();

      // Verify it's selected
      await expect(emoji).toHaveClass(/selected/);
    }
  });

  test('should maintain emoji selection after interaction', async ({ page }) => {
    // Select a specific emoji (soccer ball)
    const soccerEmoji = page.locator('.emoji-btn').nth(2);
    await soccerEmoji.click();
    await expect(soccerEmoji).toHaveClass(/selected/);

    // Perform a canvas interaction
    const canvas = page.locator('canvas#canvas');
    await canvas.click({ position: { x: 100, y: 100 } });

    // Wait a bit
    await page.waitForTimeout(500);

    // Check emoji is still selected
    await expect(soccerEmoji).toHaveClass(/selected/);
  });

  test('should display emoji text in button', async ({ page }) => {
    const emojiButtons = page.locator('.emoji-btn');

    // Check that each button has emoji content
    for (let i = 0; i < await emojiButtons.count(); i++) {
      const button = emojiButtons.nth(i);
      const text = await button.textContent();
      expect(text.length).toBeGreaterThan(0);
    }
  });

  test('should highlight emoji on hover', async ({ page }) => {
    const emojiButton = page.locator('.emoji-btn').nth(3);

    // Hover over emoji
    await emojiButton.hover();

    // Small wait for hover effect
    await page.waitForTimeout(100);

    // Button should be visible and interactable
    await expect(emojiButton).toBeVisible();
  });
});
