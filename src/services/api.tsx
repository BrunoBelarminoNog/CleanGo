import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-cleango.herokuapp.com/",
});

export default api;
