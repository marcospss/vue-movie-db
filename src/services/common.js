import INSTANCE_AXIOS from "@/settings/axios";
import { PARAMS_DEFAULT } from "@/settings/api";

export default {
  genre(mediaType) {
    return INSTANCE_AXIOS.get(`/genre/${mediaType}/list?${PARAMS_DEFAULT}`);
  },

  credits(mediaType, mediaId) {
    return INSTANCE_AXIOS.get(
      `/${mediaType}/${mediaId}/credits?${PARAMS_DEFAULT}`
    );
  },

  discover(filters) {
    const { mediaType, page, sortBy, genre, year } = filters;
    return INSTANCE_AXIOS.get(
      `/discover/${mediaType}?${PARAMS_DEFAULT}&page=${page}&sort_by=${sortBy}&with_genres=${genre}&year=${year}`
    );
  },

  search(mediaType, query, page = 1) {
    return INSTANCE_AXIOS.get(
      `/search/${mediaType}?${PARAMS_DEFAULT}&page=${page}&query=${query}&include_adult=false`
    );
  }
};
