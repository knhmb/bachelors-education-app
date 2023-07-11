import { createRouter, createWebHistory } from "@ionic/vue-router";

import CreateAccount from "../pages/CreateAccount.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/create-account-2",
    name: "CreateAccount2",
    component: () => import("../pages/CreateAccount2.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../pages/ForgotPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
