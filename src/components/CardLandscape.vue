<template>
  <v-col cols="12" xs="12" sm="6" md="3" lg="3">
    <v-card>
      <v-img
        :src="getPathImage(media.backdrop_path)"
        lazy-src="@/assets/images/movie-theater.jpg"
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="100%"
        min-height="250"
        max-height="250"
        position="center top"
        :alt="media.title"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <ButtonFavorite v-if="showButtonFavorite" :media="media" />
      <v-card-title class="text-break title-box">{{
        media.title
      }}</v-card-title>
      <v-card-subtitle class="pb-0 font-weight-black">{{
        toDateString(media.release_date)
      }}</v-card-subtitle>
      <v-card-actions>
        <v-btn text :to="{ name: 'Details', params: { id: media.id } }">
          Read More
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
import formatContentMixin from "@/mixins/formatContentMixin";

export default {
  name: "CardLandscape",
  props: {
    media: {
      type: Object,
      default: () => {},
      required: true
    },
    showButtonFavorite: {
      type: Boolean,
      default: () => false
    }
  },
  mixins: [formatContentMixin]
};
</script>
<style lang="scss" scoped>
.title-box {
  min-height: 100px;
  max-height: 100px;
}
</style>
