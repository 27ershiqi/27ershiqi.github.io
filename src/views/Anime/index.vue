<template>
  <div class="anime-gallery">
    <div class="header">
      <h1>动漫图片</h1>
      <div class="categories">
        <button
          v-for="cat in categories"
          :key="cat.id"
          :class="['category-btn', { active: currentCategory === cat.id }]"
          @click="currentCategory = cat.id"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>

    <div class="gallery-grid">
      <div
        v-for="image in filteredImages"
        :key="image.id"
        class="image-card"
        @click="openPreview(image)"
      >
        <img :src="image.thumbnail" :alt="image.title" loading="lazy" />
        <div class="image-info">
          <h3>{{ image.title }}</h3>
          <span class="category-tag">{{ getCategoryName(image.category) }}</span>
        </div>
      </div>
    </div>

    <!-- 图片预览弹窗 -->
    <div v-if="previewImage" class="preview-modal" @click="closePreview">
      <div class="preview-content" @click.stop>
        <button class="close-btn" @click="closePreview">×</button>
        <img :src="previewImage.url" :alt="previewImage.title" />
        <div class="preview-info">
          <h2>{{ previewImage.title }}</h2>
          <p>{{ previewImage.description }}</p>
          <button class="download-btn" @click="downloadImage(previewImage)">
            下载图片
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const categories = [
  { id: "all", name: "全部" },
  { id: "cute", name: "可爱风" },
  { id: "cool", name: "酷炫风" },
  { id: "fantasy", name: "奇幻风" },
  { id: "scenery", name: "风景" },
];

const currentCategory = ref("all");
const previewImage = ref(null);

// 示例图片数据（实际使用时可以从API获取）
const images = ref([
  {
    id: 1,
    title: "樱花少女",
    category: "cute",
    thumbnail: "https://picsum.photos/400/300?random=1",
    url: "https://picsum.photos/1200/900?random=1",
    description: "春日樱花树下的少女",
  },
  {
    id: 2,
    title: "星空战士",
    category: "cool",
    thumbnail: "https://picsum.photos/400/300?random=2",
    url: "https://picsum.photos/1200/900?random=2",
    description: "星空下的战士",
  },
  {
    id: 3,
    title: "魔法森林",
    category: "fantasy",
    thumbnail: "https://picsum.photos/400/300?random=3",
    url: "https://picsum.photos/1200/900?random=3",
    description: "神秘的魔法森林",
  },
  {
    id: 4,
    title: "夕阳海岸",
    category: "scenery",
    thumbnail: "https://picsum.photos/400/300?random=4",
    url: "https://picsum.photos/1200/900?random=4",
    description: "美丽的夕阳海岸线",
  },
  {
    id: 5,
    title: "猫耳少女",
    category: "cute",
    thumbnail: "https://picsum.photos/400/300?random=5",
    url: "https://picsum.photos/1200/900?random=5",
    description: "可爱的猫耳少女",
  },
  {
    id: 6,
    title: "机甲战士",
    category: "cool",
    thumbnail: "https://picsum.photos/400/300?random=6",
    url: "https://picsum.photos/1200/900?random=6",
    description: "未来科技机甲",
  },
]);

const filteredImages = computed(() => {
  if (currentCategory.value === "all") {
    return images.value;
  }
  return images.value.filter((img) => img.category === currentCategory.value);
});

const getCategoryName = (categoryId) => {
  return categories.find((cat) => cat.id === categoryId)?.name || "";
};

const openPreview = (image) => {
  previewImage.value = image;
};

const closePreview = () => {
  previewImage.value = null;
};

const downloadImage = async (image) => {
  try {
    const response = await fetch(image.url);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${image.title}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("下载失败:", error);
    alert("下载失败，请稍后重试");
  }
};
</script>

<style scoped>
.anime-gallery {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #fff;
}

.categories {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 10px 20px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.category-btn:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.category-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #764ba2;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.image-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.image-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.image-info {
  padding: 15px;
  background: white;
}

.image-info h3 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  color: #333;
}

.category-tag {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  font-size: 0.85rem;
}

.preview-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.preview-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition: background 0.3s;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.preview-content img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.preview-info {
  padding: 20px;
}

.preview-info h2 {
  margin: 0 0 10px 0;
  color: #333;
}

.preview-info p {
  color: #666;
  margin-bottom: 20px;
}

.download-btn {
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s;
}

.download-btn:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .header h1 {
    font-size: 2rem;
  }

  .preview-content {
    max-width: 95%;
  }
}
</style>
