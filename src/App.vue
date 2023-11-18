<script setup lang="ts">
import { RouterView } from "vue-router";
import CircularLoading from "./components/common/CircularLoading.vue";
</script>

<template>
  <CircularLoading />
  <RouterView />
</template>

<style scoped></style>
