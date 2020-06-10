import INSTANCE_AXIOS from "@/settings/axios";
import { PARAMS_DEFAULT } from "@/settings/api";

export default {
  genre( mediaType) {
    return INSTANCE_AXIOS.get(`/genre/${mediaType}/list?${PARAMS_DEFAULT}`);
  },

  credits(mediaType, mediaId) {
    return INSTANCE_AXIOS.get(
      `/${mediaType}/${mediaId}/credits?${PARAMS_DEFAULT}`
    );
  }
};