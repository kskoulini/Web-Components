import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/dlt-text-element.ts',
      formats: ['es'],
    },
    minify: false,
    rollupOptions: {
      external: /^lit/,
    },
  },
})
