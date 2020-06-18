<template>
  <v-container>
    <v-col cols="12" class="pa-0">
      <slot />
    </v-col>
    <v-row v-if="!!listMedia.length">
      <CardLandscape
        v-for="media in listMedia"
        :key="media.id"
        :media="media"
        :showButtonFavorite="showButtonFavorite"
      />
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-banner single-line @click:icon="backHome">
          <v-icon slot="icon" size="36">
            mdi-comment-alert-outline
          </v-icon>
          Unfortunately, your favorites list is empty.

          <template v-slot:actions>
            <v-btn :to="{ name: 'Home' }" text large>
              Back home
            </v-btn>
          </template>
        </v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardLandscape from "@/components/CardLandscape";
export default {
  name: "MediaListLandscape",
  props: {
    listMedia: {
      type: Array,
      default: () => [],
      required: true
    },
    showButtonFavorite: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    backHome() {
      this.$router.push("/");
    }
  },
  components: {
    CardLandscape
  }
};
</script>
