import{c as p}from"./index-59198292.js";const g=`---
title: "Hello World - 我的第一篇文章"
date: "2025-11-04"
tags: ["生活", "随笔"]
summary: "这是我的第一篇博客文章，记录开始写作的心情和想法。"
---

# Hello World - 我的第一篇文章

今天是2024年的第一天，我决定开始写博客了！

## 为什么要写博客？

写博客有很多好处：

1. **记录生活** - 把生活中的点点滴滴记录下来
2. **分享知识** - 把学到的东西分享给更多人
3. **提升写作** - 通过持续写作来提升表达能力

## 我的计划

接下来我会在这里分享：

- 技术学习心得
- 生活感悟
- 读书笔记
- 旅行见闻

> 千里之行，始于足下。让我们一起开始这个写作之旅吧！

## 代码示例

既然是技术博客，当然少不了代码：

\`\`\`javascript
function sayHello() {
  console.log('Hello, World!');
  console.log('欢迎来到我的博客！');
}

sayHello();
\`\`\`

期待与大家的交流！ 🎉`,v=`---
title: "Vue 3 学习笔记"
date: "2024-01-15"
tags: ["Vue", "前端", "技术"]
summary: "记录学习 Vue 3 Composition API 的心得体会，包括响应式原理和实际应用。"
---

# Vue 3 学习笔记

最近在深入学习 Vue 3，特别是 Composition API，感觉收获很大。

## Composition API 的优势

相比 Options API，Composition API 有以下优势：

### 1. 更好的逻辑复用

\`\`\`javascript
// 可复用的逻辑
function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--
  
  return { count, increment, decrement }
}

// 在组件中使用
export default {
  setup() {
    const { count, increment, decrement } = useCounter()
    return { count, increment, decrement }
  }
}
\`\`\`

### 2. 更好的 TypeScript 支持

Composition API 对 TypeScript 的支持更加友好，类型推导更准确。

### 3. 更灵活的组织代码

可以按照功能而不是选项来组织代码，让相关的逻辑聚合在一起。

## 响应式原理

Vue 3 使用 Proxy 来实现响应式：

\`\`\`javascript
import { reactive, ref, computed } from 'vue'

// 响应式对象
const state = reactive({
  count: 0,
  name: 'Vue 3'
})

// 响应式引用
const count = ref(0)

// 计算属性
const doubleCount = computed(() => count.value * 2)
\`\`\`

## 实际项目应用

在实际项目中，我发现这样组织代码效果很好：

1. **按功能模块拆分** - 每个功能一个 composable
2. **统一的状态管理** - 使用 Pinia 替代 Vuex
3. **类型安全** - 全面使用 TypeScript

## 总结

Vue 3 的 Composition API 确实是一个很大的进步，让我们能够写出更加清晰、可维护的代码。

下一步计划深入学习 Vue 3 的性能优化技巧！ 🚀`,f=`---
title: "打造自己的 Markdown 编辑器"
date: "2024-02-01"
tags: ["Markdown", "编辑器", "项目"]
summary: "分享如何使用 Vue 3 和 marked.js 构建一个功能完整的 Markdown 编辑器的经验。"
---

# 打造自己的 Markdown 编辑器

作为一个喜欢写作的程序员，我一直想要一个完全符合自己需求的 Markdown 编辑器。

## 需求分析

我理想中的编辑器应该具备：

- ✅ 实时预览
- ✅ 语法高亮
- ✅ 文件管理
- ✅ 导出功能
- ✅ 主题切换

## 技术选型

经过调研，我选择了以下技术栈：

| 技术 | 用途 | 理由 |
|------|------|------|
| Vue 3 | 前端框架 | 响应式强，生态好 |
| marked.js | Markdown 解析 | 轻量级，功能完整 |
| highlight.js | 代码高亮 | 支持语言多 |
| Vite | 构建工具 | 开发体验好 |

## 核心功能实现

### 1. Markdown 解析

\`\`\`javascript
import { marked } from 'marked'
import hljs from 'highlight.js'

// 配置 marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true
})

// 解析 Markdown
const htmlContent = computed(() => {
  return marked(markdownText.value)
})
\`\`\`

### 2. 实时预览

使用 Vue 3 的响应式系统，当 Markdown 内容变化时自动更新预览：

\`\`\`vue
<template>
  <div class="editor-container">
    <textarea v-model="markdownText" />
    <div v-html="htmlContent" />
  </div>
</template>
\`\`\`

### 3. 滚动同步

实现编辑区和预览区的同步滚动：

\`\`\`javascript
const syncScroll = () => {
  const textarea = textareaRef.value
  const preview = previewRef.value
  const scrollPercentage = textarea.scrollTop / 
    (textarea.scrollHeight - textarea.clientHeight)
  preview.scrollTop = scrollPercentage * 
    (preview.scrollHeight - preview.clientHeight)
}
\`\`\`

## 遇到的挑战

### 1. 性能优化

当文档很长时，实时预览可能会卡顿。解决方案是使用防抖：

\`\`\`javascript
import { debounce } from 'lodash-es'

const debouncedUpdate = debounce(() => {
  // 更新预览
}, 300)
\`\`\`

### 2. 样式适配

不同的 Markdown 渲染器生成的 HTML 结构不同，需要仔细调整 CSS。

## 未来计划

- [ ] 添加图片上传功能
- [ ] 支持数学公式渲染
- [ ] 添加文档大纲导航
- [ ] 支持多标签页编辑

## 总结

通过这个项目，我不仅得到了一个好用的编辑器，还深入学习了 Vue 3 和 Markdown 相关技术。

**开源地址**: [GitHub](https://github.com/example/markdown-editor)

欢迎大家试用和贡献代码！ 📝`,h=`---
title: "Vue 3 Computed 计算属性"
date: "2025-11-04"
tags: ["Vue", "前端", "技术"]
summary: "今天，我们来学习一下 Vue 3 中的 computed 属性。computed 属性是 Vue 3 中用于计算属性的一种方式，它可以让我们在组件中定义一些计算属性，这些属性会根据依赖的数据自动更新。"
---

# Vue 3 学习笔记

## computed 属性

今天，我们来学习一下 Vue 3 中的 computed 属性。computed 属性是 Vue 3 中用于计算属性的一种方式，它可以让我们在组件中定义一些计算属性，这些属性会根据依赖的数据自动更新。

### 基本用法

在 Vue 3 中，我们可以使用 \`computed\` 函数来定义计算属性。\`computed\` 函数接受一个函数作为参数，这个函数的返回值就是计算属性的值。例如：

\`\`\`javascript
import { ref, computed } from 'vue'

const count = ref(0)

const doubleCount = computed(() => {
  return count.value * 2
})
\`\`\`

在上面的例子中，我们定义了一个计算属性 \`doubleCount\`，它依赖于 \`count\` 属性。当 \`count\` 属性的值发生变化时，\`doubleCount\` 属性的值也会自动更新。

### 依赖追踪

计算属性会自动追踪其依赖的数据，当依赖的数据发生变化时，计算属性会重新计算。例如：

\`\`\`javascript
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => {
  return count.value * 2
})

console.log(doubleCount.value) // 0

count.value = 1

console.log(doubleCount.value) // 2
\`\`\`

在上面的例子中，我们定义了一个计算属性 \`doubleCount\`，它依赖于 \`count\` 属性。当 \`count\` 属性的值从 0 变为 1 时，\`doubleCount\` 属性的值也会从 0 变为 2。

### 性能优化

计算属性会自动缓存其结果，只有当依赖的数据发生变化时，计算属性才会重新计算。这意味着计算属性的性能比普通的函数要好，因为它避免了不必要的计算。例如：

\`\`\`javascript
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => {
  return count.value * 2
})

console.log(doubleCount.value) // 0

count.value = 1

console.log(doubleCount.value) // 2

count.value = 2

console.log(doubleCount.value) // 4
\`\`\`

### 总结

今天我们学习了 Vue 3 中的 computed 属性，它可以帮助我们定义一些计算属性，这些属性会根据依赖的数据自动更新。computed 属性的性能比普通的函数要好，因为它会自动缓存其结果。希望这篇文章对你有所帮助！
`,s=p([]);function w(t){const e=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,o=t.match(e);if(!o)return{frontmatter:{},content:t};const n=o[1],u=o[2],a={};return n.split(`
`).forEach(c=>{const l=c.indexOf(":");if(l>0){const m=c.substring(0,l).trim();let r=c.substring(l+1).trim();(r.startsWith('"')&&r.endsWith('"')||r.startsWith("'")&&r.endsWith("'"))&&(r=r.slice(1,-1)),r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1).split(",").map(d=>d.trim().replace(/['"]/g,""))),a[m]=r}}),{frontmatter:a,content:u}}const C={"2025-11-04-hello-world.md":g,"2024-01-15-vue3-learning.md":v,"2024-02-01-markdown-editor.md":f,"2025-11-04-vue3-computed.md":h};async function i(){if(s.value.length>0)return s.value;const t=[];for(const[e,o]of Object.entries(C))try{const{frontmatter:n,content:u}=w(o),a=e.replace(".md","");t.push({slug:a,filename:e,title:n.title||"无标题",date:n.date||"未知日期",tags:n.tags||[],summary:n.summary||V(u),content:u,frontmatter:n})}catch(n){console.warn(`无法加载文章: ${e}`,n)}return t.sort((e,o)=>new Date(o.date)-new Date(e.date)),s.value=t,t}async function k(t){return(await i()).find(e=>e.slug===t)}function V(t,e=150){const o=t.replace(/#{1,6}\s+/g,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/>\s+/g,"").replace(/[-*+]\s+/g,"").replace(/\n+/g," ").trim();return o.length>e?o.substring(0,e)+"...":o}async function y(){const t=await i(),e=new Set;return t.forEach(o=>{o.tags.forEach(n=>e.add(n))}),Array.from(e).sort()}export{k as V,i,y};
