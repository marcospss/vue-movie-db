<template>
  <v-carousel hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="media in listMedia" :key="media.id">
      <v-sheet>
        <v-row align="center" justify="center">
          <v-card class="mx-auto" max-width="90%" elevation="0">
            <v-list-item class="pa-0">
              <v-list-item-content>
                <v-list-item-title class="headline">
                  {{ media.title }}
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  toDateString(media.release_date)
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img
              :src="getPathImage(media.backdrop_path)"
              lazy-src="@/assets/images/movie-theater.jpg"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              min-height="250"
              max-height="250"
              position="center top"
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
            <v-card-text class="px-0">{{ media.overview }} </v-card-text>
            <v-card-actions class="px-0">
              <v-btn
                text
                color="accent-4"
                :to="{ name: 'Details', params: { id: media.id } }"
              >
                Read More
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import imageApi from "@/settings/imageApi";
export default {
  name: "Carousel",
  props: {
    listMedia: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    getPathImage(image) {
      const imagePath = `${imageApi.secure_base_url}/${imageApi.backdrop_sizes.w780}`;
      return `${imagePath}${image}`;
    },
    toDateString(releaseDate) {
      const date = new Date(releaseDate);
      return date.toDateString();
    }
  }
};
</script>
