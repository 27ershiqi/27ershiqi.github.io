var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { r as ref } from "./main-fca91385.js";
const article1 = '---\r\ntitle: "Hello World - 我的第一篇文章"\r\ndate: "2025-11-04"\r\ntags: ["生活", "随笔"]\r\nsummary: "这是我的第一篇博客文章，记录开始写作的心情和想法。"\r\n---\r\n\r\n# Hello World - 我的第一篇文章\r\n\r\n今天是2024年的第一天，我决定开始写博客了！\r\n\r\n## 为什么要写博客？\r\n\r\n写博客有很多好处：\r\n\r\n1. **记录生活** - 把生活中的点点滴滴记录下来\r\n2. **分享知识** - 把学到的东西分享给更多人\r\n3. **提升写作** - 通过持续写作来提升表达能力\r\n\r\n## 我的计划\r\n\r\n接下来我会在这里分享：\r\n\r\n- 技术学习心得\r\n- 生活感悟\r\n- 读书笔记\r\n- 旅行见闻\r\n\r\n> 千里之行，始于足下。让我们一起开始这个写作之旅吧！\r\n\r\n## 代码示例\r\n\r\n既然是技术博客，当然少不了代码：\r\n\r\n```javascript\r\nfunction sayHello() {\r\n  console.log(\'Hello, World!\');\r\n  console.log(\'欢迎来到我的博客！\');\r\n}\r\n\r\nsayHello();\r\n```\r\n\r\n期待与大家的交流！ 🎉';
const article2 = '---\r\ntitle: "Vue 3 学习笔记"\r\ndate: "2024-01-15"\r\ntags: ["Vue", "前端", "技术"]\r\nsummary: "记录学习 Vue 3 Composition API 的心得体会，包括响应式原理和实际应用。"\r\n---\r\n\r\n# Vue 3 学习笔记\r\n\r\n最近在深入学习 Vue 3，特别是 Composition API，感觉收获很大。\r\n\r\n## Composition API 的优势\r\n\r\n相比 Options API，Composition API 有以下优势：\r\n\r\n### 1. 更好的逻辑复用\r\n\r\n```javascript\r\n// 可复用的逻辑\r\nfunction useCounter() {\r\n  const count = ref(0)\r\n  const increment = () => count.value++\r\n  const decrement = () => count.value--\r\n  \r\n  return { count, increment, decrement }\r\n}\r\n\r\n// 在组件中使用\r\nexport default {\r\n  setup() {\r\n    const { count, increment, decrement } = useCounter()\r\n    return { count, increment, decrement }\r\n  }\r\n}\r\n```\r\n\r\n### 2. 更好的 TypeScript 支持\r\n\r\nComposition API 对 TypeScript 的支持更加友好，类型推导更准确。\r\n\r\n### 3. 更灵活的组织代码\r\n\r\n可以按照功能而不是选项来组织代码，让相关的逻辑聚合在一起。\r\n\r\n## 响应式原理\r\n\r\nVue 3 使用 Proxy 来实现响应式：\r\n\r\n```javascript\r\nimport { reactive, ref, computed } from \'vue\'\r\n\r\n// 响应式对象\r\nconst state = reactive({\r\n  count: 0,\r\n  name: \'Vue 3\'\r\n})\r\n\r\n// 响应式引用\r\nconst count = ref(0)\r\n\r\n// 计算属性\r\nconst doubleCount = computed(() => count.value * 2)\r\n```\r\n\r\n## 实际项目应用\r\n\r\n在实际项目中，我发现这样组织代码效果很好：\r\n\r\n1. **按功能模块拆分** - 每个功能一个 composable\r\n2. **统一的状态管理** - 使用 Pinia 替代 Vuex\r\n3. **类型安全** - 全面使用 TypeScript\r\n\r\n## 总结\r\n\r\nVue 3 的 Composition API 确实是一个很大的进步，让我们能够写出更加清晰、可维护的代码。\r\n\r\n下一步计划深入学习 Vue 3 的性能优化技巧！ 🚀';
const article3 = '---\r\ntitle: "打造自己的 Markdown 编辑器"\r\ndate: "2024-02-01"\r\ntags: ["Markdown", "编辑器", "项目"]\r\nsummary: "分享如何使用 Vue 3 和 marked.js 构建一个功能完整的 Markdown 编辑器的经验。"\r\n---\r\n\r\n# 打造自己的 Markdown 编辑器\r\n\r\n作为一个喜欢写作的程序员，我一直想要一个完全符合自己需求的 Markdown 编辑器。\r\n\r\n## 需求分析\r\n\r\n我理想中的编辑器应该具备：\r\n\r\n- ✅ 实时预览\r\n- ✅ 语法高亮\r\n- ✅ 文件管理\r\n- ✅ 导出功能\r\n- ✅ 主题切换\r\n\r\n## 技术选型\r\n\r\n经过调研，我选择了以下技术栈：\r\n\r\n| 技术 | 用途 | 理由 |\r\n|------|------|------|\r\n| Vue 3 | 前端框架 | 响应式强，生态好 |\r\n| marked.js | Markdown 解析 | 轻量级，功能完整 |\r\n| highlight.js | 代码高亮 | 支持语言多 |\r\n| Vite | 构建工具 | 开发体验好 |\r\n\r\n## 核心功能实现\r\n\r\n### 1. Markdown 解析\r\n\r\n```javascript\r\nimport { marked } from \'marked\'\r\nimport hljs from \'highlight.js\'\r\n\r\n// 配置 marked\r\nmarked.setOptions({\r\n  highlight: function(code, lang) {\r\n    if (lang && hljs.getLanguage(lang)) {\r\n      return hljs.highlight(code, { language: lang }).value\r\n    }\r\n    return hljs.highlightAuto(code).value\r\n  },\r\n  breaks: true,\r\n  gfm: true\r\n})\r\n\r\n// 解析 Markdown\r\nconst htmlContent = computed(() => {\r\n  return marked(markdownText.value)\r\n})\r\n```\r\n\r\n### 2. 实时预览\r\n\r\n使用 Vue 3 的响应式系统，当 Markdown 内容变化时自动更新预览：\r\n\r\n```vue\r\n<template>\r\n  <div class="editor-container">\r\n    <textarea v-model="markdownText" />\r\n    <div v-html="htmlContent" />\r\n  </div>\r\n</template>\r\n```\r\n\r\n### 3. 滚动同步\r\n\r\n实现编辑区和预览区的同步滚动：\r\n\r\n```javascript\r\nconst syncScroll = () => {\r\n  const textarea = textareaRef.value\r\n  const preview = previewRef.value\r\n  const scrollPercentage = textarea.scrollTop / \r\n    (textarea.scrollHeight - textarea.clientHeight)\r\n  preview.scrollTop = scrollPercentage * \r\n    (preview.scrollHeight - preview.clientHeight)\r\n}\r\n```\r\n\r\n## 遇到的挑战\r\n\r\n### 1. 性能优化\r\n\r\n当文档很长时，实时预览可能会卡顿。解决方案是使用防抖：\r\n\r\n```javascript\r\nimport { debounce } from \'lodash-es\'\r\n\r\nconst debouncedUpdate = debounce(() => {\r\n  // 更新预览\r\n}, 300)\r\n```\r\n\r\n### 2. 样式适配\r\n\r\n不同的 Markdown 渲染器生成的 HTML 结构不同，需要仔细调整 CSS。\r\n\r\n## 未来计划\r\n\r\n- [ ] 添加图片上传功能\r\n- [ ] 支持数学公式渲染\r\n- [ ] 添加文档大纲导航\r\n- [ ] 支持多标签页编辑\r\n\r\n## 总结\r\n\r\n通过这个项目，我不仅得到了一个好用的编辑器，还深入学习了 Vue 3 和 Markdown 相关技术。\r\n\r\n**开源地址**: [GitHub](https://github.com/example/markdown-editor)\r\n\r\n欢迎大家试用和贡献代码！ 📝';
const article4 = '---\r\ntitle: "Vue 3 Computed 计算属性"\r\ndate: "2025-11-04"\r\ntags: ["Vue", "前端", "技术"]\r\nsummary: "今天，我们来学习一下 Vue 3 中的 computed 属性。computed 属性是 Vue 3 中用于计算属性的一种方式，它可以让我们在组件中定义一些计算属性，这些属性会根据依赖的数据自动更新。"\r\n---\r\n\r\n# Vue 3 学习笔记\r\n\r\n## computed 属性\r\n\r\n今天，我们来学习一下 Vue 3 中的 computed 属性。computed 属性是 Vue 3 中用于计算属性的一种方式，它可以让我们在组件中定义一些计算属性，这些属性会根据依赖的数据自动更新。\r\n\r\n### 基本用法\r\n\r\n在 Vue 3 中，我们可以使用 `computed` 函数来定义计算属性。`computed` 函数接受一个函数作为参数，这个函数的返回值就是计算属性的值。例如：\r\n\r\n```javascript\r\nimport { ref, computed } from \'vue\'\r\n\r\nconst count = ref(0)\r\n\r\nconst doubleCount = computed(() => {\r\n  return count.value * 2\r\n})\r\n```\r\n\r\n在上面的例子中，我们定义了一个计算属性 `doubleCount`，它依赖于 `count` 属性。当 `count` 属性的值发生变化时，`doubleCount` 属性的值也会自动更新。\r\n\r\n### 依赖追踪\r\n\r\n计算属性会自动追踪其依赖的数据，当依赖的数据发生变化时，计算属性会重新计算。例如：\r\n\r\n```javascript\r\nimport { ref, computed } from \'vue\'\r\n\r\nconst count = ref(0)\r\nconst doubleCount = computed(() => {\r\n  return count.value * 2\r\n})\r\n\r\nconsole.log(doubleCount.value) // 0\r\n\r\ncount.value = 1\r\n\r\nconsole.log(doubleCount.value) // 2\r\n```\r\n\r\n在上面的例子中，我们定义了一个计算属性 `doubleCount`，它依赖于 `count` 属性。当 `count` 属性的值从 0 变为 1 时，`doubleCount` 属性的值也会从 0 变为 2。\r\n\r\n### 性能优化\r\n\r\n计算属性会自动缓存其结果，只有当依赖的数据发生变化时，计算属性才会重新计算。这意味着计算属性的性能比普通的函数要好，因为它避免了不必要的计算。例如：\r\n\r\n```javascript\r\nimport { ref, computed } from \'vue\'\r\n\r\nconst count = ref(0)\r\nconst doubleCount = computed(() => {\r\n  return count.value * 2\r\n})\r\n\r\nconsole.log(doubleCount.value) // 0\r\n\r\ncount.value = 1\r\n\r\nconsole.log(doubleCount.value) // 2\r\n\r\ncount.value = 2\r\n\r\nconsole.log(doubleCount.value) // 4\r\n```\r\n\r\n### 总结\r\n\r\n今天我们学习了 Vue 3 中的 computed 属性，它可以帮助我们定义一些计算属性，这些属性会根据依赖的数据自动更新。computed 属性的性能比普通的函数要好，因为它会自动缓存其结果。希望这篇文章对你有所帮助！\r\n';
const articlesCache = ref([]);
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  if (!match) {
    return {
      frontmatter: {},
      content
    };
  }
  const frontmatterText = match[1];
  const markdownContent = match[2];
  const frontmatter = {};
  frontmatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value.slice(1, -1).split(",").map((item) => item.trim().replace(/['"]/g, ""));
      }
      frontmatter[key] = value;
    }
  });
  return {
    frontmatter,
    content: markdownContent
  };
}
const articleModules = {
  "2025-11-04-hello-world.md": article1,
  "2024-01-15-vue3-learning.md": article2,
  "2024-02-01-markdown-editor.md": article3,
  "2025-11-04-vue3-computed.md": article4
};
function getAllArticles() {
  return __async(this, null, function* () {
    if (articlesCache.value.length > 0) {
      return articlesCache.value;
    }
    const articles = [];
    for (const [filename, content] of Object.entries(articleModules)) {
      try {
        const { frontmatter, content: markdownContent } = parseFrontmatter(content);
        const slug = filename.replace(".md", "");
        articles.push({
          slug,
          filename,
          title: frontmatter.title || "无标题",
          date: frontmatter.date || "未知日期",
          tags: frontmatter.tags || [],
          summary: frontmatter.summary || extractSummary(markdownContent),
          content: markdownContent,
          frontmatter
        });
      } catch (error) {
        console.warn(`无法加载文章: ${filename}`, error);
      }
    }
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    articlesCache.value = articles;
    return articles;
  });
}
function getArticleBySlug(slug) {
  return __async(this, null, function* () {
    const articles = yield getAllArticles();
    return articles.find((article) => article.slug === slug);
  });
}
function extractSummary(content, maxLength = 150) {
  const plainText = content.replace(/#{1,6}\s+/g, "").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`(.*?)`/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/```[\s\S]*?```/g, "").replace(/>\s+/g, "").replace(/[-*+]\s+/g, "").replace(/\n+/g, " ").trim();
  return plainText.length > maxLength ? plainText.substring(0, maxLength) + "..." : plainText;
}
function getAllTags() {
  return __async(this, null, function* () {
    const articles = yield getAllArticles();
    const tagSet = /* @__PURE__ */ new Set();
    articles.forEach((article) => {
      article.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  });
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  getAllTags as a,
  getArticleBySlug as b,
  getAllArticles as g
};
