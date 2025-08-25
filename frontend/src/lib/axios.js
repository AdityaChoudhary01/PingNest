import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mern-chatapp-backend-295e.onrender.com/api",
  withCredentials: true,
});
