<template>
  <v-app>
    <Header />
    <v-content>
      <Loader />
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default {
  name: "GlobalShell",
  components: {
    Header,
    Footer,
    Loader
  }
};
</script>
