# Automation Testing Framework Guide

## Overview

This comprehensive automation testing environment supports multiple testing approaches:
- **E2E Testing** with Playwright
- **Scenario-Based Testing** (BDD-style)
- **Custom Test Runner** with JSON/YAML test cases
- **Test Data Management**
- **Automated Reporting**

## Quick Start

### 1. Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers (required for E2E tests)
npm run install-browsers
```

### 2. Run Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run scenario-based tests
npm run test:scenario

# Run custom test suite
npm run test

# Generate comprehensive report
npm run test:report
```

## Test Types

### 1. E2E Tests (Playwright)

Located in `tests/e2e/`, these tests run in real browsers and interact with your application like a real user.

**Available Tests:**
- `page-load.spec.js` - Page loading and initial state
- `emoji-selection.spec.js` - Emoji selection functionality
- `physics-interaction.spec.js` - Physics interactions
- `gravity-adjustment.spec.js` - Gravity slider testing
- `bounciness-adjustment.spec.js` - Bounciness slider testing
- `size-adjustment.spec.js` - Size slider testing
- `clear-canvas.spec.js` - Clear button functionality
- `fps-counter.spec.js` - FPS counter display

**Run specific test:**
```bash
npx playwright test tests/e2e/page-load.spec.js
```

**Run with UI mode:**
```bash
npx playwright test --ui
```

**Debug mode:**
```bash
npx playwright test --debug
```

### 2. Scenario-Based Testing

BDD-style scenarios defined in JSON format. Perfect for user story testing.

**Location:** `tests/scenarios/`

**Example Scenario Structure:**
```json
{
  "name": "Feature Name",
  "description": "Feature description",
  "scenarios": [
    {
      "name": "Scenario name",
      "description": "What this scenario tests",
      "tags": ["smoke", "critical"],
      "steps": [
        {
          "keyword": "Given",
          "text": "the user opens the application",
          "data": { "url": "{{baseUrl}}" }
        },
        {
          "keyword": "When",
          "text": "the user performs an action",
          "data": { "action": "click" }
        },
        {
          "keyword": "Then",
          "text": "the expected result occurs",
          "data": {
            "assert": {
              "expected": true,
              "actual": true
            }
          }
        }
      ]
    }
  ]
}
```

**Run scenarios:**
```bash
npm run test:scenario
# Or with custom files:
node tests/scenario-runner.js tests/scenarios/my-scenarios.json tests/test-data/my-data.json
```

### 3. Custom Test Suite

Define test cases in JSON files for organized test execution.

**Location:** `tests/test-suites/`

**Example Test Suite:**
```json
{
  "name": "My Test Suite",
  "description": "Description of what this suite tests",
  "version": "1.0.0",
  "tests": [
    {
      "name": "Test Name",
      "description": "What this test does",
      "type": "e2e",
      "testFile": "tests/e2e/my-test.spec.js",
      "priority": "high",
      "skip": false,
      "skipReason": "Reason for skipping (if skip=true)"
    }
  ]
}
```

**Test Types:**
- `e2e` - End-to-end Playwright tests
- `unit` - Unit tests with Jest
- `api` - API testing

**Run test suite:**
```bash
npm run test
# Or with custom files:
node tests/test-runner.js tests/test-suites/my-suite.json tests/test-data/my-data.json
```

## Test Data Management

### Test Data File Structure

**Location:** `tests/test-data/`

**Example:**
```json
{
  "description": "Test data description",
  "baseUrl": "http://localhost:8080",
  "timeout": 30000,
  "viewport": {
    "width": 1280,
    "height": 720
  },
  "testUsers": {
    "user1": {
      "name": "Test User",
      "email": "test@example.com"
    }
  },
  "customData": {
    "key": "value"
  }
}
```

### Using Test Data

**In Scenario Steps:**
```json
{
  "keyword": "Given",
  "text": "the user navigates to {{baseUrl}}",
  "data": {}
}
```

Variables in `{{}}` are automatically replaced with values from test data.

## Creating Your Own Tests

### 1. Create a New E2E Test

