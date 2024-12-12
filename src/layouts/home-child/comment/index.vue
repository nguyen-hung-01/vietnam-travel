<template>
  <section class="comment">
    <div class="container">
      <div class="left">
        <img
          src="/assets/images/picture-100658486-1726391131-331-width850height939.jpg"
          alt="hinh anh"
        />
        <img
          src="/assets/images/108019999294151970694837530688971354568776n-1525769252336204409999.jpg"
          alt="hinh anh"
        />
      </div>
      <div class="right">
        <div class="title">
          <p class="sub-title">Nhận xét</p>
          <h1 class="main-title">
            Khách hàng nói gì về<br />
            chúng tôi
          </h1>
        </div>
        <div class="customers">
          <div
            class="item"
            v-for="(customer, index) in customers"
            :key="customer.id"
            :class="{
              active: index === activeIndex,
              next: index === nextIndex,
              prev: index === prevIndex,
            }"
          >
            <div class="content">
              <p class="text">
                {{ `"${customer.comment}"` }}
              </p>
              <div class="info">
                <img :src="customer.avatar" :alt="customer.name" />
                <div>
                  <h5>{{ customer.name }}</h5>
                  <p>Traveller</p>
                  <div>
                    <i class="fa-solid fa-star" v-for="n in 5" :key="n"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn">
            <button @click="prev">
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button @click="next">
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const customers = [
  {
    id: 1,
    name: "Nguyên Hùng",
    avatar: "/assets/images/hung-avt.jpg",
    comment:
      "Việt Nam là một điểm đến tuyệt vời với thiên nhiên đa dạng và phong cảnh hùng vĩ. Từ những ruộng bậc thang ở Sapa đến vịnh Hạ Long, mỗi nơi đều mang đến cảm giác choáng ngợp với vẻ đẹp độc đáo.",
  },
  {
    id: 2,
    name: "Quốc Tuấn",
    avatar: "/assets/images/tuan-avt.jpg",
    comment:
      "Người Việt Nam vô cùng thân thiện và hiếu khách. Chúng tôi luôn cảm thấy được chào đón và hỗ trợ nhiệt tình ở bất kỳ đâu, từ thành phố lớn đến những làng quê xa xôi.",
  },
  {
    id: 3,
    name: "Trọng Quân",
    avatar: "/assets/images/quan-avt.jpg",
    comment:
      "Ẩm thực Việt Nam thực sự là một trải nghiệm không thể bỏ qua. Món phở, bánh mì và những món ăn đường phố khác khiến tôi muốn quay lại nhiều lần nữa để khám phá thêm hương vị mới.",
  },
];

const activeIndex = ref(0);
const prevIndex = ref(customers.length - 1);
const nextIndex = ref(1);

const next = () => {
  prevIndex.value = activeIndex.value;
  activeIndex.value = nextIndex.value;
  nextIndex.value = (nextIndex.value + 1) % customers.length;
};

const prev = () => {
  nextIndex.value = activeIndex.value;
  activeIndex.value = prevIndex.value;
  prevIndex.value = (prevIndex.value - 1 + customers.length) % customers.length;
};
</script>
<style scoped>
@import "./style.css";
</style>
