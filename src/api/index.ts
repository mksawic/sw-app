import axios from "axios";
import { convertToCamel } from "./utils";

export const BASE_URL = "https://swapi.dev/api/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  transformResponse: (data) => convertToCamel(JSON.parse(data)),
});

export default instance;
