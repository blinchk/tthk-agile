import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Manifesto from "../views/Manifesto.vue";
import Principles from "../views/Principles";
import History from "../views/History";
import CodingInterview from "../views/CodingInterview";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/manifesto",
    name: "Manifesto",
    component: Manifesto
  },
  {
    path: "/principles",
    name: "Principles",
    component: Principles
  },
  {
    path: "/history",
    name: "History",
    component: History
  },
  {
    path: "/coding-interview",
    name: "Coding Interview",
    component: CodingInterview
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
