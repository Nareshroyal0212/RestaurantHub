import { Link, useNavigate } from "react-router-dom";
import "../styles/adminLayout.css";

function AdminLayout({ children }) {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/login");

    };

    return (

        <div className="admin-layout">

            <aside className="admin-sidebar">

                <h2>RestaurantHub</h2>

                <ul>

                    <li>
                        <Link to="/admin">📊 Dashboard</Link>
                    </li>

                    <li>
                        <Link to="/admin/menu">🍽 Manage Menu</Link>
                    </li>

                    <li>
                        <Link to="/admin/reservations">📅 Reservations</Link>
                    </li>

                    <li>
                        <Link to="/admin/messages">📩 Messages</Link>
                    </li>

                    <li>
                        <Link to="/admin/orders">🛒 Orders</Link>
                    </li>

                    <li>
                        <Link to="/admin/customers">👥 Customers</Link>
                    </li>

                    <li>
                        <Link to="/admin/staff">👨‍🍳 Staff</Link>
                    </li>

                    <li>
                        <Link to="/admin/reports">📈 Reports</Link>
                    </li>

                    <li>
                        <Link to="/">🏠 Home</Link>
                    </li>

                    <li>

                        <button
                            className="logout-btn"
                            onClick={logout}
                        >
                            🚪 Logout
                        </button>

                    </li>

                </ul>

            </aside>

            <main className="admin-content">

                {children}

            </main>

        </div>

    );

}

export default AdminLayout;