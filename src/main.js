import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import './index.css'
import './assets/highlight.css'

createApp(App).use(router).mount('#app')
