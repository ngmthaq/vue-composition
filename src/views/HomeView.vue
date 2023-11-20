<script setup lang="ts">
import type { Todo } from "@/services/models/todo.model";
import { ref } from "vue";
import { useNotification } from "@/hooks/customs/useNotification";
import { usePromise } from "@/hooks/customs/usePromise";
import { getTodo } from "@/services/remotes/todo.remote";
import { randomNumber } from "@/plugins/number.plugins";

const notification = useNotification();
const [status, data, error, fetch, reset] = usePromise<Todo>(getTodo);

const id = ref<number>(1);

const handleClick = () => {
  id.value = randomNumber(1, 1000);
  fetch({ id: id.value });
};

const handleReset = () => {
  reset(true);
};

const handleNotice = () => {
  notification.append({ message: "Test Test Test Test Test", variant: "warning" });
};
</script>

<template>
  <h1>This is home page</h1>
  <p v-if="status === 'fulfilled'">Title: {{ data?.title }}</p>
  <p v-else-if="status === 'rejected'">Error: {{ error?.message }}</p>
  <p v-else-if="status === 'pending'">Loading</p>
  <button @click="handleClick">Change Todo</button>
  <button @click="handleReset">Clear</button>
  <button @click="handleNotice">Notice</button>
</template>

<style></style>
