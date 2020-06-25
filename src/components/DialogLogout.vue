<template>
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

          <v-btn color="red darken-1" text @click="triggerCloseDialogLogout">
            Cancel
          </v-btn>

          <v-btn color="green darken-1" text @click="signOut">
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";
import firebase from "@/services/firebase";

export default {
  name: "DialogLogout",
  props: {
    dialog: {
      type: Boolean,
      default: () => false,
      required: true
    }
  },
  methods: {
    ...mapActions(["user/signOut", "favorites/reset"]),
    async signOut() {
      await firebase.signOut();
      await this["user/signOut"]();
      this["favorites/reset"]();
      this.dialog = false;
    },
    triggerCloseDialogLogout() {
      this.$emit("toggleDialogLogout");
    }
  }
};
</script>
