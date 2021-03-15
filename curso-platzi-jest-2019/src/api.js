import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const get = (url, params) => axios.get(url, { params });

const API = {
  get: (path, params) => get(`${BASE_URL}${path}`, params),
};

const CHARACTERS = {
  get: (params) => API.get("/character", params),
};

API.CHARACTERS = CHARACTERS;

export default API;
