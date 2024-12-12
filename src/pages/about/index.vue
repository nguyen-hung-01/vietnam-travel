<template>
  <BannerLayout namePage="Giới thiệu" />
  <section class="intro">
    <div class="container">
      <div class="left w-1/2 relative">
        <img src="/assets/images/img-about.avif" alt="about image" />
        <img src="/assets/images/img-about1.jpg" alt="about image" />
        <img
          src="/assets/images/img-about2.webp"
          alt="about image"
          class="moving"
        />
      </div>
      <div class="right">
        <div class="title">
          <p class="sub-title">Chào mừng đến với Tour du lịch</p>
          <h2 class="main-title">
            Chúng tôi là công ty du lịch có uy tín ở Việt Nam
          </h2>
        </div>
        <p class="text">
          Chào mừng bạn đến với Explore VietNam! Chúng tôi cung cấp các tour du
          lịch trọn gói đến những địa điểm hấp dẫn trong và ngoài nước...
        </p>
        <div class="list-intro">
          <div class="item">
            <div class="icon"><i class="fa-solid fa-person-falling"></i></div>
            <div>
              <p>Chuyến đi độc quyền</p>
              <span class="text">
                Khám phá những hành trình đặc biệt, tận hưởng dịch vụ đẳng cấp
                và trải nghiệm Việt Nam theo cách riêng của bạn.
              </span>
            </div>
          </div>
          <div class="item">
            <div class="icon"><i class="fa-solid fa-person-hiking"></i></div>
            <div>
              <p>Hướng dẫn chuyên nghiệp</p>
              <span class="text">
                Đội ngũ hướng dẫn viên giàu kinh nghiệm sẽ giúp bạn khám phá
                Việt Nam một cách trọn vẹn và tuyệt vời nhất.
              </span>
            </div>
          </div>
        </div>
        <button><span>Tìm hiểu thêm</span></button>
      </div>
    </div>
  </section>
  <section class="guide">
    <div class="container">
      <div class="title">
        <p class="sub-title">Hướng dẫn viên</p>
        <h2 class="main-title">Gặp gỡ hướng dẫn viên du lịch</h2>
      </div>
      <div class="list-guide">
        <div v-for="(guide, index) in guides" :key="index" class="item">
          <div class="bg">
            <img :src="guide.bg" alt="" />
            <div class="avt">
              <img :src="guide.image" alt="" />
            </div>
          </div>
          <div class="info">
            <p class="name">{{ guide.name }}</p>
            <p class="job">{{ guide.job }}</p>
            <div class="social">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-tiktok"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="logo-company">
    <div class="container">
      <img src="/assets/images/logo1.jpg" alt="logo company" />
      <img src="/assets/images/logo2.jpg" alt="logo company" />
      <img src="/assets/images/logo3.jpg" alt="logo company" />
      <img src="/assets/images/logo4.jpg" alt="logo company" />
      <img src="/assets/images/logo5.jpg" alt="logo company" />
    </div>
  </section>
</template>
<script setup>
import { BannerLayout } from "@/layouts/index";
const guides = [
  {
    name: "Lê Nguyên Hùng",
    job: "Hướng dẫn viên",
    image: "/assets/images/hung-avt.jpg",
    bg: "/assets/images/bg-guide.webp",
  },
  {
    name: "Phan Quốc Tuấn",
    job: "Hướng dẫn viên",
    image: "/assets/images/tuan-avt.jpg",
    bg: "/assets/images/bg-guide1.jpg",
  },
  {
    name: "Nguyễn Trọng Quân",
    job: "Hướng dẫn viên",
    image: "/assets/images/quan-avt.jpg",
    bg: "/assets/images/bg-guide2.jpg",
  },
];
</script>

<style scoped>
@import "./style.css";
</style>
