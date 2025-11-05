import{r as p}from"./index-07544d3b.js";const g=`---\r
title: "Hello World - 我的第一篇文章"\r
date: "2025-11-04"\r
tags: ["生活", "随笔"]\r
summary: "这是我的第一篇博客文章，记录开始写作的心情和想法。"\r
---\r
\r
# Hello World - 我的第一篇文章\r
\r
今天是2024年的第一天，我决定开始写博客了！\r
\r
## 为什么要写博客？\r
\r
写博客有很多好处：\r
\r
1. **记录生活** - 把生活中的点点滴滴记录下来\r
2. **分享知识** - 把学到的东西分享给更多人\r
3. **提升写作** - 通过持续写作来提升表达能力\r
\r
## 我的计划\r
\r
接下来我会在这里分享：\r
\r
- 技术学习心得\r
- 生活感悟\r
- 读书笔记\r
- 旅行见闻\r
\r
> 千里之行，始于足下。让我们一起开始这个写作之旅吧！\r
\r
## 代码示例\r
\r
既然是技术博客，当然少不了代码：\r
\r
\`\`\`javascript\r
function sayHello() {\r
  console.log('Hello, World!');\r
  console.log('欢迎来到我的博客！');\r
}\r
\r
sayHello();\r
\`\`\`\r
\r
期待与大家的交流！ 🎉`,v=`---\r
title: "Vue 3 学习笔记"\r
date: "2024-01-15"\r
tags: ["Vue", "前端", "技术"]\r
summary: "记录学习 Vue 3 Composition API 的心得体会，包括响应式原理和实际应用。"\r
---\r
\r
# Vue 3 学习笔记\r
\r
最近在深入学习 Vue 3，特别是 Composition API，感觉收获很大。\r
\r
## Composition API 的优势\r
\r
相比 Options API，Composition API 有以下优势：\r
\r
### 1. 更好的逻辑复用\r
\r
\`\`\`javascript\r
// 可复用的逻辑\r
function useCounter() {\r
  const count = ref(0)\r
  const increment = () => count.value++\r
  const decrement = () => count.value--\r
  \r
  return { count, increment, decrement }\r
}\r
\r
// 在组件中使用\r
export default {\r
  setup() {\r
    const { count, increment, decrement } = useCounter()\r
    return { count, increment, decrement }\r
  }\r
}\r
\`\`\`\r
\r
### 2. 更好的 TypeScript 支持\r
\r
Composition API 对 TypeScript 的支持更加友好，类型推导更准确。\r
\r
### 3. 更灵活的组织代码\r
\r
可以按照功能而不是选项来组织代码，让相关的逻辑聚合在一起。\r
\r
## 响应式原理\r
\r
Vue 3 使用 Proxy 来实现响应式：\r
\r
\`\`\`javascript\r
import { reactive, ref, computed } from 'vue'\r
\r
// 响应式对象\r
const state = reactive({\r
  count: 0,\r
  name: 'Vue 3'\r
})\r
\r
// 响应式引用\r
const count = ref(0)\r
\r
// 计算属性\r
const doubleCount = computed(() => count.value * 2)\r
\`\`\`\r
\r
## 实际项目应用\r
\r
在实际项目中，我发现这样组织代码效果很好：\r
\r
1. **按功能模块拆分** - 每个功能一个 composable\r
2. **统一的状态管理** - 使用 Pinia 替代 Vuex\r
3. **类型安全** - 全面使用 TypeScript\r
\r
## 总结\r
\r
Vue 3 的 Composition API 确实是一个很大的进步，让我们能够写出更加清晰、可维护的代码。\r
\r
下一步计划深入学习 Vue 3 的性能优化技巧！ 🚀`,f=`---\r
title: "打造自己的 Markdown 编辑器"\r
date: "2024-02-01"\r
tags: ["Markdown", "编辑器", "项目"]\r
summary: "分享如何使用 Vue 3 和 marked.js 构建一个功能完整的 Markdown 编辑器的经验。"\r
---\r
\r
# 打造自己的 Markdown 编辑器\r
\r
作为一个喜欢写作的程序员，我一直想要一个完全符合自己需求的 Markdown 编辑器。\r
\r
## 需求分析\r
\r
我理想中的编辑器应该具备：\r
\r
- ✅ 实时预览\r
- ✅ 语法高亮\r
- ✅ 文件管理\r
- ✅ 导出功能\r
- ✅ 主题切换\r
\r
## 技术选型\r
\r
经过调研，我选择了以下技术栈：\r
\r
| 技术 | 用途 | 理由 |\r
|------|------|------|\r
| Vue 3 | 前端框架 | 响应式强，生态好 |\r
| marked.js | Markdown 解析 | 轻量级，功能完整 |\r
| highlight.js | 代码高亮 | 支持语言多 |\r
| Vite | 构建工具 | 开发体验好 |\r
\r
## 核心功能实现\r
\r
### 1. Markdown 解析\r
\r
\`\`\`javascript\r
import { marked } from 'marked'\r
import hljs from 'highlight.js'\r
\r
// 配置 marked\r
marked.setOptions({\r
  highlight: function(code, lang) {\r
    if (lang && hljs.getLanguage(lang)) {\r
      return hljs.highlight(code, { language: lang }).value\r
    }\r
    return hljs.highlightAuto(code).value\r
  },\r
  breaks: true,\r
  gfm: true\r
})\r
\r
// 解析 Markdown\r
const htmlContent = computed(() => {\r
  return marked(markdownText.value)\r
})\r
\`\`\`\r
\r
### 2. 实时预览\r
\r
使用 Vue 3 的响应式系统，当 Markdown 内容变化时自动更新预览：\r
\r
\`\`\`vue\r
<template>\r
  <div class="editor-container">\r
    <textarea v-model="markdownText" />\r
    <div v-html="htmlContent" />\r
  </div>\r
</template>\r
\`\`\`\r
\r
### 3. 滚动同步\r
\r
实现编辑区和预览区的同步滚动：\r
\r
\`\`\`javascript\r
const syncScroll = () => {\r
  const textarea = textareaRef.value\r
  const preview = previewRef.value\r
  const scrollPercentage = textarea.scrollTop / \r
    (textarea.scrollHeight - textarea.clientHeight)\r
  preview.scrollTop = scrollPercentage * \r
    (preview.scrollHeight - preview.clientHeight)\r
}\r
\`\`\`\r
\r
## 遇到的挑战\r
\r
### 1. 性能优化\r
\r
当文档很长时，实时预览可能会卡顿。解决方案是使用防抖：\r
\r
\`\`\`javascript\r
import { debounce } from 'lodash-es'\r
\r
const debouncedUpdate = debounce(() => {\r
  // 更新预览\r
}, 300)\r
\`\`\`\r
\r
### 2. 样式适配\r
\r
不同的 Markdown 渲染器生成的 HTML 结构不同，需要仔细调整 CSS。\r
\r
## 未来计划\r
\r
- [ ] 添加图片上传功能\r
- [ ] 支持数学公式渲染\r
- [ ] 添加文档大纲导航\r
- [ ] 支持多标签页编辑\r
\r
## 总结\r
\r
通过这个项目，我不仅得到了一个好用的编辑器，还深入学习了 Vue 3 和 Markdown 相关技术。\r
\r
**开源地址**: [GitHub](https://github.com/example/markdown-editor)\r
\r
欢迎大家试用和贡献代码！ 📝`,h=`---\r
title: "Vue 3 Computed 计算属性"\r
date: "2025-11-04"\r
tags: ["Vue", "前端", "技术"]\r
summary: "今天，我们来学习一下 Vue 3 中的 computed 属性。computed 属性是 Vue 3 中用于计算属性的一种方式，它可以让我们在组件中定义一些计算属性，这些属性会根据依赖的数据自动更新。"\r
---\r
\r
# Vue 3 学习笔记\r
\r
## computed 属性\r
\r
今天，我们来学习一下 Vue 3 中的 computed 属性。computed 属性是 Vue 3 中用于计算属性的一种方式，它可以让我们在组件中定义一些计算属性，这些属性会根据依赖的数据自动更新。\r
\r
### 基本用法\r
\r
在 Vue 3 中，我们可以使用 \`computed\` 函数来定义计算属性。\`computed\` 函数接受一个函数作为参数，这个函数的返回值就是计算属性的值。例如：\r
\r
\`\`\`javascript\r
import { ref, computed } from 'vue'\r
\r
const count = ref(0)\r
\r
const doubleCount = computed(() => {\r
  return count.value * 2\r
})\r
\`\`\`\r
\r
在上面的例子中，我们定义了一个计算属性 \`doubleCount\`，它依赖于 \`count\` 属性。当 \`count\` 属性的值发生变化时，\`doubleCount\` 属性的值也会自动更新。\r
\r
### 依赖追踪\r
\r
计算属性会自动追踪其依赖的数据，当依赖的数据发生变化时，计算属性会重新计算。例如：\r
\r
\`\`\`javascript\r
import { ref, computed } from 'vue'\r
\r
const count = ref(0)\r
const doubleCount = computed(() => {\r
  return count.value * 2\r
})\r
\r
console.log(doubleCount.value) // 0\r
\r
count.value = 1\r
\r
console.log(doubleCount.value) // 2\r
\`\`\`\r
\r
在上面的例子中，我们定义了一个计算属性 \`doubleCount\`，它依赖于 \`count\` 属性。当 \`count\` 属性的值从 0 变为 1 时，\`doubleCount\` 属性的值也会从 0 变为 2。\r
\r
### 性能优化\r
\r
计算属性会自动缓存其结果，只有当依赖的数据发生变化时，计算属性才会重新计算。这意味着计算属性的性能比普通的函数要好，因为它避免了不必要的计算。例如：\r
\r
\`\`\`javascript\r
import { ref, computed } from 'vue'\r
\r
const count = ref(0)\r
const doubleCount = computed(() => {\r
  return count.value * 2\r
})\r
\r
console.log(doubleCount.value) // 0\r
\r
count.value = 1\r
\r
console.log(doubleCount.value) // 2\r
\r
count.value = 2\r
\r
console.log(doubleCount.value) // 4\r
\`\`\`\r
\r
### 总结\r
\r
今天我们学习了 Vue 3 中的 computed 属性，它可以帮助我们定义一些计算属性，这些属性会根据依赖的数据自动更新。computed 属性的性能比普通的函数要好，因为它会自动缓存其结果。希望这篇文章对你有所帮助！\r
`,l=p([]);function w(r){const t=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,n=r.match(t);if(!n)return{frontmatter:{},content:r};const e=n[1],a=n[2],c={};return e.split(`
`).forEach(u=>{const s=u.indexOf(":");if(s>0){const m=u.substring(0,s).trim();let o=u.substring(s+1).trim();(o.startsWith('"')&&o.endsWith('"')||o.startsWith("'")&&o.endsWith("'"))&&(o=o.slice(1,-1)),o.startsWith("[")&&o.endsWith("]")&&(o=o.slice(1,-1).split(",").map(d=>d.trim().replace(/['"]/g,""))),c[m]=o}}),{frontmatter:c,content:a}}const C={"2025-11-04-hello-world.md":g,"2024-01-15-vue3-learning.md":v,"2024-02-01-markdown-editor.md":f,"2025-11-04-vue3-computed.md":h};async function i(){if(l.value.length>0)return l.value;const r=[];for(const[t,n]of Object.entries(C))try{const{frontmatter:e,content:a}=w(n),c=t.replace(".md","");r.push({slug:c,filename:t,title:e.title||"无标题",date:e.date||"未知日期",tags:e.tags||[],summary:e.summary||k(a),content:a,frontmatter:e})}catch(e){console.warn(`无法加载文章: ${t}`,e)}return r.sort((t,n)=>new Date(n.date)-new Date(t.date)),l.value=r,r}async function V(r){return(await i()).find(n=>n.slug===r)}function k(r,t=150){const n=r.replace(/#{1,6}\s+/g,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/>\s+/g,"").replace(/[-*+]\s+/g,"").replace(/\n+/g," ").trim();return n.length>t?n.substring(0,t)+"...":n}async function y(){const r=await i(),t=new Set;return r.forEach(n=>{n.tags.forEach(e=>t.add(e))}),Array.from(t).sort()}const x=(r,t)=>{const n=r.__vccOpts||r;for(const[e,a]of t)n[e]=a;return n};export{x as _,y as a,V as b,i as g};
