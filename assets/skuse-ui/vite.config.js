import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
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
            fileName: function (format) { return "skuse.".concat(format, ".js"); }
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
                assetFileNames: function (info) {
                    var source = info.source, _a = info.names, names = _a === void 0 ? [''] : _a;
                    if (source && source.toString().includes('css')) {
                        return 'build/skuse.css';
                    }
                    return "build/".concat(names[0]);
                }
            }
        }
    }
});
