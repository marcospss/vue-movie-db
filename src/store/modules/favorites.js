import { FAVORITES } from "../mutationTypes";

const favorites = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    [FAVORITES.GET_LIST](state, data) {
      state.list = data;
    },
    [FAVORITES.ADD](state, data) {
      state.list.push(data);
    },
    [FAVORITES.REMOVE](state, data) {
      const { id } = data;
      state.list = state.list.filter(media => media.id !== id);
    }
  },
  actions: {
    getList({ commit }) {
      commit(FAVORITES.GET_LIST, []);
    },
    add({ commit }, data) {
      commit(FAVORITES.ADD, data);
    },
    remove({ commit }, data) {
      commit(FAVORITES.REMOVE, data);
    }
  },
  getters: {
    list: state => state.list,
    totalFavorites: state => state.list.length,
    getIsFavorite: state => id => {
      return state.list.find(media => media.id === id);
    }
  }
};

export default favorites;
