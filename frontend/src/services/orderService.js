import API from "./api";

// Place Order
export const placeOrder = (order) => {

    return API.post("/orders", order);

};

// Get All Orders
export const getOrders = () => {

    return API.get("/orders");

};

// Get Order By ID
export const getOrderById = (id) => {

    return API.get(`/orders/${id}`);

};

// Get Orders By Email
export const getOrdersByEmail = (email) => {

    return API.get(`/orders/email/${email}`);

};

// Update Order
export const updateOrder = (id, order) => {

    return API.put(`/orders/${id}`, order);

};

// Approve / Change Order Status
export const approveOrder = (id, order) => {

    return API.put(`/orders/${id}`, order);

};

// Delete Order
export const deleteOrder = (id) => {

    return API.delete(`/orders/${id}`);

};