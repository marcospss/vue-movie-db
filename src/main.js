import Vue from "vue";
import { mapActions } from "vuex";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "./services/firebase";

import ButtonFavorite from "@/components/ButtonFavorite.vue";

Vue.config.productionTip = false;

Vue.component("ButtonFavorite", ButtonFavorite);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  async created() {
    firebase.initializeApp();
    firebase.auth(store);
    await this.loadFavorites();
  },
  methods: {
    ...mapActions(["favorites/getList"]),
    async loadFavorites() {
      await this["favorites/getList"]();
    }
  }
}).$mount("#app");
