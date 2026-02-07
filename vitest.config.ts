import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/utils/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/utils/test/',
        '**/*.test.ts',
        '**/*.test.tsx',
        '.astro/',
        'dist/'
      ]
    },
    // Property-based testing configuration
    // Increase timeout for property tests (they run many iterations)
    testTimeout: 10000,
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
