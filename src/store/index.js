import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import movie from "./modules/movie";

export default new Vuex.Store({
  modules: {
    movie
  }
});
