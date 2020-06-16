<template>
  <v-container pa-0 my-4>
    <v-col cols="12">
      <slot />
    </v-col>
    <v-row>
      <CardPoster
        v-for="media in listMedia"
        :key="media.id"
        :media="media"
        :showButtonFavorite="showButtonFavorite"
      />
    </v-row>
  </v-container>
</template>
<script>
import CardPoster from "@/components/CardPoster";
export default {
  name: "MediaListPoster",
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
  components: {
    CardPoster
  }
};
</script>
