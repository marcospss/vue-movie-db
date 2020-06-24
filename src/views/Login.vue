<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="submit" autocomplete="off">
                <v-text-field
                  label="Email"
                  name="email"
                  prepend-icon="mdi-account"
                  type="text"
                  required
                  v-model="form.email"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                  v-model="form.password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                x-large
                :to="{ name: 'Register' }"
                exact
                class="hidden-sm-and-down"
              >
                <v-icon left>mdi-account-box</v-icon>
                Register
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text x-large @click="signIn">Login</v-btn>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-text>
              <v-btn :to="{ name: 'Home' }" large>
                <v-icon left>mdi-backspace</v-icon> Back Home
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" color="error" top>
      {{ text }}
    </v-snackbar>
  </v-app>
</template>

<script>
import firebase from "@/services/firebase";
import { mapActions } from "vuex";

export default {
  data: () => ({
    snackbar: false,
    text: null,
    timeout: 4000,
    form: {
      email: "",
      password: ""
    }
  }),
  methods: {
    ...mapActions(["favorites/getList"]),
    async signIn() {
      try {
        const { email, password } = this.form;
        await firebase.signIn(email, password);
        await this["favorites/getList"]();
        this.$router.replace({ name: "Home" });
      } catch (error) {
        this.snackbar = true;
        this.text = error.message;
      }
    }
  }
};
</script>
