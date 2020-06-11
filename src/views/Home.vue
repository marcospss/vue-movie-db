<template>
  <div id="home">
    <Carousel :listMedia="popular" />
    <MediaList :listMedia="nowPlaying" @loadMore="loadNowPlaying">
      <h2 class="title font-weight-medium text-uppercase">Now Playing</h2>
    </MediaList>
    <v-divider></v-divider>
    <v-row v-if="nowPlayingShowLoadMore">
      <v-col cols="12" md="4" align="end" justify="center" class="">
        Page: {{ nowPlaying.page }}
      </v-col>
      <v-col cols="12" md="4" align="center" justify="center" class="">
        <v-btn text @click="loadNowPlaying">
          Load More
        </v-btn>
      </v-col>
      <v-col cols="12" md="4" align="start" justify="start" class="">
        Total Pages: {{ nowPlaying.total_pages }}
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("movie");

import Carousel from "@/components/home/Carousel";
import MediaList from "@/components/MediaList";
export default {
  name: "Home",
  components: {
    Carousel,
    MediaList
  },
  data: () => ({
    isLoading: false
  }),
  async created() {
    if (this.isFirstLoad) return;
    await this.loadPopular();
    await this.loadNowPlaying();
  },
  methods: {
    ...mapActions(["getPopularAction", "getNowPlaying"]),
    async loadPopular() {
      await this.getPopularAction();
    },
    async loadNowPlaying() {
      await this.getNowPlaying();
    }
  },
  computed: {
    ...mapGetters([
      "isFirstLoad",
      "popular",
      "nowPlaying",
      "nowPlayingShowLoadMore"
    ])
  }
};
</script>
