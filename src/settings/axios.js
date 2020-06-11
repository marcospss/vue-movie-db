import axios from "axios";
import { API } from "./api";

const instance = axios.create({
  baseURL: API.baseURL
});

// before a request is made start
instance.interceptors.request.use(config => {
  return config;
});

// before a response is returned stop
instance.interceptors.response.use(response => {
  return response;
});

export default instance;
