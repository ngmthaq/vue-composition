<script setup lang="ts">
import { ref, watch } from "vue";
import { usePromise, useCircularLoading } from "@/hooks";
import { TodoRemoteService } from "@/services";

const loading = useCircularLoading();

const id = ref<number>(1);

const [response, fetch, reset] = usePromise((configs) => new TodoRemoteService().getTodo(id.value, configs));

const { data, error, status } = response;

const handleClick = () => {
  fetch();
};

const handleReset = () => {
  reset(true);
};

watch(
  () => status.value,
  (data) => {
    data === "pending" ? loading.open() : loading.close();
  },
);
</script>

<template>
  <h1>This is an home page</h1>
  <p v-if="status === 'fulfilled'">Title: {{ data?.title }}</p>
  <p v-else-if="status === 'rejected'">Error: {{ error?.message }}</p>
  <p v-else-if="status === 'pending'">Loading</p>
  <button @click="handleClick">Change Todo</button>
  <button @click="handleReset">Clear</button>
</template>

<style></style>
