// 文章管理工具
import { ref } from "vue";

// 文章列表缓存
const articlesCache = ref([]);

// 解析 Markdown 文件的 frontmatter
export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return {
      frontmatter: {},
      content: content,
    };
  }

  const frontmatterText = match[1];
  const markdownContent = match[2];

  // 简单解析 YAML frontmatter
  const frontmatter = {};
  frontmatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // 移除引号
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      // 处理数组（简单实现）
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/['"]/g, ""));
      }

      frontmatter[key] = value;
    }
  });

  return {
    frontmatter,
    content: markdownContent,
  };
}

// 静态导入所有文章
import article1 from "../articles/2025-11-04-hello-world.md?raw";
import article2 from "../articles/2024-01-15-vue3-learning.md?raw";
import article3 from "../articles/2024-02-01-markdown-editor.md?raw";
import article4 from "../articles/2025-11-04-vue3-computed.md?raw";
import article5 from "../articles/2025-11-10-js-css阻塞机制.md?raw";

// 文章映射
const articleModules = {
  "2025-11-04-hello-world.md": article1,
  "2024-01-15-vue3-learning.md": article2,
  "2024-02-01-markdown-editor.md": article3,
  "2025-11-04-vue3-computed.md": article4,
  "2025-11-10-js-css阻塞机制.md": article5,
};

// 获取所有文章
export async function getAllArticles() {
  if (articlesCache.value.length > 0) {
    return articlesCache.value;
  }

  const articles = [];

  for (const [filename, content] of Object.entries(articleModules)) {
    try {
      const { frontmatter, content: markdownContent } =
        parseFrontmatter(content);

      // 提取文件名中的日期和 slug
      const slug = filename.replace(".md", "");

      articles.push({
        slug,
        filename,
        title: frontmatter.title || "无标题",
        date: frontmatter.date || "未知日期",
        tags: frontmatter.tags || [],
        summary: frontmatter.summary || extractSummary(markdownContent),
        content: markdownContent,
        frontmatter,
      });
    } catch (error) {
      console.warn(`无法加载文章: ${filename}`, error);
    }
  }

  // 按日期排序（最新的在前面）
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  articlesCache.value = articles;
  return articles;
}

// 根据 slug 获取单篇文章
export async function getArticleBySlug(slug) {
  const articles = await getAllArticles();
  return articles.find((article) => article.slug === slug);
}

// 提取摘要
function extractSummary(content, maxLength = 150) {
  // 移除 Markdown 语法
  const plainText = content
    .replace(/#{1,6}\s+/g, "") // 标题
    .replace(/\*\*(.*?)\*\*/g, "$1") // 粗体
    .replace(/\*(.*?)\*/g, "$1") // 斜体
    .replace(/`(.*?)`/g, "$1") // 行内代码
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // 链接
    .replace(/```[\s\S]*?```/g, "") // 代码块
    .replace(/>\s+/g, "") // 引用
    .replace(/[-*+]\s+/g, "") // 列表
    .replace(/\n+/g, " ") // 换行
    .trim();

  return plainText.length > maxLength
    ? plainText.substring(0, maxLength) + "..."
    : plainText;
}

// 按标签筛选文章
export async function getArticlesByTag(tag) {
  const articles = await getAllArticles();
  return articles.filter((article) => article.tags.includes(tag));
}

// 获取所有标签
export async function getAllTags() {
  const articles = await getAllArticles();
  const tagSet = new Set();

  articles.forEach((article) => {
    article.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

// 搜索文章
export async function searchArticles(query) {
  const articles = await getAllArticles();
  const lowercaseQuery = query.toLowerCase();

  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.summary.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
