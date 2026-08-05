import API from "./api";

export const getStaff = () => {

    return API.get("/staff");

};

export const addStaff = (data) => {

    return API.post("/staff", data);

};

export const updateStaff = (id, data) => {

    return API.put(`/staff/${id}`, data);

};

export const deleteStaff = (id) => {

    return API.delete(`/staff/${id}`);

};