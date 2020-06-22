import axios from "axios";
import { API } from "./api";
import FIREBASE from "./firebase";

export const axios_API_TMDB = axios.create({
  baseURL: API.baseURL
});

// before a request is made start
axios_API_TMDB.interceptors.request.use(config => {
  return config;
});

// before a response is returned stop
axios_API_TMDB.interceptors.response.use(response => {
  return response;
});

export const axiosFirebase = axios.create({
  baseURL: FIREBASE.databaseURL,
  params: {
    key: FIREBASE.apiKey
  }
});
