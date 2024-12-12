<template>
  <section class="follow">
    <div class="title">
      <p class="sub-title">Chúng tôi đang ở trên Facebook</p>
      <h2 class="main-title">Theo dõi chúng tôi</h2>
    </div>
    <div class="list">
      <div class="item" v-for="img in imgUrls" :key="img">
        <img :src="img" alt="image" />
        <div class="overlay"></div>
        <i class="fa-brands fa-facebook"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
const imgUrls = ref([
  "/assets/images/fl1.png",
  "/assets/images/fl2.webp",
  "/assets/images/fl3.webp",
  "/assets/images/fl4.webp",
  "/assets/images/fl5.jpg",
  // "/assets/images/fl7.jpg",
  // "/assets/images/fl6.jpg",
  // "/assets/images/fl8.webp",
]);
</script>

<style scoped>
@import "./style.css";
</style>
