import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getOrdersByEmail } from "../services/orderService";
import "../styles/myOrders.css";

function MyOrders() {

    const [orders, setOrders] = useState([]);

    const email = localStorage.getItem("email");

    useEffect(() => {

        loadOrders();

    }, []);

    const loadOrders = async () => {

        try {

            const response = await getOrdersByEmail(email);

            setOrders(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };
        return (

        <MainLayout>

            <div className="orders-page">

                <h1>

                    My Orders

                </h1>

                {

                    orders.length === 0 ? (

                        <h3 className="no-orders">

                            No Orders Found

                        </h3>

                    ) : (

                        <table>

                            <thead>

                                <tr>

                                    <th>Food</th>

                                    <th>Quantity</th>

                                    <th>Price</th>

                                    <th>Total</th>

                                    <th>Status</th>

                                    <th>Ordered On</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    orders.map((order) => (

                                        <tr key={order.id}>

                                            <td>

                                                {order.foodName}

                                            </td>

                                            <td>

                                                {order.quantity}

                                            </td>

                                            <td>

                                                ₹{order.price}

                                            </td>

                                            <td>

                                                ₹{order.totalAmount}

                                            </td>

                                            <td>

                                                <span
                                                    className={
                                                        order.orderStatus.toLowerCase()
                                                    }
                                                >

                                                    {order.orderStatus}

                                                </span>

                                            </td>

                                            <td>

                                                {

                                                    order.orderDate
                                                        ? new Date(order.orderDate)
                                                            .toLocaleString()
                                                        : "-"

                                                }

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    )

                }

            </div>

        </MainLayout>

    );

}

export default MyOrders;