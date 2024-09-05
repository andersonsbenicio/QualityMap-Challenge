const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.nopcommerce.com",
    env: {
      apiUrl: "https://serverest.dev",
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});
