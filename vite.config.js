// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router"],
          highlight: ["highlight.js"],
          markdown: ["marked"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'es2015'
  },

  plugins: [vue()],
  define: {
    // 模拟 Node 环境变量，避免第三方库检测 Node 环境
    "process.env": {},
    global: {},
  },
  resolve: {
    // 对 Node 内置模块进行空映射
    alias: {
      "@": "/src",
      crypto: "./__mocks__/empty.js", // 需创建一个空文件
    },
  },
});
