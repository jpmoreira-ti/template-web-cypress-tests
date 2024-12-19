const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: true,
      json: true
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
      toConsole: false
    }
  },
  e2e: {
    baseUrl: 'https://qualitytoolsautomation.com.br',
    experimentalRunAllSpecs: true,
    setupNodeEvents (on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)

      on('after:run', async (results) => {
        const { merge } = require('mochawesome-merge')
        const { create } = require('mochawesome-report-generator')

        const jsonReport = await merge({
          files: ['cypress/reports/mochawesome/*.json']
        })

        await create(jsonReport, {
          reportDir: 'cypress/reports/mochawesome',
          inline: true
        })
      })
    }
  },
  env: {
    snapshotOnly: true,
    hideCredentials: true,
    requestMode: true
  },
  defaultCommandTimeout: 5000,
  video: false
})
