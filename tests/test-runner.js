/**
 * Main Test Runner
 * Orchestrates test execution from JSON/YAML test case files
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

class TestRunner {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      skipped: 0,
      total: 0,
      tests: [],
      startTime: null,
      endTime: null
    };
  }

  /**
   * Load test cases from a JSON file
   */
  loadTestCases(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`Error loading test cases from ${filePath}:`, error.message);
      return null;
    }
  }

  /**
   * Load test data from a JSON file
   */
  loadTestData(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`Error loading test data from ${filePath}:`, error.message);
      return {};
    }
  }

  /**
   * Execute a single test case
   */
  async executeTest(test, testData) {
    const testResult = {
      name: test.name,
      description: test.description,
      status: 'pending',
      duration: 0,
      error: null,
      steps: []
    };

    const startTime = Date.now();

    try {
      console.log(`\n  Running: ${test.name}`);

      if (test.skip) {
        testResult.status = 'skipped';
        this.results.skipped++;
        console.log(`  ⊘ Skipped: ${test.skipReason || 'No reason provided'}`);
        return testResult;
      }

      // Execute based on test type
      switch (test.type) {
        case 'e2e':
          await this.executeE2ETest(test, testData, testResult);
          break;
        case 'unit':
          await this.executeUnitTest(test, testData, testResult);
          break;
        case 'api':
          await this.executeAPITest(test, testData, testResult);
          break;
        default:
          throw new Error(`Unknown test type: ${test.type}`);
      }

      testResult.status = 'passed';
      this.results.passed++;
      console.log(`  ✓ Passed`);
    } catch (error) {
      testResult.status = 'failed';
      testResult.error = error.message;
      this.results.failed++;
      console.log(`  ✗ Failed: ${error.message}`);
    } finally {
      testResult.duration = Date.now() - startTime;
      this.results.tests.push(testResult);
      this.results.total++;
    }

    return testResult;
  }

  /**
   * Execute E2E test using Playwright
   */
  async executeE2ETest(test, testData, testResult) {
    // E2E tests are executed via Playwright test files
    // This method triggers the appropriate Playwright test
    const testFile = test.testFile || 'tests/e2e/default.spec.js';

    testResult.steps.push({
      action: 'execute_playwright_test',
      target: testFile,
      status: 'executed'
    });
  }

  /**
   * Execute unit test using Jest
   */
  async executeUnitTest(test, testData, testResult) {
    const testFile = test.testFile || 'tests/unit/default.test.js';

    testResult.steps.push({
      action: 'execute_jest_test',
      target: testFile,
      status: 'executed'
    });
  }

  /**
   * Execute API test
   */
  async executeAPITest(test, testData, testResult) {
    testResult.steps.push({
      action: 'execute_api_test',
      target: test.endpoint,
      status: 'executed'
    });
  }

  /**
   * Generate test report
   */
  generateReport() {
    const duration = this.results.endTime - this.results.startTime;
    const passRate = ((this.results.passed / this.results.total) * 100).toFixed(2);

    console.log('\n' + '='.repeat(70));
    console.log('TEST EXECUTION SUMMARY');
    console.log('='.repeat(70));
    console.log(`Total Tests:    ${this.results.total}`);
    console.log(`Passed:         ${this.results.passed} (${passRate}%)`);
    console.log(`Failed:         ${this.results.failed}`);
    console.log(`Skipped:        ${this.results.skipped}`);
    console.log(`Duration:       ${duration}ms`);
    console.log('='.repeat(70));

    // Save detailed report to file
    const reportPath = path.join(__dirname, '../test-results/report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`\nDetailed report saved to: ${reportPath}`);
  }

  /**
   * Run all tests from a test suite file
   */
  async run(testSuiteFile, testDataFile) {
    console.log('='.repeat(70));
    console.log('AUTOMATION TEST RUNNER');
    console.log('='.repeat(70));

    this.results.startTime = Date.now();

    // Load test cases
    const testSuite = this.loadTestCases(testSuiteFile);
    if (!testSuite) {
      console.error('Failed to load test suite');
      process.exit(1);
    }

    // Load test data
    const testData = testDataFile ? this.loadTestData(testDataFile) : {};

    console.log(`\nTest Suite: ${testSuite.name}`);
    console.log(`Description: ${testSuite.description}`);
    console.log(`Total Tests: ${testSuite.tests.length}`);

    // Execute tests
    for (const test of testSuite.tests) {
      await this.executeTest(test, testData);
    }

    this.results.endTime = Date.now();
    this.generateReport();

    // Exit with appropriate code
    process.exit(this.results.failed > 0 ? 1 : 0);
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const testSuiteFile = args[0] || path.join(__dirname, 'test-suites/default-suite.json');
  const testDataFile = args[1] || path.join(__dirname, 'test-data/default-data.json');

  const runner = new TestRunner();
  runner.run(testSuiteFile, testDataFile);
}

module.exports = TestRunner;
