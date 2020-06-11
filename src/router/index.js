import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const parseProps = routerObject => ({ id: parseInt(routerObject.params.id) });

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "Details",
    props: parseProps,
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
    name: "Discover",
    component: () =>
      import(/* webpackChunkName: "discover" */ "../views/Discover.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;
