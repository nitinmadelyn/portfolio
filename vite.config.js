import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-gsap':   ['gsap'],
          'vendor-framer': ['framer-motion'],
          'vendor-email':  ['@emailjs/browser', 'react-toastify'],
          'vendor-icons':  ['react-icons'],
        },
      },
    },
  },
})
