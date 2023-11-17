import { router } from "./router.plugin";
import { store } from "./pinia.plugin";
import { EventBus } from "./bus.plugin";
import { Api } from "./axios.plugin";
import { Datetime } from "./datetime.plugin";
import { ObjectUtils } from "./object.plugin";

const objectUtils = new ObjectUtils();
const datetime = new Datetime();
const eventBus = new EventBus();
const api = new Api();

export { router, store, api, eventBus, datetime, objectUtils };
