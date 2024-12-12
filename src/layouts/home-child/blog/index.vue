<template>
  <section class="blog">
    <div class="container">
      <div class="title">
        <div>
          <p class="sub-title">Tin tức</p>
          <h2 class="main-title">Tin tức mới nhất về các chuyến đi</h2>
        </div>
        <div class="btn">
          <router-link to="/blog"><span>Đọc thêm</span></router-link>
        </div>
      </div>
      <div class="blog-content">
        <div class="left">
          <div class="item">
            <div class="img">
              <img src="/assets/images/blog1.jpg" alt="image blog" />
            </div>
            <div class="info">
              <div class="date">
                <span>02 tháng 12, 2024</span>
                <span>|</span>
                <span>1 tuần trước</span>
              </div>
              <div class="name">
                <router-link to="/blog">
                  Khám Phá Hội An: Thiên Đường Nghỉ Dưỡng Mới Kết Hợp Văn Hóa và
                  Sinh Thái</router-link
                >
              </div>
              <div class="btn">
                <router-link to="/blog"><span>Đọc thêm</span></router-link>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="/assets/images/blog2.jpg" alt="image blog" />
            </div>
            <div class="info">
              <div class="date">
                <span>02 tháng 12, 2024</span>
                <span>|</span>
                <span>1 tuần trước</span>
              </div>
              <div class="name">
                <router-link to="/blog"
                  >Kỳ Quan Mới: Khu Nghỉ Dưỡng Sinh Thái Tại Vịnh Hạ
                  Long</router-link
                >
              </div>
              <div class="btn">
                <router-link to="/blog"><span>Đọc thêm</span></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div class="img">
              <img src="/assets/images/blog3.jpg" alt="image blog" />
            </div>
            <div class="info">
              <div class="date">
                <span>02 tháng 12, 2024</span>
                <span>|</span>
                <span>1 tuần trước</span>
              </div>
              <div class="name">
                <router-link to="/blog"
                  >Hà Nội Ra Mắt Khu Nghỉ Dưỡng Sinh Thái Giữa Lòng Thủ
                  Đô</router-link
                >
              </div>
              <div class="btn">
                <router-link to="/blog"><span>Đọc thêm</span></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
@import "./style.css";
</style>
