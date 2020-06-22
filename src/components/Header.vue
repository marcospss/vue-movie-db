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
            v-if="this.$store.getters['favorites/totalFavorites']"
            color="blue-grey ml-1 v-btn--right"
            :content="this.$store.getters['favorites/totalFavorites']"
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
        <v-spacer></v-spacer>
        <template v-if="this.$store.getters['user/loggedIn']">
          <v-btn text @click="dialog = true" exact class="hidden-sm-and-down">
            <v-icon left>mdi-account-box</v-icon>
            <span
              class="d-inline-block text-truncate hidden-sm-and-down font-weight-black user-max-width"
            >
              {{ this.$store.getters["user/info"].displayName }}
            </span>
          </v-btn>
        </template>
        <template v-else>
          <v-btn
            text
            :to="{ name: 'Login' }"
            exact
            class="hidden-sm-and-down user-max-width"
          >
            <v-icon left>mdi-account-box</v-icon>
            Login
          </v-btn>
        </template>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialog" :persistent="true" max-width="400">
          <v-card>
            <v-card-title class="headline">
              Are you sure you want to log out.
            </v-card-title>

            <v-card-text>
              You will be logged out of your account and redirected to Home.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="red darken-1" text @click="dialog = false">
                Cancel
              </v-btn>

              <v-btn color="green darken-1" text @click="signOut">
                Confirm
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "@/services/firebase";

export default {
  name: "Header",
  data: () => ({
    dialog: false
  }),
  methods: {
    ...mapActions(["user/signOut"]),
    async signOut() {
      await firebase.signOut();
      await this["user/signOut"]();
      this.dialog = false;
    }
  },
  computed: {
    ...mapGetters(
      ["favorites/totalFavorites"],
      ["user/loggedIn"],
      ["user/info"]
    )
  }
};
</script>
<style lang="scss">
.user-max-width {
  min-width: 120px;
  max-width: 164px;
}
</style>
