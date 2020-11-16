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
}

export { PostApi };
