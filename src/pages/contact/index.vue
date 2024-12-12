<template>
  <BannerLayout namePage="Liên hệ" />
  <section class="main-contact">
    <div class="container">
      <div class="title">
        <p class="sub-title">Liên hệ</p>
        <h1 class="main-title">Thông tin liên hệ của chúng tôi</h1>
      </div>
      <div class="info">
        <div class="item">
          <div class="icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="content">
            <div class="name">Địa chỉ</div>
            <div>
              <p>Đà Nẵng, Việt Nam</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="content">
            <div class="name">Số điện thoại</div>
            <div>
              <p>+01 234 567 890</p>
              <p>+09 876 543 210</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div class="content">
            <div class="name">Email</div>
            <div>
              <p>ng.hung01.it@gmail.com</p>
              <p>nhom5fpol@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="form">
    <div class="overlay"></div>
    <img src="/assets/images/contact.jpg" />
    <div class="container">
      <form>
        <h2>Đặt chuyến tham quan</h2>
        <div class="main-form">
          <div>
            <input type="text" placeholder="Họ và tên" />
            <i class="fa-solid fa-user"></i>
          </div>
          <div>
            <input type="email" placeholder="Email của bạn" />
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div>
            <input type="text" placeholder="Số điện thoại" />
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="note">
            <textarea class="w-full" rows="10" placeholder="Ghi chú"></textarea>
            <i class="fa-solid fa-comments"></i>
          </div>
        </div>
        <button>
          <span
            >Gửi thông tin <i class="fa-regular fa-paper-plane ml-2"></i
          ></span>
        </button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { BannerLayout } from "@/layouts/index";
</script>
<style scoped>
@import "./style.css";
</style>
