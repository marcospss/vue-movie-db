import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("favorites");

import ButtonFavorite from "@/components/ButtonFavorite.vue";

Vue.config.productionTip = false;

Vue.component("ButtonFavorite", ButtonFavorite);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  async created() {
    await this.loadFavorites();
  },
  methods: {
    ...mapActions(["getList"]),
    async loadFavorites() {
      this.isLoading = true;
      await this.getList();
      this.isLoading = false;
    }
  },
  computed: {
    ...mapGetters(["favorites"])
  }
}).$mount("#app");
