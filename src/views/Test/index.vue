<template>
  <div class="test-page">
    <h1>测试页面</h1>
    <p>如果你能看到这个页面，说明 Vue 应用正常工作</p>
    <div>
      <h2>基本信息</h2>
      <ul>
        <li>Vue 版本: {{ vueVersion }}</li>
        <li>当前时间: {{ currentTime }}</li>
        <li>路由路径: {{ $route.path }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { version } from 'vue'

const vueVersion = ref(version)
const currentTime = ref('')

const updateTime = () => {
  currentTime.value = new Date().toLocaleString()
}

onMounted(() => {
  console.log('测试组件挂载成功')
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<style scoped>
.test-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin-top: 20px;
}

h1 {
  color: #333;
  text-align: center;
}

h2 {
  color: #666;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
</style>