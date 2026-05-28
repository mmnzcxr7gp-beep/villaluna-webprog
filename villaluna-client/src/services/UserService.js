import axios from "axios";
import { API_BASE_URL, STORAGE_KEYS } from "../constants";

// Axios instance for user-related requests.
const userApi = axios.create({
  baseURL: `${API_BASE_URL}/users`,
});

// Attach token if available.
userApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const UserService = {
  getUsers: async () => {
    const response = await userApi.get("/");
    return response.data;
  },

  createUser: async (payload) => {
    const response = await userApi.post("/", payload);
    return response.data;
  },

  updateUser: async (id, payload) => {
    const response = await userApi.put(`/${id}`, payload);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await userApi.delete(`/${id}`);
    return response.data;
  },

  login: async (payload) => {
    const response = await userApi.post("/login", payload);
    return response.data;
  },
};

export default UserService;
