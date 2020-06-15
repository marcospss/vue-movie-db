<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <MediaListLandscape>
          <h2 class="title font-weight-medium text-uppercase">Now Playing</h2>
        </MediaListLandscape>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MediaListLandscape from "@/components/MediaListLandscape";
export default {
  name: "NowPlaying",
  components: {
    MediaListLandscape
  },
  data: () => ({})
};
</script>
