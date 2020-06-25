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
        <v-btn outlined @click="applyFilters()">
          <v-icon left>mdi-filter</v-icon>
          Filter
        </v-btn>
      </v-col>
    </v-row>
    <template>
      <Loader :isLoading="isLoading" />
    </template>
    <MediaListPoster v-if="!isLoading" :listMedia="discover.results" />
    <template>
      <v-divider></v-divider>
      <LoadMore
        :showLoadMore="discoverShowLoadMore"
        :data="discover"
        :filter="filterOptions"
        :triggerAction="loadMoreDiscover"
      />
    </template>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("movie");
import formatContentMixin from "@/mixins/formatContentMixin";
import Loader from "@/components/Loader";
import MediaListPoster from "@/components/MediaListPoster";
import LoadMore from "@/components/LoadMore";

const date = new Date();
const currentYear = date.getFullYear();
export default {
  name: "Discover",
  components: {
    Loader,
    MediaListPoster,
    LoadMore
  },
  mixins: [formatContentMixin],
  beforeRouteLeave(to, from, next) {
    this.getDiscoverResetAction();
    next();
  },
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
    async loadDiscover() {
      this.isLoading = true;
      await this.getDiscover(this.filterOptions);
      this.isLoading = false;
    },
    applyFilters() {
      this.getDiscoverResetAction();
      this.loadDiscover(this.filterOptions);
    },
    async loadMoreDiscover() {
      await this.getDiscover(this.filterOptions);
    }
  },
  computed: {
    ...mapGetters(["genres", "discover", "discoverShowLoadMore"])
  }
};
</script>
