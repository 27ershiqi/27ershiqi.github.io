<template>
  <!-- 视频背景 -->
  <div class="video-background">
    <video 
      ref="videoRef"
      :key="currentVideoUrl" 
      autoplay 
      loop 
      muted 
      playsinline
      preload="auto"
      @loadeddata="onVideoLoaded"
    >
      <source :src="currentVideoUrl" type="video/mp4">
      您的浏览器不支持视频播放
    </video>
  </div>

  <div id="app">
    <Headers />
    <router-view></router-view>
  </div>

  <!-- 小风车切换按钮 -->
  <div 
    class="windmill-btn"
    :class="{ spinning: isSpinning }"
    @click="changeVideo"
    title="切换背景视频"
  >
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- 风车叶片 -->
      <g class="blades">
        <path d="M50,50 L50,10 L60,30 Z" fill="currentColor" opacity="0.9"/>
        <path d="M50,50 L90,50 L70,60 Z" fill="currentColor" opacity="0.8"/>
        <path d="M50,50 L50,90 L40,70 Z" fill="currentColor" opacity="0.7"/>
        <path d="M50,50 L10,50 L30,40 Z" fill="currentColor" opacity="0.6"/>
      </g>
      <!-- 中心圆 -->
      <circle cx="50" cy="50" r="8" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Headers from './components/Header/index.vue'

const arr = [
  "https://oss.nbtab.com/public/2025/08/25/2144716031387738-0.mp4",
  "https://oss.nbtab.com/public/2025/08/25/2134314294796319-0.mp4",
  "https://oss.nbtab.com/public/2025/09/17/0657933952527777-d09685febaa173ccdc51298f3aa082ef.mp4",
  "https://oss.nbtab.com/public/2025/09/28/4979111923692981-1101220.mp4",
  "https://oss.nbtab.com/public/2025/09/03/8971381153177124-7_15488489007572.mp4",
  "https://oss.nbtab.com/public/2025/11/07/9681929465184793-2.mp4",
  "https://oss.nbtab.com/public/2025/10/10/8171988581727436-0.mp4",
  "https://oss.nbtab.com/public/2025/09/28/4972974999836863-6iuffgg.mp4",
  "https://oss.nbtab.com/public/2025/08/04/0059764948833621-4.mp4",
  "https://oss.nbtab.com/public/2025/10/27/5550790177959572-1_.mp4",
  "https://oss.nbtab.com/public/2025/10/10/8173880111828283-0.mp4",
  "https://oss.nbtab.com/public/2025/08/04/0058722581348819-1.mp4",
  "https://oss.nbtab.com/public/2025/09/28/4987266093324259-TouhouCybustFlandreScarletPC.mp4",
  "https://oss.nbtab.com/public/2025/09/19/5342123286893291-2299a99ee2b2b32cb1b19bd6513441c8_preview.mp4",
  "https://oss.nbtab.com/public/2025/08/04/0061217626172376-7.mp4",
  "https://oss.nbtab.com/public/2025/10/09/0247922245468121-CityLife.mp4",
  "https://oss.nbtab.com/public/2025/09/03/8968662061167372-7_15488489007230.mp4",
  "https://oss.nbtab.com/public/2025/09/25/6299496961766459-c62d052c989c45545b80cfc3af9d88e6_preview.mp4"
]

const currentVideoUrl = ref(arr[0])
const videoRef = ref(null)
const isSpinning = ref(false)

// 视频加载完成
const onVideoLoaded = () => {
  if (videoRef.value) {
    videoRef.value.play().catch(err => {
      console.log('视频自动播放失败:', err)
    })
  }
}

// 随机切换视频
const changeVideo = () => {
  // 触发旋转动画
  isSpinning.value = true
  
  // 获取随机视频（确保不是当前视频）
  let newIndex
  do {
    newIndex = Math.floor(Math.random() * arr.length)
  } while (arr[newIndex] === currentVideoUrl.value && arr.length > 1)
  
  currentVideoUrl.value = arr[newIndex]
  
  // 动画结束后重置状态
  setTimeout(() => {
    isSpinning.value = false
  }, 600)
}
</script>

<style scoped>
.windmill-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  color: white;
}

.windmill-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.windmill-btn:active {
  transform: scale(0.95);
}

.windmill-btn svg {
  width: 35px;
  height: 35px;
}

.windmill-btn .blades {
  transform-origin: 50px 50px;
  transition: transform 0.3s ease;
}

.windmill-btn:hover .blades {
  transform: rotate(45deg);
}

.windmill-btn.spinning .blades {
  animation: spin 0.6s ease-out;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 移动端适配 */
@media (max-width: 768px) {
  .windmill-btn {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
  
  .windmill-btn svg {
    width: 30px;
    height: 30px;
  }
}
</style>
