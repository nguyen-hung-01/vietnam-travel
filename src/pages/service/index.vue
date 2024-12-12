<template>
  <BannerLayout namePage="Dịch vụ" />
  <section class="main-service">
    <div class="container">
      <div class="list-service">
        <div class="item" style="--i: 1">
          <img src="/assets/images/service1.jpg" alt="service" />
        </div>
        <div class="item" style="--i: 2">
          <img src="/assets/images/service2.jpg" alt="service" />
        </div>
        <div class="item" style="--i: 3">
          <img src="/assets/images/service3.jpg" alt="service" />
        </div>
        <div class="item" style="--i: 4">
          <img src="/assets/images/service4.jpg" alt="service" />
        </div>
        <div class="item" style="--i: 5">
          <img src="/assets/images/service5.jpg" alt="service" />
        </div>
        <div class="item" style="--i: 6">
          <img src="/assets/images/service6.jpg" alt="service" />
        </div>
        <div class="item" style="--i: 7">
          <img src="/assets/images/service7.jpg" alt="service" />
        </div>
        <div class="item" style="--i: 8">
          <img src="/assets/images/service8.jpg" alt="service" />
        </div>
      </div>
    </div>
  </section>
  <section class="plan">
    <div class="container">
      <div class="title text-center">
        <p class="sub-title">Gói dịch vụ</p>
        <h2 class="main-title">
          Lên kế hoạch cho chuyến tham quan<br />
          của bạn
        </h2>
      </div>
      <div class="list-plan">
        <div class="item">
          <h4>Gói cơ bản</h4>
          <div class="content">
            <div class="price">299.999đ</div>
            <p>Các dịch vụ cần thiết cho người tìm kiếm cơ bản và độc thân.</p>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>Tối đa 2 thành viên
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí dịch vụ phòng
              </li>
              <li><i class="fa-regular fa-circle-check"></i>Tài xế riêng</li>
              <li><i class="fa-regular fa-circle-check"></i>Quản lý tour</li>
              <li><i class="fa-regular fa-circle-check"></i>Sự hợp tác</li>
              <li><i class="fa-regular fa-circle-check"></i>Phí vào cửa</li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí hướng dẫn tại điểm
                đến
              </li>
            </ul>
            <div class="btn">
              <button><span>Tìm hiểu thêm</span></button>
            </div>
          </div>
        </div>
        <div class="item">
          <h4>Gói phổ thông</h4>
          <div class="content">
            <div class="price">499.000đ</div>
            <p>Các dịch vụ cần thiết cho người tìm kiếm cơ bản và độc thân.</p>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>Tối đa 2 thành viên
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí dịch vụ phòng
              </li>
              <li><i class="fa-regular fa-circle-check"></i>Tài xế riêng</li>
              <li><i class="fa-regular fa-circle-check"></i>Quản lý tour</li>
              <li><i class="fa-regular fa-circle-check"></i>Sự hợp tác</li>
              <li><i class="fa-regular fa-circle-check"></i>Phí vào cửa</li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí hướng dẫn tại điểm
                đến
              </li>
            </ul>
            <div class="btn">
              <button><span>Tìm hiểu thêm</span></button>
            </div>
          </div>
        </div>
        <div class="item">
          <h4>Gói cao cấp</h4>
          <div class="content">
            <div class="price">799.000đ</div>
            <p>Các dịch vụ cần thiết cho người tìm kiếm cơ bản và độc thân.</p>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>Tối đa 2 thành viên
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí dịch vụ phòng
              </li>
              <li><i class="fa-regular fa-circle-check"></i>Tài xế riêng</li>
              <li><i class="fa-regular fa-circle-check"></i>Quản lý tour</li>
              <li><i class="fa-regular fa-circle-check"></i>Sự hợp tác</li>
              <li><i class="fa-regular fa-circle-check"></i>Phí vào cửa</li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Phí hướng dẫn tại điểm
                đến
              </li>
            </ul>
            <div class="btn">
              <button><span>Tìm hiểu thêm</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { BannerLayout } from "@/layouts/index";
</script>
<style scoped>
@import "./style.css";
</style>
