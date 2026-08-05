import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { registerUser } from "../services/authService";
import "../styles/register.css";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        fullName: "",

        email: "",

        phone: "",

        password: ""

    });

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await registerUser(user);

            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            alert(

                error.response?.data ||

                "Registration Failed"

            );

        }

    };

    return (

        <MainLayout>

            <div className="register-container">

                <form
                    className="register-form"
                    onSubmit={handleSubmit}
                >

                    <h2>Create Account</h2>

                    <input

                        type="text"

                        name="fullName"

                        placeholder="Full Name"

                        value={user.fullName}

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="email"

                        name="email"

                        placeholder="Email"

                        value={user.email}

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="text"

                        name="phone"

                        placeholder="Phone"

                        value={user.phone}

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="password"

                        name="password"

                        placeholder="Password"

                        value={user.password}

                        onChange={handleChange}

                        required

                    />

                    <button>

                        Register

                    </button>

                    <p>

                        Already have an account?

                        <Link to="/login">

                            Login

                        </Link>

                    </p>

                </form>

            </div>

        </MainLayout>

    );

}

export default Register;