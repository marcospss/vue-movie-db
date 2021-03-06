import Vue from "vue";
import VueRouter from "vue-router";
import GlobalShell from "../GlobalShell.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const parseProps = routerObject => ({ id: parseInt(routerObject.params.id) });

const routes = [
  {
    path: "/",
    component: GlobalShell,
    children: [
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
      },
      {
        path: "/search",
        name: "Search",
        component: () =>
          import(/* webpackChunkName: "search" */ "../views/Search.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
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
