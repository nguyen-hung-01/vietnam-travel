<template>
  <BannerLayout namePage="Tin tức" />
  <section class="main-blog">
    <div class="container">
      <div class="left">
        <div class="list-news">
          <div v-for="(news, index) in newsList" :key="index" class="item">
            <div class="img">
              <img :src="news.imageUrl" :alt="news.title" />
            </div>
            <div class="content">
              <div class="date">
                <span
                  ><i class="fa-solid fa-user"></i> Bởi {{ news.author }}</span
                >
                <span>|</span>
                <span>
                  <i class="fa-solid fa-calendar-days"></i> {{ news.date }}
                </span>
                <span>|</span>
                <span
                  ><i class="fa-brands fa-guilded"></i>
                  {{ news.category }}</span
                >
              </div>
              <div class="name">
                {{ news.title }}
              </div>
              <p class="text">
                {{ news.content }}
              </p>
              <a :href="news.link" class="see-more">
                <span>Đọc thêm</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </section>
</template>
<script setup>
import { BannerLayout } from "@/layouts/index";
const newsList = [
  {
    title: "5 điểm đến ở Việt Nam cho người thích đi một mình",
    author: "Lê Nguyên Hùng",
    date: "20 tháng 11, 2024",
    category: "Hướng dẫn du lịch",
    content:
      "Hà Nội, Huế, Hội An, Ninh Bình, Phan Thiết thích hợp cho khách đi một mình với những trải nghiệm thiên nhiên và văn hóa.",
    imageUrl:
      "https://i1-dulich.vnecdn.net/2024/11/19/19-the-anam-mui-ne-1731987463-3503-1731987472.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=gbMzRTbm0-GFbuJi4VPYpQ",
    link: "#",
  },
  {
    title: "10 địa điểm du lịch không thể bỏ qua tại Việt Nam",
    author: "Nguyễn Trọng Quân",
    date: "15 tháng 11, 2024",
    category: "Khám phá",
    content:
      "Cùng khám phá những địa điểm tuyệt đẹp trải dài khắp Việt Nam, từ đồi núi đến biển cả.",
    imageUrl:
      "https://i1-dulich.vnecdn.net/2024/10/17/1-1729155398-5264-1729155442.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=a3NSP57A2afqZJx9n_K8Jw",
    link: "#",
  },
  {
    title: "Lên kế hoạch du lịch miền Trung",
    author: "Phan Quốc Tuấn",
    date: "10 tháng 11, 2024",
    category: "Kế hoạch",
    content:
      "Miền Trung là nơi hội tụ vẻ đẹp văn hóa và thiên nhiên, phù hợp cho chuyến du lịch gia đình.",
    imageUrl:
      "https://i1-dulich.vnecdn.net/2024/10/18/2021-jpeg-1718097410-172924386-7603-3629-1729243873.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=t8M3dOxZCeZn7y8f-03ROA",
    link: "#",
  },
];
</script>
<style scoped>
@import "./style.css";
</style>
