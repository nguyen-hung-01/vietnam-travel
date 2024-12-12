<template>
  <footer>
    <div class="container">
      <div class="top-ft">
        <h2>Được cập nhật bản tin mới nhất</h2>
        <div class="subscribe">
          <input type="text" placeholder="Email của bạn" />
          <button><span>Đăng ký ngay</span></button>
        </div>
      </div>
      <div class="main-ft">
        <div class="logo">
          <img src="/assets/images/LOGO_VN_T.png" alt="logo" />
          <p>
            TravelExplore - Người bạn đồng hành đáng tin cậy trên mọi hành
            trình. Cùng chúng tôi khám phá thế giới với những chuyến đi đáng
            nhớ, an toàn và trọn vẹn cảm xúc.
          </p>
          <div class="location">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-viber"></i>
          </div>
        </div>
        <div class="links">
          <h3 class="ft-title">Liên kết nhanh</h3>
          <ul>
            <li>
              <RouterLink to="#"
                ><i class="fa-solid fa-angle-right"></i> Trang chủ</RouterLink
              >
            </li>
            <li>
              <RouterLink to="#"
                ><i class="fa-solid fa-angle-right"></i> Giới thiệu</RouterLink
              >
            </li>
            <li>
              <RouterLink to="#"
                ><i class="fa-solid fa-angle-right"></i> Dịch vụ</RouterLink
              >
            </li>
            <li>
              <RouterLink to="#"
                ><i class="fa-solid fa-angle-right"></i> Điều khoản và dịch
                vụ</RouterLink
              >
            </li>
            <li>
              <RouterLink to="#"
                ><i class="fa-solid fa-angle-right"></i> Đặt Tour
                ngay</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="contact">
          <h3 class="ft-title">Liên hệ</h3>
          <ul>
            <li>
              <a href="#">
                <i class="fa-solid fa-phone"></i>
                <div>
                  <p>+01 234 567 890</p>
                  <p>+09 876 543 210</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-envelope"></i>
                <div>
                  <p>mailinfo00@tourm.com</p>
                  <p>support24@tourm.com</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <p>
                    789 Inner Lane, Holy park,<br />
                    California, USA
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="post">
          <h3 class="ft-title">Bài đăng trên Instagram</h3>
          <div class="main-post">
            <div><img src="/assets/images/ins1.jpg" alt="" /></div>
            <div><img src="/assets/images/ins2.jpg" alt="" /></div>
            <div><img src="/assets/images/ins3.jpg" alt="" /></div>
            <div><img src="/assets/images/ins4.jpg" alt="" /></div>
            <div><img src="/assets/images/ins5.jpg" alt="" /></div>
            <div><img src="/assets/images/ins6.jpg" alt="" /></div>
          </div>
        </div>
      </div>
      <div class="bottom-ft">
        <p>Copyright 2024 Tourm. All Rights Reserved.</p>
        <div class="pay">
          <p>Chấp nhận</p>
          <div>
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-cc-paypal"></i>
            <i class="fa-brands fa-cc-apple-pay"></i>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/images/bus.png" alt="bus" />
  </footer>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
@import "./style.css";
</style>
