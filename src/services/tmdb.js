import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY || process.env.REACT_APP_API_TOKEN;

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
  },
  params: {
    api_key: API_KEY,
  },
});
