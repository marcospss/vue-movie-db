<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar flat>
              <v-toolbar-title>Register form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="submit" autocomplete="off">
                <v-text-field
                  label="Name"
                  name="name"
                  prepend-icon="mdi-account"
                  type="text"
                  required
                  v-model="form.name"
                ></v-text-field>

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
              <v-spacer></v-spacer>
              <v-btn text x-large @click="register">Register</v-btn>
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
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");
import firebase from "@/services/firebase";
export default {
  data: () => ({
    snackbar: false,
    text: null,
    timeout: 4000,
    form: {
      name: "",
      email: "",
      password: ""
    }
  }),
  methods: {
    ...mapActions(["fetchUser"]),
    async register() {
      try {
        const { name, email, password } = this.form;
        const response = await firebase.register(email, password);
        await response.user.updateProfile({
          displayName: name
        });
        this.fetchUser(response.user);
        this.$router.replace({ name: "Home" });
      } catch (error) {
        this.snackbar = true;
        this.text = error.message;
      }
    }
  }
};
</script>
