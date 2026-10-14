import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANT: base must stay '/' because the site is served from the ROOT of the
// custom domain (idriss.algerialawlibrary.com), not from /<repo-name>/.
// Setting this to '/portfolio/' produces a blank white page on a custom domain.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
