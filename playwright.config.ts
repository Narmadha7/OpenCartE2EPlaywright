import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true, /* Run tests in files in parallel */
  retries: 1, /* Retry */
  workers: 1,  /* Opt out of parallel tests */

  /* Reporter to use. */
  reporter: [
    ['html'],
    ['allure-playwright'],
    ['dot'],
    ['list']
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
*/
   
  ],

  
});
