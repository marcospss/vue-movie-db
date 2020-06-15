<template>
  <MediaListPoster :listMedia="listMedia">
    <h2 class="title">Recommendations</h2>
  </MediaListPoster>
</template>
<script>
import MediaListPoster from "@/components/MediaListPoster";

export default {
  name: "Recommendations",
  components: {
    MediaListPoster
  },
  props: {
    listMedia: {
      type: Object,
      default: () => [],
      required: true
    }
  }
};
</script>
