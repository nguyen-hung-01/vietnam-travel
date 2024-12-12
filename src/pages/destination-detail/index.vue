<template>
  <BannerLayout namePage="Chi tiết điểm đến" />
  <div class="container">
    <div class="destination-detail">
      <div class="info-destination">
        <div class="left">
          <img
            :src="`${apiUrl}${destination.image_url}`"
            :alt="destination.name"
          />
        </div>
        <div class="right">
          <div>
            <div class="name"><span>TOUR: </span>{{ destination.name }}</div>
            <div class="rating">
              Đánh giá:
              <div class="star">
                <i
                  class="fa-solid fa-star"
                  v-for="n in destination.rating"
                  :key="n"
                ></i>
              </div>
            </div>
            <div class="price">
              {{ formatPrice(destination.price) }}
              <span>/Người / ngày/đêm</span>
            </div>
            <div class="category">
              Danh mục:
              <span>{{ getCategoryName(destination.category_id) }}</span>
            </div>
            <div class="transportation">Phương tiện: <span>Máy bay</span></div>
          </div>
          <div class="btn">
            <router-link :to="`/booking/${destination.id}`"
              ><span
                >Đặt vé ngay <i class="fa-solid fa-plane-departure"></i
              ></span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="desc">
        <h5>Giới thiệu:</h5>
        <p>{{ destination.desc }}</p>
      </div>
    </div>
    <div class="relate">
      <h5>Điểm đến liên quan:</h5>
      <div class="list-destination">
        <DestinationCard
          v-for="relatedDestination in relatedDestinations"
          :key="relatedDestination.id"
          :id="relatedDestination.id"
          :imgUrl="`${apiUrl}${relatedDestination.image_url}`"
          :name="relatedDestination.name"
          :rating="relatedDestination.rating"
          :price="relatedDestination.price"
          :category_id="relatedDestination.category_id"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { BannerLayout } from "@/layouts/index";
import { ref, onMounted } from "vue";
import axios from "axios";
import { RouterLink, useRoute } from "vue-router";
import { DestinationCard } from "@/components/index";
import apiUrl from "@/api/apiUrl.js";

const categories = ref([]);
const destinations = ref([]);
const destination = ref({});
const route = useRoute();
const relatedDestinations = ref([]);
const destinationId = route.params.id;
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
    destination.value = destinations.value.find(
      (dest) => dest.id === parseInt(destinationId)
    );
    relatedDestinations.value = destinations.value.filter(
      (dest) =>
        dest.category_id === destination.value.category_id &&
        dest.id !== destination.value.id
    );
    console.log(destination.value);
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
