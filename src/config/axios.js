import Axios from "axios";

const axios = Axios.create({
  // baseURL: "http://localhost:8003", //local
  // baseURL: "http://34.231.221.222/api/", //prod
  baseURL: "http://lmtile.store/api/", //prod
});

export default axios;
