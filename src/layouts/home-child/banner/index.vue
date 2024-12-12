<template>
  <section class="banner">
    <div class="list-slide">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['slide-item', { active: index === slideIndex }]"
        :style="{ display: index === slideIndex ? 'block' : 'none' }"
      >
        <div class="bn-overlay"></div>
        <img :src="slide.src" :alt="slide.alt" />
        <div class="title">
          <div class="container">
            <h1 class="flipInX">{{ slide.title }}</h1>
            <p class="fadeInUp">{{ slide.description }}</p>
            <RouterLink to="/about" class="btn fadeInDown">Xem thêm</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
const slides = ref([
  {
    src: "/assets/images/bg4.jpg",
    title: "Khám Phá Cảnh Quan Hùng Vĩ Và Thiên Nhiên Độc Đáo",
    description:
      "Việt Nam sở hữu một hệ sinh thái thiên nhiên đa dạng và hùng vĩ với những cảnh sắc tuyệt đẹp từ miền núi phía Bắc đến đồng bằng sông Cửu Long. Vịnh Hạ Long với hàng nghìn hòn đảo đá vôi kỳ vĩ, những cánh đồng lúa bậc thang ở Sapa hay những bãi biển hoang sơ ở Phú Quốc đều là những điểm đến không thể bỏ qua.",
  },
  {
    src: "/assets/images/bg2.jpeg",
    title: "Văn Hóa Đa Dạng, Những Di Sản Truyền Thống Ngàn Năm",
    description:
      " Việt Nam là nơi giao thoa của nhiều nền văn hóa và có bề dày lịch sử  lâu dài. Từ các ngôi chùa cổ kính ở Hà Nội, Hội An cho đến những làng nghề thủ công truyền thống ở các tỉnh miền Trung, văn hóa Việt Nam được hình thành và phát triển qua hàng nghìn năm với những giá trị tinh thần sâu sắc.!",
  },
  {
    src: "/assets/images/bg5.jpg",
    title: "Con Người Việt Nam Hiếu Khách Và Thân Thiện",
    description:
      "  Con người Việt Nam luôn được biết đến với lòng hiếu khách và sự thân thiện. Dù bạn đi đến đâu, từ thành phố sôi động như Hồ Chí Minh đến những vùng quê thanh bình, bạn sẽ luôn cảm nhận được sự nồng ấm trong từng ánh mắt và nụ cười của người dân nơi đây. Họ sẵn sàng chia sẻ, giúp đỡ và tạo ra những trải nghiệm đáng nhớ cho bất kỳ ai đến thăm đất nước này.!",
  },
  {
    src: "/assets/images/bg3.jpg",
    title: " Ẩm Thực Đậm Đà Và Những Hương Vị Khó Quên",
    description:
      "Ẩm thực Việt Nam là sự kết hợp tuyệt vời giữa các nguyên liệu tươi ngon và gia vị đặc trưng, mang đến những món ăn không chỉ đẹp mắt mà còn thơm ngon khó quên. Những món ăn như phở, bún chả, bánh mì hay nem rán đều chứa đựng câu chuyện và lịch sử riêng biệt của từng vùng miền. Sự phong phú trong cách chế biến và sự sáng tạo trong từng món ăn khiến du khách khó lòng quên được hương vị đậm đà, thanh thoát mà cũng đầy hấp dẫn.!",
  },
]);
const slideIndex = ref(0);
const showSlides = () => {
  slideIndex.value = (slideIndex.value + 1) % slides.value.length;
};
onMounted(() => {
  const interval = setInterval(showSlides, 6000);
  onUnmounted(() => clearInterval(interval));
});
</script>
<style scoped>
@import "./style.css";
</style>
