import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
  },
  {
    path: '/write',
    name: 'write',
    component: () => import(/* webpackChunkName: "write" */ '../views/Write/index.vue')
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ '../views/Article/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router