<template>
  <v-app-bar dense app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" />
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-toolbar-title>The Movie Database (TMDb)</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/" exact class="hidden-sm-and-down">
          <v-icon left>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn text to="/discover" class="hidden-sm-and-down">
          <v-icon left>mdi-file-find</v-icon>
          Discover
        </v-btn>
        <v-btn text to="/favorites" class="hidden-sm-and-down">
          <v-icon left>mdi-heart</v-icon>
          Favorites
          <v-badge
            v-if="totalFavorites"
            color="blue-grey ml-1 v-btn--right"
            :content="totalFavorites"
          ></v-badge>
        </v-btn>
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          class="hidden-sm-and-down ml-6"
          label="Search"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("favorites");

export default {
  name: "Header",
  computed: {
    ...mapGetters(["totalFavorites"])
  }
};
</script>
