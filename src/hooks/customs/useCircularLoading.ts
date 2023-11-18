import { APP_CONST } from "@/const";
import { useEventBus } from "../index";

export const useCircularLoading = () => {
  const eventBus = useEventBus();

  const open = () => {
    eventBus.emit(APP_CONST.EVENT_BUS.openCircularLoading, true);
  };

  const close = () => {
    eventBus.emit(APP_CONST.EVENT_BUS.openCircularLoading, false);
  };

  return { open, close };
};
