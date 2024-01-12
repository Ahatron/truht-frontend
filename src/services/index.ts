import axios from "axios";

const base = axios.create({
  baseURL: 'http://localhost:8080/api'
});

// Добавляем request interceptor
base.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default base;
