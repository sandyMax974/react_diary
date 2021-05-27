import axios from "axios";
import authHeader from "./Auth-header";

const API_URL = "http://localhost:3000/api/test/";

class UserService {
  getUserBoard() {
    return axios.get(API_URL + "user", {
      headers: authHeader(),
    });
  }
}

export default new UserService();
