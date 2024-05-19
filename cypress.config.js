const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: '1vgptn',
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 60000,
  responseTimeout: 30000,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://loginxp.vercel.app",
    video: true,
    env: { hideXhr: true},
    experimentalMemoryManagement: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    numTestsKeptInMemory: 20,
    failOnStatusCode: false   
  }
});