```javascript
// tests/e2e/my-feature.spec.js
const { test, expect } = require('@playwright/test');

test.describe('My Feature Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should do something', async ({ page }) => {
    // Your test code here
    const element = page.locator('#myElement');
    await expect(element).toBeVisible();
  });
});
```

### 2. Create a New Scenario File

```json
{
  "name": "My Feature",
  "description": "Testing my new feature",
  "scenarios": [
    {
      "name": "Basic functionality",
      "tags": ["feature-x"],
      "steps": [
        {
          "keyword": "Given",
          "text": "setup condition",
          "data": {}
        },
        {
          "keyword": "When",
          "text": "user action",
          "data": {}
        },
        {
          "keyword": "Then",
          "text": "expected result",
          "data": {
            "assert": {
              "expected": "value",
              "actual": "value"
            }
          }
        }
      ]
    }
  ]
}
```

### 3. Create Custom Test Data

```json
{
  "description": "My test data",
  "myVariable": "myValue",
  "nestedData": {
    "key": "value"
  },
  "arrayData": [1, 2, 3]
}
```

## Reports

### 1. Playwright HTML Report

After running E2E tests:
```bash
npx playwright show-report
```

### 2. JSON Reports

Located in `test-results/`:
- `report.json` - Test runner results
- `scenario-report.json` - Scenario runner results
- `playwright-results.json` - Playwright results

### 3. Comprehensive HTML Report

Generate a combined report:
```bash
npm run test:report
```

Opens `test-results/comprehensive-report.html` with all results.

## Advanced Usage

### Run Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run in Headed Mode

```bash
npx playwright test --headed
```

### Run with Custom Viewport

```bash
npx playwright test --project=mobile-chrome
```

### Parallel Execution

```bash
npx playwright test --workers=4
```

### Generate Trace

```bash
npx playwright test --trace on
```

View trace:
```bash
npx playwright show-trace test-results/trace.zip
```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npm run test:e2e
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: test-results
          path: test-results/
```

## Best Practices

### 1. Test Organization
- Group related tests in describe blocks
- Use descriptive test names
- Keep tests independent and isolated
- Clean up test data after each test

### 2. Test Data
- Keep test data separate from test logic
- Use meaningful variable names
- Version control your test data
- Don't hardcode sensitive data

### 3. Assertions
- Use specific assertions
- Add meaningful error messages
- Test both positive and negative cases
- Verify expected behavior explicitly

### 4. Maintenance
- Review and update tests regularly
- Remove obsolete tests
- Refactor duplicated code
- Document complex test scenarios

## Troubleshooting

### Tests Failing

1. Check if application is running:
```bash
npm run serve
```

2. Verify test data is correct
3. Check browser console for errors (use --headed)
4. Review test-results/ for screenshots and videos

### Slow Tests

1. Reduce timeout values
2. Use parallel execution
3. Optimize selectors
4. Skip unnecessary waits

### Installation Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Reinstall Playwright browsers
npx playwright install --force
```

## Examples

### Example 1: Testing User Interaction

```javascript
test('user can throw emoji with drag', async ({ page }) => {
  await page.goto('/');
  const canvas = page.locator('canvas#canvas');

  // Drag on canvas
  await canvas.hover();
  await page.mouse.down();
  await page.mouse.move(500, 300);
  await page.mouse.up();

  // Verify emoji created
  const count = page.locator('#emojiCount');
  await expect(count).toContainText('Emojis: 1');
});
```

### Example 2: Testing with Different Data

```json
{
  "testCases": [
    {
      "gravity": 0,
      "expected": "floating"
    },
    {
      "gravity": 2,
      "expected": "fast_fall"
    }
  ]
}
```

## Support

For issues or questions:
1. Check this guide
2. Review existing tests for examples
3. Check Playwright documentation: https://playwright.dev
4. Review test-results/ for debugging info

## Next Steps

1. Run the example tests to understand the framework
2. Create your own test scenarios
3. Add custom test data for your use cases
4. Integrate with your CI/CD pipeline
5. Generate and review reports regularly

Happy Testing!
