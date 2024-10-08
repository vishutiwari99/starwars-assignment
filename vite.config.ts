/// <reference types="vitest"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./setuptest.ts",
    globals: true,
    coverage:{
      provider:'v8',
      exclude:['*.js', '*.cjs'],
    }
  },
})


