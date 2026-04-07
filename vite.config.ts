import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
            if (id.includes('three') || id.includes('@react-three')) return 'vendor-three';
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('emailjs')) return 'vendor-email';
          },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
