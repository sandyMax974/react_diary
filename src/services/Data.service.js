import axios from "axios";

const API_DATA_URL = "http://localhost:8080/api/entries";

class DataService {
  create(created, text, timestamp, userId) {
    return axios.post(API_DATA_URL, {
      created,
      text,
      timestamp,
      userId,
    });
  }

  getAll(userId) {
    return axios.get(API_DATA_URL, userId);
  }
}

export default new DataService();
