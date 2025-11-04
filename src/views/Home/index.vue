<template>
  <div class="home-page">
    <div class="home-container">
      <!-- 左侧个人简介 -->
      <aside class="sidebar">
        <ProfileCard 
          :article-count="articles.length"
          :tag-count="allTags.length"
        />
      </aside>
      
      <!-- 右侧内容区域 -->
      <main class="main-content">
        <!-- 搜索和筛选 -->
        <div class="search-section">
          <div class="search-bar">
            <input 
              v-model="searchQuery" 
              @input="handleSearch"
              placeholder="搜索文章..." 
              class="search-input"
            />
          </div>
          <div class="tags-filter">
            <span 
              v-for="tag in allTags" 
              :key="tag"
              @click="filterByTag(tag)"
              :class="['tag', { active: selectedTag === tag }]"
            >
              {{ tag }}
            </span>
            <span 
              v-if="selectedTag"
              @click="clearFilter"
              class="tag clear-tag"
            >
              清除筛选
            </span>
          </div>
        </div>

        <!-- 文章列表 -->
        <div class="articles-section">
          <h2>最新文章</h2>
          <div class="articles-list">
            <article 
              v-for="article in displayedArticles" 
              :key="article.slug"
              class="article-card"
              @click="goToArticle(article.slug)"
            >
              <div class="article-header">
                <h3 class="article-title">{{ article.title }}</h3>
                <time class="article-date">{{ formatDate(article.date) }}</time>
              </div>
              
              <p class="article-summary">{{ article.summary }}</p>
              
              <div class="article-footer">
                <div class="article-tags">
                  <span 
                    v-for="tag in article.tags" 
                    :key="tag"
                    class="article-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
                <span class="read-more">阅读更多 →</span>
              </div>
            </article>
          </div>
          
          <div v-if="displayedArticles.length === 0" class="empty-state">
            <p>{{ searchQuery ? '没有找到匹配的文章' : '暂无文章' }}</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAllArticles, getAllTags, searchArticles, getArticlesByTag } from '@/utils/articles'
import ProfileCard from '@/components/ProfileCard/index.vue'

const router = useRouter()

// 响应式数据
const articles = ref([])
const allTags = ref([])
const searchQuery = ref('')
const selectedTag = ref('')
const isLoading = ref(true)

// 计算属性
const displayedArticles = computed(() => {
  if (searchQuery.value) {
    return articles.value.filter(article => 
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  }
  
  if (selectedTag.value) {
    return articles.value.filter(article => 
      article.tags.includes(selectedTag.value)
    )
  }
  
  return articles.value
})

// 方法
const loadArticles = async () => {
  try {
    isLoading.value = true
    articles.value = await getAllArticles()
    allTags.value = await getAllTags()
  } catch (error) {
    console.error('加载文章失败:', error)
  } finally {
    isLoading.value = false
  }
}

const handleSearch = async () => {
  if (selectedTag.value) {
    selectedTag.value = ''
  }
}

const filterByTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? '' : tag
  searchQuery.value = ''
}

const clearFilter = () => {
  selectedTag.value = ''
  searchQuery.value = ''
}

const goToArticle = (slug) => {
  router.push(`/article/${slug}`)
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 生命周期
onMounted(() => {
  loadArticles()
})
</script>

<style scoped>
.home-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.home-container {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;
  align-items: start;
}

.sidebar {
  position: relative;
}

.main-content {
  min-height: 100vh;
}

.search-section {
  margin-bottom: 30px;
}

.search-bar {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  background: rgba(255, 255, 255, 0.95);
}

.tags-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 6px 12px;
  background: rgba(248, 249, 250, 0.9);
  border: 1px solid #dee2e6;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.tag:hover {
  background: rgba(233, 236, 239, 0.9);
}

.tag.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.clear-tag {
  background: #dc3545;
  color: white;
  border-color: #dc3545;
}

.clear-tag:hover {
  background: #c82333;
}

.articles-section h2 {
  color: #333;
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 600;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(225, 229, 233, 0.6);
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #007bff;
  background: rgba(255, 255, 255, 0.95);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.article-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  line-height: 1.3;
  flex: 1;
  margin-right: 12px;
}

.article-date {
  font-size: 14px;
  color: #6c757d;
  white-space: nowrap;
}

.article-summary {
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px 0;
  font-size: 15px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.article-tag {
  padding: 4px 8px;
  background: rgba(248, 249, 250, 0.8);
  border-radius: 12px;
  font-size: 12px;
  color: #495057;
}

.read-more {
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #6c757d;
}

.empty-state p {
  margin: 0;
  font-size: 18px;
}

@media (max-width: 1024px) {
  .home-container {
    grid-template-columns: 280px 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .home-page {
    padding: 16px;
  }
  
  .home-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .sidebar {
    order: 2;
  }
  
  .main-content {
    order: 1;
    min-height: auto;
  }
  
  .article-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .article-title {
    margin-right: 0;
    margin-bottom: 8px;
  }
}
</style>