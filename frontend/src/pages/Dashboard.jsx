import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getDashboard } from "../services/dashboardService";
import "../styles/dashboard.css";

function Dashboard() {

    const [dashboard, setDashboard] = useState({

    myOrders: 0,
    myReservations: 0,
    myMessages: 0,

    totalMenuItems: 39

});

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const response = await getDashboard();

            setDashboard({

    ...response.data,

    totalMenuItems: 39

});

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <MainLayout>

            <section className="dashboard">

                <h1>

                    Welcome {localStorage.getItem("name")}

                </h1>

                <div className="dashboard-grid">

                    <div className="dashboard-card">

                        <h2>🛒 My Orders</h2>

                        <h1>{dashboard.myOrders}</h1>

                    </div>

                    <div className="dashboard-card">

                        <h2>📅 My Reservations</h2>

                        <h1>{dashboard.myReservations}</h1>

                    </div>

                    <div className="dashboard-card">

                        <h2>💬 My Messages</h2>

                        <h1>{dashboard.myMessages}</h1>

                    </div>

                    <div className="dashboard-card">

                        <h2>🍽 Menu Items</h2>

                        <h1>{dashboard.totalMenuItems}</h1>

                    </div>

                </div>

            </section>

        </MainLayout>

    );

}

export default Dashboard;