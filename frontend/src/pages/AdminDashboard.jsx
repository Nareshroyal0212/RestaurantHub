import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { getDashboard } from "../services/dashboardService";
import "../styles/adminDashboard.css";

function AdminDashboard() {

    const navigate = useNavigate();

    const [stats, setStats] = useState({

        totalCustomers: 0,
        totalReservations: 0,
        totalMessages: 0,
        totalMenuItems: 0,
        totalOrders: 0,
        totalStaff: 0

    });

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const response = await getDashboard();

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <AdminLayout>

            <div className="admin-dashboard">

                <h1>RestaurantHub Admin Dashboard</h1>

                <div className="dashboard-cards">

                    <div
                        className="dashboard-card"
                        onClick={() => navigate("/admin/customers")}
                    >

                        <h2>👥</h2>

                        <h3>{stats.totalCustomers}</h3>

                        <p>Customers</p>

                    </div>

                    <div
                        className="dashboard-card"
                        onClick={() => navigate("/admin/reservations")}
                    >

                        <h2>📅</h2>

                        <h3>{stats.totalReservations}</h3>

                        <p>Reservations</p>

                    </div>

                    <div
                        className="dashboard-card"
                        onClick={() => navigate("/admin/messages")}
                    >

                        <h2>📩</h2>

                        <h3>{stats.totalMessages}</h3>

                        <p>Messages</p>

                    </div>

                    <div
                        className="dashboard-card"
                        onClick={() => navigate("/admin/menu")}
                    >

                        <h2>🍽️</h2>

                        <h3>{stats.totalMenuItems}</h3>

                        <p>Menu Items</p>

                    </div>

                    <div
                        className="dashboard-card"
                        onClick={() => navigate("/admin/orders")}
                    >

                        <h2>🛒</h2>

                        <h3>{stats.totalOrders}</h3>

                        <p>Orders</p>

                    </div>

                    <div
                        className="dashboard-card"
                        onClick={() => navigate("/admin/staff")}
                    >

                        <h2>👨‍🍳</h2>

                        <h3>{stats.totalStaff}</h3>

                        <p>Staff</p>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

}

export default AdminDashboard;