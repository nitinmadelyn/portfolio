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
        // Only split JS-only libraries — never split packages that include CSS
        // (react-toastify has CSS; splitting it creates an extra render-blocking stylesheet)
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) return 'vendor-react';
          if (id.includes('node_modules/gsap/')) return 'vendor-gsap';
          if (id.includes('node_modules/framer-motion/')) return 'vendor-framer';
          if (id.includes('node_modules/react-icons/')) return 'vendor-icons';
          // react-toastify and @emailjs stay in main chunk (toastify has CSS — must not be split)
        },
      },
    },
  },
})
