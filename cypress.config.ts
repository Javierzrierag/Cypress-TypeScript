import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://thedummysite.com/',
    setupNodeEvents(on, config) {
      // tasks (DB, etc.) van acá después
      config.env.USER = process.env.USER || ''
      config.env.PASSWORD = process.env.PASSWORD || ''
      config.env.API_URL = process.env.API_URL || ''

      return config
    },
    env: {
      API_URL: process.env.API_URL || 'https://jsonplaceholder.typicode.com',
      USER: process.env.USERAPI || '',
      PASSWORD: process.env.PASSWORDAPI || ''
    },
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos'
  }
})
