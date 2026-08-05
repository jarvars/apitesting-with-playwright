import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    extraHTTPHeaders: {
      Accept: 'application/json'
    },
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'fakestore',
      testDir: './tests/fakestore',
      use: {
        baseURL: 'https://fakestoreapi.com',
      },
    },
    {
      name: 'stapi',
      testDir: './tests/stapi',
      use: {
        baseURL: 'https://stapi.co',
      },
    },
  ],
});
