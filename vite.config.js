import { defineConfig, rollupVersion } from 'vite'
import { resolve } from 'path'

export default defineConfig ({
    buiild: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
            }
        }
    }
})