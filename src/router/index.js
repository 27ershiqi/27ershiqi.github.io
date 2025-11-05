import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "simple-home" */ "../views/SimpleHome/index.vue"),
  },
  {
    path: "/complex",
    name: "complex-home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/Test/index.vue"),
  },
  {
    path: "/write",
    name: "write",
    component: () =>
      import(/* webpackChunkName: "write" */ "../views/Write/index.vue"),
  },
  {
    path: "/article/:slug",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/Article/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
