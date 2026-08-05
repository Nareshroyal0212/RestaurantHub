import API from "./api";

// Dashboard Statistics
export const getDashboard = () => {
    return API.get("/admin/dashboard");
};

// Reservations
export const getReservations = () => {
    return API.get("/admin/reservations");
};

// Contact Messages
export const getMessages = () => {
    return API.get("/admin/messages");
};

// Menu
export const getMenu = () => {
    return API.get("/menu");
};

export const addMenu = (menu) => {
    return API.post("/menu", menu);
};

export const updateMenu = (id, menu) => {
    return API.put(`/menu/${id}`, menu);
};

export const deleteMenu = (id) => {
    return API.delete(`/menu/${id}`);
};