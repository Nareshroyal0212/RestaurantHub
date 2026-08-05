import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
    getOrders,
    deleteOrder,
    approveOrder
} from "../services/orderService";
import "../styles/orders.css";

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        loadOrders();

    }, []);

    const loadOrders = async () => {

        try {

            const response = await getOrders();

            setOrders(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const removeOrder = async (id) => {

        if (window.confirm("Delete this order?")) {

            try {

                await deleteOrder(id);

                loadOrders();

            }

            catch (error) {

                console.log(error);

            }

        }

    };

    const changeStatus = async (order, status) => {

        try {

            await approveOrder(order.id, {

                ...order,

                orderStatus: status

            });

            loadOrders();

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <AdminLayout>

            <div className="orders-page">

                <h1>

                    Restaurant Orders

                </h1>

                <table>

                    <thead>

                        <tr>

                            <th>Customer</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Food</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            orders.length > 0 ? (

                                orders.map((order) => (

                                    <tr key={order.id}>

                                        <td>{order.customerName}</td>

                                        <td>{order.email}</td>

                                        <td>{order.phone}</td>

                                        <td>{order.foodName}</td>

                                        <td>{order.quantity}</td>

                                        <td>₹ {order.price}</td>

                                        <td>₹ {order.totalAmount}</td>

                                        <td>

                                            <select
                                                value={order.orderStatus}
                                                onChange={(e) =>
                                                    changeStatus(
                                                        order,
                                                        e.target.value
                                                    )
                                                }
                                            >

                                                <option value="Pending">

                                                    Pending

                                                </option>

                                                <option value="Approved">

                                                    Approved

                                                </option>

                                                <option value="Preparing">

                                                    Preparing

                                                </option>

                                                <option value="Ready">

                                                    Ready

                                                </option>

                                                <option value="Delivered">

                                                    Delivered

                                                </option>

                                                <option value="Cancelled">

                                                    Cancelled

                                                </option>

                                            </select>

                                        </td>

                                        <td>

                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    removeOrder(order.id)
                                                }
                                            >

                                                Delete

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="9">

                                        No Orders Found

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

export default Orders;