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
        baseUrl: 'https://reqres.in/api',
        setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message);
                    return null;
                },
            });
        },
    },
});
