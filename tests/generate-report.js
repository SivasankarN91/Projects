/**
 * Report Generator
 * Generates comprehensive HTML reports from test results
 */

const fs = require('fs');
const path = require('path');

class ReportGenerator {
  constructor() {
    this.resultsDir = path.join(__dirname, '../test-results');
  }

  /**
   * Load test results from JSON files
   */
  loadResults() {
    const results = {
      testRunner: null,
      scenarioRunner: null,
      playwright: null
    };

    try {
      const testRunnerPath = path.join(this.resultsDir, 'report.json');
      if (fs.existsSync(testRunnerPath)) {
        results.testRunner = JSON.parse(fs.readFileSync(testRunnerPath, 'utf8'));
      }
    } catch (error) {
      console.warn('Could not load test runner results:', error.message);
    }

    try {
      const scenarioPath = path.join(this.resultsDir, 'scenario-report.json');
      if (fs.existsSync(scenarioPath)) {
        results.scenarioRunner = JSON.parse(fs.readFileSync(scenarioPath, 'utf8'));
      }
    } catch (error) {
      console.warn('Could not load scenario runner results:', error.message);
    }

    try {
      const playwrightPath = path.join(this.resultsDir, 'playwright-results.json');
      if (fs.existsSync(playwrightPath)) {
        results.playwright = JSON.parse(fs.readFileSync(playwrightPath, 'utf8'));
      }
    } catch (error) {
      console.warn('Could not load Playwright results:', error.message);
    }

    return results;
  }

