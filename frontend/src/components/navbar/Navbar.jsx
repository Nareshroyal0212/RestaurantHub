import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styles/navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const { cart } = useCart();

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("name");
        localStorage.removeItem("email");

        navigate("/");

    };

    const protectedNavigation = (path) => {

        if (!token) {

            const login = window.confirm(
                "Please Login or Register to continue."
            );

            if (login) {

                navigate("/login");

            }

            return;

        }

        navigate(path);

    };

    return (

        <nav className="navbar">

            {/* Logo */}

            <div
                className="logo"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
            >

                🍽️ RestaurantHub

            </div>

            {/* Navigation */}

            <ul className="nav-links">

                <li>

                    <NavLink to="/">

                        Home

                    </NavLink>

                </li>

                <li>

                    <button
                        className="nav-btn"
                        onClick={() => protectedNavigation("/about")}
                    >

                        About

                    </button>

                </li>

                <li>

                    <button
                        className="nav-btn"
                        onClick={() => protectedNavigation("/menu")}
                    >

                        Menu

                    </button>

                </li>

                <li>

                    <button
                        className="nav-btn"
                        onClick={() => protectedNavigation("/gallery")}
                    >

                        Gallery

                    </button>

                </li>

                <li>

                    <button
                        className="nav-btn"
                        onClick={() => protectedNavigation("/reservation")}
                    >

                        Reservation

                    </button>

                </li>

                <li>

                    <button
                        className="nav-btn"
                        onClick={() => protectedNavigation("/contact")}
                    >

                        Contact

                    </button>

                </li>

                {

                    token && (

                        <li>

                            <NavLink to="/cart">

                                🛒 Cart ({totalItems})

                            </NavLink>

                        </li>

                    )

                }

                {

                    token && role === "USER" && (

                        <>

                            <li>

                                <NavLink to="/dashboard">

                                    Dashboard

                                </NavLink>

                            </li>

                            <li>

                                <NavLink to="/my-orders">

                                    My Orders

                                </NavLink>

                            </li>

                        </>

                    )

                }

            </ul>

            {/* Right Side */}

            <div className="auth-buttons">

                {

                    !token ? (

                        <>

                            <Link to="/login">

                                <button className="login-btn">

                                    Login

                                </button>

                            </Link>

                            <Link to="/register">

                                <button className="register-btn">

                                    Register

                                </button>

                            </Link>

                            <Link to="/admin">

                                <button className="login-btn">

                                    Admin

                                </button>

                            </Link>

                        </>

                    ) : (

                        <>

                            <span className="welcome-text">

                                Welcome, {name}

                            </span>

                            {

                                role === "ADMIN" && (

                                    <button
                                        className="register-btn"
                                        onClick={() => navigate("/admin")}
                                    >

                                        Admin Dashboard

                                    </button>

                                )

                            }

                            <button
                                className="logout-btn"
                                onClick={handleLogout}
                            >

                                Logout

                            </button>

                        </>

                    )

                }

            </div>

        </nav>

    );

}

export default Navbar;