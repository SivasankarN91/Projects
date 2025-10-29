# Quick Start Guide

Get up and running with the automation testing framework in 5 minutes!

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

This installs all required packages including Playwright and Jest.

## Step 2: Install Browsers (2 minutes)

```bash
npm run install-browsers
```

This downloads Chromium, Firefox, and WebKit browsers for testing.

## Step 3: Run Your First Test (1 minute)

```bash
# Start the application server
npm run serve &

# Run E2E tests
npm run test:e2e
```

## Step 4: View Results (1 minute)

```bash
# Open the HTML report
npx playwright show-report
```

## What Just Happened?

You just ran a complete test suite that:
- Tested page loading and UI components
- Verified emoji selection functionality
- Tested physics interactions
- Validated all control sliders
- Checked clear button and FPS counter

## Try More Tests

### Run Scenario-Based Tests
```bash
npm run test:scenario
```

### Generate Comprehensive Report
```bash
npm run test:report
```

### Run in UI Mode (Interactive)
```bash
npx playwright test --ui
```

## Next Steps

1. **Explore Example Tests**
   - Check `tests/e2e/` for E2E test examples
   - Look at `tests/scenarios/default-scenarios.json` for BDD examples
   - Review `tests/test-data/default-data.json` for test data structure

2. **Create Your Own Tests**
   - Copy an existing test and modify it
   - Add new scenarios to `tests/scenarios/`
   - Create custom test data in `tests/test-data/`

3. **Read Full Documentation**
   - See [README.md](README.md) for overview
   - See [TESTING_GUIDE.md](TESTING_GUIDE.md) for comprehensive guide

## Common Commands

```bash
# Run all tests
npm run test:all

# Run specific test file
npx playwright test tests/e2e/page-load.spec.js

# Run with specific browser
npx playwright test --project=chromium

# Debug mode
npx playwright test --debug

# Watch mode (run tests on file change)
npx playwright test --watch
```

## Troubleshooting

**Port 8080 already in use?**
```bash
# Kill existing server
lsof -ti:8080 | xargs kill -9
# Or change port in playwright.config.js
```

**Tests failing?**
```bash
# Verify app is running
curl http://localhost:8080

# Check if browsers installed
npx playwright install --force
```

**Need help?**
- Check [TESTING_GUIDE.md](TESTING_GUIDE.md)
- Review test-results/ for screenshots and videos
- Run tests in headed mode: `npx playwright test --headed`

## Example: Create Your First Custom Test

1. **Create test file:**
```bash
touch tests/e2e/my-test.spec.js
```

2. **Add test code:**
```javascript
const { test, expect } = require('@playwright/test');

test('my first test', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
});
```

3. **Run it:**
```bash
npx playwright test tests/e2e/my-test.spec.js
```

## Example: Create Your First Scenario

1. **Create scenario file:**
```bash
touch tests/scenarios/my-scenario.json
```

2. **Add scenario:**
```json
{
  "name": "My Feature",
  "scenarios": [
    {
      "name": "Test basic functionality",
      "steps": [
        {
          "keyword": "Given",
          "text": "the user opens the app",
          "data": {}
        },
        {
          "keyword": "When",
          "text": "the user interacts with canvas",
          "data": {}
        },
        {
          "keyword": "Then",
          "text": "the app responds correctly",
          "data": {}
        }
      ]
    }
  ]
}
```

3. **Run it:**
```bash
node tests/scenario-runner.js tests/scenarios/my-scenario.json
```

---

**You're ready to start testing!** 🚀

For detailed information, see [TESTING_GUIDE.md](TESTING_GUIDE.md)
