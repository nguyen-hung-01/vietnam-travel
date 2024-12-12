<template>
  <div class="booking">
    <div class="info-destination">
      <div class="left">
        <img
          :src="`${apiUrl}${currentDestination.image_url}`"
          :alt="currentDestination.name"
        />
      </div>
      <div class="right">
        <div>
          <div class="name">
            <span>TOUR: </span>{{ currentDestination.name }}
          </div>
          <div class="rating">
            Đánh giá:
            <div class="star">
              <i
                class="fa-solid fa-star"
                v-for="n in currentDestination.rating"
                :key="n"
              ></i>
            </div>
          </div>
          <div class="price">
            {{ formatPrice(currentDestination.price) }}
            <span>/Người / ngày/đêm</span>
          </div>
          <div class="category">
            Danh mục:
            <span>{{ getCategoryName(currentDestination.category_id) }}</span>
          </div>
          <div class="transportation">Phương tiện: <span>Máy bay</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();
const destinationId = route.params.id;
const destinations = ref([]);
const categories = ref([]);
const currentDestination = ref({});
const apiUrl =
  "http://localhost:8080/D%E1%BB%B1%20%C3%A1n%201%20(TKTW)/VietNamTravel-BE/";

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
    destinations.value = res.data.destinations;
    currentDestination.value = destinations.value.find(
      (dest) => dest.id === parseInt(destinationId)
    );
    console.log(currentDestination.value);
  } catch (error) {
    console.log(error);
  }
};
const getCategoryName = (id) => {
  const category = categories.value.find((cat) => cat.id === id);
  return category ? category.name : "Không xác định";
};
const formatPrice = (value) => {
  return new Intl.NumberFormat("vi-VN").format(value) + " VND";
};

onMounted(() => {
  loadCategoryData();
  loadDestinationData();
});
</script>
<style scoped>
@import "./style.css";
</style>
