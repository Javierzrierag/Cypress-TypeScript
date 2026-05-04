import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  e2e: {
    baseUrl: 'https://thedummysite.com/', 
    setupNodeEvents(on, config) {
      // tasks (DB, etc.) van acá después
      config.env.USER = process.env.USER
      config.env.PASSWORD = process.env.PASSWORD
      config.env.API_URL = process.env.API_URL

      return config
    }
  },
  env: {
    apiUrl: 'https://jsonplaceholder.typicode.com'
  },
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos'
})
