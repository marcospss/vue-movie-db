import imageApi from "@/settings/imageApi";
import placeholder from "@/assets/images/movie-theater.jpg";

export default {
  methods: {
    getPathImage(image, size = "w780", format = "backdrop") {
      const formatImage =
        format === "backdrop"
          ? imageApi.backdrop_sizes[size]
          : imageApi.poster_sizes[size];
      const imagePath = `${imageApi.secure_base_url}${formatImage}`;
      return image ? `${imagePath}${image}` : placeholder;
    },
    toDateString(releaseDate) {
      const date = new Date(releaseDate);
      return date.toDateString();
    },
    convertMinutesToTime(data) {
      if (!data) {
        return;
      }
      const minutes = data % 60;
      const hours = (data - minutes) / 60;
      const totalMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${hours}h ${totalMinutes}m`;
    },
    genresList(data) {
      if (!data) {
        return;
      }
      return data.map(genre => genre.name).join(" | ");
    }
  }
};
