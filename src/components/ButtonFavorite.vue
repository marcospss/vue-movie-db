<template>
  <div class="favorite">
    <v-btn absolute fab right top class="v-size--large" @click="triggerAction">
      <v-icon>{{ isFavorite ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" :persistent="true" max-width="400">
      <v-card>
        <v-card-title class="headline">
          You are not logged in.
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
    dialog: false
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
        return;
      }
      this["favorites/add"]({ uid, media: this.media });
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
