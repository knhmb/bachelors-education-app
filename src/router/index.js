import { createRouter, createWebHistory } from "@ionic/vue-router";

import CreateAccount from "../pages/CreateAccount.vue";
import Tabs from "../components/Tabs.vue";

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
  {
    path: "/news",
    name: "News",
    component: () => import("../pages/News.vue"),
  },
  {
    path: "/news/:id",
    name: "NewsDetail",
    component: () => import("../pages/NewsDetail.vue"),
  },
  {
    path: "/course",
    name: "Course",
    component: () => import("../pages/Course.vue"),
  },
  {
    path: "/course/:id",
    name: "CourseDetail",
    component: () => import("../pages/CourseDetail.vue"),
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: () => import("../pages/Reservation.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../pages/Account.vue"),
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: () => import("../pages/EditProfile.vue"),
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: () => import("../pages/ChangePassword.vue"),
  },
  {
    path: "/reservation-history",
    name: "ReservationHistory",
    component: () => import("../pages/ReservationHistory.vue"),
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../pages/PrivacyPolicy.vue"),
  },
  {
    path: "/terms-conditions",
    name: "TermsConditions",
    component: () => import("../pages/TermsConditions.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("../pages/AboutUs.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../pages/ContactUs.vue"),
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "tab1",
        component: () => import("../pages/CreateAccount.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
