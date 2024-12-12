<template>
  <section class="category">
    <div class="container">
      <div class="title">
        <p class="sub-title">Danh mục Tour</p>
        <h2 class="main-title">Khám phá vùng miền</h2>
      </div>
      <div class="categories">
        <div class="item" v-for="category in categories" :key="category.name">
          <div class="img">
            <img :src="`${apiUrl}${category.img_url}`" :alt="category.name" />
            <div class="overlay"></div>
          </div>
          <div class="name">{{ category.name }}</div>
          <div class="see-more">
            <RouterLink to="/destination"
              ><i class="fa-solid fa-arrow-left"></i><span>Xem thêm</span>
              <i class="fa-solid fa-arrow-right"></i
            ></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import apiUrl from "@/api/apiUrl.js";
import axios from "axios";

const categories = ref([]);
// Get Data
const loadCategoryData = async () => {
  try {
    const res = await axios.get(`${apiUrl}api/categories/read.php`);
    categories.value = res.data.categories;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  loadCategoryData();
});
</script>
<style scoped>
@import "./style.css";
</style>
