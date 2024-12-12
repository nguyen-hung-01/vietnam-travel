<template>
  <BannerLayout namePage="Tài khoản của bạn" />
  <div class="container">
    <div class="info">
      <div class="img">
        <img src="/assets/images/account.png" alt="avt" />
      </div>
      <div class="account">
        <div class="item">
          <span>Email:</span>
          <a-input :value="user.email" readonly />
        </div>
        <div class="item">
          <span>Tên đăng nhập:</span>
          <a-input :value="user.user_name" readonly />
        </div>
        <div class="item">
          <span>Mật khẩu:</span>
          <a-input-password :value="user.pass_word" readonly />
        </div>
      </div>
    </div>
    <div class="tickets">
      <h2>Vé tour của bạn</h2>
      <div v-if="ticketsByUser.length > 0">
        <table>
          <thead>
            <tr>
              <th>Điểm đến</th>
              <th>Thời gian</th>
              <th>Giá vé</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in ticketsByUser" :key="ticket.id">
              <td>{{ getDestinationName(ticket.destination_id) }}</td>
              <td>
                {{ formatDate(ticket.departure_date) }} -
                {{ formatDate(ticket.return_date) }}
              </td>
              <td>{{ formatCurrency(ticket.total_price) }}</td>
              <td>{{ ticket.status }}</td>
              <td>
                <span @click="showTicketDetails(ticket)">Xem vé</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Bạn chưa có vé nào.</p>
      </div>
    </div>
    <a-modal
      v-model:open="isModalVisible"
      title="Chi tiết vé"
      :footer="null"
      @cancel="isModalVisible = false"
    >
      <div v-if="selectedTicket">
        <p><strong>Email:</strong> {{ selectedTicket.email }}</p>
        <p><strong>Số điện thoại:</strong> {{ selectedTicket.phone_number }}</p>
        <p><strong>Số người:</strong> {{ selectedTicket.quantity }}</p>
        <p><strong>Ghi chú:</strong> {{ selectedTicket.note }}</p>
        <p>
          <strong>Ngày đặt vé:</strong>
          {{ formatDate(selectedTicket.booking_date) }}
        </p>
        <p>
          <strong>Ngày đi:</strong>
          {{ formatDate(selectedTicket.departure_date) }}
        </p>
        <p>
          <strong>Ngày về:</strong> {{ formatDate(selectedTicket.return_date) }}
        </p>
        <p>
          <strong>Phương thức thanh toán:</strong>
          {{ selectedTicket.payment_method }}
        </p>
        <p><strong>Trạng thái:</strong> {{ selectedTicket.status }}</p>
        <p>
          <strong>Giá vé:</strong>
          {{ formatCurrency(selectedTicket.total_price) }}
        </p>
      </div>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import apiUrl from "@/api/apiUrl.js";
import { BannerLayout } from "@/layouts/index";

const user = JSON.parse(localStorage.getItem("user"));
const ticketsByUser = ref([]);
const destinations = ref([]);
const isModalVisible = ref(false);
const selectedTicket = ref(null);

const formatDate = (date) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString("vi-VN", options);
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

const getDestinationName = (id) => {
  const destination = destinations.value.find((d) => d.id === id);
  return destination ? destination.name : "Không xác định";
};

const loadBookingData = async () => {
  try {
    const res = await axios.get(`${apiUrl}api/tickets/read.php`);
    const tickets = res.data.tickets || [];
    ticketsByUser.value = tickets.filter(
      (ticket) => ticket.user_id === user.id
    );
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu vé:", error);
  }
};

const loadDestinationData = async () => {
  try {
    const res = await axios.get(`${apiUrl}api/destinations/read.php`);
    destinations.value = res.data.destinations || [];
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu điểm đến:", error);
  }
};

const showTicketDetails = (ticket) => {
  selectedTicket.value = ticket;
  isModalVisible.value = true;
};

onMounted(() => {
  loadBookingData();
  loadDestinationData();
});
</script>
<style scoped>
@import "./style.css";
</style>
