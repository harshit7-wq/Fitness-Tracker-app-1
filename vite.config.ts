/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Change this if your repo name is different
const repoName = 'fitness-tracker-app 1'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // In dev it serves from '/', but on GitHub Pages it serves from '/<repo>/'
  base: mode === 'development' ? '/' : `/${repoName}/`,
  plugins: [
    react(),
    legacy(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
}))
