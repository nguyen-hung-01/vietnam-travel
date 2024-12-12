<template>
  <a-form :model="formState" layout="vertical">
    <a-form-item label="Phương thức thanh toán">
      <a-radio-group v-model:value="paymentMethod">
        <a-radio value="credit_card">Thẻ tín dụng</a-radio>
        <a-radio value="bank_transfer">Chuyển khoản ngân hàng</a-radio>
        <a-radio value="paypal">PayPal</a-radio>
      </a-radio-group>
    </a-form-item>

    <!-- Form credit_card -->
    <div v-if="paymentMethod === 'credit_card'">
      <a-form-item
        label="Số thẻ"
        :rules="[{ required: true, message: 'Vui lòng nhập số thẻ tín dụng!' }]"
      >
        <a-input
          v-model:value="cardInfo.cardNumber"
          placeholder="Nhập số thẻ tín dụng"
        />
      </a-form-item>
      <a-form-item
        label="Ngày hết hạn"
        :rules="[{ required: true, message: 'Vui lòng nhập ngày hết hạn!' }]"
      >
        <a-input v-model:value="cardInfo.expiryDate" placeholder="MM/YY" />
      </a-form-item>
      <a-form-item
        label="CVV"
        :rules="[{ required: true, message: 'Vui lòng nhập CVV!' }]"
      >
        <a-input v-model:value="cardInfo.cvv" placeholder="Nhập CVV" />
      </a-form-item>
    </div>

    <!-- Form bank_transfer -->
    <div v-if="paymentMethod === 'bank_transfer'">
      <a-form-item
        label="Tên chủ tài khoản"
        :rules="[
          { required: true, message: 'Vui lòng nhập tên chủ tài khoản!' },
        ]"
      >
        <a-input
          v-model:value="bankTransferInfo.accountHolder"
          placeholder="Nhập tên chủ tài khoản"
        />
      </a-form-item>
      <a-form-item
        label="Số tài khoản"
        :rules="[{ required: true, message: 'Vui lòng nhập số tài khoản!' }]"
      >
        <a-input
          v-model:value="bankTransferInfo.accountNumber"
          placeholder="Nhập số tài khoản"
        />
      </a-form-item>
      <a-form-item
        label="Tên ngân hàng"
        :rules="[{ required: true, message: 'Vui lòng nhập tên ngân hàng!' }]"
      >
        <a-input
          v-model:value="bankTransferInfo.bankName"
          placeholder="Nhập tên ngân hàng"
        />
      </a-form-item>
    </div>

    <!-- Form paypal -->
    <div v-if="paymentMethod === 'paypal'">
      <a-form-item
        label="Email PayPal"
        :rules="[{ required: true, message: 'Vui lòng nhập email PayPal!' }]"
      >
        <a-input
          v-model:value="paypalInfo.email"
          placeholder="Nhập email PayPal của bạn"
        />
      </a-form-item>
    </div>

    <a-form-item>
      <a-button type="primary" @click="bookTicket">Thanh toán</a-button>
    </a-form-item>
    <a-form-item>
      <a-button type="default" @click="prev">Quay lại</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import apiUrl from "@/api/apiUrl.js";
import { notification } from "ant-design-vue";
import { useRoute } from "vue-router";
import dayjs from "dayjs";

const route = useRoute();
const userLogin = JSON.parse(localStorage.getItem("user"));
const destinationId = route.params.id;
const props = defineProps(["formData"]);
const emit = defineEmits(["next", "prev", "update-form"]);

const formState = ref({
  ...props.formData,
});

const paymentMethod = ref("");
const cardInfo = ref({ cardNumber: "", expiryDate: "", cvv: "" });
const bankTransferInfo = ref({
  accountHolder: "",
  accountNumber: "",
  bankName: "",
});
const paypalInfo = ref({ email: "" });
const bookTicket = async () => {
  if (!validatePaymentMethod()) {
    notification.error({
      message: "Đặt vé thất bại!",
      description:
        "Vui lòng chọn phương thức thanh toán và điền đầy đủ thông tin.",
    });
    return;
  }
  try {
    const bookingData = {
      email: formState.value.email,
      phone_number: formState.value.phone,
      quantity: formState.value.quantity,
      note: formState.value.note,
      departure_date: dayjs(formState.value.dateRange[0]).format("YYYY-MM-DD"),
      return_date: dayjs(formState.value.dateRange[1]).format("YYYY-MM-DD"),
      total_price: formattedTotalPrice.value.replace(/\D/g, ""),
      destination_id: destinationId,
      user_id: userLogin.id,
      payment_method: paymentMethod.value,
    };
    console.log(paymentMethod.value);

    await axios.post(`${apiUrl}api/tickets/create.php`, bookingData);

    notification.success({
      message: "Đặt vé thành công!",
      description: "Chúng tôi đã ghi nhận đơn đặt vé của bạn.",
    });

    emit("next");
  } catch (error) {
    console.log(error);
    notification.error({
      message: "Đặt vé thất bại!",
      description: "Đã xảy ra lỗi, vui lòng thử lại.",
    });
  }
};
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

const validatePaymentMethod = () => {
  if (paymentMethod.value === "") {
    return false;
  }
  if (
    paymentMethod.value === "credit_card" &&
    (!cardInfo.value.cardNumber ||
      !cardInfo.value.expiryDate ||
      !cardInfo.value.cvv)
  ) {
    return false;
  }
  if (
    paymentMethod.value === "bank_transfer" &&
    (!bankTransferInfo.value.accountHolder ||
      !bankTransferInfo.value.accountNumber ||
      !bankTransferInfo.value.bankName)
  ) {
    return false;
  }
  if (paymentMethod.value === "paypal" && !paypalInfo.value.email) {
    return false;
  }
  return true;
};
const prev = () => {
  emit("prev");
};
</script>

<style scoped>
@import "./style.css";
</style>
