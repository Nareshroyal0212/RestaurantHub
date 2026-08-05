import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
    getCustomers,
    deleteCustomer
} from "../services/customerService";
import "../styles/customers.css";

function Customers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        loadCustomers();

    }, []);

    const loadCustomers = async () => {

        try {

            const response = await getCustomers();

            setCustomers(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const removeCustomer = async (id) => {

        if (window.confirm("Delete this customer?")) {

            try {

                await deleteCustomer(id);

                loadCustomers();

            } catch (error) {

                console.log(error);

            }

        }

    };

    return (

        <AdminLayout>

            <div className="customers-page">

                <h1>Registered Customers</h1>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            customers.length > 0 ? (

                                customers.map((customer) => (

                                    <tr key={customer.id}>

                                        <td>{customer.id}</td>

                                        <td>{customer.fullName}</td>

                                        <td>{customer.email}</td>

                                        <td>{customer.phone}</td>

                                        <td>{customer.role}</td>

                                        <td>

                                            <button
                                                className="delete-btn"
                                                onClick={() => removeCustomer(customer.id)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="6">

                                        No Customers Found

                                    </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        </AdminLayout>

    );

}

export default Customers;
