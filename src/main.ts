import { createApp } from "vue";
import { store } from "./plugins/pinia.plugin";
import { router } from "./plugins/router.plugin";
import App from "./App.vue";
import "./assets/scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
