import { MOVIE } from "../mutationTypes";
import movieService from "@/services/movie";
const movie = {
  namespaced: true,
  state: {
    isFirstLoad: false,
    popular: [],
    recommendations: {
      page: null,
      total_results: null,
      total_pages: null,
      results: []
    }
  },
  mutations: {
    [MOVIE.GET_POPULAR_LIST](state, popular) {
      state.popular = popular;
      state.isFirstLoad = true;
    }
  },
  actions: {
    async getPopularAction({ commit }) {
      const popular = await movieService.popular();
      const results = popular && popular.data && popular.data.results;
      commit(MOVIE.GET_POPULAR_LIST, results);
    }
  },
  getters: {
    popular: state => state.popular,
    isFirstLoad: state => state.isFirstLoad
  }
};

export default movie;
