import type { AxiosRequestConfig } from "axios";

export type UsePromiseStatus = "idle" | "pending" | "rejected" | "fulfilled";

export type UsePromiseCallback<M> = (configs: AxiosRequestConfig) => Promise<M>;

export type UsePromiseOptions = {
  immediate: boolean;
};

export type UsePromiseState<M> = {
  data: M | null;
  error: any;
  status: UsePromiseStatus;
};
