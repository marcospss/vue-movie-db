<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <MediaList>
          <h2 class="title">Now Playing</h2>
        </MediaList>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MediaList from "@/components/MediaList";
export default {
  name: "NowPlaying",

  components: {
    MediaList
  },

  data: () => ({
    //
  })
};
</script>
