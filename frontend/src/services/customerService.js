import API from "./api";

export const getCustomers = () => {

    return API.get("/customers");

};

export const deleteCustomer = (id) => {

    return API.delete(`/customers/${id}`);

};