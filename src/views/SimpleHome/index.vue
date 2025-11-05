<template>
  <div style="padding: 20px; background: rgba(255, 255, 255, 0.9); margin: 20px; border-radius: 10px;">
    <h1>🎉 Vue 应用正常工作！</h1>
    <p>当前时间: {{ currentTime }}</p>
    <p>这是一个简化的首页组件，用于测试 Vue 应用是否正常运行。</p>
    
    <div style="margin: 20px 0;">
      <h3>测试数据:</h3>
      <ul>
        <li>计数器: {{ counter }}</li>
        <li>输入内容: {{ inputValue }}</li>
      </ul>
    </div>
    
    <div style="margin: 20px 0;">
      <button @click="counter++" style="margin-right: 10px; padding: 10px;">点击 +1</button>
      <input v-model="inputValue" placeholder="输入测试文字" style="padding: 10px;">
    </div>
    
    <div style="margin: 20px 0;">
      <h3>文章列表测试:</h3>
      <div v-for="article in testArticles" :key="article.id" 
           style="background: #f0f0f0; padding: 10px; margin: 5px 0; border-radius: 5px;">
        <strong>{{ article.title }}</strong>
        <p>{{ article.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentTime = ref('')
const counter = ref(0)
const inputValue = ref('')

const testArticles = ref([
  {
    id: 1,
    title: '测试文章 1',
    summary: '这是第一篇测试文章的摘要'
  },
  {
    id: 2,
    title: '测试文章 2', 
    summary: '这是第二篇测试文章的摘要'
  }
])

const updateTime = () => {
  currentTime.value = new Date().toLocaleString()
}

onMounted(() => {
  console.log('✅ SimpleHome 组件挂载成功')
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<style scoped>
/* 简单的样式 */
</style>