import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import type { UserConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'SkuseUI',
      fileName: (format) => `skuse.${format}.js`
    },
    outDir: '../../Resources/public',
    assetsDir: 'build',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (info): string => {
          const { source, names = [''] } = info;
          if (source && source.toString().includes('css')) {
            return 'build/skuse.css';
          }
          return `build/${names[0]}`;
        }
      }
    }
  }
} satisfies UserConfig);