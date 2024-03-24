import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Flexbox from "@/views/Flexbox.vue";
import Grid from "@/views/Grid.vue";
import Typography from "@/views/Typography.vue";
import Forms from "@/views/Forms.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/flexbox",
    name: "Flexbox",
    component: Flexbox,
  },
  {
    path: "/grid",
    name: "Grid",
    component: Grid,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
