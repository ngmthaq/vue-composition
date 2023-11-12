import { createApp } from "vue";
import { router, store } from "./plugins";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
