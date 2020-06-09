<template>
  <v-container>
    <v-row justify="start" align="start">
      <v-col cols="12" sm="3">
        <v-select :items="items" label="Year" dense outlined></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select :items="items" label="Sort By" dense outlined></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select :items="items" label="Genres" dense outlined></v-select>
      </v-col>
      <v-col cols="12" sm="3">
        <v-btn outlined>
          <v-icon left>mdi-filter</v-icon>
          Filter
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card>
          <v-img
            height="250"
            src="https://image.tmdb.org/t/p/w300/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg"
          ></v-img>

          <v-card-title>Mortal Kombat Legends: Scorpion's Revenge</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
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
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="lighten-2" text>
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card>
          <v-img
            height="250"
            src="https://image.tmdb.org/t/p/w300/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg"
          ></v-img>

          <v-card-title>Mortal Kombat Legends: Scorpion's Revenge</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
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
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="lighten-2" text>
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card>
          <v-img
            height="250"
            src="https://image.tmdb.org/t/p/w300/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg"
          ></v-img>

          <v-card-title>Mortal Kombat Legends: Scorpion's Revenge</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
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
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="lighten-2" text>
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card>
          <v-img
            height="250"
            src="https://image.tmdb.org/t/p/w300/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg"
          ></v-img>

          <v-card-title>Mortal Kombat Legends: Scorpion's Revenge</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
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
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="lighten-2" text>
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Discover",
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>
