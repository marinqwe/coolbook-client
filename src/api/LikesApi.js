import axios from 'axios';
class LikesApi {
  url;
  constructor(url) {
    this.url = url;
  }

  getAll() {
    return axios.get(this.url);
  }
  userVote(params) {
    return axios.post(this.url, { ...params });
  }
}

export { LikesApi };
