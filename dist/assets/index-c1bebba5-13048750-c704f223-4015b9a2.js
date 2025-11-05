import { Y as Ya, a as Ja, L as Li$1, P as Pt, t as tl, f as fn, I as Ir, F as Fs, z as zt, h as hi, J as Jt, W as Wa } from "./main-4d2fab31-4d2fab31-4d2fab31-ee8daaf3.js";
import { O as Oi, R as Ri, T as Ti, M as Mi, z as zi, I as Ii, C as Ci, B as Bi, L as Li, w } from "./java-f63ff260-812bed3c-bf9ab845-bf9ab845.js";
import { y } from "./articles-520c55ba-5f16ad30-5e374d34-a9506b77.js";
import { r } from "./_plugin-vue_export-helper-c27b6911-f875bd67-3c87e566-3c87e566.js";
var I = (y2, u, n) => new Promise((t, i) => {
  var d = (s) => {
    try {
      g(n.next(s));
    } catch (h) {
      i(h);
    }
  }, v = (s) => {
    try {
      g(n.throw(s));
    } catch (h) {
      i(h);
    }
  }, g = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(d, v);
  g((n = n.apply(y2, u)).next());
});
const M = { class: "article-page" }, $ = { key: 0, class: "loading" }, q = { key: 1, class: "article-container" }, z = { class: "article-header" }, G = { class: "article-title" }, J = { class: "article-meta" }, K = { class: "article-date" }, Q = { class: "article-tags" }, U = { class: "article-content" }, V = ["innerHTML"], W = { key: 2, class: "not-found" }, B = { __name: "index", setup(y$1) {
  Oi.registerLanguage("javascript", Ri), Oi.registerLanguage("typescript", Ti), Oi.registerLanguage("css", Mi), Oi.registerLanguage("html", zi), Oi.registerLanguage("xml", zi), Oi.registerLanguage("json", Ii), Oi.registerLanguage("bash", Ci), Oi.registerLanguage("shell", Ci), Oi.registerLanguage("python", Bi), Oi.registerLanguage("java", Li);
  const u = Ya(), n = Ja(), t = Li$1(null), i = Li$1(true);
  w.setOptions({ highlight: function(r2, l) {
    if (l && Oi.getLanguage(l))
      try {
        return Oi.highlight(r2, { language: l }).value;
      } catch (m) {
      }
    return Oi.highlightAuto(r2).value;
  }, breaks: true, gfm: true });
  const d = Pt(() => t.value ? w(t.value.content) : ""), v = () => I(this, null, function* () {
    try {
      i.value = true;
      const r2 = u.params.slug;
      t.value = yield y(r2);
    } catch (r2) {
      console.error("加载文章失败:", r2);
    } finally {
      i.value = false;
    }
  }), g = (r2) => new Date(r2).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" }), s = () => {
    n.push("/");
  }, h = () => {
    navigator.share && t.value ? navigator.share({ title: t.value.title, text: t.value.summary, url: window.location.href }) : navigator.clipboard.writeText(window.location.href).then(() => {
      alert("链接已复制到剪贴板！");
    });
  };
  return tl(() => {
    v();
  }), fn(() => u.params.slug, () => {
    u.params.slug && v();
  }), (r2, l) => (Ir(), Fs("div", M, [i.value ? (Ir(), Fs("div", $, [...l[0] || (l[0] = [zt("p", null, "加载中...", -1)])])) : t.value ? (Ir(), Fs("div", q, [zt("header", z, [zt("h1", G, hi(t.value.title), 1), zt("div", J, [zt("time", K, hi(g(t.value.date)), 1), zt("div", Q, [(Ir(true), Fs(Jt, null, Wa(t.value.tags, (m) => (Ir(), Fs("span", { key: m, class: "article-tag" }, hi(m), 1))), 128))])])]), zt("main", U, [zt("div", { class: "markdown-body", innerHTML: d.value }, null, 8, V)]), zt("footer", { class: "article-footer" }, [zt("div", { class: "article-actions" }, [zt("button", { onClick: s, class: "back-btn" }, " ← 返回首页 "), zt("button", { onClick: h, class: "share-btn" }, " 分享文章 ")])])])) : (Ir(), Fs("div", W, [l[1] || (l[1] = zt("h2", null, "文章未找到", -1)), l[2] || (l[2] = zt("p", null, "抱歉，您访问的文章不存在。", -1)), zt("button", { onClick: s, class: "back-btn" }, " 返回首页 ")]))]));
} }, aa = r(B, [["__scopeId", "data-v-cd1b07bb"]]);
export {
  aa as default
};
