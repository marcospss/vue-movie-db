<template>
  <v-container>
    <template>
      <Loader :isLoading="isLoading" />
    </template>
    <template v-if="!isLoading">
      <v-card max-width="100%" max-height="100%" class="mt-5">
        <v-img
          :src="getPathImage(details.backdrop_path)"
          lazy-src="@/assets/images/movie-theater.jpg"
          position="center top"
          min-height="560"
          max-height="560"
          :alt="details.title"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
          <v-btn :to="{ name: 'Home' }" large>
            <v-icon left>mdi-backspace</v-icon> Back Home
          </v-btn>
          <v-row class="fill-height pa-5" align="center">
            <v-col cols="12" md="8" offset-xs="0" offset-md="4" offset="0">
              <v-sheet cols="12" md="7" class="pa-12 bg-info-details">
                <ButtonFavorite class="pos-button-favorite" :media="details" />
                <h1 class="display-3 font-weight-light mt-6">
                  {{ details.title }}
                </h1>
                <div class="subtitle-1 mt-2 d-flex">
                  <span>
                    <v-icon left>mdi-calendar</v-icon>
                    {{ toDateString(details.release_date) }}
                  </span>
                  <span class="ml-5">
                    <v-icon left>mdi-clock</v-icon>
                    {{ convertMinutesToTime(details.runtime) }}
                  </span>
                </div>
                <div class="subtitle-1">
                  {{ genresList(details.genres) }}
                </div>
                <v-row align="center" class="mx-0 mb-4">
                  <v-rating
                    :value="details.vote_average"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="ml-4">
                    {{ details.vote_average }} ({{ details.vote_count }})
                  </div>
                </v-row>
                <div class="subheading text-uppercase mb-6">
                  {{ details.overview }}
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </template>
    <template v-if="hasRecommendations">
      <Recommendations :listMedia="recommendations.results" />
      <v-divider></v-divider>
      <LoadMore
        :showLoadMore="recommendationsShowLoadMore"
        :data="recommendations"
        :filter="id"
        :triggerAction="loadRecommendations"
      />
    </template>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("movie");
import formatContentMixin from "@/mixins/formatContentMixin";
import Loader from "@/components/Loader";
import Recommendations from "@/components/details/Recommendations";
import LoadMore from "@/components/LoadMore";
import ButtonFavorite from "@/components/ButtonFavorite";
export default {
  name: "Details",
  components: {
    Recommendations,
    Loader,
    LoadMore,
    ButtonFavorite
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  mixins: [formatContentMixin],
  data: () => ({
    isLoading: false,
    hasRecommendations: false
  }),
  async created() {
    await this.loadDetails(this.id);
    await this.loadRecommendations(this.id);
  },
  watch: {
    id: async function() {
      await this.loadDetails(this.id);
      await this.loadRecommendations(this.id);
    }
  },
  methods: {
    ...mapActions([
      "getDetailsResetAction",
      "getDetailsAction",
      "getRecommendationsResetAction",
      "getRecommendations"
    ]),
    async loadDetails(id) {
      this.getDetailsResetAction();
      this.getRecommendationsResetAction();
      this.isLoading = true;
      await this.getDetailsAction(id);
      this.isLoading = false;
    },
    async loadRecommendations(id) {
      this.isLoading = true;
      await this.getRecommendations(id);
      this.hasRecommendations =
        this.recommendations &&
        this.recommendations.results &&
        this.recommendations.results.length;
      this.isLoading = false;
    }
  },
  computed: {
    ...mapGetters(["details", "recommendations", "recommendationsShowLoadMore"])
  }
};
</script>
<style lang="scss" scoped>
.bg-info-details {
  background-color: #1e1e1e9a;
  position: relative;
}
.pos-button-favorite {
  top: 0px;
  position: absolute;
  right: 0px;
}
</style>
