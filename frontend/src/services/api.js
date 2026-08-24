import axios from "axios";

const API = axios.create({
//baseURL: "http://localhost:9090/api",
    baseURL: "https://restauranthub-backend-bo2t.onrender.com/api",

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

    (error) => Promise.reject(error)

);

export default API;