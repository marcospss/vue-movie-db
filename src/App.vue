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
  name: "App",
  components: {
    Header,
    Footer,
    Loader
  }
};
</script>
<style lang="scss">
body {
  background: url(./assets/images/movie-theater.jpg) no-repeat center top;
  background-size: 100% 100%;
}
</style>
