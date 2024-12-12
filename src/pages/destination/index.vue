<template>
  <BannerLayout namePage="Điểm đến" />
  <div class="container">
    <div class="main-destination">
      <div class="search">
        <input type="text" placeholder="Tìm kiếm Tour" />
        <button>Tìm kiếm</button>
      </div>
      <h1 class="title">Tất cả điểm đến</h1>
      <div class="destinations">
        <DestinationCard
          v-for="destination in destinations"
          :key="destination.id"
          :id="destination.id"
          :imgUrl="`${apiUrl}${destination.image_url}`"
          :name="destination.name"
          :rating="destination.rating"
          :price="destination.price"
          :category_id="destination.category_id"
        />
      </div>
    </div>
    <div class="navbar">
      <div class="categories">
        <div class="nav-title">Danh mục Tour</div>
        <ul>
          <li>
            <i class="fa-solid fa-plane"></i>
            <button
              @click="filterDestinations(null)"
              :class="{ active: activeCategoryId === null }"
            >
              <span>Tất cả điểm đến</span>
            </button>
          </li>
          <li v-for="category in categories" :key="category.id">
            <i class="fa-solid fa-plane"></i>
            <button
              @click="filterDestinations(category.id)"
              :class="{ active: activeCategoryId === category.id }"
            >
              <span>{{ category.name }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { BannerLayout } from "@/layouts/index";
import { DestinationCard } from "@/components/index";
import apiUrl from "@/api/apiUrl.js";

const categories = ref([]);
const destinations = ref([]);
const allDestinations = ref([]);
const activeCategoryId = ref(null);
// Get categories data
const loadCategoryData = async () => {
  try {
    const res = await axios.get(`${apiUrl}api/categories/read.php`);
    categories.value = res.data.categories;
  } catch (error) {
    console.log(error);
  }
};
// Get destinations data
const loadDestinationData = async () => {
  try {
    const res = await axios.get(`${apiUrl}api/destinations/read.php`);
    allDestinations.value = res.data.destinations;
    destinations.value = [...allDestinations.value];
  } catch (error) {
    console.log(error);
  }
};
// Lọc điểm đến theo danh mục
const filterDestinations = (categoryId) => {
  activeCategoryId.value = categoryId;
  if (categoryId === null) {
    destinations.value = [...allDestinations.value];
  } else {
    destinations.value = allDestinations.value.filter(
      (destination) => destination.category_id === categoryId
    );
  }
};
onMounted(() => {
  loadCategoryData();
  loadDestinationData();
});
</script>
<style scoped>
@import "./style.css";
</style>
