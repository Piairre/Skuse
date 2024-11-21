import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import type { UserConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env': '{}',
  },
  plugins: [react()],
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
          const { source, name = '' } = info;
          if (source && source.toString().includes('css')) {
            return 'build/skuse.css';
          }
          return `build/${name}`;
        }
      }
    }
  }
} as UserConfig);