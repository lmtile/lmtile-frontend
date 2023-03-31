import Axios from "axios";

const axios = Axios.create({
  // baseURL: "http://localhost:8003", //local
  baseURL: "http://3.83.163.34/api/", //prod
});

export default axios;
