<template>
  <BannerLayout namePage="Đặt vé Tour" />
  <div class="container">
    <div class="destination-booking">
      <infoDestination />
    </div>
    <div class="steps">
      <a-steps :current="current" :items="items"></a-steps>
      <div class="steps-content">
        <div class="steps-content">
          <component
            :is="components[current]"
            :form-data="formData"
            @update-form="updateFormData"
            @next="next"
            @prev="prev"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { BannerLayout } from "@/layouts/index";
import { Step1, Step2, Step3, Step4 } from "@/components/steps/index";
import infoDestination from "@/components/info-Destinaton-booking/index.vue";

const components = [Step1, Step2, Step3, Step4];
const current = ref(0);
const formData = ref({
  destination: "",
  price: 0,
  departure: null,
  dateRange: null,
  quantity: null,
  phone: "",
  email: "",
  note: "",
});
const next = () => {
  if (current.value < components.length - 1) {
    current.value++;
  }
};

// Hàm xử lý khi quay lại bước trước
const prev = () => {
  if (current.value > 0) {
    current.value--;
  }
};
const steps = [
  {
    title: "Thông tin đặt Tour",
  },
  {
    title: "Xác nhận thông tin",
  },
  {
    title: "Thanh toán",
  },
  {
    title: "Hoàn thành",
  },
];
const updateFormData = (updatedData) => {
  Object.assign(formData.value, updatedData);
};
defineEmits(["update-form"]);
const items = steps.map((item) => ({ key: item.title, title: item.title }));
</script>
<style scoped>
@import "./style.css";
</style>
