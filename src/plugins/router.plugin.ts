import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import * as PATH_CONST from "@/configs/constants/path.const";
import NotFoundView from "@/views/NotFoundView.vue";

const PATH_NOT_FOUND: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  component: NotFoundView,
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...Object.values(PATH_CONST), PATH_NOT_FOUND],
});

export { router };
