import { L as Li$1, P as Pt, t as tl, I as Ir, F as Fs, z as zt, H as Ha, b as za, h as hi, p as pt, J as Jt, W as Wa, q as qa, d as cs, K as Ka } from "./main-4d2fab31-4d2fab31-0f7b64e4.js";
import { O as Oi, R as Ri, T as Ti, M as Mi, z as zi, I as Ii, C as Ci, B as Bi, L as Li, w } from "./java-f63ff260-812bed3c-bf9ab845.js";
import { r } from "./_plugin-vue_export-helper-c27b6911-f875bd67-3c87e566.js";
const K = { class: "markdown-editor" }, Q = { class: "editor-header" }, V = { class: "toolbar" }, W = { class: "editor-container" }, X = { class: "editor-pane" }, Y = { class: "preview-pane" }, Z = ["innerHTML"], q = { class: "editor-footer" }, ee = { class: "word-count" }, te = { __name: "index", setup(N, { expose: c }) {
  Oi.registerLanguage("javascript", Ri), Oi.registerLanguage("typescript", Ti), Oi.registerLanguage("css", Mi), Oi.registerLanguage("html", zi), Oi.registerLanguage("xml", zi), Oi.registerLanguage("json", Ii), Oi.registerLanguage("bash", Ci), Oi.registerLanguage("shell", Ci), Oi.registerLanguage("python", Bi), Oi.registerLanguage("java", Li);
  const l = Li$1(""), u = Li$1(null), g = Li$1(null);
  w.setOptions({ highlight: function(n, e) {
    if (e && Oi.getLanguage(e))
      try {
        return Oi.highlight(n, { language: e }).value;
      } catch (s) {
      }
    return Oi.highlightAuto(n).value;
  }, breaks: true, gfm: true });
  const v = Pt(() => w(l.value)), f = Pt(() => l.value.length), w$1 = () => {
  }, o = () => {
    if (u.value && g.value) {
      const n = u.value, e = g.value, s = n.scrollTop / (n.scrollHeight - n.clientHeight);
      e.scrollTop = s * (e.scrollHeight - e.clientHeight);
    }
  }, a = (n, e) => {
    const s = u.value;
    if (!s)
      return;
    const k = s.selectionStart, b = s.selectionEnd, S = l.value.substring(k, b), T = n + S + e;
    l.value = l.value.substring(0, k) + T + l.value.substring(b), cs(() => {
      s.focus(), s.setSelectionRange(k + n.length, k + n.length + S.length);
    });
  }, r2 = () => {
    const n = { markdown: l.value, html: v.value, timestamp: (/* @__PURE__ */ new Date()).toISOString() };
    localStorage.setItem("markdown-content", JSON.stringify(n)), alert("内容已保存！");
  }, C = () => {
    confirm("确定要清空所有内容吗？") && (l.value = "");
  }, O = () => {
    const n = localStorage.getItem("markdown-content");
    if (n) {
      const e = JSON.parse(n);
      l.value = e.markdown || "";
    }
  };
  return tl(() => {
    O();
  }), c({ getContent: () => ({ markdown: l.value, html: v.value }), setContent: (n) => {
    l.value = n;
  } }), (n, e) => (Ir(), Fs("div", K, [zt("div", Q, [e[8] || (e[8] = zt("h3", null, "Markdown 编辑器", -1)), zt("div", V, [zt("button", { onClick: e[0] || (e[0] = (s) => a("**", "**")), title: "加粗" }, "B"), zt("button", { onClick: e[1] || (e[1] = (s) => a("*", "*")), title: "斜体" }, "I"), zt("button", { onClick: e[2] || (e[2] = (s) => a("# ", "")), title: "标题" }, "H"), zt("button", { onClick: e[3] || (e[3] = (s) => a("- ", "")), title: "列表" }, "•"), zt("button", { onClick: e[4] || (e[4] = (s) => a("`", "`")), title: "代码" }, "{ }"), zt("button", { onClick: e[5] || (e[5] = (s) => a("> ", "")), title: "引用" }, '"'), zt("button", { onClick: e[6] || (e[6] = (s) => a("[", "](url)")), title: "链接" }, "🔗")])]), zt("div", W, [zt("div", X, [e[9] || (e[9] = zt("h4", null, "编辑", -1)), Ha(zt("textarea", { ref_key: "textareaRef", ref: u, "onUpdate:modelValue": e[7] || (e[7] = (s) => l.value = s), onInput: w$1, onScroll: o, placeholder: "在这里输入 Markdown 内容...", class: "markdown-input" }, null, 544), [[za, l.value]])]), zt("div", Y, [e[10] || (e[10] = zt("h4", null, "预览", -1)), zt("div", { ref_key: "previewRef", ref: g, class: "markdown-preview", innerHTML: v.value }, null, 8, Z)])]), zt("div", q, [zt("button", { onClick: r2, class: "save-btn" }, "保存"), zt("button", { onClick: C, class: "clear-btn" }, "清空"), zt("span", ee, "字数: " + hi(f.value), 1)])]));
} }, le = r(te, [["__scopeId", "data-v-77427635"]]), ae = { class: "write-page" }, ne = { class: "articles-section" }, se = { class: "articles-list" }, ie = ["onClick"], oe = { class: "article-meta" }, re = ["onClick"], ue = { key: 0, class: "empty-state" }, ce = { __name: "index", setup(N) {
  const c = Li$1(null), l = Li$1([]), u = () => {
    const o = localStorage.getItem("articles-list");
    o && (l.value = JSON.parse(o));
  }, g = () => {
    localStorage.setItem("articles-list", JSON.stringify(l.value));
  }, v = (o) => {
    c.value && c.value.setContent(o.markdown);
  }, f = (o) => {
    confirm("确定要删除这篇文章吗？") && (l.value = l.value.filter((a) => a.id !== o), g());
  }, w2 = (o) => {
    const a = new Date(o);
    return a.toLocaleDateString("zh-CN") + " " + a.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
  };
  return tl(() => {
    u();
  }), (o, a) => (Ir(), Fs("div", ae, [a[2] || (a[2] = zt("div", { class: "page-header" }, [zt("h2", null, "写作中心"), zt("p", null, "用 Markdown 记录你的想法和灵感")], -1)), pt(le, { ref_key: "editorRef", ref: c }, null, 512), zt("div", ne, [a[1] || (a[1] = zt("h3", null, "我的文章", -1)), zt("div", se, [(Ir(true), Fs(Jt, null, Wa(l.value, (r2) => (Ir(), Fs("div", { key: r2.id, class: "article-item", onClick: (C) => v(r2) }, [zt("h4", null, hi(r2.title || "无标题"), 1), zt("p", null, hi(r2.preview), 1), zt("div", oe, [zt("span", null, hi(w2(r2.timestamp)), 1), zt("span", null, hi(r2.wordCount) + " 字", 1), zt("button", { onClick: Ka((C) => f(r2.id), ["stop"]), class: "delete-btn" }, "删除", 8, re)])], 8, ie))), 128)), l.value.length === 0 ? (Ir(), Fs("div", ue, [...a[0] || (a[0] = [zt("p", null, "还没有文章，开始写作吧！", -1)])])) : qa("", true)])])]));
} }, he = r(ce, [["__scopeId", "data-v-830d0e4c"]]);
export {
  he as default
};
