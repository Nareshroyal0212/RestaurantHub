import API from "./api";

export const getDashboard = () => {

    const email = localStorage.getItem("email");

    return API.get(`/dashboard/${email}`);

};