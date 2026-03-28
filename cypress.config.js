const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
 browsers: [
    {
      name: 'brave',
      channel: 'stable',
      family: 'chromium',
      displayName: 'Brave',
      version: 'custom',
      majorVersion: 120,
      path: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
    }
  ]
})
