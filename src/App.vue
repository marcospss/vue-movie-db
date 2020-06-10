<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
body {
  background: url(./assets/images/movie-theater.jpg) no-repeat center top;
  background-size: 100% 100%;
}
</style>
