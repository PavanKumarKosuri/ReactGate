// src/api/apiService.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Exclude /login and /signup endpoints from redirection
      if (
        error.config &&
        !error.config.url.includes("/login") &&
        !error.config.url.includes("/signup")
      ) {
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
