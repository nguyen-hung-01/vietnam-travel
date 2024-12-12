<template>
  <section class="main-banner">
    <img src="/assets/images/main-banner.jpg" alt="banner" />
    <div class="overlay"></div>
    <div class="title">
      <h1>{{ namePage }}</h1>
      <div>
        <span>Trang chủ</span>
        <i class="fa-solid fa-arrow-right-long"></i>
        <span>{{ namePage }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  namePage: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@import "./style.css";
</style>
