<template>
  <div class="step1">
    <h1>Thông tin đặt vé</h1>
    <a-form :model="formState" :rules="rules" ref="formRef">
      <div class="flex">
        <a-form-item label="Điểm đến">
          <a-input v-model:value="formState.destination" readonly />
        </a-form-item>
        <a-form-item label="Giá vé (1 người / 1 ngày/đêm)">
          <a-input v-model:value="formState.price" readonly />
        </a-form-item>
      </div>
      <a-form-item label="Địa điểm khởi hành" name="departure">
        <a-select v-model:value="formState.departure">
          <a-select-option
            v-for="location in departureLocation"
            :key="location"
            :value="location"
            >{{ location }}</a-select-option
          >
        </a-select>
      </a-form-item>
      <div class="flex">
        <a-form-item label="Thời gian khởi hành" name="dateRange">
          <a-range-picker v-model:value="formState.dateRange" />
        </a-form-item>
        <a-form-item label="Số lượng người" name="quantity">
          <a-input-number v-model:value="formState.quantity" :min="1" />
        </a-form-item>
      </div>
      <a-form-item label="Số điện thoại liên hệ" name="phone">
        <a-input v-model:value="formState.phone" />
      </a-form-item>
      <a-form-item label="Email liên hệ" name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>
      <a-form-item label="Ghi chú" name="note">
        <a-textarea v-model:value="formState.note" :rows="4" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">Gửi thông tin</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import apiUrl from "@/api/apiUrl.js";
import rules from "./rules.js";

const props = defineProps(["formData"]);
const emit = defineEmits(["update-form", "next"]);
const route = useRoute();
const destinationId = route.params.id;
const destinations = ref([]);
const currentDestination = ref({});
const formRef = ref(null);
const formState = ref({
  destination: currentDestination.name,
  price: currentDestination.price,
  departure: null,
  dateRange: null,
  quantity: null,
  phone: "",
  email: "",
  note: "",
});
// Get destinations data
const loadDestinationData = async () => {
  try {
    const res = await axios.get(`${apiUrl}api/destinations/read.php`);
    destinations.value = res.data.destinations;
    currentDestination.value = destinations.value.find(
      (dest) => dest.id === parseInt(destinationId)
    );
    console.log(currentDestination.value);
  } catch (error) {
    console.log(error);
  }
};
const departureLocation = ref([
  "Sân bay Tân Sân Nhất",
  "Sân bay Đà Nẵng",
  "Sân Bay nội bài",
]);
const handleSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      emit("update-form", formState.value);
      emit("next");
    })
    .catch((error) => {
      console.log("Form validation failed:", error);
    });
};
onMounted(() => {
  loadDestinationData();
});
watchEffect(() => {
  formState.value.destination = currentDestination.value.name || "";
  formState.value.price = currentDestination.value.price || "";
});
</script>

<style scoped>
@import "./style.css";
</style>
