<template>
  <v-row v-if="showLoadMore">
    <v-col cols="12" md="4" align="end" justify="center" class="">
      Page: {{ data.page }}
    </v-col>
    <v-col cols="12" md="4" align="center" justify="center" class="">
      <v-btn text @click="triggerAction(filter)">
        Load More
      </v-btn>
    </v-col>
    <v-col cols="12" md="4" align="start" justify="start" class="">
      Total Pages: {{ data.total_pages }}
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "LoadMore",
  props: {
    showLoadMore: {
      type: Boolean,
      default: false,
      required: true
    },
    data: {
      type: Object,
      default: () => {},
      required: true
    },
    filter: {
      type: Object || Number,
      default: () => {},
      required: true
    },
    triggerAction: {
      type: Function,
      default: () => {},
      required: true
    }
  }
};
</script>
