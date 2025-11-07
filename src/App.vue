<template>
  <!-- 视频背景 -->
  <div class="video-background">
    <video autoplay loop muted playsinline>
      <source src="https://oss.nbtab.com/public/2025/09/17/0657933952527777-d09685febaa173ccdc51298f3aa082ef.mp4"
        type="video/mp4">
    </video>
  </div>

  <div id="app">
    <Headers />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Headers from './components/Header/index.vue'

</script>
