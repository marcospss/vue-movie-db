<template>
  <v-container>
    <v-row v-if="query" justify="center" align="center">
      <v-col cols="12">
        <h2 class="font-weight-medium mt-6">Results for: {{ query }}</h2>
      </v-col>
    </v-row>
    <v-row v-if="!data.results.length">
      <v-col cols="12">
        <v-banner single-line>
          <v-icon slot="icon" size="36">
            mdi-comment-alert-outline
          </v-icon>
          Unfortunately, your list is empty.
        </v-banner>
      </v-col>
    </v-row>
    <MediaListPoster :listMedia="data.results" />
    <template>
      <LoadMore
        :showLoadMore="searchShowLoadMore"
        :data="data"
        :filter="query"
        :triggerAction="getResults"
      />
    </template>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("search");
import formatContentMixin from "@/mixins/formatContentMixin";
import MediaListPoster from "@/components/MediaListPoster";
import LoadMore from "@/components/LoadMore";

export default {
  name: "Search",
  components: {
    MediaListPoster,
    LoadMore
  },
  mixins: [formatContentMixin],
  beforeRouteLeave(to, from, next) {
    this.setQuery(null);
    this.reset();
    next();
  },
  data: () => ({
    isLoading: false
  }),
  async created() {},
  methods: {
    ...mapActions(["setQuery", "getResults", "reset"])
  },
  computed: {
    ...mapGetters(["data", "query", "searchShowLoadMore"])
  }
};
</script>
