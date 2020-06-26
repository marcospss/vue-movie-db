import { SEARCH } from "../mutationTypes";
import commonService from "@/services/common";

const defaultProps = {
  page: null,
  total_results: null,
  total_pages: null,
  results: []
};

const search = {
  namespaced: true,
  state: {
    query: null,
    data: defaultProps
  },
  mutations: {
    [SEARCH.SET_QUERY](state, data) {
      state.query = data;
    },
    [SEARCH.GET_RESULTS](state, { query, data }) {
      const currentResults = state.data.results || [];
      state.query = query;
      state.data = data;
      state.data.results = [...currentResults, ...data.results];
    },
    [SEARCH.RESET](state) {
      state.query = null;
      state.data = defaultProps;
    }
  },
  actions: {
    setQuery({ commit }, data) {
      commit(SEARCH.SET_QUERY, data);
    },
    async getResults({ commit, state }, query) {
      const nextPage = state.data.page ? parseInt(state.data.page, 10) + 1 : 1;
      const response = await commonService.search("movie", query, nextPage);
      const data = response && response.data;
      commit(SEARCH.GET_RESULTS, { query, data });
    },
    reset({ commit }) {
      commit(SEARCH.RESET);
    }
  },
  getters: {
    query: state => state.query,
    data: state => state.data,
    searchShowLoadMore: state => {
      const { page, total_pages } = state.data;
      return page < total_pages;
    }
  }
};

export default search;
