import axios from "axios";
class PostApi {
  create(formData) {
    return axios.post("/api/post", formData);
  }
  getAll() {
    return axios.get("/api/post");
  }
  get(id) {
    return axios.get(`/api/post/${id}`);
  }
  edit({ post, id }) {
    return axios.put(`/api/post/${id}`, post);
  }
  delete(id) {
    return axios.delete(`/api/post/${id}`);
  }
}

export { PostApi };
