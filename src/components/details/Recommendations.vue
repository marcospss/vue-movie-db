<template>
  <v-container pa-0 my-4>
    <v-row dense>
      <v-col cols="12">
        <h2 class="title">Recommendations</h2>
      </v-col>
      <v-col
        cols="12"
        md="4"
        v-for="media in listMedia.results"
        :key="media.id"
        :media="media"
      >
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                :title="media.title"
                class="d-inline-block text-truncate"
                style="max-width: 230px;"
              >
                {{ media.title }}
              </v-card-title>
              <v-card-actions>
                <v-btn text :to="{ name: 'Details', params: { id: media.id } }">
                  Read More
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar size="154" tile>
              <v-img
                :src="getPathImage(media.poster_path, 'w154', 'poster')"
                lazy-src="@/assets/images/movie-theater.jpg"
                :alt="media.title"
                position="center top"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import formatContentMixin from "@/mixins/formatContentMixin";

export default {
  name: "Recommendations",
  props: {
    listMedia: {
      type: Object,
      default: () => [],
      required: true
    }
  },
  mixins: [formatContentMixin]
};
</script>
