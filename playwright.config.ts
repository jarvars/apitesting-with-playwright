import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'https://fakestoreapi.com',
    extraHTTPHeaders: {
      Accept: 'application/json'
    },
    trace: 'on-first-retry',
  },
});
