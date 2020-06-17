<template>
  <v-container>
    <template>
      <Loader :isLoading="isLoading" />
    </template>
    <MediaListLandscape
      v-if="!isLoading"
      :listMedia="favorites"
      :showButtonFavorite="true"
    />
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("favorites");
import Loader from "@/components/Loader";
import MediaListLandscape from "@/components/MediaListLandscape";

export default {
  name: "Favorites",
  components: {
    Loader,
    MediaListLandscape
  },
  data: () => ({
    isLoading: false
  }),
  computed: {
    ...mapGetters(["favorites"])
  }
};
</script>
