<template>
  <v-footer class="py-4" dark height="auto">
    <v-container class="mx-auto">
      <v-row>
        <v-spacer />
        <v-btn class="mr-0" square title="Go to top" @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
