import { FAVORITES } from "../mutationTypes";
import firebase from "@/services/firebase";

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
    async getList({ commit, rootGetters }) {
      setTimeout(async function() {
        const loggedIn = rootGetters["user/loggedIn"];
        if (loggedIn) {
          const { uid } = rootGetters["user/info"];
          const response = await firebase.getWatchList(uid);
          const watchList = (response.data && Object.values(response.data)) || [];
          commit(FAVORITES.GET_LIST, watchList);
          return;
        }
        commit(FAVORITES.GET_LIST, []);
      }, 1500);
    },
    async add({ commit }, { uid, media }) {
      await firebase.addWatchList(uid, media);
      commit(FAVORITES.ADD, media);
    },
    async remove({ commit }, { uid, media }) {
      await firebase.removeWatchList(uid, media);
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
