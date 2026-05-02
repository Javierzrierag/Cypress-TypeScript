import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://thedummysite.com/', 
    setupNodeEvents(on, config) {
      // tasks (DB, etc.) van acá después
    }
  },
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos'
})
