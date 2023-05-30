import axios from "axios";
import { API } from "./constants";

const axiosConfig = axios.create({
  baseURL: API,
});

export default axiosConfig;
