<template>
  <div id="home">
    <Loader :isLoading="isLoading" />
    <Carousel v-if="!isLoading" :listMedia="popular" />
    <MediaListLandscape v-if="!isLoading" :listMedia="nowPlaying.results">
      <h2 class="title font-weight-medium text-uppercase">Now Playing</h2>
    </MediaListLandscape>
    <v-divider></v-divider>
    <LoadMore
      :showLoadMore="nowPlayingShowLoadMore"
      :data="nowPlaying"
      :filter="{}"
      :triggerAction="loadMoreNowPlaying"
    />
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("movie");

import Loader from "@/components/Loader";
import Carousel from "@/components/home/Carousel";
import MediaListLandscape from "@/components/MediaListLandscape";
import LoadMore from "@/components/LoadMore";
export default {
  name: "Home",
  components: {
    Loader,
    Carousel,
    MediaListLandscape,
    LoadMore
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
      this.isLoading = true;
      await this.getPopularAction();
      this.isLoading = false;
    },
    async loadNowPlaying() {
      this.isLoading = true;
      await this.getNowPlaying();
      this.isLoading = false;
    },
    async loadMoreNowPlaying() {
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
