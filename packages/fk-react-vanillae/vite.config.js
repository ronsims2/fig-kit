/** @type {import('vite').UserConfig} */
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'FKReactVanillae',
      fileName: 'fk-react-vanillae',
    },
    rollupOptions: {
      external: ['react', 'lodash'],
      output: {
        globals: {
          react: 'React',
          lodash: 'Lodash',
        },
      },
    },
  },
})
