import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

export default defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 2,
    openMode: 0
  },

  viewportWidth: 1280,
  viewportHeight: 720,

  reporterOptions: {
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'QA Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  video: true,

  screenshotsFolder: 'cypress/screenshots',

  videosFolder: 'cypress/videos',

  e2e: {

    baseUrl:
      process.env.BASE_URL ||
      'https://sauce-demo.myshopify.com/',

    env: {

      API_URL:
        process.env.API_URL || '',

      USER:
        process.env.USER || '',

      PASSWORD:
        process.env.PASSWORD || ''

    },

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on)

      return config
    }

  }

})