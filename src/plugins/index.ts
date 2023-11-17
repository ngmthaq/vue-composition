import { router } from "./router.plugin";
import { store } from "./pinia.plugin";
import { eventBus } from "./bus.plugin";
import { api } from "./axios.plugin";
import { datetimeUtils } from "./datetime.plugin";
import { objectUtils } from "./object.plugin";
import { arrayUtils } from "./array.plugin";

export { router, store, api, eventBus, datetimeUtils, objectUtils, arrayUtils };
