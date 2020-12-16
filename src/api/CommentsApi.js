import axios from "axios";
class CommentsApi {
  create(formData) {
    return axios.post("/api/comment", formData);
  }
  getAll(id) {
    return axios.get(`/api/comment/${id}`);
  }
  delete(id) {
    return axios.delete(`/api/comment/${id}`);
  }
}

export { CommentsApi };
