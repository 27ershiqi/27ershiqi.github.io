import{r as p}from"./index-d4fa99ae.js";const g=`---\r
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
期待与大家的交流！ 🎉`,S=`---\r
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
下一步计划深入学习 Vue 3 的性能优化技巧！ 🚀`,v=`---\r
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
欢迎大家试用和贡献代码！ 📝`,f=`---\r
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
`,h=`---\r
title: "JS CSS 阻塞机制"\r
date: "2025-11-10"\r
tags: ["js", "前端", "技术"]\r
summary: "为什么页面会出现白屏？这篇文章讲解一下 js 和 css 阻塞机制。"\r
---\r
\r
## JS CSS 阻塞机制\r
\r
### 我们都知道，现代浏览器会并行下载各种资源（如 JS、CSS、图片等），但 JS 和 CSS 的加载与阻塞行为到底是什么？\r
\r
## 先说结论:\r
\r
1. CSS 不会阻塞 DOM 解析，但会阻塞 DOM 渲染。\r
2. JS 会阻塞 DOM 解析，但不会阻塞 DOM 渲染。\r
3. JS 会阻塞 CSS 解析，但不会阻塞 CSS 加载。\r
4. CSS 加载不会阻塞 JS 执行，但会阻塞 JS 解析。\r
\r
## 解释上述结论:\r
\r
1. CSS 不会阻塞 DOM 解析，但会阻塞 DOM 渲染。因为浏览器需要先解析完 CSS，才能知道如何渲染页面。\r
2. JS 会阻塞 DOM 解析，但不会阻塞 DOM 渲染。因为浏览器会先解析 HTML，然后再解析 JS。\r
3. JS 会阻塞 CSS 解析，但不会阻塞 CSS 加载。因为浏览器会先加载 CSS，然后再解析 JS。\r
4. CSS 加载不会阻塞 JS 执行，但会阻塞 JS 解析。因为浏览器会先加载 CSS，然后再解析 JS。\r
\r
## 为什么页面会出现白屏？\r
\r
1. CSS 加载阻塞了 DOM 渲染。\r
2. JS 加载阻塞了 DOM 解析。\r
3. CSS 加载阻塞了 JS 解析。\r
\r
## 如何避免白屏？\r
1. 将 CSS 放在 head 标签中，尽早加载。\r
2. 将 JS 放在 body 标签底部，避免阻塞 DOM 解析。\r
3. 使用 async 或 defer 属性加载 JS，避免阻塞 CSS 解析。\r
4. 使用 CDN 加速 CSS 和 JS 的加载。\r
\r
## 总结\r
这篇文章讲解了 JS 和 CSS 的阻塞机制，以及如何避免白屏。希望对大家有所帮助。`,b=`---\r
title: "Vue 图片懒加载及实现原理"\r
date: "2025-11-13"\r
tags: ["Vue", "前端", "技术"]\r
summary: "图片懒加载是一种优化网页性能的技术，它可以在用户滚动到图片位置时才加载图片，从而减少初始加载时间。本文将介绍图片懒加载的实现原理，并提供一个 Vue 组件示例。"\r
---\r
\r
## 什么是图片懒加载？\r
\r
图片懒加载是一种优化网页性能的技术，它可以在用户滚动到图片位置时才加载图片，从而减少初始加载时间。这种技术在移动端和网页上都非常常见，比如在新闻网站、电商网站等。\r
\r
## 一、图片懒加载的实现原理\r
\r
图片懒加载的本质是<b>通过检测图片元素是否进入用户可视区域，动态触发加载行为</b>。具体来说:\r
\r
1.<b>初始状态:</b> 图片不设置src(或设置占位图)，而是将真实图片地址存放在自定义属性中(如 data-src)，避免浏览器自动加载。\r
2.<b>滚动监听:</b> 监听页面滚动事件，判断图片是否进入可视区域。\r
2.<b>触发加载:</b> 当图片进入可视区域时，将自定义属性中的图片地址赋值给src属性，从而触发图片加载(浏览器会自动发起请求加载图片)。\r
\r
## 二、Vue中实现图片懒加载的两种方式\r
\r
### 方式1：使用第三方库（简单高效）\r
\r
最常用的是vue-lazyload库，适配vue2和vue3，支持自定义加载状态、错误处理等功能。\r
\r
#### 1.安装依赖\r
\r
\`\`\`bash\r
# Vue2\r
npm install vue-lazyload@1.3.3 --save\r
\r
# Vue3（使用最新版）\r
npm install vue-lazyload@next --save\r
\`\`\`\r
\r
#### 2.全局注册 (main.js)\r
\r
\`\`\`js\r
\r
// Vue2\r
import Vue from 'vue'\r
import VueLazyload from 'vue-lazyload'\r
\r
Vue.use(VueLazyload, {\r
  preLoad: 1.3, // 预加载比例（1.3 表示提前 30% 视口高度加载）\r
  error: require('@/assets/error.png'), // 加载失败时显示的图片\r
  loading: require('@/assets/loading.gif'), // 加载中显示的占位图\r
  attempt: 1 // 加载失败重试次数\r
})\r
\r
// Vue3\r
import { createApp } from 'vue'\r
import App from './App.vue'\r
import VueLazyload from 'vue-lazyload'\r
\r
createApp(App)\r
  .use(VueLazyload, {\r
    // 配置同上\r
  })\r
  .mount('#app')\r
\r
\`\`\`\r
\r
#### 3.组件中使用\r
\r
将img的src属性替换为v-lazy指令，绑定真实图片地址:\r
\r
\`\`\`vue\r
<template>\r
  <div>\r
    <img\r
      v-for="(item, index) in images"\r
      :key="index"\r
      v-lazy="item.src"\r
    />\r
  </div>\r
</template>\r
\r
<script>\r
export default {\r
  data() {\r
    return {\r
      images: [\r
        { src: "https://example.com/image1.jpg" },\r
        { src: "https://example.com/image2.jpg" },\r
        { src: "https://example.com/image3.jpg" },\r
      ]\r
    };\r
  }\r
}\r
<\/script>\r
\`\`\`\r
\r
### 方式2：手动实现（理解底层原理）\r
\r
手动实现依赖「监听可视区域」和「动态设置 src」，核心用 Intersection Observer API（现代浏览器推荐，性能更优）或「滚动事件 + 位置计算」。\r
\r
### 步骤(基于intersection observer):\r
\r
#### 1.定义懒加载指令(全局或局部)\r
\r
vue中可通过自定义指令封装懒加载逻辑，方便复用:\r
\r
\`\`\`js\r
// 全局注册自定义指令（main.js）\r
import { createApp } from 'vue'\r
import App from './App.vue'\r
\r
const app = createApp(App)\r
\r
// 注册 v-lazy 指令\r
app.directive('lazy', {\r
  // 指令绑定到元素时触发（只执行一次）\r
  mounted(el, binding) {\r
    // el：当前图片元素；binding.value：指令绑定的图片地址（如 v-lazy="url" 中的 url）\r
    const imgSrc = binding.value\r
\r
    // 1. 初始化：设置占位图（可选）\r
    el.src = require('@/assets/placeholder.png')\r
\r
    // 2. 创建 Intersection Observer 实例，监听元素是否进入视口\r
    const observer = new IntersectionObserver((entries) => {\r
      entries.forEach(entry => {\r
        // 当元素进入视口\r
        if (entry.isIntersecting) {\r
          // 3. 加载真实图片\r
          const img = new Image()\r
          img.src = imgSrc\r
          // 图片加载成功后，替换 src\r
          img.onload = () => {\r
            el.src = imgSrc\r
          }\r
          // 停止监听（避免重复触发）\r
          observer.unobserve(el)\r
        }\r
      })\r
    }, {\r
      rootMargin: '0px 0px 200px 0px' // 提前 200px 加载（优化体验）\r
    })\r
\r
    // 开始监听当前图片元素\r
    observer.observe(el)\r
  }\r
})\r
\r
app.mount('#app')\r
\`\`\`\r
\r
#### 2.组件中使用自定义指令\r
\r
\`\`\`vue\r
<template>\r
  <img v-lazy="imageUrl" alt="手动懒加载图片">\r
</template>\r
\r
<script>\r
export default {\r
  data() {\r
    return {\r
      imageUrl: require('@/assets/real-image.jpg')\r
    }\r
  }\r
}\r
<\/script>\r
\`\`\`\r
\r
## 三、关键技术点解析\r
\r
### 1.为什么用data-src存储真实地址？\r
\r
浏览器会自动加载src属性中的图片，若初始就设置真实地址，会导致提前加载。用data-src(自定义属性)暂存，可避免此问题，待需要时再赋值给src。\r
\r
### 2.Intersection Observer 相比滚动事件 + 位置计算的优势？\r
\r
1. 传统方式：监听 scroll 事件，通过 getBoundingClientRect() 计算元素位置，判断是否进入视口。但 scroll 事件触发频繁，可能导致性能问题（需配合节流优化）。\r
2. Intersection Observer：浏览器原生 API，异步监听元素与视口的交叉状态，无需频繁计算，性能更优，且支持提前加载（rootMargin 配置）。\r
\r
### 3.优化细节\r
\r
1. 占位图：设置与真实图片相同的宽高，避免加载后布局偏移（减少 CLS 指标）。\r
2. 兼容性：Intersection Observer 兼容现代浏览器（IE 不支持），如需兼容可降级为滚动事件 + 节流。\r
3. 错误处理：监听图片 onerror 事件，加载失败时显示默认图片。\r
\r
## 总结\r
\r
图片懒加载是一种优化网页性能的有效手段，通过减少初始加载时间，提升用户体验。本文介绍了图片懒加载的实现原理，并提供了 Vue 中实现懒加载的两种方式：使用第三方库和手动实现。希望对你有所帮助！`,C=`---\r
title: "跨页面通讯"\r
date: "2025-11-25"\r
tags: ["js", "前端", "技术"]\r
summary: "有时会需要在多个标签页面之间进行通讯，比如在A页面修改了数据，B页面需要同步显示。本文介绍了几种跨页面通讯的方法。"\r
---\r
\r
### 跨页面通信（Cross-Page Communication）指不同浏览器标签页、窗口或 iframe 之间的数据传递，核心分为 同域通信 和 跨域通信 两大类，以下是 6 种常用实现方案，按「易用性 + 适用场景」排序，附原理、代码示例和优缺点：\r
\r
## 一、同域跨页面通信(最常用，无跨域限制)\r
\r
### 1. LocalStorage / sessionStorage + 监听storage事件 (推荐入门)\r
\r
原理：通过监听 \`storage\` 事件，实现不同页面间的数据共享。LocalStorage（持久化）和 SessionStorage（会话级）是浏览器本地存储，同域下所有页面共享数据。当一个页面修改 LocalStorage/SessionStorage 时，其他同域页面会触发 storage 事件，通过监听该事件接收数据。\r
\r
代码示例：\r
\r
\`\`\`js\r
\r
// 发送方页面（修改存储数据）\r
localStorage.setItem('crossPageMsg', JSON.stringify({ type: 'notify', data: 'Hello' }));\r
\r
// 接收方页面（监听 storage 事件）\r
window.addEventListener('storage', (e) => {\r
  if (e.key === 'crossPageMsg') { // 只处理目标key的变化\r
    const msg = JSON.parse(e.newValue); // 新值\r
    console.log('收到跨页面消息：', msg);\r
    // 处理完后可删除（可选）\r
    localStorage.removeItem('crossPageMsg');\r
  }\r
});\r
\r
\`\`\`\r
\r
特点：\r
- 优点：简单易用，兼容性好，无跨域限制。\r
- 缺点：数据持久化，不适合频繁更新数据，数据大小限制为 5MB 左右，仅支持字符串数据（需 JSON 序列化），SessionStorage 仅同会话有效；storage 事件仅在「其他页面修改时触发」，当前页面修改不会触发。\r
- 场景：适合同域下页面间简单数据共享，如用户登录状态、购物车数量等。\r
\r
### 2. BroadcastChannel API （HTML5 原生方案，推荐同域高效通信）\r
\r
原理：通过 \`BroadcastChannel\` API，实现同域下不同页面间的通信。\`BroadcastChannel\` 提供了 \`postMessage\` 方法发送消息，以及 \`onmessage\` 事件接收消息。HTML5 专门为跨页面通信设计的 API，创建一个「全局通信频道」，同域下所有页面可加入该频道，实现双向实时通信（类似广播电台）。\r
\r
代码示例：\r
\r
\`\`\`js\r
\r
// 页面A（发送方）\r
const channel = new BroadcastChannel('myChannel'); // 创建/加入频道\r
channel.postMessage({ type: 'chat', data: '今天吃什么？' }); // 发送消息\r
channel.close(); // 不用时关闭（可选）\r
\r
// 页面B（接收方）\r
const channel = new BroadcastChannel('myChannel'); // 加入同一频道\r
channel.onmessage = (e) => {\r
  console.log('收到广播消息：', e.data); // 接收消息\r
};\r
// 监听错误\r
channel.onerror = (err) => {\r
  console.error('频道错误：', err);\r
};\r
\r
\`\`\`\r
\r
特点：\r
- 优点：简单易用，支持双向通信，支持实时更新，无需序列化（可传对象、数组）。\r
- 缺点：兼容性一般，IE 不支持， 只支持同域。\r
- 场景：适合同域下页面间高效通信，如聊天室、实时通知等。\r
\r
### 3. ServiceWorker + postMessage （离线 + 跨页面代理，复杂场景推荐）\r
\r
原理：通过 ServiceWorker 创建一个「全局通信代理」，实现跨页面通信。ServiceWorker 是一种特殊的 Web Worker，可拦截、处理、修改页面请求，作为「全局代理」，实现跨页面通信。Service Worker 是运行在浏览器后台的「代理脚本」，独立于页面，可监听所有同域页面的消息，作为中间枢纽转发数据，支持离线通信。\r
\r
代码示例：\r
\r
\`\`\`js\r
\r
// 页面A（发送方）\r
navigator.serviceWorker.register('/sw.js').then((registration) => {\r
  registration.active.postMessage({ type: 'notify', data: 'Hello' }); // 发送消息\r
});\r
\r
// 页面B（接收方）\r
navigator.serviceWorker.register('/sw.js').then((registration) => {\r
  registration.active.onmessage = (e) => {\r
    console.log('收到 ServiceWorker 代理消息：', e.data); // 接收消息\r
  };\r
});\r
\r
// sw.js（ServiceWorker 代理脚本）\r
self.addEventListener('message', (e) => {\r
  const { type, data } = e.data;\r
  if (type === 'notify') {\r
    console.log('ServiceWorker 收到消息：', data);\r
    // 转发给所有页面\r
    self.clients.matchAll().then((clients) => {\r
      clients.forEach((client) => {\r
        client.postMessage(e.data); // 广播给所有页面\r
      });\r
    }); \r
  }\r
})\r
\r
\`\`\`\r
\r
特点：\r
- 优点：支持同域跨标签页、离线通信，可中转大量数据，适合复杂场景。\r
- 缺点：需 HTTPS 环境，兼容性有限（IE 不支持），配置稍复杂，需额外编写 ServiceWorker 代理脚本。\r
- 场景：同域、需要离线支持或复杂数据转发（如多页面状态同步、实时通知\r
\r
### 4. Cookie + 定时轮询（兼容旧浏览器）\r
\r
原理：通过定时轮询 Cookie，实现跨页面通信。Cookie 是浏览器存储数据的一种方式，同域下所有页面共享数据。通过定时轮询 Cookie，可实时获取最新数据。(可通过 domain 设置共享范围)\r
\r
代码示例：\r
\r
\`\`\`js\r
\r
// 发送方：设置Cookie（有效期1小时）\r
document.cookie = \`crossPageMsg=\${encodeURIComponent(JSON.stringify({ data: 'Hi' }))}; path=/; max-age=3600\`;\r
\r
// 接收方：定时轮询Cookie（每1秒查询一次）\r
setInterval(() => {\r
  const cookies = document.cookie.split('; ');\r
  const targetCookie = cookies.find(c => c.startsWith('crossPageMsg='));\r
  if (targetCookie) {\r
    const msg = JSON.parse(decodeURIComponent(targetCookie.split('=')[1]));\r
    console.log('收到Cookie消息：', msg);\r
    // 清除Cookie（避免重复读取）\r
    document.cookie = 'crossPageMsg=; path=/; max-age=0';\r
  }\r
}, 1000);\r
\r
\`\`\`\r
\r
特点：\r
- 优点：兼容所有浏览器（包括旧版），可跨子域名（设置 domain=.xxx.com）。\r
- 缺点：存储量小（最大 4KB），轮询消耗性能，不适合实时通信。\r
- 场景：兼容旧浏览器、少量数据传递、跨子域名通信。\r
\r
## 二、跨域跨页面通信（不同域名 / 端口）\r
\r
### 1. postMessage API（推荐）\r
\r
原理：通过 \`window.postMessage\` API，实现跨域页面通信。\`postMessage\` 方法允许不同源（跨域）的窗口之间安全地传递消息，通过监听 \`message\` 事件接收消息。HTML5 原生 API，允许不同域名、端口的页面（如父页面与 iframe、不同标签页）通过「消息发送 + 监听」实现双向通信，是跨域通信的万能方案。\r
\r
代码示例：\r
\r
\`\`\`js\r
\r
// 场景1：父页面 → 子 iframe（跨域）\r
// 父页面（http://parent.com）\r
const iframe = document.getElementById('crossDomainIframe');\r
// 发送消息：目标域名（*表示任意域名，生产环境需指定具体域名，如https://child.com）\r
iframe.contentWindow.postMessage({ type: 'auth', token: 'xxx' }, 'https://child.com');\r
\r
// 子 iframe（https://child.com）\r
window.addEventListener('message', (e) => {\r
  // 安全校验：只接收指定域名的消息（避免恶意攻击）\r
  if (e.origin !== 'http://parent.com') return;\r
  console.log('iframe收到父页面消息：', e.data);\r
  // 回复父页面\r
  e.source.postMessage('已收到token', e.origin);\r
});\r
\r
// 场景2：跨域标签页通信（需通过iframe中转）\r
// 页面A（http://a.com）：嵌入跨域iframe（http://b.com/bridge.html）\r
const iframe = document.createElement('iframe');\r
iframe.src = 'http://b.com/bridge.html';\r
iframe.style.display = 'none';\r
document.body.appendChild(iframe);\r
// 通过iframe转发消息给页面B\r
iframe.onload = () => {\r
  iframe.contentWindow.postMessage({ data: '跨域消息' }, 'http://b.com');\r
};\r
\r
// 页面B（http://b.com）：监听iframe转发的消息\r
window.addEventListener('message', (e) => {\r
  if (e.origin !== 'http://b.com') return;\r
  console.log('页面B收到跨域消息：', e.data);\r
});\r
\r
\r
// bridge.html（http://b.com/bridge.html）：中转消息\r
window.addEventListener('message', (e) => {\r
  if (e.origin !== 'http://a.com') return;\r
  // 转发给页面B\r
  window.parent.postMessage(e.data, 'http://b.com');\r
});\r
\r
\`\`\`\r
\r
特点：\r
- 优点：支持跨域、跨端口、跨协议，可传任意数据（对象、数组），API 简洁。\r
- 缺点：需手动校验 origin（否则有 XSS 风险），iframe 跨标签页需中转, ie不支持。\r
- 场景：跨域父子页面、跨域标签页、iframe 通信（如嵌入第三方组件、支付回调）。\r
\r
### 2. WebSocket（推荐）\r
\r
原理：通过 WebSocket API，实现跨域实时通信。WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议，支持实时双向通信，适合跨域实时通信。WebSocket 是 HTML5 原生 API，支持跨域通信，但需服务器支持 WebSocket 协议。\r
\r
代码示例：\r
\r
\`\`\`js\r
\r
// 1. 搭建 WebSocket 服务器（以 Node.js 为例，使用 ws 库）：\r
// server.js\r
const WebSocket = require('ws');\r
const wss = new WebSocket.Server({ port: 8080 });\r
\r
// 监听客户端连接\r
wss.on('connection', (ws) => {\r
  // 转发消息给所有连接的客户端\r
  ws.on('message', (data) => {\r
    wss.clients.forEach((client) => {\r
      if (client.readyState === WebSocket.OPEN) {\r
        client.send(data); // 广播消息\r
      }\r
    });\r
  });\r
});\r
\r
// 2. 页面端（任意域名，如 http://a.com、http://b.com）：\r
// 连接 WebSocket 服务器\r
const ws = new WebSocket('ws://localhost:8080');\r
// 发送消息\r
ws.onopen = () => {\r
  ws.send(JSON.stringify({ type: 'chat', content: '跨域实时消息' }));\r
};\r
// 接收消息\r
ws.onmessage = (e) => {\r
  console.log('收到WebSocket消息：', JSON.parse(e.data));\r
};\r
\r
\`\`\`\r
\r
特点：\r
- 优点：实时性强（毫秒级），支持跨域、跨端口、大量数据传输、双向通信、性能好。\r
- 缺点：需搭建服务器，依赖网络，断开需重连，需服务器支持 WebSocket 协议，兼容性稍差（ie不支持）。\r
- 场景：跨域实时通信（如聊天室、实时数据同步）。\r
\r
\r
### 总结\r
\r
跨页面通信是前端开发中常见的需求，根据不同场景和需求，选择合适的通信方式。同域下，推荐使用 \`localStorage\`、\`sessionStorage\`、\`BroadcastChannel\`，跨域下，推荐使用 \`postMessage\`、\`WebSocket\`。`,l=p([]);function k(e){const n=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,r=e.match(n);if(!r)return{frontmatter:{},content:e};const t=r[1],a=r[2],s={};return t.split(`
`).forEach(c=>{const i=c.indexOf(":");if(i>0){const u=c.substring(0,i).trim();let o=c.substring(i+1).trim();(o.startsWith('"')&&o.endsWith('"')||o.startsWith("'")&&o.endsWith("'"))&&(o=o.slice(1,-1)),o.startsWith("[")&&o.endsWith("]")&&(o=o.slice(1,-1).split(",").map(d=>d.trim().replace(/['"]/g,""))),s[u]=o}}),{frontmatter:s,content:a}}const y={"2025-11-04-hello-world.md":g,"2024-01-15-vue3-learning.md":S,"2024-02-01-markdown-editor.md":v,"2025-11-04-vue3-computed.md":f,"2025-11-10-js-css阻塞机制.md":h,"2025-11-13-vue图片懒加载及原理.md":b,"2025-11-25-跨页面通信.md":C};async function m(){if(l.value.length>0)return l.value;const e=[];for(const[n,r]of Object.entries(y))try{const{frontmatter:t,content:a}=k(r),s=n.replace(".md","");e.push({slug:s,filename:n,title:t.title||"无标题",date:t.date||"未知日期",tags:t.tags||[],summary:t.summary||w(a),content:a,frontmatter:t})}catch(t){console.warn(`无法加载文章: ${n}`,t)}return e.sort((n,r)=>new Date(r.date)-new Date(n.date)),l.value=e,e}async function j(e){return(await m()).find(r=>r.slug===e)}function w(e,n=150){const r=e.replace(/#{1,6}\s+/g,"").replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/```[\s\S]*?```/g,"").replace(/>\s+/g,"").replace(/[-*+]\s+/g,"").replace(/\n+/g," ").trim();return r.length>n?r.substring(0,n)+"...":r}async function V(){const e=await m(),n=new Set;return e.forEach(r=>{r.tags.forEach(t=>n.add(t))}),Array.from(n).sort()}export{V as a,j as b,m as g};
