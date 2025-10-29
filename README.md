# Emoji Physics Simulator - Automation Testing Environment

A comprehensive automation testing framework for the Emoji Physics Simulator application.

## Features

- **Multiple Testing Approaches**
  - E2E testing with Playwright (cross-browser support)
  - BDD-style scenario testing
  - Custom test runner with JSON test suites

- **Test Data Management**
  - JSON-based test data files
  - Variable substitution in scenarios
  - Reusable test data sets

- **Advanced Reporting**
  - HTML reports with detailed results
  - JSON output for CI/CD integration
  - Screenshots and videos on failure
  - Comprehensive test metrics

- **Easy to Extend**
  - Simple JSON format for test cases
  - Modular test structure
  - Well-documented examples

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Install browsers for E2E testing
npm run install-browsers

# 3. Run tests
npm run test:e2e

# 4. View report
npx playwright show-report
```

## Project Structure

```
test/
├── index.html                      # Emoji Physics Simulator app
├── package.json                    # Dependencies and scripts
├── playwright.config.js            # Playwright configuration
├── jest.config.js                  # Jest configuration
├── TESTING_GUIDE.md               # Comprehensive testing guide
├── tests/
│   ├── test-runner.js             # Main test orchestrator
│   ├── scenario-runner.js         # BDD-style scenario runner
│   ├── generate-report.js         # Report generator
│   ├── e2e/                       # Playwright E2E tests
│   │   ├── page-load.spec.js
│   │   ├── emoji-selection.spec.js
│   │   ├── physics-interaction.spec.js
│   │   ├── gravity-adjustment.spec.js
│   │   ├── bounciness-adjustment.spec.js
│   │   ├── size-adjustment.spec.js
│   │   ├── clear-canvas.spec.js
│   │   └── fps-counter.spec.js
│   ├── test-suites/               # Test suite definitions
│   │   └── default-suite.json
│   ├── scenarios/                 # BDD scenarios
│   │   └── default-scenarios.json
│   └── test-data/                 # Test data files
│       └── default-data.json
└── test-results/                  # Generated reports (gitignored)
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run custom test suite |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:unit` | Run Jest unit tests |
| `npm run test:all` | Run all tests |
| `npm run test:scenario` | Run BDD scenarios |
| `npm run test:report` | Generate comprehensive report |
| `npm run serve` | Start local server on port 8080 |
| `npm run install-browsers` | Install Playwright browsers |

## How to Use

### 1. Provide Test Cases

Create a JSON file in `tests/test-suites/`:

```json
{
  "name": "My Test Suite",
  "description": "Custom test suite",
  "tests": [
    {
      "name": "Test Name",
      "description": "What this test does",
      "type": "e2e",
      "testFile": "tests/e2e/my-test.spec.js",
      "priority": "high",
      "skip": false
    }
  ]
}
```

Run it:
```bash
node tests/test-runner.js tests/test-suites/my-suite.json
```

### 2. Provide Test Scenarios

Create a JSON file in `tests/scenarios/`:

```json
{
  "name": "User Workflow",
  "scenarios": [
    {
      "name": "User performs action",
      "steps": [
        {
          "keyword": "Given",
          "text": "the user opens the app",
          "data": {}
        },
        {
          "keyword": "When",
          "text": "the user clicks button",
          "data": {}
        },
        {
          "keyword": "Then",
          "text": "the result appears",
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

Run it:
```bash
npm run test:scenario
# or
node tests/scenario-runner.js tests/scenarios/my-scenarios.json
```

### 3. Provide Test Data

Create a JSON file in `tests/test-data/`:

```json
{
  "baseUrl": "http://localhost:8080",
  "timeout": 30000,
  "myVariable": "myValue",
  "testUsers": {
    "user1": {
      "name": "Test User"
    }
  }
}
```

Reference it in your tests:
```bash
node tests/test-runner.js tests/test-suites/my-suite.json tests/test-data/my-data.json
```

Use variables in scenarios with `{{variableName}}`:
```json
{
  "keyword": "Given",
  "text": "the user navigates to {{baseUrl}}"
}
```

## Example Workflows

### Workflow 1: Quick Smoke Test

```bash
# Run core functionality tests
npx playwright test tests/e2e/page-load.spec.js tests/e2e/emoji-selection.spec.js
```

### Workflow 2: Full Regression Test

```bash
# Run all tests and generate report
npm run test:all
npm run test:report
```

### Workflow 3: Scenario-Based Testing

```bash
# Run user scenarios
npm run test:scenario

# With custom data
node tests/scenario-runner.js tests/scenarios/custom.json tests/test-data/custom-data.json
```

### Workflow 4: Continuous Integration

```bash
# CI-friendly command
CI=true npm run test:e2e
```

## Test Coverage

Current test coverage includes:

- **UI Components**: Page load, emoji selector, controls, canvas
- **User Interactions**: Click, drag, throw emojis
- **Physics Engine**: Gravity, bounciness, collisions
- **Controls**: Sliders (gravity, bounciness, size), clear button
- **Performance**: FPS counter, emoji count
- **Cross-Browser**: Chrome, Firefox, Safari, Mobile

## Reports

After running tests, reports are available in:

- `test-results/playwright-report/` - Playwright HTML report
- `test-results/report.json` - Test runner JSON results
- `test-results/scenario-report.json` - Scenario runner JSON results
- `test-results/comprehensive-report.html` - Combined HTML report

View reports:
```bash
npx playwright show-report
# or open comprehensive-report.html in browser
```

## Browser Support

Tests run on:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 12)

Run specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Debugging

### Debug Mode
```bash
npx playwright test --debug
```

### UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Headed Mode (See Browser)
```bash
npx playwright test --headed
```

### Trace Viewer
```bash
npx playwright test --trace on
npx playwright show-trace test-results/trace.zip
```

## Extending the Framework

### Add New E2E Test

1. Create file in `tests/e2e/my-test.spec.js`
2. Write test using Playwright API
3. Add to test suite in `tests/test-suites/`
4. Run with `npm run test:e2e`

### Add New Scenario

1. Create JSON file in `tests/scenarios/`
2. Define steps using Given/When/Then
3. Run with `npm run test:scenario`

### Add New Test Data

1. Create JSON file in `tests/test-data/`
2. Reference in test runner commands
3. Use variables with `{{variableName}}`

## CI/CD Integration

### GitHub Actions

```yaml
- name: Install dependencies
  run: npm install

- name: Install browsers
  run: npx playwright install --with-deps

- name: Run tests
  run: npm run test:e2e

- name: Upload report
  uses: actions/upload-artifact@v3
  with:
    name: test-results
    path: test-results/
```

### Jenkins

```groovy
stage('Test') {
  steps {
    sh 'npm install'
    sh 'npx playwright install --with-deps'
    sh 'npm run test:e2e'
  }
  post {
    always {
      publishHTML([reportDir: 'test-results/playwright-report', reportFiles: 'index.html'])
    }
  }
}
```

## Documentation

See [TESTING_GUIDE.md](TESTING_GUIDE.md) for comprehensive documentation including:
- Detailed test type explanations
- Step-by-step tutorials
- Best practices
- Troubleshooting guide
- Advanced usage examples

## Requirements

- Node.js 16+ (recommended: 18+)
- npm 7+
- 2GB free disk space (for browsers)

## License

ISC

## Contributing

1. Add tests for new features
2. Follow existing test patterns
3. Update documentation
4. Ensure all tests pass

---

**Need Help?** Check [TESTING_GUIDE.md](TESTING_GUIDE.md) for detailed instructions.
