const rules = {
  departure: [
    { required: true, message: "Địa điểm khởi hành không được bỏ trống!" },
  ],
  dateRange: [
    { required: true, message: "Thời gian khởi hành không được bỏ trống!" },
  ],
  quantity: [
    { required: true, message: "Số lượng người không được bỏ trống!" },
    { type: "number", min: 1, message: "Số lượng người phải lớn hơn 0!" },
  ],
  phone: [
    { required: true, message: "Số điện thoại không được bỏ trống!" },
    {
      pattern: /^\d{10,11}$/,
      message: "Số điện thoại không hợp lệ! Vui lòng nhập 10-11 chữ số.",
    },
  ],
  email: [
    { required: true, message: "Email không được bỏ trống!" },
    {
      type: "email",
      message: "Email không hợp lệ!",
    },
  ],
  note: [],
};

export default rules;
