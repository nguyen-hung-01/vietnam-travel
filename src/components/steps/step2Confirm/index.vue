<template>
  <div class="step2">
    <h1>Xác nhận thông tin đặt vé</h1>
    <a-form :model="formState" layout="vertical">
      <div class="flex">
        <a-form-item label="Điểm đến">
          <a-input :value="formState.destination" readonly />
        </a-form-item>
        <a-form-item label="Giá vé (1 người / 1 ngày/đêm)">
          <a-input :value="formState.price" readonly />
        </a-form-item>
      </div>
      <div class="flex">
        <a-form-item label="Địa điểm khởi hành">
          <a-input :value="formState.departure" readonly />
        </a-form-item>
        <a-form-item label="Thời gian khởi hành">
          <a-input :value="formattedDateRange" readonly />
        </a-form-item>
      </div>
      <div class="flex">
        <a-form-item label="Email">
          <a-input :value="formState.email" readonly />
        </a-form-item>
        <a-form-item label="Số điện thoại">
          <a-input :value="formState.phone" readonly />
        </a-form-item>
      </div>
      <div class="flex">
        <a-form-item label="Số lượng người">
          <a-input :value="formState.quantity" readonly />
        </a-form-item>
        <a-form-item label="Tổng tiền">
          <a-input :value="formattedTotalPrice" readonly />
        </a-form-item>
      </div>
      <a-form-item>
        <a-button type="primary" @click="next">Xác nhận</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="prev">Quay lại</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import dayjs from "dayjs";

const props = defineProps(["formData"]);
const emit = defineEmits(["next", "prev"]);

const formState = ref({
  ...props.formData,
});
const formattedDateRange = computed(() => {
  const [start, end] = formState.value.dateRange || [];
  if (!start || !end) return "Chưa chọn thời gian";
  return `${dayjs(start).format("DD/MM/YYYY")} - ${dayjs(end).format(
    "DD/MM/YYYY"
  )}`;
});
const formattedTotalPrice = computed(() => {
  const { price, quantity, dateRange } = formState.value;
  if (!price || !quantity || !dateRange || dateRange.length !== 2)
    return "0 VND";
  const [start, end] = dateRange;
  const days = dayjs(end).diff(dayjs(start), "day") + 1;
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price * quantity * days);
});

const next = () => {
  // emit("update-form", formState.value);
  emit("next");
};
const prev = () => {
  emit("prev");
};
</script>

<style scoped>
@import "./style.css";
</style>
