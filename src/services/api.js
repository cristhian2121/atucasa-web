import axios from "axios";

export default axios.create({
  baseURL: "http://18.191.102.23:8933/api/",
  responseType: "json"
});