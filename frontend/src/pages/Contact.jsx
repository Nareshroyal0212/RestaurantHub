import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import "../styles/contact.css";
import { sendMessage } from "../services/contactService";

function Contact() {

    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            alert("Please login first to contact RestaurantHub.");

            navigate("/login");

        }

    }, [navigate]);

    const [contact, setContact] = useState({

        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""

    });

    const handleChange = (e) => {

        setContact({

            ...contact,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await sendMessage(contact);

            alert("Message Sent Successfully!");

            setContact({

                fullName: "",
                email: "",
                phone: "",
                subject: "",
                message: ""

            });

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Failed to Send Message"

            );

        }

    };

    return (

        <MainLayout>

            <section className="contact-banner">

                <div className="contact-overlay">

                    <h1>

                        Contact RestaurantHub

                    </h1>

                    <p>

                        We'd love to hear from you.

                    </p>

                </div>

            </section>

            <section className="contact-section">

                <div className="contact-left">

                    <h2>

                        Get In Touch

                    </h2>

                    <p>

                        Have questions, suggestions, or need assistance?
                        Send us a message or visit our restaurant.

                    </p>

                    <div className="contact-card">

                        <h3>📍 Address</h3>

                        <p>

                            Madanapalle, Andhra Pradesh, India

                        </p>

                    </div>

                    <div className="contact-card">

                        <h3>📞 Phone</h3>

                        <p>

                            +91 6300584273

                        </p>

                    </div>

                    <div className="contact-card">

                        <h3>📧 Email</h3>

                        <p>📧 restauranthub@gmail.com</p>

                    </div>

                    <div className="contact-card">

                        <h3>🕒 Working Hours</h3>

                        <p>

                            10:00 AM - 11:00 PM

                        </p>

                    </div>

                </div>

                <div className="contact-right">

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={contact.fullName}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={contact.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={contact.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={contact.subject}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Your Message"
                            value={contact.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">

                            Send Message

                        </button>

                    </form>

                </div>

            </section>

            <section className="map-section">

                <iframe
                    title="Restaurant Location"
                    src="https://www.google.com/maps?q=Madanapalle&output=embed"
                    loading="lazy"
                    allowFullScreen
                />

            </section>

        </MainLayout>

    );

}

export default Contact;