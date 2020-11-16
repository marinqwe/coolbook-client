import axios from "axios";
class UserApi {
  register(formData) {
    return axios.post("/api/user/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  login(userInfo) {
    return axios.post("/api/user/login", userInfo);
  }
  logout() {
    return axios.get("/api/user/logout");
  }
  getUser() {
    return axios.get("/api/user/me");
  }
}

export { UserApi };
