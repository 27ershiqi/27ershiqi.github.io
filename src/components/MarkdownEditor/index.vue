<template>
  <div class="markdown-editor">
    <div class="editor-header">
      <h3>Markdown 编辑器</h3>
      <div class="toolbar">
        <button @click="insertText('**', '**')" title="加粗">B</button>
        <button @click="insertText('*', '*')" title="斜体">I</button>
        <button @click="insertText('# ', '')" title="标题">H</button>
        <button @click="insertText('- ', '')" title="列表">•</button>
        <button @click="insertText('`', '`')" title="代码">{ }</button>
        <button @click="insertText('> ', '')" title="引用">"</button>
        <button @click="insertText('[', '](url)')" title="链接">🔗</button>
      </div>
    </div>
    
    <div class="editor-container">
      <div class="editor-pane">
        <h4>编辑</h4>
        <textarea
          ref="textareaRef"
          v-model="markdownText"
          @input="handleInput"
          @scroll="syncScroll"
          placeholder="在这里输入 Markdown 内容..."
          class="markdown-input"
        ></textarea>
      </div>
      
      <div class="preview-pane">
        <h4>预览</h4>
        <div 
          ref="previewRef"
          class="markdown-preview"
          v-html="htmlContent"
        ></div>
      </div>
    </div>
    
    <div class="editor-footer">
      <button @click="saveContent" class="save-btn">保存</button>
      <button @click="clearContent" class="clear-btn">清空</button>
      <span class="word-count">字数: {{ wordCount }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import html from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import python from 'highlight.js/lib/languages/python'
import java from 'highlight.js/lib/languages/java'

// 注册需要的语言
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', html)
hljs.registerLanguage('xml', html)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('python', python)
hljs.registerLanguage('java', java)

// 响应式数据
const markdownText = ref('')
const textareaRef = ref(null)
const previewRef = ref(null)

// 配置 marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) {}
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true
})

// 计算属性
const htmlContent = computed(() => {
  return marked(markdownText.value)
})

const wordCount = computed(() => {
  return markdownText.value.length
})

// 方法
const handleInput = () => {
  // 可以在这里添加自动保存逻辑
}

const syncScroll = () => {
  if (textareaRef.value && previewRef.value) {
    const textarea = textareaRef.value
    const preview = previewRef.value
    const scrollPercentage = textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight)
    preview.scrollTop = scrollPercentage * (preview.scrollHeight - preview.clientHeight)
  }
}

const insertText = (before, after) => {
  const textarea = textareaRef.value
  if (!textarea) return
  
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = markdownText.value.substring(start, end)
  
  const newText = before + selectedText + after
  markdownText.value = markdownText.value.substring(0, start) + newText + markdownText.value.substring(end)
  
  nextTick(() => {
    textarea.focus()
    textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
  })
}

const saveContent = () => {
  // 这里可以调用 API 保存内容
  const content = {
    markdown: markdownText.value,
    html: htmlContent.value,
    timestamp: new Date().toISOString()
  }
  
  // 暂时保存到 localStorage
  localStorage.setItem('markdown-content', JSON.stringify(content))
  alert('内容已保存！')
}

const clearContent = () => {
  if (confirm('确定要清空所有内容吗？')) {
    markdownText.value = ''
  }
}

const loadContent = () => {
  const saved = localStorage.getItem('markdown-content')
  if (saved) {
    const content = JSON.parse(saved)
    markdownText.value = content.markdown || ''
  }
}

// 生命周期
onMounted(() => {
  loadContent()
})

// 暴露给父组件的方法
defineExpose({
  getContent: () => ({
    markdown: markdownText.value,
    html: htmlContent.value
  }),
  setContent: (content) => {
    markdownText.value = content
  }
})
</script>

<style scoped>
.markdown-editor {
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.editor-header {
  background: #f5f5f5;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.editor-header h3 {
  margin: 0;
  color: #333;
}

.toolbar {
  display: flex;
  gap: 5px;
}

.toolbar button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
}

.toolbar button:hover {
  background: #e9e9e9;
}

.editor-container {
  display: flex;
  height: 500px;
}

.editor-pane,
.preview-pane {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.editor-pane {
  border-right: 1px solid #ddd;
}

.editor-pane h4,
.preview-pane h4 {
  margin: 0;
  padding: 10px 15px;
  background: #f9f9f9;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #666;
}

.markdown-input {
  flex: 1;
  border: none;
  padding: 15px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  outline: none;
}

.markdown-preview {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  line-height: 1.6;
}

.editor-footer {
  background: #f5f5f5;
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.save-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.save-btn:hover {
  background: #0056b3;
}

.clear-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.clear-btn:hover {
  background: #c82333;
}

.word-count {
  color: #666;
  font-size: 14px;
}

/* Markdown 预览样式 */
.markdown-preview :deep(h1),
.markdown-preview :deep(h2),
.markdown-preview :deep(h3),
.markdown-preview :deep(h4),
.markdown-preview :deep(h5),
.markdown-preview :deep(h6) {
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-preview :deep(h1) {
  font-size: 2em;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.markdown-preview :deep(h2) {
  font-size: 1.5em;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.markdown-preview :deep(p) {
  margin-bottom: 16px;
}

.markdown-preview :deep(code) {
  background: #f6f8fa;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

.markdown-preview :deep(pre) {
  background: #f6f8fa;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
  margin-bottom: 16px;
}

.markdown-preview :deep(blockquote) {
  border-left: 4px solid #dfe2e5;
  padding-left: 16px;
  margin-left: 0;
  color: #6a737d;
}

.markdown-preview :deep(ul),
.markdown-preview :deep(ol) {
  padding-left: 30px;
  margin-bottom: 16px;
}

.markdown-preview :deep(li) {
  margin-bottom: 4px;
}

.markdown-preview :deep(a) {
  color: #0366d6;
  text-decoration: none;
}

.markdown-preview :deep(a:hover) {
  text-decoration: underline;
}
</style>