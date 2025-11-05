var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { r as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, b as renderList, u as useRouter, d as computed, e as onMounted, f as createVNode, w as withDirectives, v as vModelText, g as createCommentVNode, n as normalizeClass } from "./main-fca91385.js";
import { _ as _export_sfc, g as getAllArticles, a as getAllTags } from "./_plugin-vue_export-helper-fb4e4c31.js";
const index_vue_vue_type_style_index_0_scoped_ce510269_lang = "";
const _hoisted_1$1 = { class: "profile-card" };
const _hoisted_2$1 = { class: "profile-content" };
const _hoisted_3$1 = { class: "profile-name" };
const _hoisted_4$1 = { class: "profile-title" };
const _hoisted_5$1 = { class: "profile-quote" };
const _hoisted_6$1 = { class: "quote-author" };
const _hoisted_7$1 = { class: "profile-stats" };
const _hoisted_8$1 = { class: "stat-item" };
const _hoisted_9$1 = { class: "stat-number" };
const _hoisted_10$1 = { class: "stat-item" };
const _hoisted_11$1 = { class: "stat-number" };
const _hoisted_12$1 = { class: "stat-item" };
const _hoisted_13$1 = { class: "stat-number" };
const _hoisted_14$1 = { class: "social-links" };
const _hoisted_15$1 = ["href", "title"];
const _sfc_main$1 = {
  __name: "index",
  props: {
    articleCount: {
      type: Number,
      default: 0
    },
    tagCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const profileData = ref({
      name: "今日碎碎念",
      title: "前端开发者 · 技术博主",
      quote: "生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。",
      quoteAuthor: "韩愈《师说》",
      socialLinks: [
        { name: "GitHub", icon: "🐱", url: "https://github.com" },
        { name: "微博", icon: "📱", url: "https://weibo.com" },
        { name: "邮箱", icon: "📧", url: "mailto:example@email.com" },
        { name: "RSS", icon: "📡", url: "/rss.xml" }
      ]
    });
    const viewCount = ref(1024);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "profile-bg" }, [
          createBaseVNode("img", {
            src: "https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302",
            alt: "背景"
          })
        ], -1)),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "avatar-container" }, [
          createBaseVNode("img", {
            src: "https://img.xjh.me/random_img.php?type=avatar&ctype=acg&return=302",
            alt: "头像",
            class: "avatar"
          })
        ], -1)),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("h2", _hoisted_3$1, toDisplayString(profileData.value.name), 1),
          createBaseVNode("p", _hoisted_4$1, toDisplayString(profileData.value.title), 1),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("p", null, toDisplayString(profileData.value.quote), 1),
            createBaseVNode("span", _hoisted_6$1, "—— " + toDisplayString(profileData.value.quoteAuthor), 1)
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            createBaseVNode("div", _hoisted_8$1, [
              createBaseVNode("span", _hoisted_9$1, toDisplayString(__props.articleCount), 1),
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "stat-label" }, "文章", -1))
            ]),
            createBaseVNode("div", _hoisted_10$1, [
              createBaseVNode("span", _hoisted_11$1, toDisplayString(__props.tagCount), 1),
              _cache[1] || (_cache[1] = createBaseVNode("span", { class: "stat-label" }, "标签", -1))
            ]),
            createBaseVNode("div", _hoisted_12$1, [
              createBaseVNode("span", _hoisted_13$1, toDisplayString(viewCount.value), 1),
              _cache[2] || (_cache[2] = createBaseVNode("span", { class: "stat-label" }, "访问", -1))
            ])
          ]),
          createBaseVNode("div", _hoisted_14$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(profileData.value.socialLinks, (link) => {
              return openBlock(), createElementBlock("a", {
                key: link.name,
                href: link.url,
                target: "_blank",
                class: "social-link",
                title: link.name
              }, toDisplayString(link.icon), 9, _hoisted_15$1);
            }), 128))
          ])
        ])
      ]);
    };
  }
};
const ProfileCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ce510269"]]);
const index_vue_vue_type_style_index_0_scoped_f4f9aee3_lang = "";
const _hoisted_1 = { class: "home-page" };
const _hoisted_2 = { class: "home-container" };
const _hoisted_3 = { class: "sidebar" };
const _hoisted_4 = { class: "main-content" };
const _hoisted_5 = { class: "search-section" };
const _hoisted_6 = { class: "search-bar" };
const _hoisted_7 = { class: "tags-filter" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "articles-section" };
const _hoisted_10 = { class: "articles-list" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "article-header" };
const _hoisted_13 = { class: "article-title" };
const _hoisted_14 = { class: "article-date" };
const _hoisted_15 = { class: "article-summary" };
const _hoisted_16 = { class: "article-footer" };
const _hoisted_17 = { class: "article-tags" };
const _hoisted_18 = {
  key: 0,
  class: "empty-state"
};
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const router = useRouter();
    const articles = ref([]);
    const allTags = ref([]);
    const searchQuery = ref("");
    const selectedTag = ref("");
    const isLoading = ref(true);
    const displayedArticles = computed(() => {
      if (searchQuery.value) {
        return articles.value.filter(
          (article) => article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || article.summary.toLowerCase().includes(searchQuery.value.toLowerCase()) || article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
        );
      }
      if (selectedTag.value) {
        return articles.value.filter(
          (article) => article.tags.includes(selectedTag.value)
        );
      }
      return articles.value;
    });
    const loadArticles = () => __async(this, null, function* () {
      try {
        isLoading.value = true;
        articles.value = yield getAllArticles();
        allTags.value = yield getAllTags();
      } catch (error) {
        console.error("加载文章失败:", error);
      } finally {
        isLoading.value = false;
      }
    });
    const handleSearch = () => __async(this, null, function* () {
      if (selectedTag.value) {
        selectedTag.value = "";
      }
    });
    const filterByTag = (tag) => {
      selectedTag.value = selectedTag.value === tag ? "" : tag;
      searchQuery.value = "";
    };
    const clearFilter = () => {
      selectedTag.value = "";
      searchQuery.value = "";
    };
    const goToArticle = (slug) => {
      router.push(`/article/${slug}`);
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    onMounted(() => {
      loadArticles();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("aside", _hoisted_3, [
            createVNode(ProfileCard, {
              "article-count": articles.value.length,
              "tag-count": allTags.value.length
            }, null, 8, ["article-count", "tag-count"])
          ]),
          createBaseVNode("main", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                  onInput: handleSearch,
                  placeholder: "搜索文章...",
                  class: "search-input"
                }, null, 544), [
                  [vModelText, searchQuery.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(allTags.value, (tag) => {
                  return openBlock(), createElementBlock("span", {
                    key: tag,
                    onClick: ($event) => filterByTag(tag),
                    class: normalizeClass(["tag", { active: selectedTag.value === tag }])
                  }, toDisplayString(tag), 11, _hoisted_8);
                }), 128)),
                selectedTag.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  onClick: clearFilter,
                  class: "tag clear-tag"
                }, " 清除筛选 ")) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[2] || (_cache[2] = createBaseVNode("h2", null, "最新文章", -1)),
              createBaseVNode("div", _hoisted_10, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(displayedArticles.value, (article) => {
                  return openBlock(), createElementBlock("article", {
                    key: article.slug,
                    class: "article-card",
                    onClick: ($event) => goToArticle(article.slug)
                  }, [
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("h3", _hoisted_13, toDisplayString(article.title), 1),
                      createBaseVNode("time", _hoisted_14, toDisplayString(formatDate(article.date)), 1)
                    ]),
                    createBaseVNode("p", _hoisted_15, toDisplayString(article.summary), 1),
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(article.tags, (tag) => {
                          return openBlock(), createElementBlock("span", {
                            key: tag,
                            class: "article-tag"
                          }, toDisplayString(tag), 1);
                        }), 128))
                      ]),
                      _cache[1] || (_cache[1] = createBaseVNode("span", { class: "read-more" }, "阅读更多 →", -1))
                    ])
                  ], 8, _hoisted_11);
                }), 128))
              ]),
              displayedArticles.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_18, [
                createBaseVNode("p", null, toDisplayString(searchQuery.value ? "没有找到匹配的文章" : "暂无文章"), 1)
              ])) : createCommentVNode("", true)
            ])
          ])
        ])
      ]);
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4f9aee3"]]);
export {
  index as default
};
//# sourceMappingURL=index-b8e33085.js.map
