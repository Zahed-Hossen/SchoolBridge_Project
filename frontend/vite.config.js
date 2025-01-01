import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Development server port
    proxy: {
      '/api': {
        target: 'https://schoolbridge-project-server.onrender.com/', // backend server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for build files
  },
});

//https://schoolbridge-131d7.web.app
//https://console.firebase.google.com/project/schoolbridge-131d7/overview

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5000, // Change the port to 5000
//   },
// })
