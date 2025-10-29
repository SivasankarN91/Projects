const { test, expect } = require('@playwright/test');

test.describe('Clear Canvas Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have clear button visible', async ({ page }) => {
    const clearBtn = page.locator('#clearBtn');
    await expect(clearBtn).toBeVisible();
    await expect(clearBtn).toContainText(/Clear/i);
  });

  test('should clear all emojis when clicked', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const clearBtn = page.locator('#clearBtn');
    const emojiCount = page.locator('#emojiCount');

    // Create multiple emojis
    for (let i = 0; i < 5; i++) {
      await canvas.click({ position: { x: 100 + i * 50, y: 100 } });
      await page.waitForTimeout(100);
    }

    // Verify emojis were created
    await expect(emojiCount).toContainText('Emojis: 5');

    // Click clear button
    await clearBtn.click();

    // Verify all emojis are cleared
    await expect(emojiCount).toContainText('Emojis: 0');
  });

  test('should reset emoji count to zero after clear', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const clearBtn = page.locator('#clearBtn');
    const emojiCount = page.locator('#emojiCount');

    // Create emojis
    await canvas.click({ position: { x: 200, y: 200 } });
    await canvas.click({ position: { x: 300, y: 200 } });
    await page.waitForTimeout(200);

    // Clear
    await clearBtn.click();

    // Count should be 0
    await expect(emojiCount).toContainText('Emojis: 0');
  });

  test('should allow creating new emojis after clear', async ({ page }) => {
    const canvas = page.locator('canvas#canvas');
    const clearBtn = page.locator('#clearBtn');
    const emojiCount = page.locator('#emojiCount');

    // Create emoji
    await canvas.click({ position: { x: 200, y: 200 } });
    await page.waitForTimeout(100);

    // Clear
    await clearBtn.click();
    await expect(emojiCount).toContainText('Emojis: 0');

    // Create new emoji
    await canvas.click({ position: { x: 300, y: 300 } });
    await page.waitForTimeout(100);

    // Should have 1 emoji again
    await expect(emojiCount).toContainText('Emojis: 1');
  });

  test('should handle clear on empty canvas', async ({ page }) => {
    const clearBtn = page.locator('#clearBtn');
    const emojiCount = page.locator('#emojiCount');

    // Canvas is already empty
    await expect(emojiCount).toContainText('Emojis: 0');

    // Click clear (should not cause error)
    await clearBtn.click();

    // Still should be 0
    await expect(emojiCount).toContainText('Emojis: 0');
  });
});
