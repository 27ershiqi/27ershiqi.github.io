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
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // 将所有代码打包到单个文件中，避免模块解析问题
        manualChunks: () => 'everything.js',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1000,
    target: 'es2015',
    minify: false, // 暂时禁用压缩以便调试
    sourcemap: true // 添加 sourcemap 便于调试
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
