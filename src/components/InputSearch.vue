<template>
  <v-text-field
    append-icon="mdi-magnify"
    flat
    hide-details
    solo-inverted
    class="hidden-sm-and-down ml-6"
    label="Search"
    v-model="query"
    clearable
  />
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("search");
export default {
  name: "InputSearch",
  data: () => ({
    query: null
  }),
  watch: {
    query: function() {
      this.searchMedia();
    }
  },
  methods: {
    ...mapActions(["setQuery", "getResults", "reset"]),
    async searchMedia() {
      let querySearch = this.query || "";
      const currentRoute = this.$router.currentRoute.name;
      if (querySearch.length >= 3) {
        this.reset();
        await this.getResults(this.query);
        if (currentRoute !== "Search") {
          this.$router.replace({ name: "Search" });
        }
        return;
      }
      this.reset();
      this.setQuery(null);
    }
  },
  computed: {
    ...mapGetters(["data"])
  }
};
</script>
