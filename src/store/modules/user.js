import { USER } from "../mutationTypes";

const defaultInfo = {
  displayName: null,
  email: null,
  uid: null
};

const user = {
  namespaced: true,
  state: {
    loggedIn: false,
    info: defaultInfo
  },
  mutations: {
    [USER.SET_LOGGED_IN](state, value) {
      state.loggedIn = value;
    },
    [USER.SIGN_IN](state, data) {
      state.info = data;
    },
    [USER.SIGN_OUT](state) {
      state.loggedIn = false;
      state.info = defaultInfo;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit(USER.SET_LOGGED_IN, user !== null);
      if (user) {
        commit(USER.SIGN_IN, {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        });
      } else {
        commit(USER.SIGN_IN, null);
      }
    },
    async signOut({ commit }) {
      await commit(USER.SIGN_OUT);
    }
  },
  getters: {
    loggedIn: state => state.loggedIn,
    info: state => state.info
  }
};

export default user;
