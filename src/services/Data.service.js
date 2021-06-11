import axios from "axios";

const API_DATA_URL = "http://localhost:8080/api/entries";

class DataService {
  create(created, text, timestamp) {
    return axios.post(API_DATA_URL, {
      created,
      text,
      timestamp,
    });
  }
}

export default new DataService();
