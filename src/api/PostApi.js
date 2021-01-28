import axios from 'axios';
class PostApi {
  url;
  constructor(url) {
    this.url = url;
  }

  create(formData) {
    return axios.post(this.url, formData);
  }
  getAll(page) {
    return axios.get(`${this.url}/all/${page}`);
  }
  get(id) {
    return axios.get(`${this.url}/${id}`);
  }
  edit({ post, id }) {
    return axios.put(`${this.url}/${id}`, post);
  }
  delete(id) {
    return axios.delete(`${this.url}/${id}`);
  }
}

export { PostApi };
