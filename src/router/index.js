import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "simple-home" */ "../views/Home/index.vue"
      ),
  },
  {
    path: "/article/:slug",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/Article/index.vue"),
  },
  {
    path: "/anime",
    name: "anime",
    component: () =>
      import(/* webpackChunkName: "anime" */ "../views/Anime/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
