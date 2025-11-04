---
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

```javascript
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
```

### 2. 实时预览

使用 Vue 3 的响应式系统，当 Markdown 内容变化时自动更新预览：

```vue
<template>
  <div class="editor-container">
    <textarea v-model="markdownText" />
    <div v-html="htmlContent" />
  </div>
</template>
```

### 3. 滚动同步

实现编辑区和预览区的同步滚动：

```javascript
const syncScroll = () => {
  const textarea = textareaRef.value
  const preview = previewRef.value
  const scrollPercentage = textarea.scrollTop / 
    (textarea.scrollHeight - textarea.clientHeight)
  preview.scrollTop = scrollPercentage * 
    (preview.scrollHeight - preview.clientHeight)
}
```

## 遇到的挑战

### 1. 性能优化

当文档很长时，实时预览可能会卡顿。解决方案是使用防抖：

```javascript
import { debounce } from 'lodash-es'

const debouncedUpdate = debounce(() => {
  // 更新预览
}, 300)
```

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

欢迎大家试用和贡献代码！ 📝