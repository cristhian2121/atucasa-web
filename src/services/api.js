import axios from "axios";

export default axios.create({
  baseURL: "http://18.216.128.107:8933/api/",
  responseType: "json"
});