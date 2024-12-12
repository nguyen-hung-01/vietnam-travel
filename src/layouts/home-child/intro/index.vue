<template>
  <section class="intro">
    <div class="container">
      <div class="left">
        <div class="img">
          <img src="/assets/images/intro-image.webp" alt="intro" />
        </div>
      </div>
      <div class="right">
        <div class="title">
          <p class="sub-title">Việt Nam - Điểm đến của mọi trải nghiệm</p>
          <h2 class="main-title">
            Cùng bạn viết nên câu chuyện du lịch đáng nhớ
          </h2>
        </div>
        <p class="text">
          Hãy để chúng tôi đồng hành cùng bạn, từ những chuyến phiêu lưu lý thú
          đến những khoảnh khắc thư giãn yên bình. Cùng nhau, chúng ta sẽ viết
          nên những kỷ niệm khó quên trong chuyến hành trình khám phá vẻ đẹp
          Việt Nam.
        </p>
        <div class="list">
          <div class="item">
            <div class="icon"><i class="fa-solid fa-person-falling"></i></div>
            <div class="content">
              <p>Chuyến đi độc quyền</p>
              <span class="text">
                Khám phá những hành trình đặc biệt, tận hưởng dịch vụ đẳng cấp
                và trải nghiệm Việt Nam theo cách riêng của bạn.
              </span>
            </div>
          </div>
          <div class="item">
            <div class="icon"><i class="fa-solid fa-person-hiking"></i></div>
            <div class="content">
              <p>Hướng dẫn chuyên nghiệp</p>
              <span class="text">
                Đội ngũ hướng dẫn viên giàu kinh nghiệm sẽ giúp bạn khám phá
                Việt Nam một cách trọn vẹn và tuyệt vời nhất.
              </span>
            </div>
          </div>
        </div>
        <div class="btn">
          <RouterLink to="/about"><span>Tìm hiểu thêm</span></RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="company">
    <div class="container">
      <img src="/assets/images/logo1.jpg" alt="company" />
      <img src="/assets/images/logo2.jpg" alt="company" />
      <img src="/assets/images/logo3.jpg" alt="company" />
      <img src="/assets/images/logo4.jpg" alt="company" />
      <img src="/assets/images/logo5.jpg" alt="company" />
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
@import "./style.css";
</style>
