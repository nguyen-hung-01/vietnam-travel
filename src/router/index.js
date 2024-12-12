import { createRouter, createWebHistory } from "vue-router";
import { message } from "ant-design-vue";
import {
  HomePage,
  AboutPage,
  ContactPage,
  BlogPage,
  ServicePage,
  ProfilePage,
  DestinationPage,
  DestinationDetailPage,
  BookingPage,
  NotFoundPage,
  AccountPage,
} from "@/pages/index.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/about", name: "about", component: AboutPage },
    { path: "/contact", name: "contact", component: ContactPage },
    { path: "/blog", name: "blog", component: BlogPage },
    { path: "/service", name: "service", component: ServicePage },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
      meta: { requiresAuth: true },
    },
    { path: "/destination", name: "destination", component: DestinationPage },
    {
      path: "/destination-detail/:id",
      name: "destination-detail",
      component: DestinationDetailPage,
    },
    {
      path: "/booking/:id",
      name: "booking",
      component: BookingPage,
      meta: { requiresAuth: true },
    },
    { path: "/account", name: "account", component: AccountPage },
    { path: "/:catchAll(.*)", name: "NotFound", component: NotFoundPage },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (to.meta.requiresAuth && !isLoggedIn) {
    message.warning("Bạn chưa đăng nhập!");
    next({ name: "account" });
  } else if (to.name === "login" && isLoggedIn) {
    next({ name: "home" });
  } else {
    next();
  }
});
export default router;
