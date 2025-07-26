import HomePage from "@/views/HomePage.vue";
import Info from "@/views/Info.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "info",
      path: "/info",
      component: Info,
    },
  ],
});

export default router;
