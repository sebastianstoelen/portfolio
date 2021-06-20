import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import BuurtBox from "@/views/BuurtBox.vue";
import Chillz from "@/views/Chillz.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buurtbox",
    name: "BuurtBox",
    component: BuurtBox,
  },
  {
    path: "/chillz",
    name: "Chillz",
    component: Chillz,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {top: 0}
  }
});
export default router;
