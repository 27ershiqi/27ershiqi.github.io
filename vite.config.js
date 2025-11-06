import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { setupBuild } from './build/index';

export default defineConfig({
  build: setupBuild(),
  plugins: [vue()],
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        sanitizeFileNames: false, // 禁用文件名清理
        manualChunks: undefined, // 禁用代码分割
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        format: "es",
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
});
