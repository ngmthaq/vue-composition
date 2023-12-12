import { createApp } from "vue";
import { i18n } from "./plugins/i18n.plugin";
import { router } from "./plugins/router.plugin";
import { store } from "./plugins/pinia.plugin";
import App from "./App.vue";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "./assets/scss/main.scss";

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);
app.mount("#app");
