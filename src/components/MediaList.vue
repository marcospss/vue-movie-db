<template>
  <v-container>
    <v-col cols="12" class="pa-0">
      <slot />
    </v-col>
    <v-row>
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
      <CardLandscape />
    </v-row>
  </v-container>
</template>
<script>
import CardLandscape from "@/components/CardLandscape";
export default {
  name: "MediaList",

  components: {
    CardLandscape
  },

  data: () => ({
    //
  })
};
</script>
