<template>
  <component :is="isHomePage ? HomeHeaderLayout : DefaultHeaderLayout" />
  <RouterView />
  <FooterLayout />
</template>
<script setup>
import { ref, computed } from "vue";
import { RouterView, useRouter } from "vue-router";
import {
  HomeHeaderLayout,
  DefaultHeaderLayout,
  FooterLayout,
} from "@/layouts/index";

const router = useRouter();
const isHomePage = computed(() => router.currentRoute.value.path === "/");
</script>
<style scoped></style>
