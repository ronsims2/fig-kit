/** @type {import('vite').UserConfig} */
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  build: {
    lib: {
      // This should point to the actual built time code file and not the one resolved to at runtime
      entry: resolve(__dirname, 'index.ts'),
      name: 'FKReactVanillae',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'lodash-es'],
      output: {
        globals: {
          react: 'React',
          'lodash-es': 'LodashEs',
        },
      },
    },
  },
})
