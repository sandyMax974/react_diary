import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

class AuthService {
  async login(username, password) {
    const response = await axios.post(API_URL + "signin", {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(username, email, password) {
    const response = await axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
    return console.log(response.json());
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
