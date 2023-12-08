import { APP_EVENTS } from "@/const/app.const";
import { useEventBus } from "./useEventBus";

export const useCircularLoading = () => {
  const eventBus = useEventBus();

  const open = () => {
    eventBus.emit(APP_EVENTS.eventBus.openCircularLoading, true);
  };

  const close = () => {
    eventBus.emit(APP_EVENTS.eventBus.openCircularLoading, false);
  };

  return { open, close };
};