  /**
   * Generate HTML report
   */
  generateHTML(results) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test Automation Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      color: #333;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
      text-align: center;
    }
    .header h1 { font-size: 2.5em; margin-bottom: 10px; }
    .header p { font-size: 1.1em; opacity: 0.9; }
    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 40px;
      background: #f8f9fa;
    }
    .summary-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      text-align: center;
    }
    .summary-card h3 { color: #666; font-size: 0.9em; margin-bottom: 10px; text-transform: uppercase; }
    .summary-card .value { font-size: 2.5em; font-weight: bold; color: #667eea; }
    .summary-card.passed .value { color: #28a745; }
    .summary-card.failed .value { color: #dc3545; }
    .summary-card.skipped .value { color: #ffc107; }
    .section {
      padding: 40px;
      border-top: 1px solid #e9ecef;
    }
    .section h2 {
      font-size: 1.8em;
      margin-bottom: 20px;
      color: #667eea;
    }
    .test-list {
      list-style: none;
    }
    .test-item {
      background: #f8f9fa;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 6px;
      border-left: 4px solid #ccc;
    }
    .test-item.passed { border-left-color: #28a745; }
    .test-item.failed { border-left-color: #dc3545; }
    .test-item.skipped { border-left-color: #ffc107; }
    .test-item h4 { margin-bottom: 5px; }
    .test-item p { color: #666; font-size: 0.9em; }
    .status {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.85em;
      font-weight: bold;
      text-transform: uppercase;
    }
    .status.passed { background: #28a745; color: white; }
    .status.failed { background: #dc3545; color: white; }
    .status.skipped { background: #ffc107; color: white; }
    .footer {
      background: #2d3748;
      color: white;
      text-align: center;
      padding: 20px;
      font-size: 0.9em;
    }
    .no-data {
      text-align: center;
      padding: 60px;
      color: #999;
      font-size: 1.2em;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Test Automation Report</h1>
      <p>Generated on ${new Date().toLocaleString()}</p>
    </div>

    ${this.generateSummary(results)}
    ${this.generateTestRunnerSection(results.testRunner)}
    ${this.generateScenarioSection(results.scenarioRunner)}
    ${this.generatePlaywrightSection(results.playwright)}

    <div class="footer">
      <p>Automation Testing Framework v1.0.0 | Generated with Test Runner</p>
    </div>
  </div>
</body>
</html>
    `;

    return html;
  }

  generateSummary(results) {
    let totalTests = 0;
    let totalPassed = 0;
    let totalFailed = 0;
    let totalSkipped = 0;
    let totalDuration = 0;

    if (results.testRunner) {
      totalTests += results.testRunner.total || 0;
      totalPassed += results.testRunner.passed || 0;
      totalFailed += results.testRunner.failed || 0;
      totalSkipped += results.testRunner.skipped || 0;
      totalDuration += (results.testRunner.endTime - results.testRunner.startTime) || 0;
    }

    if (results.scenarioRunner) {
      totalTests += results.scenarioRunner.total || 0;
      totalPassed += results.scenarioRunner.passed || 0;
      totalFailed += results.scenarioRunner.failed || 0;
    }

    const passRate = totalTests > 0 ? ((totalPassed / totalTests) * 100).toFixed(1) : 0;

    return `
    <div class="summary">
      <div class="summary-card">
        <h3>Total Tests</h3>
        <div class="value">${totalTests}</div>
      </div>
      <div class="summary-card passed">
        <h3>Passed</h3>
        <div class="value">${totalPassed}</div>
      </div>
      <div class="summary-card failed">
        <h3>Failed</h3>
        <div class="value">${totalFailed}</div>
      </div>
      <div class="summary-card skipped">
        <h3>Skipped</h3>
        <div class="value">${totalSkipped}</div>
      </div>
      <div class="summary-card">
        <h3>Pass Rate</h3>
        <div class="value">${passRate}%</div>
      </div>
      <div class="summary-card">
        <h3>Duration</h3>
        <div class="value">${(totalDuration / 1000).toFixed(1)}s</div>
      </div>
    </div>
    `;
  }

  generateTestRunnerSection(data) {
    if (!data) return '';

    let testsHTML = '';
    if (data.tests && data.tests.length > 0) {
      testsHTML = data.tests.map(test => `
        <li class="test-item ${test.status}">
          <h4>
            ${test.name}
            <span class="status ${test.status}">${test.status}</span>
          </h4>
          <p>${test.description}</p>
          ${test.error ? `<p style="color: #dc3545; margin-top: 5px;">Error: ${test.error}</p>` : ''}
          <p style="margin-top: 5px; color: #999;">Duration: ${test.duration}ms</p>
        </li>
      `).join('');
    }

    return `
    <div class="section">
      <h2>Test Runner Results</h2>
      ${data.tests && data.tests.length > 0 ? `<ul class="test-list">${testsHTML}</ul>` : '<div class="no-data">No test runner results available</div>'}
    </div>
    `;
  }

  generateScenarioSection(data) {
    if (!data) return '';

    let scenariosHTML = '';
    if (data.scenarios && data.scenarios.length > 0) {
      scenariosHTML = data.scenarios.map(scenario => `
        <li class="test-item ${scenario.status}">
          <h4>
            ${scenario.name}
            <span class="status ${scenario.status}">${scenario.status}</span>
          </h4>
          <p>${scenario.description}</p>
          ${scenario.error ? `<p style="color: #dc3545; margin-top: 5px;">Error: ${scenario.error}</p>` : ''}
          <p style="margin-top: 5px; color: #999;">Duration: ${scenario.duration}ms | Steps: ${scenario.steps.length}</p>
        </li>
      `).join('');
    }

    return `
    <div class="section">
      <h2>Scenario Runner Results</h2>
      ${data.scenarios && data.scenarios.length > 0 ? `<ul class="test-list">${scenariosHTML}</ul>` : '<div class="no-data">No scenario results available</div>'}
    </div>
    `;
  }

  generatePlaywrightSection(data) {
    if (!data) return '';

    return `
    <div class="section">
      <h2>Playwright E2E Results</h2>
      <div class="no-data">
        <p>Playwright results are available in the separate HTML report.</p>
        <p>Run: npm run test:e2e</p>
      </div>
    </div>
    `;
  }

  /**
   * Generate and save report
   */
  generate() {
    console.log('Generating comprehensive test report...\n');

    // Ensure results directory exists
    fs.mkdirSync(this.resultsDir, { recursive: true });

    // Load all results
    const results = this.loadResults();

    // Generate HTML
    const html = this.generateHTML(results);

    // Save report
    const reportPath = path.join(this.resultsDir, 'comprehensive-report.html');
    fs.writeFileSync(reportPath, html);

    console.log(`Report generated successfully!`);
    console.log(`Location: ${reportPath}\n`);
    console.log(`Open the report in your browser to view detailed results.`);
  }
}

// CLI execution
if (require.main === module) {
  const generator = new ReportGenerator();
  generator.generate();
}

module.exports = ReportGenerator;
