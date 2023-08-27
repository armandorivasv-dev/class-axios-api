import axios from "axios";

class ConfigAxiosApi {
  constructor(url) {
    this.url = url;
    this.instance = axios.create({
      baseURL: this.url,
    });
  }
  get = async (endpoint) => {
    const { status, data } = await this.instance.get(endpoint);
    if ([200, 201].includes(status)) return data;
    else [];
  };
}

export { ConfigAxiosApi };
