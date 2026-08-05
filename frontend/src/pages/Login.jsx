import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { loginUser } from "../services/authService";
import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setLogin({

            ...login,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await loginUser(login);

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("name", response.data.fullName);
            localStorage.setItem("email", response.data.email);

            alert(response.data.message);

            if (response.data.role === "ADMIN") {

                navigate("/admin");

            } else {

                navigate("/dashboard");

            }

        } catch (error) {

            alert(

                error.response?.data ||

                "Login Failed"

            );

        }

    };

    return (

        <MainLayout>

            <div className="login-container">

                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >

                    <h2>Login</h2>

                    <input

                        type="email"

                        name="email"

                        placeholder="Email"

                        value={login.email}

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="password"

                        name="password"

                        placeholder="Password"

                        value={login.password}

                        onChange={handleChange}

                        required

                    />

                    <button>

                        Login

                    </button>

                    <p>

                        Don't have an account?

                        <Link to="/register">

                            Register

                        </Link>

                    </p>

                </form>

            </div>

        </MainLayout>

    );

}

export default Login;