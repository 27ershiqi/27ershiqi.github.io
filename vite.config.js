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
      external: ['vue'], // 排除 vue 打包
      output: {
        manualChunks: undefined, // 禁用代码分割（避免模块路径混乱）
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        // 确保所有模块引用使用相对路径
        format: 'es', // 保持 ES 模块格式
        paths: {
          // 显式指定 vue 的相对路径（针对打包后可能的路径偏移）
          'vue': './node_modules/vue/dist/vue.esm-browser.js'
        },
        globals: {
          vue: 'Vue' // 全局变量映射（CDN 暴露的全局变量）
        }
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
