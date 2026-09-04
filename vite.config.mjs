import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const sourceRoot = path.resolve(projectRoot, 'resources/js');

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  resolve: {
    alias: {
      api: path.resolve(sourceRoot, 'api'),
      components: path.resolve(sourceRoot, 'components'),
      containers: path.resolve(sourceRoot, 'containers'),
      routes: path.resolve(sourceRoot, 'routes'),
      screens: path.resolve(sourceRoot, 'screens'),
      services: path.resolve(sourceRoot, 'services'),
      store: path.resolve(sourceRoot, 'store'),
    },
  },
  build: {
    emptyOutDir: false,
    modulePreload: false,
    outDir: path.resolve(projectRoot, 'public'),
    rollupOptions: {
      input: path.resolve(sourceRoot, 'app.jsx'),
      output: {
        assetFileNames: (assetInfo) => (
          assetInfo.names.some(name => name.endsWith('.css'))
            ? 'css/app.css'
            : 'assets/[name]-[hash][extname]'
        ),
        entryFileNames: 'js/app.min.js',
        format: 'es',
      },
    },
  },
});
