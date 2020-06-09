<template>
  <v-container>
    <v-card max-width="100%">
      <v-img
        src="https://image.tmdb.org/t/p/w780/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg"
        alt="Justice League Dark: Apokolips War"
      >
        <v-row class="fill-height pa-5" align="center">
          <v-col cols="12" md="7" offset-md="5">
            <h1 class="display-3 font-weight-light mb-4">
              Justice League Dark: Apokolips War
            </h1>
            <div class="subheading text-uppercase pl-2 mb-4">
              Earth is decimated after intergalactic tyrant Darkseid has
              devastated the Justice League in a poorly executed war by the DC
              Super Heroes. Now the remaining bastions of good – the Justice
              League, Teen Titans, Suicide Squad and assorted others – must
              regroup, strategize and take the war to Darkseid in order to save
              the planet and its surviving inhabitants.
            </div>

            <v-btn color="primary" depressed>
              Subscribe
            </v-btn>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>
