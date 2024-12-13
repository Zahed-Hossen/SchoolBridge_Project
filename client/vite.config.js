import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Matches CRA's output folder
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },
  server: {
    port: 3000, // Set the development server to run on port 3000
    proxy: {
      '/api': 'http://localhost:5000', // Replace with your backend server URL
    },
  },
});