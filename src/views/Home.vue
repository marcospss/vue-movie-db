<template>
  <div id="home">
    <Carousel />
    <NowPlaying />
  </div>
</template>
<script>
import Carousel from "@/components/home/Carousel";
import NowPlaying from "@/components/home/NowPlaying";
export default {
  name: "Home",
  components: {
    Carousel,
    NowPlaying
  }
};
</script>
