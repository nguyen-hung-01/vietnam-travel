<template>
  <BannerLayout namePage="Tài khoản" />
  <div class="main-form container">
    <div>
      <div class="form" ref="activeForm">
        <div class="sign-up">
          <a-form :model="formData" ref="registerForm" :rules="rules">
            <h1>Đăng ký</h1>
            <a-form-item label="Email" name="email">
              <a-input v-model:value="formData.email" />
            </a-form-item>
            <a-form-item label="Tên đăng nhập" name="user_name">
              <a-input v-model:value="formData.user_name" />
            </a-form-item>
            <a-form-item label="Mật khẩu" name="pass_word">
              <a-input-password v-model:value="formData.pass_word" />
            </a-form-item>

            <a-form-item>
              <a-button html-type="submit" @click="register">Đăng ký</a-button>
            </a-form-item>
          </a-form>
        </div>
        <div class="sign-in">
          <a-form ref="signInForm" :rules="rulesLogin" :model="formUpdate">
            <h1>Đăng nhập</h1>
            <a-form-item label="Tên đăng nhập" name="user_name">
              <a-input v-model:value="formUpdate.user_name" />
            </a-form-item>

            <a-form-item label="Mật khẩu" name="pass_word">
              <a-input-password v-model:value="formUpdate.pass_word" />
            </a-form-item>

            <a-form-item>
              <a-button html-type="submit" @click="login">Đăng nhập</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="overlay-container" ref="activeOverlay">
        <div class="overlay overlay-left">
          <h1>Chào mừng bạn trở lại với VietNam Travel</h1>
          <p>Đăng ký nếu bạn chưa có tài khoản</p>
          <button @click="openSignUpForm">Đăng ký</button>
        </div>
        <div class="overlay overlay-right">
          <h1>Chào mừng bạn đến với VietNam Travel</h1>
          <p>Đăng nhập nếu bạn đã có tài khoản</p>
          <button @click="openSignInForm">Đăng nhập</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { BannerLayout } from "@/layouts/index";
import { rulesForm, currentUsers, originalUser } from "@/utils/rulesForm.js";
import apiUrl from "@/api/apiUrl.js";

const router = useRouter();
const activeForm = ref();
const activeOverlay = ref();
const openSignInForm = () => {
  activeForm.value.classList.add("active");
  activeOverlay.value.classList.add("active");
};
const openSignUpForm = () => {
  activeForm.value.classList.remove("active");
  activeOverlay.value.classList.remove("active");
};
let users = ref([]);
const rules = rulesForm;
// ============================================================================== //
// Get Data
const loadUserData = async () => {
  try {
    const res = await axios.get(`${apiUrl}api/users/read.php`);
    users.value = res.data.users;
    currentUsers.value = res.data.users;
  } catch (error) {
    console.log("Lỗi trong quá trình tải API:", error);
  }
};
// ============================================================================== //
// Sign Up
const registerForm = ref(null);
const formData = ref({
  email: "",
  user_name: "",
  pass_word: "",
  role: "user",
});
const register = async () => {
  try {
    await registerForm.value.validate();
    const res = await axios.post(
      `${apiUrl}api/users/create.php`,
      formData.value
    );
    message.success("Đăng ký thành công!");
    formData.value = {
      email: "",
      user_name: "",
      pass_word: "",
      role: "user",
    };
    loadUserData();
    openSignInForm();
  } catch (error) {
    console.log(error);
    message.error("Đăng ký thất bại!");
  }
};

// ============================================================================== //
// Sign In
const rulesLogin = {
  username: [
    {
      required: true,
      message: "Tên đăng nhập không được bỏ trống!",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Mật khẩu không được bỏ trống!",
      trigger: "blur",
    },
  ],
};
const signInForm = ref(null);
const formUpdate = ref({
  email: "",
  user_name: "",
  pass_word: "",
  role: "user",
});
const login = async () => {
  try {
    // Validate form input
    await signInForm.value.validate();

    // Lấy thông tin từ formUpdate
    const { user_name, pass_word } = formUpdate.value;

    // Kiểm tra xem thông tin có tồn tại trong danh sách users
    const user = users.value.find(
      (u) =>
        u.user_name === user_name &&
        u.pass_word === pass_word &&
        u.role === "user"
    );

    if (user) {
      message.success("Đăng nhập thành công!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    } else {
      message.error("Sai tên đăng nhập hoặc mật khẩu!");
    }
  } catch (error) {
    message.error("Vui lòng kiểm tra lại thông tin đăng nhập!");
    console.log("Lỗi đăng nhập:", error);
  }
};

onMounted(() => {
  loadUserData();
});
</script>
<style scoped>
@import "./style.css";
</style>
