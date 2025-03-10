import { API_CONFIG } from "@/config/apiConfig";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_CONFIG.API_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

export default apiClient;
