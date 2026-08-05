import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "../styles/reservation.css";
import { bookTable } from "../services/reservationService";

function Reservation() {

    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            alert("Please login first to reserve a table.");

            navigate("/login");

        }

    }, [navigate]);

    const [formData, setFormData] = useState({

        customerName: "",
        email: "",
        phone: "",
        guests: "",
        reservationDate: "",
        reservationTime: "",
        specialRequest: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await bookTable(formData);

            alert("Reservation Successful");

            setFormData({

                customerName: "",
                email: "",
                phone: "",
                guests: "",
                reservationDate: "",
                reservationTime: "",
                specialRequest: ""

            });

        }

        catch (error) {

            alert("Reservation Failed");

        }

    };

    return (

        <MainLayout>

            <section className="reservation-section">

                <h1>

                    Reserve Your Table

                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="customerName"
                        placeholder="Full Name"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="guests"
                        placeholder="Guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="date"
                        name="reservationDate"
                        value={formData.reservationDate}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="time"
                        name="reservationTime"
                        value={formData.reservationTime}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        rows="5"
                        name="specialRequest"
                        placeholder="Special Request"
                        value={formData.specialRequest}
                        onChange={handleChange}
                    />

                    <button>

                        Reserve Table

                    </button>

                </form>

            </section>

        </MainLayout>

    );

}

export default Reservation;