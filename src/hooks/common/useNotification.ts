import type { ToastConfigs } from "@/configs/types/components";
import { APP_EVENTS } from "@/configs/constants/app.const";
import { useEventBus } from "./useEventBus";

export const useNotification = () => {
  const eventBus = useEventBus();

  const openAppNotification = (toast: ToastConfigs) => {
    eventBus.emit(APP_EVENTS.eventBus.appendToast, toast);
  };

  const openSystemNotification = (title: string, message: string, icon: string = "/favicon.ico") => {
    return new Notification(title, { body: message, icon: icon });
  };

  return { openAppNotification, openSystemNotification };
};
