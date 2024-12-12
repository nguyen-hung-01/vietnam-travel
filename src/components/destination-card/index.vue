<template>
  <div class="item">
    <div class="img">
      <img :src="imgUrl" :alt="name" />
    </div>
    <div class="info">
      <div class="name">
        <router-link :to="`/destination-detail/${id}`">{{ name }}</router-link>
      </div>
      <div class="rating">
        <i class="fa-solid fa-star" v-for="n in rating" :key="n"></i>
      </div>
      <div class="price">{{ formatPrice(price) }}<span>/Người</span></div>
      <div class="btn">
        <router-link :to="`/booking/${id}`"
          ><span>Đặt vé ngay <i class="fa-solid fa-plane-departure"></i></span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  id: Number,
  imgUrl: String,
  name: String,
  rating: Number,
  price: Number,
});
const formatPrice = (value) => {
  return new Intl.NumberFormat("vi-VN").format(value) + " VND";
};
</script>
<style scoped>
@import "./style.css";
</style>
