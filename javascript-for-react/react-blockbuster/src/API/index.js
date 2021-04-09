import { API_KEY, BASE_API } from "./config.js";

class API {
  constructor(BASE_API, API_KEY) {
    this.API_KEY = API_KEY;
    this.BASE_API = BASE_API;
  }

  async request(path, { params = {} } = {}) {
    const searchParams = new URLSearchParams({
      ...params,
      api_key: this.API_KEY,
    }).toString();

    return fetch(this.url(path + '?' + searchParams)).then((res) => res.json());
  }

  url(path) {
    return this.BASE_API + path;
  }

  discoverMovie(params) {
    return this.request("discover/movie", { params });
  }

  all(params) {
    return this.request("", { params });
  }
}

export default new API(BASE_API, API_KEY);
