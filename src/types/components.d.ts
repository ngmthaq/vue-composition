export type ToastConfigs = {
  id?: string;
  message: string;
  variant: "primary" | "warning" | "danger" | "success" | "info";
  status?: "idle" | "opened" | "closed";
};
