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
      const currentResults = state.nowPlaying.results || [];
      state.nowPlaying = data;
      state.nowPlaying.results = [...currentResults, ...data.results];
    }
  },
  actions: {
    async getPopularAction({ commit }) {
      const response = await movieService.popular();
      const data = response && response.data && response.data.results;
      commit(MOVIE.GET_POPULAR_LIST, data);
    },
    async getNowPlaying({ commit, state }) {
      const nextPage = state.nowPlaying.page
        ? parseInt(state.nowPlaying.page, 10) + 1
        : 1;
      const response = await movieService.nowPlaying(nextPage);
      const data = response && response.data && response.data;
      commit(MOVIE.GET_NOW_PLAYING_LIST, data);
    }
  },
  getters: {
    popular: state => state.popular,
    nowPlaying: state => state.nowPlaying,
    nowPlayingShowLoadMore: state => {
      const { page, total_pages } = state.nowPlaying;
      return page < total_pages;
    },
    isFirstLoad: state => state.isFirstLoad
  }
};

export default movie;
