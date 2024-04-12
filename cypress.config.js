const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cypress.io/', //providing a base url for get() command
    defaultCommandTimeout: 2000, //modifying the default cypress timeout of 4 seconds
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    overwrite: false,
    html: true,
    json: true,
    charts: true
  }
});
