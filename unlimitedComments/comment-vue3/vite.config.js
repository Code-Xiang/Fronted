import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.ts', '.vue']
  },
  server: {
    port: 8080
  }
})
