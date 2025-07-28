import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/devedbyaiden/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'index.html',
          dest: '.',
          rename: '404.html',
        },
      ],
    }),
  ],
});
