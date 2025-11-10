import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiPort = process.env.NEXT_PUBLIC_API_PORT;

const api = axios.create({
    baseURL: `${apiUrl}:${apiPort}`
});

export default api;