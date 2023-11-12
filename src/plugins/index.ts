import { router } from "./router.plugin";
import { store } from "./pinia.plugin";
import { EventBus } from "./bus.plugin";
import { Api } from "./axios.plugin";

const api = new Api();
const eventBus = new EventBus();

export { router, store, api, eventBus };
