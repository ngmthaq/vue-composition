import type { ComputedRef, UnwrapRef } from "vue";
import type { UsePromiseCallback, UsePromiseOptions, UsePromiseState, UsePromiseStatus } from "@/types/hooks";
import { computed, onBeforeMount, reactive, ref } from "vue";
import { CanceledError } from "axios";

export function usePromise<M>(
  callback: UsePromiseCallback<M>,
  options: UsePromiseOptions = { immediate: true },
): [
  ComputedRef<UnwrapRef<M> | null>,
  ComputedRef<any>,
  ComputedRef<UsePromiseStatus>,
  () => Promise<void>,
  () => void,
  () => void,
] {
  const abortController = ref<AbortController>(new AbortController());

  const state = reactive<UsePromiseState<M>>({
    data: null,
    error: null,
    status: "idle",
  });

  const data = computed(() => state.data);
  const error = computed(() => state.error);
  const status = computed(() => state.status);

  const fetch = async () => {
    try {
      state.status = "pending";
      const data: any = await callback({ signal: abortController.value.signal });
      state.data = data;
      state.error = null;
      state.status = "fulfilled";
    } catch (error: any) {
      console.warn(error);
      state.data = null;
      if (error instanceof CanceledError) {
        state.error = null;
        state.status = "idle";
      } else {
        state.data = null;
        state.error = error;
        state.status = "rejected";
      }
    }
  };

  const abort = () => {
    abortController.value.abort("Abort API from usePromise");
    abortController.value = new AbortController();
  };

  const reset = (isAbort = false) => {
    if (isAbort) abort();
    state.data = null;
    state.error = null;
    state.status = "idle";
  };

  onBeforeMount(() => {
    if (options.immediate) {
      fetch();
    }
  });

  return [data, error, status, fetch, reset, abort];
}
