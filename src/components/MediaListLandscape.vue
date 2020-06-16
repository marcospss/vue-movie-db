<template>
  <v-container>
    <v-col cols="12" class="pa-0">
      <slot />
    </v-col>
    <v-row>
      <CardLandscape
        v-for="media in listMedia"
        :key="media.id"
        :media="media"
        :showButtonFavorite="showButtonFavorite"
      />
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
  components: {
    CardLandscape
  },

  data: () => ({})
};
</script>
