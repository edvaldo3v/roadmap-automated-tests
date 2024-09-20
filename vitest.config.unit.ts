import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./src/**/*.spec.ts'],
    environment: 'node',
    hookTimeout: 300000,
    testTimeout: 300000,
  },
});
