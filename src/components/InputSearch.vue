<template>
  <v-text-field
    append-icon="mdi-magnify"
    flat
    hide-details
    solo-inverted
    class="hidden-sm-and-down ml-6"
    label="Search"
    :value="query"
    clearable
    @input="searchMedia($event)"
  />
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("search");
export default {
  name: "InputSearch",
  methods: {
    ...mapActions(["setQuery", "getResults", "reset"]),
    async searchMedia(value) {
      let querySearch = !!(value && value.length >= 3);
      const currentRoute = this.$router.currentRoute.name;
      if (querySearch) {
        this.reset();
        this.setQuery(value);
        await this.getResults(value);
        if (currentRoute !== "Search") {
          this.$router.replace({ name: "Search" });
        }
      } else {
        this.reset();
      }
      if (!value) {
        this.setQuery(null);
      }
      console.log("value", value);
    }
  },
  computed: {
    ...mapGetters(["data", "query"])
  }
};
</script>
