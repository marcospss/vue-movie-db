import { USER } from "../mutationTypes";

const defaultInfo = {
  displayName: null,
  email: null
}

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
    async fetchUser({ commit }, user) {
      await commit(USER.SET_LOGGED_IN, user !== null);
      if (user) {
        await commit(USER.SIGN_IN, {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        await commit(USER.SIGN_IN, null);
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
