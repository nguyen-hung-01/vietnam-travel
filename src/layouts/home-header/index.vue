<template>
  <header ref="headerRef">
    <div class="container flex justify-between">
      <div class="menu">
        <RouterLink to="/">Trang chủ</RouterLink>
        <RouterLink to="/about">Giới thiệu</RouterLink>
        <RouterLink to="/blog">Tin tức</RouterLink>
      </div>
      <div class="logo">
        <RouterLink to="/"><img :src="logo" alt="VietNamTravel" /></RouterLink>
      </div>
      <div class="menu">
        <RouterLink to="/service">Dịch vụ</RouterLink>
        <RouterLink to="/destination">Điểm đến</RouterLink>
        <RouterLink to="/contact">Liên hệ</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import logo from "/assets/images/LOGO_VN_X.png";
const headerRef = ref(null);
const handleScroll = () => {
  if (window.scrollY > 50) {
    headerRef.value?.classList.add("sticky");
  } else {
    headerRef.value?.classList.remove("sticky");
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
@import "./style.css";
</style>
