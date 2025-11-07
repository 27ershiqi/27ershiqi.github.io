import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/highlight.css";

console.log("开始初始化 Vue 应用...");

const app = createApp(App);
app.use(router);
app.mount("#app");

console.log("应用初始化完成 - 修复后的自动部署-");
