import axios from "axios";
class LikesApi {
  getAll() {
    return axios.get("/api/like");
  }
  userVote(params) {
    return axios.post("/api/like", { ...params });
  }
}

export { LikesApi };
