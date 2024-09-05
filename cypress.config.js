const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.nopcommerce.com/register",
    env: {
      apiUrl: "https://serverest.dev",
    },
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
