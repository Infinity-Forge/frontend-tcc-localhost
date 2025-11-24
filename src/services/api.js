import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiPort = process.env.NEXT_PUBLIC_API_PORT;

const api = axios.create({
    baseURL: `${apiUrl}:${apiPort}`
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
