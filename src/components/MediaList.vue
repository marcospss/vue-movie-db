<template>
  <v-container>
    <v-col cols="12" class="pa-0">
      <slot />
    </v-col>
    <v-row>
      <CardLandscape
        v-for="media in listMedia.results"
        :key="media.id"
        :media="media"
      />
    </v-row>
  </v-container>
</template>
<script>
import CardLandscape from "@/components/CardLandscape";
export default {
  name: "MediaList",
  props: {
    listMedia: {
      type: Object,
      default: () => [],
      required: true
    }
  },
  components: {
    CardLandscape
  },

  data: () => ({})
};
</script>
