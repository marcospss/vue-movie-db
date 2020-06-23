<template>
  <div class="favorite">
    <v-btn absolute fab right top class="v-size--large" @click="triggerAction">
      <v-icon>{{ isFavorite ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" :persistent="true" max-width="400">
      <v-card>
        <v-card-title class="headline">
          You are not logged in.
          <v-btn fab x-small dark absolute right @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          Please register your user or login with your account.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="blue darken-1"
            text
            @click="triggerUserAccount('Register')"
          >
            Register
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="triggerUserAccount('Login')"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      color="success"
      rounded="pill"
      absolute
      z-index="99"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ButtonFavorite",
  props: {
    media: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data: () => ({
    isFavorite: false,
    dialog: false,
    snackbar: false,
    text: null,
    timeout: 40000
  }),
  async created() {
    const { id } = await this.media;
    const findIsFavorite = await this["favorites/getIsFavorite"](id);
    this.isFavorite = !!findIsFavorite;
  },
  methods: {
    ...mapActions(["favorites/add", "favorites/remove"]),
    triggerAction() {
      if (!this["user/loggedIn"]) {
        this.dialog = true;
        return;
      }
      const { uid } = this["user/info"];
      if (this.isFavorite) {
        this["favorites/remove"]({ uid, media: this.media });
        this.isFavorite = false;
        this.snackbar = true;
        this.text = "Successfully removed!";
        return;
      }
      this["favorites/add"]({ uid, media: this.media });
      this.snackbar = true;
      this.text = "Saved successfully!";
      this.isFavorite = true;
    },
    triggerUserAccount(value) {
      this.dialog = false;
      this.$router.replace({ name: value });
    }
  },
  computed: {
    ...mapGetters(["favorites/getIsFavorite", "user/loggedIn", "user/info"])
  }
};
</script>
<style lang="scss" scoped>
.favorite {
  position: relative;
  width: 100%;
  padding: 16px;
}
</style>
