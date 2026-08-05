
import API from "./api";

export const bookTable = (data) => {

    return API.post("/reservations", data);

};

export const getReservations = () => {

    return API.get("/reservations");

};

export const updateReservationStatus = (id, status) => {

    return API.put(`/reservations/${id}/status`, {

        status: status

    });

};

export const deleteReservation = (id) => {

    return API.delete(`/reservations/${id}`);

};