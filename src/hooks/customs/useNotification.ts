import type { ToastConfigs } from "@/types/components";
import { APP_CONST } from "@/const";
import { useEventBus } from "../index";

export const useNotification = () => {
  const eventBus = useEventBus();
  const append = (toast: ToastConfigs) => {
    eventBus.emit(APP_CONST.EVENT_BUS.appendToast, toast);
  };

  return { append };
};
