import Axios from "axios";

const axios = Axios.create({
  // baseURL: "http://34.231.221.222/api/", //prod
  baseURL: "https://lmtile.store/api/", //prod
});

export default axios;
