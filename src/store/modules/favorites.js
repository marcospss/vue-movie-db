import { FAVORITES } from "../mutationTypes";
// import firebase from "@/services/firebase";

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
    async add({ commit }, { uid, media }) {
      // await firebase.addWatchList(uid, media);
      commit(FAVORITES.ADD, media);
    },
    async remove({ commit }, { uid, media }) {
      // await firebase.removeWatchList(uid, media);
      commit(FAVORITES.REMOVE, media);
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
