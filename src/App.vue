<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { TodoRemoteService } from "./services";
import { usePromise } from "./hooks";

const id = ref<number>(1);

const [data, error, status, fetch, reset, abort] = usePromise((configs) =>
  new TodoRemoteService().getTodo(id.value, configs),
);

const handleClick = () => {
  fetch();
};
</script>

<template>
  <RouterView />
  <p v-if="status === 'fulfilled'">Title: {{ data?.title }}</p>
  <p v-else-if="status === 'rejected'">Error: {{ error?.message }}</p>
  <p v-else-if="status === 'pending'">Loading</p>
  <button @click="handleClick">Change Todo</button>
  <button @click="abort">Clear</button>
</template>

<style scoped></style>
