<template>
  <section class="contact">
    <div class="container">
      <div class="form">
        <a-form>
          <div class="input">
            <a-form-item>
              <a-input type="text" placeholder="Họ và tên" />
              <i class="fa-solid fa-user"></i>
            </a-form-item>
            <a-form-item>
              <a-input type="email" placeholder="Email liên hệ" />
              <i class="fa-solid fa-envelope"></i>
            </a-form-item>
            <a-form-item>
              <a-input type="text" placeholder="Số điện thoại" />
              <i class="fa-solid fa-phone"></i>
            </a-form-item>
            <a-form-item>
              <a-textarea :rows="4" placeholder="Ghi chú" />
            </a-form-item>
          </div>
          <div class="btn">
            <a-form-item>
              <a-button
                ><span
                  >Gửi tin nhắn <i class="fa-regular fa-paper-plane"></i></span
              ></a-button>
            </a-form-item>
            <p>+0123456789 <i class="fa-solid fa-phone-volume ml-3"></i></p>
          </div>
        </a-form>
      </div>
      <div class="title">
        <p class="sub-title">Liên hệ</p>
        <h2 class="main-title">
          Xin chào! Tôi có thể giúp gì cho bạn hôm nay?
        </h2>
        <span
          >Chúng tôi rất mong nhận được phản hồi từ bạn. Đội ngũ thân thiện của
          chúng tôi luôn ở đây để trò chuyện</span
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "./style.css";
</style>
