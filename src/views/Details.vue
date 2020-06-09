<template>
  <v-container>
    <v-card max-width="100%" max-height="100%" class="mt-5">
      <v-img
        src="https://image.tmdb.org/t/p/w780/maa4191Pfvs3SGR3ECYC34kaRGQ.jpg"
        alt="Doctor Strange"
      >
        <v-row class="fill-height pa-5" align="center">
          <v-col cols="12" md="7" offset-xs="0" offset-md="5" offset="0">
            <v-divider></v-divider>
            <v-sheet
              cols="12"
              md="7"
              class="pa-12"
              style="background-color: #1e1e1e9a"
            >
              <h1 class="display-3 font-weight-light mt-6">
                Doctor Strange
              </h1>
              <div class="subtitle-1 mt-2">
                Action | Adventure | Fantasy | Science Fiction
              </div>
              <v-row align="center" class="mx-0 pb-4">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>
              <div class="subheading text-uppercase mb-6">
                After his career is destroyed, a brilliant but arrogant surgeon
                gets a new lease on life when a sorcerer takes him under her
                wing and trains him to defend the world against evil.
              </div>
            </v-sheet>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <Recommendations />
  </v-container>
</template>

<script>
import Recommendations from "@/components/details/Recommendations";
export default {
  name: "Details",
  components: {
    Recommendations
  },
  data: () => ({})
};
</script>
