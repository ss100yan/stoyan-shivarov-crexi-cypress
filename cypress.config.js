const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'tpywq4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.crexi.com',  // Optional: set a base URL for tests
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Ensures it looks for test specs in your e2e folder
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mocha',
    overwrite: false,
    html: true,
    json: true,
  },
});
