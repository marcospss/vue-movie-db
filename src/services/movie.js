import { axios_API_TMDB } from "@/settings/axios";
import { PARAMS_DEFAULT } from "@/settings/api";

export default {
  details(mediaId) {
    return axios_API_TMDB.get(`/movie/${mediaId}?${PARAMS_DEFAULT}`);
  },

  recommendations(mediaId, page = 1) {
    return axios_API_TMDB.get(
      `/movie/${mediaId}/recommendations?${PARAMS_DEFAULT}&page=${page}`
    );
  },

  similar(mediaId, page = 1) {
    return axios_API_TMDB.get(
      `/movie/${mediaId}/similar?${PARAMS_DEFAULT}&page=${page}`
    );
  },

  nowPlaying(page = 1) {
    return axios_API_TMDB.get(
      `/movie/now_playing?${PARAMS_DEFAULT}&page=${page}`
    );
  },

  popular(page = 1) {
    return axios_API_TMDB.get(`/movie/popular?${PARAMS_DEFAULT}&page=${page}`);
  },

  topRated(page = 1) {
    return axios_API_TMDB.get(
      `/movie/top_rated?${PARAMS_DEFAULT}&page=${page}`
    );
  },

  upcoming(page = 1) {
    return axios_API_TMDB.get(`/movie/upcoming?${PARAMS_DEFAULT}&page=${page}`);
  }
};
