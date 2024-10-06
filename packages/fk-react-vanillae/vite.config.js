/** @type {import('vite').UserConfig} */
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  build: {
    lib: {
      // This shoudl point to the actual builttime code file and not eh one resolved to at runtime
      entry: resolve(__dirname, 'index.ts'),
      name: 'FKReactVanillae',
      fileName: 'fk-react-vanillae',
    },
    rollupOptions: {
      external: ['react', 'lodash-es'],
      output: {
        globals: {
          react: 'React',
          lodash: 'Lodash',
        },
      },
    },
  },
})
