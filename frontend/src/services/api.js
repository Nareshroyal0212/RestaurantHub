import axios from "axios";

const API = axios.create({
    // Local development:
    // baseURL: "http://localhost:9090/api",

    // Production - Vercel uses VITE_API_URL
    baseURL: import.meta.env.VITE_API_URL,

    headers: {
        "Content-Type": "application/json"
    }
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;