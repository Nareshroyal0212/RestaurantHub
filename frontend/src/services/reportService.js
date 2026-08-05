import API from "./api";

export const getReport = () => {

    return API.get("/reports");

};