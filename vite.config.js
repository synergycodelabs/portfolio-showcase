import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteSitemapPlugin } from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSitemapPlugin({
      hostname: 'https://synergycodelabs.github.io/portfolio-showcase/',
      routes: [
        '/',
        '/about',
        '/experience',
        '/skills',
        '/projects',
        '/resume',
        '/contact'
      ]
    })
  ],
  base: '/portfolio-showcase/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
})