<template>
  <div class="article-page">
    <div v-if="isLoading" class="loading">
      <p>加载中...</p>
    </div>
    
    <div v-else-if="article" class="article-container">
      <!-- 文章头部 -->
      <header class="article-header">
        <h1 class="article-title">{{ article.title }}</h1>
        <div class="article-meta">
          <time class="article-date">{{ formatDate(article.date) }}</time>
          <div class="article-tags">
            <span 
              v-for="tag in article.tags" 
              :key="tag"
              class="article-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </header>
      
      <!-- 文章内容 -->
      <main class="article-content">
        <div 
          class="markdown-body"
          v-html="htmlContent"
        ></div>
      </main>
      
      <!-- 文章底部 -->
      <footer class="article-footer">
        <div class="article-actions">
          <button @click="goBack" class="back-btn">
            ← 返回首页
          </button>
          <button @click="shareArticle" class="share-btn">
            分享文章
          </button>
        </div>
      </footer>
    </div>
    
    <div v-else class="not-found">
      <h2>文章未找到</h2>
      <p>抱歉，您访问的文章不存在。</p>
      <button @click="goBack" class="back-btn">
        返回首页
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
import { getArticleBySlug } from '@/utils/articles'

const route = useRoute()
const router = useRouter()

// 响应式数据
const article = ref(null)
const isLoading = ref(true)

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
  return article.value ? marked(article.value.content) : ''
})

// 方法
const loadArticle = async () => {
  try {
    isLoading.value = true
    const slug = route.params.slug
    article.value = await getArticleBySlug(slug)
  } catch (error) {
    console.error('加载文章失败:', error)
  } finally {
    isLoading.value = false
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const goBack = () => {
  router.push('/')
}

const shareArticle = () => {
  if (navigator.share && article.value) {
    navigator.share({
      title: article.value.title,
      text: article.value.summary,
      url: window.location.href
    })
  } else {
    // 复制链接到剪贴板
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('链接已复制到剪贴板！')
    })
  }
}

// 生命周期
onMounted(() => {
  loadArticle()
})

// 监听路由变化
import { watch } from 'vue'
watch(() => route.params.slug, () => {
  if (route.params.slug) {
    loadArticle()
  }
})
</script>

<style scoped>
.article-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.loading,
.not-found {
  text-align: center;
  padding: 60px 20px;
}

.loading p,
.not-found p {
  color: #6c757d;
  font-size: 18px;
}

.not-found h2 {
  color: #333;
  margin-bottom: 16px;
}

.article-container {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.article-header {
  padding: 40px 40px 20px;
  border-bottom: 1px solid #e1e5e9;
}

.article-title {
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.article-date {
  color: #6c757d;
  font-size: 16px;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.article-tag {
  padding: 6px 12px;
  background: #f8f9fa;
  border-radius: 16px;
  font-size: 14px;
  color: #495057;
}

.article-content {
  padding: 40px;
}

.article-footer {
  padding: 20px 40px 40px;
  border-top: 1px solid #e1e5e9;
}

.article-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-btn,
.share-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn {
  background: #f8f9fa;
  color: #495057;
}

.back-btn:hover {
  background: #e9ecef;
}

.share-btn {
  background: #007bff;
  color: white;
}

.share-btn:hover {
  background: #0056b3;
}

/* Markdown 内容样式 */
.markdown-body {
  font-size: 16px;
  line-height: 1.7;
  color: #333;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4),
.markdown-body :deep(h5),
.markdown-body :deep(h6) {
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
  color: #333;
}

.markdown-body :deep(h1) {
  font-size: 28px;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
}

.markdown-body :deep(h2) {
  font-size: 24px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.markdown-body :deep(h3) {
  font-size: 20px;
}

.markdown-body :deep(h4) {
  font-size: 18px;
}

.markdown-body :deep(p) {
  margin-bottom: 16px;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 24px;
  margin-bottom: 16px;
}

.markdown-body :deep(li) {
  margin-bottom: 8px;
}

.markdown-body :deep(blockquote) {
  border-left: 4px solid #dfe2e5;
  padding-left: 16px;
  margin: 16px 0;
  color: #6a737d;
  font-style: italic;
}

.markdown-body :deep(code) {
  background: #f6f8fa;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.markdown-body :deep(pre) {
  background: #f6f8fa;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 16px 0;
  border: 1px solid #e1e4e8;
}

.markdown-body :deep(pre code) {
  background: none;
  padding: 0;
}

.markdown-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  border: 1px solid #dfe2e5;
  padding: 8px 12px;
  text-align: left;
}

.markdown-body :deep(th) {
  background: #f6f8fa;
  font-weight: 600;
}

.markdown-body :deep(a) {
  color: #0366d6;
  text-decoration: none;
}

.markdown-body :deep(a:hover) {
  text-decoration: underline;
}

.markdown-body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 16px 0;
}

.markdown-body :deep(hr) {
  border: none;
  border-top: 1px solid #e1e4e8;
  margin: 24px 0;
}

@media (max-width: 768px) {
  .article-page {
    padding: 16px;
  }
  
  .article-header,
  .article-content,
  .article-footer {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .article-title {
    font-size: 24px;
  }
  
  .article-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .article-actions {
    flex-direction: column;
    gap: 12px;
  }
  
  .back-btn,
  .share-btn {
    width: 100%;
  }
}
</style>