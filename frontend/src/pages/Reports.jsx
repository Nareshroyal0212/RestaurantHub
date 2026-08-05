import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { getReport } from "../services/reportService";
import "../styles/reports.css";

function Reports() {

    const [report, setReport] = useState({

        totalOrders: 0,
        totalCustomers: 0,
        totalMenuItems: 0,
        totalReservations: 0,
        totalStaff: 0,
        totalContacts: 0

    });

    useEffect(() => {

        loadReport();

    }, []);

    const loadReport = async () => {

        try {

            const response = await getReport();

            setReport(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <AdminLayout>

            <div className="reports-page">

                <h1>Restaurant Reports</h1>

                <div className="report-grid">

                    <div className="report-card">

                        <h2>Total Orders</h2>

                        <h1>{report.totalOrders}</h1>

                    </div>

                    <div className="report-card">

                        <h2>Total Customers</h2>

                        <h1>{report.totalCustomers}</h1>

                    </div>

                    <div className="report-card">

                        <h2>Total Menu Items</h2>

                        <h1>{report.totalMenuItems}</h1>

                    </div>

                    <div className="report-card">

                        <h2>Total Reservations</h2>

                        <h1>{report.totalReservations}</h1>

                    </div>

                    <div className="report-card">

                        <h2>Total Staff</h2>

                        <h1>{report.totalStaff}</h1>

                    </div>

                    <div className="report-card">

                        <h2>Total Contact Messages</h2>

                        <h1>{report.totalContacts}</h1>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

}

export default Reports;