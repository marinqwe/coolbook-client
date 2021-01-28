import axios from 'axios';
class CommentsApi {
  url;
  constructor(url) {
    this.url = url;
  }

  create(formData) {
    return axios.post(this.url, formData);
  }
  getAll(id) {
    return axios.get(`${this.url}/${id}`);
  }
  delete(id) {
    return axios.delete(`${this.url}/${id}`);
  }
}

export { CommentsApi };
