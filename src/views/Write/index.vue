<template>
  <div class="write-page">
    <div class="page-header">
      <h2>写作中心</h2>
      <p>用 Markdown 记录你的想法和灵感</p>
    </div>
    
    <MarkdownEditor ref="editorRef" />
    
    <!-- 文章列表 -->
    <div class="articles-section">
      <h3>我的文章</h3>
      <div class="articles-list">
        <div 
          v-for="article in articles" 
          :key="article.id"
          class="article-item"
          @click="loadArticle(article)"
        >
          <h4>{{ article.title || '无标题' }}</h4>
          <p>{{ article.preview }}</p>
          <div class="article-meta">
            <span>{{ formatDate(article.timestamp) }}</span>
            <span>{{ article.wordCount }} 字</span>
            <button @click.stop="deleteArticle(article.id)" class="delete-btn">删除</button>
          </div>
        </div>
        
        <div v-if="articles.length === 0" class="empty-state">
          <p>还没有文章，开始写作吧！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MarkdownEditor from '@/components/MarkdownEditor/index.vue'

const editorRef = ref(null)
const articles = ref([])

// 加载文章列表
const loadArticles = () => {
  const saved = localStorage.getItem('articles-list')
  if (saved) {
    articles.value = JSON.parse(saved)
  }
}

// 保存文章列表
const saveArticles = () => {
  localStorage.setItem('articles-list', JSON.stringify(articles.value))
}

// 加载文章到编辑器
const loadArticle = (article) => {
  if (editorRef.value) {
    editorRef.value.setContent(article.markdown)
  }
}

// 删除文章
const deleteArticle = (id) => {
  if (confirm('确定要删除这篇文章吗？')) {
    articles.value = articles.value.filter(article => article.id !== id)
    saveArticles()
  }
}

// 格式化日期
const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleDateString('zh-CN') + ' ' + date.toLocaleTimeString('zh-CN', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
}

// 提取文章标题（从第一行或第一个 # 标题）
const extractTitle = (markdown) => {
  const lines = markdown.split('\n')
  for (let line of lines) {
    line = line.trim()
    if (line.startsWith('# ')) {
      return line.substring(2).trim()
    }
    if (line && !line.startsWith('#')) {
      return line.substring(0, 50) + (line.length > 50 ? '...' : '')
    }
  }
  return '无标题'
}

// 提取预览文本
const extractPreview = (markdown) => {
  const text = markdown.replace(/[#*`>\-\[\]]/g, '').trim()
  return text.substring(0, 100) + (text.length > 100 ? '...' : '')
}

// 监听编辑器保存事件（可以通过事件总线或其他方式实现）
const handleSave = () => {
  if (editorRef.value) {
    const content = editorRef.value.getContent()
    if (content.markdown.trim()) {
      const article = {
        id: Date.now(),
        title: extractTitle(content.markdown),
        preview: extractPreview(content.markdown),
        markdown: content.markdown,
        html: content.html,
        wordCount: content.markdown.length,
        timestamp: new Date().toISOString()
      }
      
      articles.value.unshift(article)
      saveArticles()
    }
  }
}

onMounted(() => {
  loadArticles()
})
</script>

<style scoped>
.write-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h2 {
  color: #333;
  margin-bottom: 10px;
}

.page-header p {
  color: #666;
  margin: 0;
}

.articles-section {
  margin-top: 40px;
}

.articles-section h3 {
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

.articles-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.article-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fff;
}

.article-item:hover {
  border-color: #007bff;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);
}

.article-item h4 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 16px;
}

.article-item p {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.4;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.delete-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
}

.delete-btn:hover {
  background: #c82333;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: #999;
}

.empty-state p {
  margin: 0;
  font-size: 16px;
}
</style>