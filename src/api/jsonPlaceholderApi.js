import { ConfigAxiosApi } from "./consfigAxiosApi";

const baseURL = "https://jsonplaceholder.typicode.com";

const endpoints = {
  USERS: "/users",
  POST: "/posts",
};

class JsonPlaceholderApi {
  base_url = baseURL;
  api = new ConfigAxiosApi();

  get = async (endpoint) => {
    const items = await this.api.get(this.base_url + endpoint);
    return items;
  };
}

export { JsonPlaceholderApi, endpoints };
