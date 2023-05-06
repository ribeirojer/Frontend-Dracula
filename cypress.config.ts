import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },    chromeWebSecurity: false,
    baseUrl: 'http://localhost:5173',
    viewportWidth: 1440,
    viewportHeight: 720,
  },
});
