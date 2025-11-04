<template>
  <div class="profile-card">
    <!-- 背景图片 -->
    <div class="profile-bg">
      <img src="https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302" alt="背景" />
    </div>
    
    <!-- 头像 -->
    <div class="avatar-container">
      <img 
        src="https://img.xjh.me/random_img.php?type=avatar&ctype=acg&return=302" 
        alt="头像" 
        class="avatar"
      />
    </div>
    
    <!-- 个人信息 -->
    <div class="profile-content">
      <h2 class="profile-name">{{ profileData.name }}</h2>
      <p class="profile-title">{{ profileData.title }}</p>
      <div class="profile-quote">
        <p>{{ profileData.quote }}</p>
        <span class="quote-author">—— {{ profileData.quoteAuthor }}</span>
      </div>
      
      <!-- 统计信息 -->
      <div class="profile-stats">
        <div class="stat-item">
          <span class="stat-number">{{ articleCount }}</span>
          <span class="stat-label">文章</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ tagCount }}</span>
          <span class="stat-label">标签</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ viewCount }}</span>
          <span class="stat-label">访问</span>
        </div>
      </div>
      
      <!-- 社交链接 -->
      <div class="social-links">
        <a 
          v-for="link in profileData.socialLinks" 
          :key="link.name"
          :href="link.url" 
          target="_blank"
          class="social-link"
          :title="link.name"
        >
          {{ link.icon }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 个人资料数据
const profileData = ref({
  name: '今日碎碎念',
  title: '前端开发者 · 技术博主',
  quote: '生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。',
  quoteAuthor: '韩愈《师说》',
  socialLinks: [
    { name: 'GitHub', icon: '🐱', url: 'https://github.com' },
    { name: '微博', icon: '📱', url: 'https://weibo.com' },
    { name: '邮箱', icon: '📧', url: 'mailto:example@email.com' },
    { name: 'RSS', icon: '📡', url: '/rss.xml' }
  ]
})

// 接收父组件传递的统计数据
const props = defineProps({
  articleCount: {
    type: Number,
    default: 0
  },
  tagCount: {
    type: Number,
    default: 0
  }
})

// 模拟访问量
const viewCount = ref(1024)
</script>

<style scoped>
.profile-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
}

.profile-bg {
  height: 120px;
  overflow: hidden;
  position: relative;
}

.profile-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
}

.avatar-container {
  position: relative;
  text-align: center;
  margin-top: -40px;
  margin-bottom: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.9);
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.profile-content {
  padding: 0 24px 24px;
  text-align: center;
}

.profile-name {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
}

.profile-title {
  font-size: 14px;
  color: #666;
  margin: 0 0 20px 0;
}

.profile-quote {
  background: rgba(0, 123, 255, 0.05);
  border-left: 4px solid #007bff;
  padding: 16px;
  margin: 20px 0;
  border-radius: 0 8px 8px 0;
  text-align: left;
}

.profile-quote p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 8px 0;
  font-style: italic;
}

.quote-author {
  font-size: 12px;
  color: #888;
  float: right;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  margin: 24px 0;
  padding: 16px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 20px;
  font-weight: 600;
  color: #007bff;
}

.stat-label {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(0, 123, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #007bff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

@media (max-width: 768px) {
  .profile-card {
    position: static;
    margin-bottom: 20px;
  }
  
  .profile-content {
    padding: 0 16px 16px;
  }
  
  .profile-quote {
    margin: 16px 0;
    padding: 12px;
  }
  
  .social-links {
    gap: 12px;
  }
  
  .social-link {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
}
</style>