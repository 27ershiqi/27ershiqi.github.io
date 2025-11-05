import { L as Li, I as Ir, F as Fs, z as zt, h as hi, J as Jt, W as Wa, a as Ja, P as Pt, t as tl, p as pt, H as Ha, b as za, q as qa, _ as _r } from "./main-4d2fab31-4d2fab31-4d2fab31-4d2fab31-42d74cd6.js";
import { m, j } from "./articles-520c55ba-5f16ad30-5e374d34-a9506b77-ca185271.js";
import { r } from "./_plugin-vue_export-helper-c27b6911-f875bd67-3c87e566-3c87e566-3c87e566.js";
var _ = (h, r2, i) => new Promise((p, e) => {
  var l = (o) => {
    try {
      d(i.next(o));
    } catch (g) {
      e(g);
    }
  }, f = (o) => {
    try {
      d(i.throw(o));
    } catch (g) {
      e(g);
    }
  }, d = (o) => o.done ? p(o.value) : Promise.resolve(o.value).then(l, f);
  d((i = i.apply(h, r2)).next());
});
const D = { class: "profile-card" }, G = { class: "profile-content" }, H = { class: "profile-name" }, R = { class: "profile-title" }, U = { class: "profile-quote" }, E = { class: "quote-author" }, J = { class: "profile-stats" }, K = { class: "stat-item" }, M = { class: "stat-number" }, Q = { class: "stat-item" }, V = { class: "stat-number" }, W = { class: "stat-item" }, X = { class: "stat-number" }, Y = { class: "social-links" }, Z = ["href", "title"], B = { __name: "index", props: { articleCount: { type: Number, default: 0 }, tagCount: { type: Number, default: 0 } }, setup(h) {
  const r2 = Li({ name: "今日碎碎念", title: "前端开发者 · 技术博主", quote: "生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。", quoteAuthor: "韩愈《师说》", socialLinks: [{ name: "GitHub", icon: "🐱", url: "https://github.com" }, { name: "微博", icon: "📱", url: "https://weibo.com" }, { name: "邮箱", icon: "📧", url: "mailto:example@email.com" }, { name: "RSS", icon: "📡", url: "/rss.xml" }] }), i = Li(1024);
  return (p, e) => (Ir(), Fs("div", D, [e[3] || (e[3] = zt("div", { class: "profile-bg" }, [zt("img", { src: "https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302", alt: "背景" })], -1)), e[4] || (e[4] = zt("div", { class: "avatar-container" }, [zt("img", { src: "https://img.xjh.me/random_img.php?type=avatar&ctype=acg&return=302", alt: "头像", class: "avatar" })], -1)), zt("div", G, [zt("h2", H, hi(r2.value.name), 1), zt("p", R, hi(r2.value.title), 1), zt("div", U, [zt("p", null, hi(r2.value.quote), 1), zt("span", E, "—— " + hi(r2.value.quoteAuthor), 1)]), zt("div", J, [zt("div", K, [zt("span", M, hi(h.articleCount), 1), e[0] || (e[0] = zt("span", { class: "stat-label" }, "文章", -1))]), zt("div", Q, [zt("span", V, hi(h.tagCount), 1), e[1] || (e[1] = zt("span", { class: "stat-label" }, "标签", -1))]), zt("div", W, [zt("span", X, hi(i.value), 1), e[2] || (e[2] = zt("span", { class: "stat-label" }, "访问", -1))])]), zt("div", Y, [(Ir(true), Fs(Jt, null, Wa(r2.value.socialLinks, (l) => (Ir(), Fs("a", { key: l.name, href: l.url, target: "_blank", class: "social-link", title: l.name }, hi(l.icon), 9, Z))), 128))])])]));
} }, F = r(B, [["__scopeId", "data-v-ce510269"]]), aa = { class: "home-page" }, ea = { class: "home-container" }, la = { class: "sidebar" }, sa = { class: "main-content" }, ta = { class: "search-section" }, ca = { class: "search-bar" }, ia = { class: "tags-filter" }, na = ["onClick"], ua = { class: "articles-section" }, ra = { class: "articles-list" }, oa = ["onClick"], va = { class: "article-header" }, ma = { class: "article-title" }, pa = { class: "article-date" }, da = { class: "article-summary" }, ha = { class: "article-footer" }, ga = { class: "article-tags" }, fa = { key: 0, class: "empty-state" }, ya = { __name: "index", setup(h) {
  const r2 = Ja(), i = Li([]), p = Li([]), e = Li(""), l = Li(""), f = Li(true), d = Pt(() => e.value ? i.value.filter((s) => s.title.toLowerCase().includes(e.value.toLowerCase()) || s.summary.toLowerCase().includes(e.value.toLowerCase()) || s.tags.some((v) => v.toLowerCase().includes(e.value.toLowerCase()))) : l.value ? i.value.filter((s) => s.tags.includes(l.value)) : i.value), o = () => _(this, null, function* () {
    try {
      f.value = true, i.value = yield m(), p.value = yield j();
    } catch (s) {
      console.error("加载文章失败:", s);
    } finally {
      f.value = false;
    }
  }), g = () => _(this, null, function* () {
    l.value && (l.value = "");
  }), L = (s) => {
    l.value = l.value === s ? "" : s, e.value = "";
  }, x = () => {
    l.value = "", e.value = "";
  }, P = (s) => {
    r2.push(`/article/${s}`);
  }, q = (s) => new Date(s).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" });
  return tl(() => {
    o();
  }), (s, v) => (Ir(), Fs("div", aa, [zt("div", ea, [zt("aside", la, [pt(F, { "article-count": i.value.length, "tag-count": p.value.length }, null, 8, ["article-count", "tag-count"])]), zt("main", sa, [zt("div", ta, [zt("div", ca, [Ha(zt("input", { "onUpdate:modelValue": v[0] || (v[0] = (c) => e.value = c), onInput: g, placeholder: "搜索文章...", class: "search-input" }, null, 544), [[za, e.value]])]), zt("div", ia, [(Ir(true), Fs(Jt, null, Wa(p.value, (c) => (Ir(), Fs("span", { key: c, onClick: (y) => L(c), class: _r(["tag", { active: l.value === c }]) }, hi(c), 11, na))), 128)), l.value ? (Ir(), Fs("span", { key: 0, onClick: x, class: "tag clear-tag" }, " 清除筛选 ")) : qa("", true)])]), zt("div", ua, [v[2] || (v[2] = zt("h2", null, "最新文章", -1)), zt("div", ra, [(Ir(true), Fs(Jt, null, Wa(d.value, (c) => (Ir(), Fs("article", { key: c.slug, class: "article-card", onClick: (y) => P(c.slug) }, [zt("div", va, [zt("h3", ma, hi(c.title), 1), zt("time", pa, hi(q(c.date)), 1)]), zt("p", da, hi(c.summary), 1), zt("div", ha, [zt("div", ga, [(Ir(true), Fs(Jt, null, Wa(c.tags, (y) => (Ir(), Fs("span", { key: y, class: "article-tag" }, hi(y), 1))), 128))]), v[1] || (v[1] = zt("span", { class: "read-more" }, "阅读更多 →", -1))])], 8, oa))), 128))]), d.value.length === 0 ? (Ir(), Fs("div", fa, [zt("p", null, hi(e.value ? "没有找到匹配的文章" : "暂无文章"), 1)])) : qa("", true)])])])]));
} }, _a = r(ya, [["__scopeId", "data-v-f4f9aee3"]]);
export {
  _a as default
};
