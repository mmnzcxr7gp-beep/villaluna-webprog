import axios from "axios";
import { API_BASE_URL, STORAGE_KEYS } from "../constants";

// Axios instance for article-related requests.
const articleApi = axios.create({
  baseURL: `${API_BASE_URL}/articles`,
});

// Attach token if available.
articleApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const ArticleService = {
  getArticles: async (params = {}) => {
    const response = await articleApi.get("/", { params });
    return response.data;
  },

  createArticle: async (payload) => {
    const response = await articleApi.post("/", payload);
    return response.data;
  },

  updateArticle: async (id, payload) => {
    const response = await articleApi.put(`/${id}`, payload);
    return response.data;
  },

  deleteArticle: async (id) => {
    const response = await articleApi.delete(`/${id}`);
    return response.data;
  },
};

export default ArticleService;
