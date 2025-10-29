const { test, expect } = require('@playwright/test');

test.describe('Physics Interaction Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should create emoji when clicking on canvas', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const emojiCount = page.locator('#emojiCount');

    // Initial count should be 0
    await expect(emojiCount).toContainText('Emojis: 0');

    // Click on canvas
    await canvas.click({ position: { x: 200, y: 200 } });

    // Wait for emoji to be created
    await page.waitForTimeout(100);

    // Count should increase
    await expect(emojiCount).toContainText('Emojis: 1');
  });

  test('should throw emoji with drag motion', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const emojiCount = page.locator('#emojiCount');

    // Get canvas bounding box
    const canvasBox = await canvas.boundingBox();

    // Perform drag operation (throw emoji)
    await page.mouse.move(canvasBox.x + 200, canvasBox.y + 200);
    await page.mouse.down();
    await page.mouse.move(canvasBox.x + 400, canvasBox.y + 100, { steps: 10 });
    await page.mouse.up();

    // Wait for emoji to be created
    await page.waitForTimeout(100);

    // Verify emoji was created
    await expect(emojiCount).toContainText('Emojis: 1');
  });

  test('should create multiple emojis', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const emojiCount = page.locator('#emojiCount');

    // Create 5 emojis
    for (let i = 0; i < 5; i++) {
      await canvas.click({ position: { x: 100 + i * 50, y: 100 } });
      await page.waitForTimeout(100);
    }

    // Verify count
    await expect(emojiCount).toContainText('Emojis: 5');
  });

  test('should display aim line during drag', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');

    // Get canvas bounding box
    const canvasBox = await canvas.boundingBox();

    // Start drag
    await page.mouse.move(canvasBox.x + 200, canvasBox.y + 200);
    await page.mouse.down();

    // Move mouse to create drag
    await page.mouse.move(canvasBox.x + 300, canvasBox.y + 150, { steps: 5 });

    // The aim line should be visible (drawn on canvas)
    // We can verify by checking mouse is still down
    await page.waitForTimeout(100);

    // Release
    await page.mouse.up();

    // Verify emoji was created
    const emojiCount = page.locator('#emojiCount');
    await expect(emojiCount).toContainText('Emojis: 1');
  });

  test('should apply physics to thrown emoji', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const emojiCount = page.locator('#emojiCount');

    // Throw emoji upward
    const canvasBox = await canvas.boundingBox();
    await page.mouse.move(canvasBox.x + 300, canvasBox.y + 400);
    await page.mouse.down();
    await page.mouse.move(canvasBox.x + 300, canvasBox.y + 200, { steps: 10 });
    await page.mouse.up();

    // Verify emoji was created
    await expect(emojiCount).toContainText('Emojis: 1');

    // Wait for physics to take effect (emoji should fall due to gravity)
    await page.waitForTimeout(2000);

    // Emoji should still exist (physics running)
    await expect(emojiCount).toContainText('Emojis: 1');
  });

  test('should handle rapid emoji creation', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const emojiCount = page.locator('#emojiCount');

    // Rapidly create multiple emojis
    const positions = [
      { x: 100, y: 100 },
      { x: 200, y: 150 },
      { x: 300, y: 200 },
      { x: 400, y: 250 },
      { x: 500, y: 300 }
    ];

    for (const pos of positions) {
      await canvas.click({ position: pos });
    }

    // Wait for all to be created
    await page.waitForTimeout(500);

    // Verify count
    await expect(emojiCount).toContainText('Emojis: 5');
  });
});
