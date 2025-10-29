/**
 * Scenario-Based Test Runner
 * Executes BDD-style test scenarios from JSON files
 */

const fs = require('fs');
const path = require('path');

class ScenarioRunner {
  constructor() {
    this.results = {
      scenarios: [],
      passed: 0,
      failed: 0,
      total: 0,
      startTime: null,
      endTime: null
    };
    this.context = {}; // Shared context between steps
  }

  /**
   * Load scenarios from JSON file
   */
  loadScenarios(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`Error loading scenarios from ${filePath}:`, error.message);
      return null;
    }
  }

  /**
   * Load test data
   */
  loadTestData(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return {};
      }
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error(`Error loading test data:`, error.message);
      return {};
    }
  }

  /**
   * Replace variables in text with actual values from test data
   */
  replaceVariables(text, testData) {
    if (typeof text !== 'string') return text;

    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return testData[key] !== undefined ? testData[key] : match;
    });
  }

  /**
   * Execute a single step
   */
  async executeStep(step, testData) {
    const stepResult = {
      keyword: step.keyword,
      text: step.text,
      status: 'pending',
      duration: 0,
      error: null
    };

    const startTime = Date.now();

    try {
      // Replace variables in step text
      const processedText = this.replaceVariables(step.text, testData);

      console.log(`    ${step.keyword} ${processedText}`);

      // Execute step based on keyword
      switch (step.keyword.toLowerCase()) {
        case 'given':
          await this.executeGivenStep(processedText, step.data);
          break;
        case 'when':
          await this.executeWhenStep(processedText, step.data);
          break;
        case 'then':
          await this.executeThenStep(processedText, step.data);
          break;
        case 'and':
        case 'but':
          await this.executeAndStep(processedText, step.data);
          break;
        default:
          throw new Error(`Unknown step keyword: ${step.keyword}`);
      }

      stepResult.status = 'passed';
    } catch (error) {
      stepResult.status = 'failed';
      stepResult.error = error.message;
      throw error;
    } finally {
      stepResult.duration = Date.now() - startTime;
    }

    return stepResult;
  }

  /**
   * Execute Given step (setup/preconditions)
   */
  async executeGivenStep(text, data) {
    // Store context for later steps
    if (data) {
      Object.assign(this.context, data);
    }
    // Simulate execution
    await this.simulateDelay(100);
  }

  /**
   * Execute When step (action)
   */
  async executeWhenStep(text, data) {
    if (data) {
      Object.assign(this.context, data);
    }
    await this.simulateDelay(150);
  }

  /**
   * Execute Then step (assertion)
   */
  async executeThenStep(text, data) {
    if (data && data.assert) {
      // Perform assertion
      const { expected, actual } = data.assert;
      if (expected !== undefined && actual !== undefined) {
        if (expected !== actual) {
          throw new Error(`Assertion failed: expected ${expected}, got ${actual}`);
        }
      }
    }
    await this.simulateDelay(100);
  }

  /**
   * Execute And/But step
   */
  async executeAndStep(text, data) {
    if (data) {
      Object.assign(this.context, data);
    }
    await this.simulateDelay(100);
  }

  /**
   * Simulate execution delay
   */
  simulateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Execute a single scenario
   */
  async executeScenario(scenario, testData) {
    const scenarioResult = {
      name: scenario.name,
      description: scenario.description || '',
      tags: scenario.tags || [],
      status: 'pending',
      duration: 0,
      steps: [],
      error: null
    };

    const startTime = Date.now();

    try {
      console.log(`\n  Scenario: ${scenario.name}`);
      if (scenario.description) {
        console.log(`  ${scenario.description}`);
      }

      // Reset context for each scenario
      this.context = {};

      // Execute each step
      for (const step of scenario.steps) {
        const stepResult = await this.executeStep(step, testData);
        scenarioResult.steps.push(stepResult);
      }

      scenarioResult.status = 'passed';
      this.results.passed++;
      console.log(`  ✓ Scenario passed`);
    } catch (error) {
      scenarioResult.status = 'failed';
      scenarioResult.error = error.message;
      this.results.failed++;
      console.log(`  ✗ Scenario failed: ${error.message}`);
    } finally {
      scenarioResult.duration = Date.now() - startTime;
      this.results.scenarios.push(scenarioResult);
      this.results.total++;
    }

    return scenarioResult;
  }

  /**
   * Generate test report
   */
  generateReport() {
    const duration = this.results.endTime - this.results.startTime;
    const passRate = this.results.total > 0
      ? ((this.results.passed / this.results.total) * 100).toFixed(2)
      : 0;

    console.log('\n' + '='.repeat(70));
    console.log('SCENARIO EXECUTION SUMMARY');
    console.log('='.repeat(70));
    console.log(`Total Scenarios: ${this.results.total}`);
    console.log(`Passed:          ${this.results.passed} (${passRate}%)`);
    console.log(`Failed:          ${this.results.failed}`);
    console.log(`Duration:        ${duration}ms`);
    console.log('='.repeat(70));

    // Save detailed report
    const reportPath = path.join(__dirname, '../test-results/scenario-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`\nDetailed report saved to: ${reportPath}`);
  }

  /**
   * Run all scenarios from a feature file
   */
  async run(scenarioFile, testDataFile) {
    console.log('='.repeat(70));
    console.log('SCENARIO-BASED TEST RUNNER');
    console.log('='.repeat(70));

    this.results.startTime = Date.now();

    // Load scenarios
    const feature = this.loadScenarios(scenarioFile);
    if (!feature) {
      console.error('Failed to load scenarios');
      process.exit(1);
    }

    // Load test data
    const testData = testDataFile ? this.loadTestData(testDataFile) : {};

    console.log(`\nFeature: ${feature.name}`);
    console.log(`Description: ${feature.description || 'No description'}`);
    console.log(`Total Scenarios: ${feature.scenarios.length}`);

    // Execute scenarios
    for (const scenario of feature.scenarios) {
      await this.executeScenario(scenario, testData);
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
  const scenarioFile = args[0] || path.join(__dirname, 'scenarios/default-scenarios.json');
  const testDataFile = args[1] || path.join(__dirname, 'test-data/default-data.json');

  const runner = new ScenarioRunner();
  runner.run(scenarioFile, testDataFile);
}

module.exports = ScenarioRunner;
