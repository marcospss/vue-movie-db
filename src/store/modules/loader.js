import { LOADER } from "../mutationTypes";

const loader = {
  namespaced: true,
  state: {
    isLoading: false
  },
  mutations: {
    [LOADER.START](state) {
      state.isLoading = true;
    },
    [LOADER.STOP](state) {
      state.isLoading = false;
    }
  },
  actions: {
    startLoader({ commit }) {
      commit(LOADER.START);
    },
    stopLoader({ commit }) {
      commit(LOADER.START);
    }
  },
  getters: {
    isLoading: state => state.isLoading
  }
};

export default loader;
