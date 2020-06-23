import { axios_API_TMDB } from "@/settings/axios";
import { PARAMS_DEFAULT } from "@/settings/api";

export default {
  genre(mediaType) {
    return axios_API_TMDB.get(`/genre/${mediaType}/list?${PARAMS_DEFAULT}`);
  },

  credits(mediaType, mediaId) {
    return axios_API_TMDB.get(
      `/${mediaType}/${mediaId}/credits?${PARAMS_DEFAULT}`
    );
  },

  discover(filters) {
    const { mediaType, page, sortBy, genre, year } = filters;
    return axios_API_TMDB.get(
      `/discover/${mediaType}?${PARAMS_DEFAULT}&page=${page}&sort_by=${sortBy}&with_genres=${genre}&year=${year}`
    );
  },

  search(mediaType, query, page = 1) {
    return axios_API_TMDB.get(
      `/search/${mediaType}?${PARAMS_DEFAULT}&page=${page}&query=${query}&include_adult=false`
    );
  }
};
