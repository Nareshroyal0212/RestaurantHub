import API from "./api";

export const loginUser = async (loginData) => {
    return await API.post("/auth/login", loginData);
};

export const registerUser = async (registerData) => {
    return await API.post("/auth/register", registerData);
};