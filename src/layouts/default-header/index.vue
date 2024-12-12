<template>
  <div class="menu-top">
    <div class="container">
      <div class="left">
        <span><i class="fa-solid fa-location-dot"></i>Đà Nẵng, Việt Nam</span>
        <span>|</span>
        <span
          ><i class="fa-solid fa-clock"></i>Thứ 2 đến thứ 6: 8 giờ sáng - 5 giờ
          chiều</span
        >
      </div>
      <div class="right">
        <div>FAQs</div>
        <span>|</span>
        <div>Support</div>
        <span>|</span>
        <div class="myaccount" v-if="!isUser && !isLoggedIn">
          <RouterLink to="/account">Đăng nhập / Đăng ký</RouterLink>
          <i class="fa-solid fa-user text-xs opacity-80 ml-1"></i>
        </div>
        <div class="user" v-else>
          <span>Xin chào,</span>
          <RouterLink to="/profile">{{ isUser.user_name }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <header ref="headerRef">
    <div class="container">
      <nav>
        <div class="logo">
          <RouterLink to="/"
            ><img
              class="logo-img"
              src="/assets/images/LOGO_VN_T.png"
              alt="LOGO"
          /></RouterLink>
        </div>
        <ul>
          <li :class="{ active: route.path === '/' }">
            <RouterLink to="/">Trang chủ</RouterLink>
          </li>
          <li :class="{ active: route.path === '/about' }">
            <RouterLink to="/about">Giới thiệu</RouterLink>
          </li>
          <li :class="{ active: route.path === '/blog' }">
            <RouterLink to="/blog">Tin tức</RouterLink>
          </li>
          <li :class="{ active: route.path === '/destination' }">
            <RouterLink to="/destination">Điểm đến</RouterLink>
          </li>
          <li :class="{ active: route.path === '/service' }">
            <RouterLink to="/service">Dịch vụ</RouterLink>
          </li>
          <li :class="{ active: route.path === '/contact' }">
            <RouterLink to="/contact">Liên hệ</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const headerRef = ref(null);
const route = useRoute();
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const isUser = JSON.parse(localStorage.getItem("user"));
console.log(isUser.user_name);

const handleScroll = () => {
  if (window.scrollY > 180) {
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
