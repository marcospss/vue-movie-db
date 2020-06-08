import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details",
    name: "Details",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details.vue")
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () =>
      import(/* webpackChunkName: "favorites" */ "../views/Favorites.vue")
  },
  {
    path: "/discover",
    name: "discover",
    component: () =>
      import(/* webpackChunkName: "discover" */ "../views/Discover.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
