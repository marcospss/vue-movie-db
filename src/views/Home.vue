<template>
  <div id="home">
    <Carousel :listMedia="popular" />
    <NowPlaying />
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("movie");

import Carousel from "@/components/home/Carousel";
import NowPlaying from "@/components/home/NowPlaying";
export default {
  name: "Home",
  components: {
    Carousel,
    NowPlaying
  },
  data: () => ({
    isLoading: false
  }),
  async created() {
    if (this.isFirstLoad) return;
    await this.loadPopular();
  },
  methods: {
    ...mapActions(["getPopularAction"]),
    async loadPopular() {
      await this.getPopularAction();
    }
  },
  computed: {
    ...mapGetters(["isFirstLoad", "popular"])
  }
};
</script>
