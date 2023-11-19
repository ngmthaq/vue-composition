<script setup lang="ts">
import { RouterView } from "vue-router";
import CircularLoading from "./components/common/CircularLoading.vue";
import NotificationStack from "./components/common/NotificationStack.vue";
</script>

<template>
  <NotificationStack />
  <CircularLoading />
  <RouterView />
</template>

<style scoped></style>
