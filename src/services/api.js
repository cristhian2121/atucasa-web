import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8933/api/",
  responseType: "json"
});