import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Dev server
  server: {
    port: 3000,
    open: true
  },

  // Production build optimizations
  build: {
    // Target modern browsers for smaller output
    target: 'es2015',
    // Minify with esbuild (fastest)
    minify: 'esbuild',
    // Reduce chunk sizes
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libraries into separate cached chunks
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react'],
        }
      }
    }
  },

  // Optimise deps pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  }
});
