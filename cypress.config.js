const { defineConfig } = require("cypress");

module.exports = defineConfig({
  responseTimeout: 10000,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-results.xml',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
