import { MOVIE } from "../mutationTypes";
import movieService from "@/services/movie";
import commonService from "@/services/common";

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
    genres: [],
    discover: defaultProps,
    nowPlaying: defaultProps,
    recommendations: defaultProps,
    details: {}
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
    },
    [MOVIE.GET_BY_ID_RESET](state, data) {
      state.details = data;
    },
    [MOVIE.GET_BY_ID](state, data) {
      state.details = data;
    },
    [MOVIE.GET_BY_ID_RESET](state, data) {
      state.details = data;
    },
    [MOVIE.GET_RECOMMENDATIONS_LIST_RESET](state, data) {
      state.recommendations = data;
    },
    [MOVIE.GET_RECOMMENDATIONS_LIST](state, data) {
      const currentResults = state.recommendations.results || [];
      state.recommendations = data;
      state.recommendations.results = [...currentResults, ...data.results];
    },
    [MOVIE.GET_GENRES_LIST](state, data) {
      state.genres = data;
    },
    [MOVIE.GET_DISCOVER_LIST_RESET](state, data) {
      state.discover = data;
    },
    [MOVIE.GET_DISCOVER_LIST](state, data) {
      const currentResults = state.discover.results || [];
      state.discover = data;
      state.discover.results = [...currentResults, ...data.results];
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
    },
    async getDetailsAction({ commit }, mediaId) {
      const response = await movieService.details(mediaId);
      const data = response && response.data;
      commit(MOVIE.GET_BY_ID, data);
    },
    async getDetailsResetAction({ commit }) {
      commit(MOVIE.GET_BY_ID_RESET, defaultProps);
    },
    async getRecommendationsResetAction({ commit }) {
      commit(MOVIE.GET_RECOMMENDATIONS_LIST_RESET, defaultProps);
    },
    async getRecommendations({ commit, state }, mediaId) {
      const nextPage = state.recommendations.page
        ? parseInt(state.recommendations.page, 10) + 1
        : 1;
      const response = await movieService.recommendations(mediaId, nextPage);
      const data = response && response.data;
      commit(MOVIE.GET_RECOMMENDATIONS_LIST, data);
    },
    async getGenresAction({ commit }) {
      const response = await commonService.genre("movie");
      const data = response && response.data && response.data.genres;
      commit(MOVIE.GET_GENRES_LIST, data);
    },
    async getDiscoverResetAction({ commit }) {
      commit(MOVIE.GET_DISCOVER_LIST_RESET, defaultProps);
    },
    async getDiscover({ commit, state }, filterOptions) {
      const nextPage = state.discover.page
        ? parseInt(state.discover.page, 10) + 1
        : 1;
      filterOptions.page = nextPage;
      const response = await commonService.discover(filterOptions);
      const data = response && response.data;
      commit(MOVIE.GET_DISCOVER_LIST, data);
    }
  },
  getters: {
    popular: state => state.popular,
    nowPlaying: state => state.nowPlaying,
    nowPlayingShowLoadMore: state => {
      const { page, total_pages } = state.nowPlaying;
      return page < total_pages;
    },
    isFirstLoad: state => state.isFirstLoad,
    details: state => state.details,
    recommendations: state => state.recommendations,
    recommendationsShowLoadMore: state => {
      const { page, total_pages } = state.recommendations;
      return page < total_pages;
    },
    genres: state => state.genres,
    discover: state => state.discover,
    discoverShowLoadMore: state => {
      const { page, total_pages } = state.discover;
      return page < total_pages;
    }
  }
};

export default movie;
