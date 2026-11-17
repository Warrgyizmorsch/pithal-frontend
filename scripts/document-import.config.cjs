// Start `npm run dev`, then run:
// npx cypress run --config-file scripts/document-import.config.cjs --browser chrome
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'scripts/document-import.cy.cjs',
    supportFile: false,
  },
  video: false,
  defaultCommandTimeout: 15000,
};
