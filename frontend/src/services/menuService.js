import API from "./api";

export const getMenu = () => {

    return API.get("/menu");

};

export const addMenu = (data) => {

    return API.post("/menu", data);

};

export const updateMenu = (id, data) => {

    return API.put(`/menu/${id}`, data);

};

export const deleteMenu = (id) => {

    return API.delete(`/menu/${id}`);

};