declare const __dirname: string;
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  /*build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'),
      output: {
        file: 'cynergyus/bundle.js',
        assetFileNames: 'cynergyus/[name].[hash][extname]',
        //dir: 'dist',
        name: 'MyLibrary',
        format: 'iife',
        exports: 'named',
        extend: true,
        sourcemap: true,
      },
    },
  },*/
  //base: '/cynergyus/',  

  server:{
    port:3939,
  },
  plugins: [react()],
  
})
