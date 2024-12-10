import axios from 'axios';


export const axiosApi = axios.create({
  baseURL: "http://192.168.88.69:4000",
})


axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
})