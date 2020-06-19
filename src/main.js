import Vue from "vue";
import { mapActions } from "vuex";
import * as firebase from "firebase";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import ButtonFavorite from "@/components/ButtonFavorite.vue";

Vue.config.productionTip = false;

Vue.component("ButtonFavorite", ButtonFavorite);

const configOptions = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("user/fetchUser", user);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  async created() {
    await this.loadFavorites();
  },
  methods: {
    ...mapActions(["favorites/getList"]),
    async loadFavorites() {
      await this["favorites/getList"]();
    }
  }
}).$mount("#app");
