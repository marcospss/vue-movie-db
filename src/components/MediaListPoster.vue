<template>
  <v-container pa-0 my-4>
    <v-col cols="12">
      <slot />
    </v-col>
    <v-row>
      <CardPoster
        v-for="media in listMedia.results"
        :key="media.id"
        :media="media"
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
      type: Object,
      default: () => [],
      required: true
    }
  },
  components: {
    CardPoster
  }
};
</script>
