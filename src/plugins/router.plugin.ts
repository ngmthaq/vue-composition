import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { PATH_CONST } from "@/const";
import NotFoundView from "@/views/NotFoundView.vue";

const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  component: NotFoundView,
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...Object.values(PATH_CONST), NOT_FOUND_ROUTE],
});

export { router };
