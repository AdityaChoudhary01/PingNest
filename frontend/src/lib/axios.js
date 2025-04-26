import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://mern-chatapp-backend-295e.onrender.com" : "/api",
  withCredentials: true,
});
