<template>
  <v-container>
    <v-row justify="start" align="start">
      <v-col cols="12" sm="3">
        <v-autocomplete
          v-model="filterOptions.year"
          :items="years"
          dense
          outlined
          label="Year"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" sm="3">
        <v-autocomplete
          v-model="filterOptions.genre"
          :items="genres"
          dense
          outlined
          label="Genres"
          item-text="name"
          item-value="id"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" sm="3">
        <v-autocomplete
          v-model="filterOptions.sortBy"
          :items="sortBy"
          dense
          outlined
          label="Sort By"
          item-text="label"
          item-value="value"
        ></v-autocomplete>
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
    <template>
      <Recommendations :listMedia="discover" />
      <v-divider></v-divider>
      <v-row v-if="discoverShowLoadMore">
        <v-col cols="12" md="4" align="end" justify="center" class="">
          Page: {{ discover.page }}
        </v-col>
        <v-col cols="12" md="4" align="center" justify="center" class="">
          <v-btn text @click="loadDiscover(filterOptions)">
            Load More
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" align="start" justify="start" class="">
          Total Pages: {{ discover.total_pages }}
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("movie");
import formatContentMixin from "@/mixins/formatContentMixin";
import Recommendations from "@/components/details/Recommendations";
const date = new Date();
const currentYear = date.getFullYear();
export default {
  name: "Discover",
  components: {
    Recommendations
  },
  mixins: [formatContentMixin],
  data: () => ({
    isLoading: false,
    filterOptions: {
      mediaType: "movie",
      genre: "",
      sortBy: "popularity.asc",
      year: currentYear
    },
    years: [],
    sortBy: [
      {
        value: "popularity.desc",
        label: "Popularity Descending"
      },
      {
        value: "popularity.asc",
        label: "Popularity Ascending"
      },
      {
        value: "vote_average.desc",
        label: "Rating Descending"
      },
      {
        value: "vote_average.asc",
        label: "Rating Ascending"
      },
      {
        value: "primary_release_date.desc",
        label: "Release Date Descending"
      },
      {
        value: "primary_release_date.asc",
        label: "Release Date Ascending"
      },
      {
        value: "title.asc",
        label: "Title (A-Z)"
      },
      {
        value: "title.desc",
        label: "Title (Z-A)"
      }
    ]
  }),
  async created() {
    this.getListYears();
    await this.loadGenres();
    await this.loadDiscover(this.filterOptions);
  },
  methods: {
    ...mapActions(["getGenresAction", "getDiscoverResetAction", "getDiscover"]),
    getListYears() {
      for (let year = currentYear + 1; year >= 1900; year -= 1) {
        this.years.push(year);
      }
    },
    async loadGenres() {
      await this.getGenresAction();
    },
    async loadDiscover(filterOptions) {
      this.getDiscoverResetAction();
      this.isLoading = true;
      await this.getDiscover(filterOptions);
      this.isLoading = false;
    }
  },
  computed: {
    ...mapGetters(["genres", "discover", "discoverShowLoadMore"])
  }
};
</script>
