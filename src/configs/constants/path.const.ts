import type { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import AboutView from "@/views/About/AboutView.vue";

export const PATH_HOME: RouteRecordRaw = {
  path: "/",
  component: HomeView,
};

export const PATH_ABOUT: RouteRecordRaw = {
  path: "/about",
  component: AboutView,
};
