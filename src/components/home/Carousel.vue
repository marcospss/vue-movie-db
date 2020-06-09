<template>
  <v-carousel hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet>
        <v-row align="center" justify="center">
          <!-- <v-img style="position: absolute" :src="slide" contain></v-img> -->
          <v-card class="mx-auto" max-width="90%" elevation="0">
            <v-list-item class="pa-0">
              <v-list-item-content>
                <v-list-item-title class="headline">
                  Justice League Dark: Apokolips War
                </v-list-item-title>
                <v-list-item-subtitle>May 15, 2020</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img
              :src="slide"
              max-height="220"
              alt="Justice League Dark: Apokolips War"
            ></v-img>
            <v-card-text class="px-0">
              Earth is decimated after intergalactic tyrant Darkseid has
              devastated the Justice League in a poorly executed war by the DC
              Super Heroes. Now the remaining bastions of good – the Justice
              League, Teen Titans, Suicide Squad and assorted others – must
              regroup, strategize and take the war to Darkseid in order to save
              the planet and its surviving inhabitants.
            </v-card-text>
            <v-card-actions class="px-0">
              <v-btn
                text
                color="accent-4"
                :to="{ name: 'Details', params: { id: 1000 } }"
              >
                Read More
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      slides: [
        "https://image.tmdb.org/t/p/w780/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg",
        "https://image.tmdb.org/t/p/w780/A7xO8NpdS7fbBKGmh84HbSD21OJ.jpg",
        "https://image.tmdb.org/t/p/w780/5dsF3qgRNAFBfc7F388sy1lBiCd.jpg",
        "https://image.tmdb.org/t/p/w780/do4q8TPJYDNf4sJTuCBVEmm597l.jpg",
        "https://image.tmdb.org/t/p/w780/5dsF3qgRNAFBfc7F388sy1lBiCd.jpg",
        "https://image.tmdb.org/t/p/w780/wRreALASTO4nXsrJKTwqTLyNjal.jpg"
      ]
    };
  }
};
</script>
