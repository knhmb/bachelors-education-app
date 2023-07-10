import { createRouter, createWebHistory } from "@ionic/vue-router";

import CreateAccount from "../pages/CreateAccount.vue";

const routes = [
  {
    path: "/",
    redirect: "/create-account",
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: CreateAccount,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
