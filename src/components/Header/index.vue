<template>
    <div class="header">
      <h2>今日碎碎念</h2>
      <div class="nav">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <!-- <li><router-link to="/write">写作</router-link></li> -->
          <li>技术</li>
          <li>动漫</li>
          <li>日记</li>
        </ul>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style>
.header {
    height: 80px;
    background: #333;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}
.header.scrolled {
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
.nav {
    position: absolute;
    right: 80px;
    top: 1%;
}
.nav ul {
    height: 80px;
    display: flex;
    list-style: none;
}
.nav ul li {
    font-size: 18px;
    margin-left: 20px;
    cursor: pointer;
    line-height: 80px;
}

.nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav ul li a:hover,
.nav ul li a.router-link-active {
    color: #007bff;
}
</style>