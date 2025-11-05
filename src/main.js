import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import './index.css'
import './assets/highlight.css'

console.log('开始初始化 Vue 应用...')

try {
  const app = createApp(App)
  console.log('Vue 应用创建成功')
  
  app.use(router)
  console.log('路由配置成功')
  
  app.mount('#app')
  console.log('应用挂载成功')
} catch (error) {
  console.error('应用初始化失败:', error)
}
