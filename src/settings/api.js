const API = {
  baseURL: "https://api.themoviedb.org/3",
  apikey: process.env.VUE_APP_API_PUBLIC_KEY,
  language: "en-US"
};

const PARAMS_DEFAULT = `api_key=${API.apikey}&language=${API.language}`;

export { API, PARAMS_DEFAULT };
