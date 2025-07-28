import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'index.lazy.jsx',
          dest: '.', // Copy index.html → dist/404.html
          rename: '404.html'
        }
      ]
    })
  ],
    base: '/devedbyaiden/', // <-- replace with your repo name
});
