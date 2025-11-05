// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  
  plugins: [vue()],
  base: './', // 关键配置：使用相对路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
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
