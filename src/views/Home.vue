<template>
  <div id="home">
    <Carousel :listMedia="popular" />
    <MediaList :listMedia="nowPlaying">
      <h2 class="title font-weight-medium text-uppercase">Now Playing</h2>
    </MediaList>
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
    ...mapGetters(["isFirstLoad", "popular", "nowPlaying"])
  }
};
</script>
