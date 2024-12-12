<template>
  <div class="step4">
    <h1>Đặt vé thành công</h1>
    <div class="img">
      <img
        src="/assets/images/blue-check-mark-blue-checkmark.png"
        alt="success icon"
      />
    </div>
    <p>
      Chúc mừng bạn đã đặt vé thành công! Chúng tôi sẽ xác nhận và liên hệ lại
      với bạn trong thời gian sớm nhất. Nếu có bất kỳ thắc mắc nào, xin vui lòng
      liên hệ bộ phận CSKH qua hotline 0966418674 để được hỗ trợ. Trân trọng cảm
      ơn và chúc bạn có một chuyến đi thú vị!
    </p>
    <div class="btn"><RouterLink to="/">Quay về trang chủ</RouterLink></div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
@import "./style.css";
</style>
