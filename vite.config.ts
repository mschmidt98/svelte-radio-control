import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS({
    transformCSS: 'pre'
  })],
  build: {
    target: 'esnext'
  }
});
