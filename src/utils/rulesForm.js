import { ref } from "vue";

const currentUsers = ref([]);
const originalUser = ref([]);
const rulesForm = {
  // Account
  email: [
    { required: true, message: "Vui lòng nhập email", trigger: "blur" },
    { type: "email", message: "Email không đúng định dạng", trigger: "blur" },
    {
      validator: (_, value) => {
        if (value === originalUser.value.email) return Promise.resolve();
        if (currentUsers.value.some((user) => user.email === value)) {
          return Promise.reject("Email đã tồn tại. Vui lòng thử email khác.");
        }
        return Promise.resolve();
      },
      trigger: "blur",
    },
  ],
  user_name: [
    { required: true, message: "Vui lòng nhập tên đăng nhập", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9_]+$/,
      message: "Tên đăng nhập chỉ bao gồm chữ, số, hoặc dấu gạch dưới",
      trigger: "blur",
    },
    {
      validator: (_, value) => {
        if (value === originalUser.value.user_name) return Promise.resolve();
        if (currentUsers.value.some((user) => user.user_name === value)) {
          return Promise.reject(
            "Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác."
          );
        }
        return Promise.resolve();
      },
      trigger: "blur",
    },
  ],
  pass_word: [
    { required: true, message: "Vui lòng nhập mật khẩu", trigger: "blur" },
    { min: 8, message: "Mật khẩu phải có ít nhất 8 ký tự", trigger: "blur" },
  ],
};
export { rulesForm, currentUsers, originalUser };
