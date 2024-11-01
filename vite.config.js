import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/farmmart_api': {
        target: 'https://ourservicestech.com.ng',
        changeOrigin: true,
        secure: false,
      }
    }
  },
})