import INSTANCE_AXIOS from "@/settings/axios";
import { PARAMS_DEFAULT } from "@/settings/api";

export default {
  discover(sortBy = "popularity.desc", page = 1) {
    return INSTANCE_AXIOS.get(
      `/discover/movie?${PARAMS_DEFAULT}&page=${page}&sort_by=${sortBy}&include_adult=false&include_video=false`
    );
  },

  search(query, page = 1) {
    return INSTANCE_AXIOS.get(
      `/search/movie?${PARAMS_DEFAULT}&page=${page}&query=${query}&include_adult=false`
    );
  },

  details(mediaId) {
    return INSTANCE_AXIOS.get(`/movie/${mediaId}?${PARAMS_DEFAULT}`);
  },

  recommendations(mediaId, page = 1) {
    return INSTANCE_AXIOS.get(
      `/movie/${mediaId}/recommendations?${PARAMS_DEFAULT}&page=${page}`
    );
  },

  similar(mediaId, page = 1) {
    return INSTANCE_AXIOS.get(
      `/movie/${mediaId}/similar?${PARAMS_DEFAULT}&page=${page}`
    );
  },

  nowPlaying(page = 1) {
    return INSTANCE_AXIOS.get(
      `/movie/now_playing?${PARAMS_DEFAULT}&page=${page}`
    );
  },

  popular(page = 1) {
    return INSTANCE_AXIOS.get(`/movie/popular?${PARAMS_DEFAULT}&page=${page}`);
  },

  topRated(page = 1) {
    return INSTANCE_AXIOS.get(
      `/movie/top_rated?${PARAMS_DEFAULT}&page=${page}`
    );
  },

  upcoming(page = 1) {
    return INSTANCE_AXIOS.get(`/movie/upcoming?${PARAMS_DEFAULT}&page=${page}`);
  }
};
