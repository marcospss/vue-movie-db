import { MOVIE } from "../mutationTypes";
import movieService from "@/services/movie";

const defaultProps = {
  page: null,
  total_results: null,
  total_pages: null,
  results: []
};

const movie = {
  namespaced: true,
  state: {
    isFirstLoad: false,
    popular: [],
    nowPlaying: defaultProps,
    recommendations: defaultProps
  },
  mutations: {
    [MOVIE.GET_POPULAR_LIST](state, data) {
      state.popular = data;
      state.isFirstLoad = true;
    },
    [MOVIE.GET_NOW_PLAYING_LIST](state, data) {
      state.nowPlaying = data;
    }
  },
  actions: {
    async getPopularAction({ commit }) {
      const response = await movieService.popular();
      const results = response && response.data && response.data.results;
      commit(MOVIE.GET_POPULAR_LIST, results);
    },
    async getNowPlaying({ commit }) {
      const response = await movieService.nowPlaying();
      const results = response && response.data && response.data;
      commit(MOVIE.GET_NOW_PLAYING_LIST, results);
    }
  },
  getters: {
    popular: state => state.popular,
    nowPlaying: state => state.nowPlaying,
    isFirstLoad: state => state.isFirstLoad
  }
};

export default movie;
