import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import movie from "./modules/movie";
import favorites from "./modules/favorites";
import loader from "./modules/loader";
import user from "./modules/user";
import search from "./modules/search";

export default new Vuex.Store({
  modules: {
    loader,
    movie,
    favorites,
    user,
    search
  }
});
