<template>
  <div class="anime-gallery">
    <!-- <div class="header">
      <h1>动漫壁纸</h1>
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
    </div> -->

    <!-- 动态视频背景 -->
    <div class="video-bg-container">
      <div class="video-title">
        <span>动态背景</span>
      </div>
      <div class="video-bg">
        <video
          v-for="src in arrImages"
          :ref="`video-${src.id}`"
          :key="src.id" 
          :poster="src.thumbnail"
          autoplay 
          loop 
          muted
          playsinline
          preload="auto"
        >
          <source :src="src.url" type="video/mp4">
          您的浏览器不支持视频播放
        </video>
      </div>
    </div>

    <!-- <div class="gallery-grid">
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
    </div> -->

    <!-- 图片预览弹窗 -->
    <!-- <div v-if="previewImage" class="preview-modal" @click="closePreview">
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
    </div> -->
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
    title: "少女",
    category: "cute",
    thumbnail: "https://oss.nbtab.com/public/xxoo/51257ad8-1cca-4541-aa0e-e67d9b28950b.mp4?vframe/jpg/offset/2/w/400/h/240",
    url: "https://oss.nbtab.com/public/xxoo/51257ad8-1cca-4541-aa0e-e67d9b28950b.mp4",
    description: "春日少女",
  }
]);

// 动态壁纸
const arrImages = [
  {
    id: 1,
    title: "少女",
    category: "cute",
    thumbnail: "https://oss.nbtab.com/public/xxoo/51257ad8-1cca-4541-aa0e-e67d9b28950b.mp4?vframe/jpg/offset/2/w/400/h/240",
    url: "https://oss.nbtab.com/public/xxoo/51257ad8-1cca-4541-aa0e-e67d9b28950b.mp4",
    description: "春日少女",
  },
  {
    id: 2,
    title: "炫酷",
    category: "cute",
    thumbnail: "https://oss.nbtab.com/public/xxoo/f3d7e97f-27a7-447c-9464-19280c475822.mp4?vframe/jpg/offset/2/w/400/h/240",
    url: "https://oss.nbtab.com/public/xxoo/f3d7e97f-27a7-447c-9464-19280c475822.mp4",
    description: "炫酷少女",
  },
  {
    id: 3,
    title: "蜘蛛侠",
    category: "cute",
    thumbnail: "https://oss.nbtab.com/public/2025/08/25/2144716031387738-0.mp4?vframe/jpg/offset/2/w/400/h/240",
    url: "https://oss.nbtab.com/public/2025/08/25/2144716031387738-0.mp4",
    description: "吐丝的蜘蛛侠",
  },
  {
    id: 4,
    title: "猫咪",
    category: "cute",
    thumbnail: "https://oss.nbtab.com/public/2025/09/17/0657933952527777-d09685febaa173ccdc51298f3aa082ef.mp4?vframe/jpg/offset/2/w/400/h/240",
    url: "https://oss.nbtab.com/public/2025/09/17/0657933952527777-d09685febaa173ccdc51298f3aa082ef.mp4",
    description: "眨着卡兰兹大眼睛的小猫咪",
  },
  {
    id: 5,
    title: "少女",
    category: "cute",
    thumbnail: "https://oss.nbtab.com/public/2025/10/24/9574377348163858-3440x1440pro.mp4?vframe/jpg/offset/2/w/400/h/240",
    url: "https://oss.nbtab.com/public/2025/10/24/9574377348163858-3440x1440pro.mp4",
    description: "炫酷少女",
  },
  {
    id: 6,
    title: "少女",
    category: "cute",
    thumbnail: "https://oss.nbtab.com/public/2025/11/10/6577317139678854-11102.mp4?vframe/jpg/offset/2/w/400/h/240",
    url: "https://oss.nbtab.com/public/2025/11/10/6577317139678854-11102.mp4",
    description: "炫酷少女",
  },
  // "https://oss.nbtab.com/public/2025/09/28/4979111923692981-1101220.mp4",
  // "https://oss.nbtab.com/public/2025/09/03/8971381153177124-7_15488489007572.mp4",
  // "https://oss.nbtab.com/public/2025/11/07/9681929465184793-2.mp4",
  // "https://oss.nbtab.com/public/2025/10/10/8171988581727436-0.mp4",
  // "https://oss.nbtab.com/public/2025/09/28/4972974999836863-6iuffgg.mp4",
  // "https://oss.nbtab.com/public/2025/08/04/0059764948833621-4.mp4",
  // "https://oss.nbtab.com/public/2025/10/27/5550790177959572-1_.mp4",
  // "https://oss.nbtab.com/public/2025/10/10/8173880111828283-0.mp4",
  // "https://oss.nbtab.com/public/2025/08/04/0058722581348819-1.mp4",
  // "https://oss.nbtab.com/public/2025/09/28/4987266093324259-TouhouCybustFlandreScarletPC.mp4",
  // "https://oss.nbtab.com/public/2025/09/19/5342123286893291-2299a99ee2b2b32cb1b19bd6513441c8_preview.mp4",
  // "https://oss.nbtab.com/public/2025/08/04/0061217626172376-7.mp4",
  // "https://oss.nbtab.com/public/2025/10/09/0247922245468121-CityLife.mp4",
  // "https://oss.nbtab.com/public/2025/09/03/8968662061167372-7_15488489007230.mp4",
  // "https://oss.nbtab.com/public/2025/09/25/6299496961766459-c62d052c989c45545b80cfc3af9d88e6_preview.mp4"
]

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
  max-width: 1920;
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

.video-bg-container {
  max-width: 1920;
  margin: 0 auto;
}

.video-bg-container .video-title {
  color: #fff;
  font-size: 30px;
  margin-bottom: 10px;
}

.video-bg-container .video-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.video-bg-container .video-bg video {
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.categories {
  margin-left: 15px;
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
