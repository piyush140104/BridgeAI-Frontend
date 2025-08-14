import axios from "axios";

// Decide API base URL automatically
const API_BASE_URL =
  process.env.REACT_APP_API_URL || // Set in Vercel frontend env vars for production
  (window.location.hostname === "localhost"
    ? "http://localhost:8000/api/v1" // Local backend
    : "https://your-backend-project.vercel.app/api/v1"); // Deployed backend

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for cookies/sessions with CORS
});

// Add request interceptor to include auth token from localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth endpoints
export const login = async (email, password) => {
  const response = await api.post("/users/login", { email, password });
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post("/users/register", userData);
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/users/logout");
  return response.data;
};

// User profile endpoints
export const updateProfile = async (userData) => {
  const response = await api.put("/users/profile", userData);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("/users/profile");
  return response.data;
};

export default api;
