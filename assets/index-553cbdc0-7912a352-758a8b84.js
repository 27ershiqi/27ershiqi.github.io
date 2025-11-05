import { r } from "./_plugin-vue_export-helper-c27b6911-f875bd67-3c87e566.js";
import { L as Li, c as tc, t as tl, I as Ir, F as Fs, z as zt, h as hi } from "./main-4d2fab31-4d2fab31-0f7b64e4.js";
const d = { class: "test-page" }, m = { __name: "index", setup(f) {
  const n = Li(tc), s = Li(""), u = () => {
    s.value = (/* @__PURE__ */ new Date()).toLocaleString();
  };
  return tl(() => {
    console.log("测试组件挂载成功"), u(), setInterval(u, 1e3);
  }), (t, a) => (Ir(), Fs("div", d, [a[1] || (a[1] = zt("h1", null, "测试页面", -1)), a[2] || (a[2] = zt("p", null, "如果你能看到这个页面，说明 Vue 应用正常工作", -1)), zt("div", null, [a[0] || (a[0] = zt("h2", null, "基本信息", -1)), zt("ul", null, [zt("li", null, "Vue 版本: " + hi(n.value), 1), zt("li", null, "当前时间: " + hi(s.value), 1), zt("li", null, "路由路径: " + hi(t.$route.path), 1)])])]));
} }, h = r(m, [["__scopeId", "data-v-8f613e98"]]);
export {
  h as default
};
