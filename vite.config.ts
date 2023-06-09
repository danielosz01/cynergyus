declare const __dirname: string;
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({

  /*build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'),
      output: {
        file: 'cynergyus/bundle.js',
        assetFileNames: '/[name].[hash][extname]',
        //dir: 'dist',
        name: 'MyLibrary',
        format: 'iife',
        exports: 'named',
        extend: true,
        
      },
    },
  },*/
  //base: 'https://danielosz01.github.io/cynergyus/',  


  resolve: {
    extensions: ['.js', '.jsx'] // Agrega la extensión .jsx
  },

  optimizeDeps: {
    include: ['**/*.jsx'],
    esbuildOptions: {
      loader: {
        '.jsx': 'jsx', // Cambia el tipo de contenido a "module"
      },
    },
  },

  base: './',  

  server:{
    port:3939,
  },
  plugins: [react(),],
  
})
