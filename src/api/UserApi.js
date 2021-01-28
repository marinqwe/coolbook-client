import axios from 'axios';
class UserApi {
  url;
  constructor(url) {
    this.url = url;
  }

  register(formData) {
    return axios.post(`${this.url}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
  login(userInfo) {
    return axios.post(`${this.url}/login`, userInfo);
  }
  logout() {
    return axios.get(`${this.url}/logout`);
  }
  getUser() {
    return axios.get(`${this.url}/me`);
  }
  update(formData) {
    return axios.put(`${this.url}/update`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export { UserApi };
