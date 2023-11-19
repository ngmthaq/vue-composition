<script setup lang="ts">
import type { ToastConfigs } from "@/types/components";
import { onBeforeMount, onUnmounted, onUpdated, ref, watch } from "vue";
import { Toast } from "bootstrap";
import { useEventBus } from "@/hooks";
import { APP_CONST } from "@/const";
import { strUtils } from "@/plugins";

const DELAY = 6000;
const MAX = 5;

const eventBus = useEventBus();

const newToast = ref<ToastConfigs>();
const toasts = ref<ToastConfigs[]>([]);

const handleAppendToast = (toast: ToastConfigs) => {
  newToast.value = toast;
};

watch(
  () => newToast.value,
  (toast) => {
    if (toast) {
      const openedToasts = toasts.value.filter((toast) => toast.status === "opened");
      if (openedToasts.length >= MAX) {
        const element = document.getElementById(openedToasts[0].id as string) as Element;
        const bootstrapToast = new Toast(element, { delay: DELAY });
        const index = toasts.value.findIndex((toast) => toast.id === openedToasts[0].id);
        toasts.value[index].status = "closed";
        bootstrapToast.hide();
      }

      toast.status = "idle";
      toast.id = "toast_item_" + Date.now() + "_" + strUtils.random(16);
      toasts.value = [...toasts.value, toast];
    }
  },
);

onBeforeMount(() => {
  eventBus.on(APP_CONST.EVENT_BUS.appendToast, handleAppendToast);
});

onUnmounted(() => {
  eventBus.off(APP_CONST.EVENT_BUS.appendToast, handleAppendToast);
});

onUpdated(() => {
  toasts.value.forEach((toast) => {
    if (toast.status === "idle") {
      const element = document.getElementById(toast.id as string) as Element;
      const bootstrapToast = new Toast(element, { delay: DELAY });
      bootstrapToast.show();
      toast.status = "opened";
      element.addEventListener("hidden.bs.toast", () => {
        toast.status = "closed";
      });
    }
  });
});
</script>

<template>
  <div class="toast-container position-fixed bottom-0 end-0">
    <template v-for="(toast, index) in toasts" :key="toast.id">
      <div
        class="toast align-items-center border-0 ms-0 me-1 my-1"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        :id="toast.id"
        :class="`text-bg-${toast.variant}`"
      >
        <div class="d-flex">
          <div class="toast-body">{{ toast.message + " " + index }}</div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
