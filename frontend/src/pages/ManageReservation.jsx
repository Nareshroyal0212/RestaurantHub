import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
    getReservations,
    updateReservationStatus,
    deleteReservation
} from "../services/reservationService";

import "../styles/manageReservation.css";

function ManageReservation() {

    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        loadReservations();
    }, []);

    const loadReservations = async () => {

        try {

            const response = await getReservations();

            setReservations(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const changeStatus = async (id, status) => {

        try {

            await updateReservationStatus(id, status);

            loadReservations();

        } catch (error) {

            console.log(error);

        }

    };

    const removeReservation = async (id) => {

        if (window.confirm("Delete this reservation?")) {

            try {

                await deleteReservation(id);

                loadReservations();

            } catch (error) {

                console.log(error);

            }

        }

    };

    return (

        <AdminLayout>

            <div className="manage-reservation">

                <h1>Manage Reservations</h1>

                <table>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Guests</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            reservations.map((reservation) => (

                                <tr key={reservation.id}>

                                    <td>{reservation.customerName}</td>

                                    <td>{reservation.email}</td>

                                    <td>{reservation.guests}</td>

                                    <td>{reservation.reservationDate}</td>

                                    <td>{reservation.reservationTime}</td>

                                    <td>{reservation.status}</td>

                                    <td>

                                        <button
                                            onClick={() =>
                                                changeStatus(
                                                    reservation.id,
                                                    "Approved"
                                                )
                                            }
                                        >
                                            Approve
                                        </button>

                                        <button
                                            onClick={() =>
                                                changeStatus(
                                                    reservation.id,
                                                    "Rejected"
                                                )
                                            }
                                        >
                                            Reject
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                removeReservation(
                                                    reservation.id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </AdminLayout>

    );

}

export default ManageReservation;