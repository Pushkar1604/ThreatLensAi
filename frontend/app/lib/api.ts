import axios from "axios";

export const api = axios.create({
  baseURL: "https://threatlensai-pcm5.onrender.com",
});